import { NextRequest, NextResponse } from 'next/server';
import { z } from 'zod';
import { createPaymentLink, updatePaymentLink } from '@/lib/payments/store';
import { createHostedCheckout, isNeoleapConfigured } from '@/lib/payments/neoleap';
import { createLead } from '@/lib/leads/store';
import { notifyNewLead } from '@/lib/leads/notify';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

// Rate limiting: 6 booking checkout attempts per IP per 10 minutes
const WINDOW_MS = 10 * 60 * 1000;
const MAX_HITS = 6;
const hits = new Map<string, number[]>();

function clientIp(req: NextRequest): string {
  const xff = req.headers.get('x-forwarded-for');
  if (xff) return xff.split(',')[0].trim();
  return req.headers.get('x-real-ip') || 'unknown';
}

function rateLimited(ip: string): boolean {
  const now = Date.now();
  const arr = (hits.get(ip) || []).filter((t) => now - t < WINDOW_MS);
  arr.push(now);
  hits.set(ip, arr);
  if (hits.size > 5000) hits.clear();
  return arr.length > MAX_HITS;
}

function baseUrl(req: NextRequest): string {
  const envUrl = process.env.PAYMENTS_PUBLIC_BASE_URL;
  if (envUrl) return envUrl.replace(/\/$/, '');
  const host = req.headers.get('x-forwarded-host') || req.headers.get('host') || 'omniravalet.com';
  const proto = req.headers.get('x-forwarded-proto') || 'https';
  return `${proto}://${host}`;
}

const bookingSchema = z.object({
  name: z.string().trim().min(2, 'الاسم مطلوب').max(80),
  phone: z.string().trim().min(9, 'رقم الجوال غير صحيح').max(20),
  email: z.string().trim().email('البريد الإلكتروني غير صحيح').optional().or(z.literal('')),
  service: z.string().trim().min(2, 'يرجى اختيار الخدمة'),
  serviceTitle: z.string().trim().min(2).optional(),
  amount: z.number().positive('المبلغ يجب أن يكون أكبر من صفر').max(500_000),
  notes: z.string().trim().max(500).optional(),
  company: z.string().optional(), // honeypot
});

export async function POST(req: NextRequest) {
  const ip = clientIp(req);
  if (rateLimited(ip)) {
    return NextResponse.json({ ok: false, error: 'too_many_requests' }, { status: 429 });
  }

  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ ok: false, error: 'invalid_json' }, { status: 400 });
  }

  const parsed = bookingSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json(
      { ok: false, error: 'validation', issues: parsed.error.flatten().fieldErrors },
      { status: 422 },
    );
  }

  // Honeypot spam check
  if (parsed.data.company) {
    return NextResponse.json({ ok: true });
  }

  const { name, phone, email, service, serviceTitle, amount, notes } = parsed.data;
  const title = serviceTitle || `حجز: ${service}`;

  // 1. Create Payment Link in database
  const link = await createPaymentLink({
    title,
    description: notes || `حجز إلكتروني مباشر من الموقع — العميل: ${name}`,
    amount,
    customerName: name,
    customerPhone: phone,
    customerEmail: email || undefined,
    reference: `WEB-${Date.now().toString(36).toUpperCase()}`,
  });

  // 2. Also register lead in CRM
  try {
    const lead = await createLead(
      {
        name,
        phone,
        service,
        message: `طلب حجز مباشر بمبلغ ${amount} ر.س — مرجع: ${link.reference}`,
        source: 'online-booking',
      },
      {
        referrer: req.headers.get('referer') || undefined,
        userAgent: req.headers.get('user-agent') || undefined,
        ip,
      },
    );
    notifyNewLead(lead).catch(() => {});
  } catch {
    // Non-critical, continue with checkout
  }

  // 3. Initiate checkout with Al Rajhi Bank Payment Gateway
  if (!isNeoleapConfigured()) {
    return NextResponse.json(
      {
        ok: true,
        payPageUrl: `/pay/${link.id}`,
        paymentUrl: `/pay/${link.id}`,
        message: 'تم تسجيل الحجز بنجاح، وسيتواصل معك الفريق لتأكيد الدفع.',
      },
      { status: 201 },
    );
  }

  const origin = baseUrl(req);
  const checkoutRes = await createHostedCheckout({
    amountSar: link.amount,
    trackId: link.trackId,
    responseUrl: `${origin}/api/payments/${link.id}/callback`,
    errorUrl: `${origin}/api/payments/${link.id}/callback?error=1`,
    lang: 'ar',
    udf1: link.id,
    udf2: link.reference || '',
    udf5: process.env.NEOLEAP_UDF5_LABEL || 'omniravalet',
  });

  if (!checkoutRes.ok || !checkoutRes.paymentUrl) {
    await updatePaymentLink(link.id, {
      gatewayStatus: `init_failed: ${checkoutRes.rawStatus || checkoutRes.error || '?'}`,
    });
    // Fallback to internal payment review page
    return NextResponse.json({
      ok: true,
      payPageUrl: `/pay/${link.id}`,
      paymentUrl: `/pay/${link.id}`,
    });
  }

  await updatePaymentLink(link.id, {
    paymentId: checkoutRes.paymentId,
    paymentUrlSnapshot: checkoutRes.paymentUrl,
    gatewayStatus: 'initiated',
  });

  return NextResponse.json(
    {
      ok: true,
      paymentId: checkoutRes.paymentId,
      paymentUrl: checkoutRes.paymentUrl,
      payPageUrl: `/pay/${link.id}`,
    },
    { status: 201 },
  );
}
