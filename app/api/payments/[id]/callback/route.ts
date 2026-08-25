import { NextRequest, NextResponse } from 'next/server';
import { getPaymentLink, updatePaymentLink } from '@/lib/payments/store';
import { parseCallbackTrandata } from '@/lib/payments/neoleap';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

/**
 * الأصل العام للروابط — بيئة خلف nginx proxy يكون Host داخلي (localhost:3103)،
 * فنعتمد PAYMENTS_PUBLIC_BASE_URL إن وُجد، وإلا x-forwarded-host/x-forwarded-proto.
 */
function publicOrigin(req: NextRequest): string {
  const envUrl = process.env.PAYMENTS_PUBLIC_BASE_URL;
  if (envUrl) return envUrl.replace(/\/$/, '');
  const host = req.headers.get('x-forwarded-host') || req.headers.get('host') || 'omniravalet.com';
  const proto = req.headers.get('x-forwarded-proto') || 'https';
  return `${proto}://${host}`;
}

/**
 * رجوع البوابة: NeoLeap تعيد المتصفح إلى responseURL/errorURL مع POST
 * يحمل trandata مُشفَّر. نفك التشفير، نتحقق من trackId، ونحدّث حالة الدفع،
 * ثم نحوّل العميل لصفحة الرابط (/pay/[id]?paid=1 أو ?failed=1).
 */
async function handle(req: NextRequest, { params }: { params: { id: string } }, isErrorParam: boolean) {
  const link = await getPaymentLink(params.id);
  if (!link) {
    return NextResponse.redirect(new URL('/pay/not-found', publicOrigin(req)), 303);
  }

  const origin = publicOrigin(req);
  const failRedirect = NextResponse.redirect(`${origin}/pay/${link.id}?failed=1`, 303);

  // بعض البيئات ترسل trandata في body (POST) وبعضها في query (GET)
  let trandataHex = '';
  if (req.method === 'POST') {
    const form = await req.formData().catch(() => null);
    trandataHex = String(form?.get('trandata') || form?.get('paymentid') && '' || '');
    if (!trandataHex) {
      try {
        const j = await req.json();
        trandataHex = String((j as Record<string, string>)?.trandata || '');
      } catch {
        /* ignore */
      }
    }
  } else {
    trandataHex = req.nextUrl.searchParams.get('trandata') || '';
  }

  if (!trandataHex) {
    // لا توجد بيانات — اعتبرها إخفاقًا (المستخدم ضغط رجوع من صفحة الدفع)
    if (link.status === 'pending') {
      await updatePaymentLink(link.id, {
        gatewayStatus: isErrorParam ? 'returned_error_no_data' : 'returned_no_data',
      });
    }
    return failRedirect;
  }

  const result = parseCallbackTrandata(trandataHex);

  // تحقق أمني: trackId المُرجَع يجب أن يطابق رابطنا أو udf1 يطابق معرّف الرابط
  const isMatch = result.success && (result.trackId === link.trackId || result.udf1 === link.id);
  if (!isMatch) {
    await updatePaymentLink(link.id, {
      gatewayStatus: `callback_mismatch_or_failed: ${result.rawResult || '?'}`,
    });
    return failRedirect;
  }

  await updatePaymentLink(link.id, {
    status: 'paid',
    paidAt: new Date().toISOString(),
    gatewayStatus: result.rawResult,
    authCode: result.auth,
    bankRef: result.ref,
    paymentId: result.paymentId || undefined,
  });

  return NextResponse.redirect(`${origin}/pay/${link.id}?paid=1`, 303);
}

export async function POST(req: NextRequest, ctx: { params: { id: string } }) {
  return handle(req, ctx, false);
}

export async function GET(req: NextRequest, ctx: { params: { id: string } }) {
  const isErr = req.nextUrl.searchParams.get('error') === '1';
  return handle(req, ctx, isErr);
}
