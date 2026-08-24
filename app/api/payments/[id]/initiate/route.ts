import { NextRequest, NextResponse } from 'next/server';
import { getPaymentLink, updatePaymentLink } from '@/lib/payments/store';
import { isAuthed, isSameOrigin } from '@/lib/leads/auth';
import { createHostedCheckout, isNeoleapConfigured } from '@/lib/payments/neoleap';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

function baseUrl(req: NextRequest): string {
  const envUrl = process.env.PAYMENTS_PUBLIC_BASE_URL;
  if (envUrl) return envUrl.replace(/\/$/, '');
  const host = req.headers.get('host') || 'omniravalet.com';
  const proto = req.headers.get('x-forwarded-proto') || 'https';
  return `${proto}://${host}`;
}

/**
 * يبدأ عملية دفع لرابط قائم: يطلب paymentId + رابط الدفع المؤمّن من NeoLeap
 * ويرجّع الرابط للواجهة (الأدمن أو صفحة /pay/[id]).
 */
export async function POST(req: NextRequest, { params }: { params: { id: string } }) {
  if (!isSameOrigin(req)) {
    return NextResponse.json({ ok: false, error: 'bad_origin' }, { status: 403 });
  }
  // مسموح للأدمن أو لأي شخص يملك معرّف الرابط (الرابط نفسه سر نسبي) —
  // لكن نقيّد إعادة المحاولة: فقط الروابط غير المدفوعة.
  if (!isNeoleapConfigured()) {
    return NextResponse.json(
      { ok: false, error: 'gateway_error', detail: 'neoleap_not_configured' },
      { status: 502 },
    );
  }
  const link = await getPaymentLink(params.id);
  if (!link) return NextResponse.json({ ok: false, error: 'not_found' }, { status: 404 });
  if (link.status === 'paid') {
    return NextResponse.json({ ok: false, error: 'already_paid' }, { status: 409 });
  }

  const origin = baseUrl(req);
  const result = await createHostedCheckout({
    amountSar: link.amount,
    trackId: link.trackId,
    responseUrl: `${origin}/api/payments/${link.id}/callback`,
    errorUrl: `${origin}/api/payments/${link.id}/callback?error=1`,
    lang: 'ar',
    udf1: link.id,
    udf2: link.reference || '',
    udf5: process.env.NEOLEAP_UDF5_LABEL || 'omniravalet',
  });

  if (!result.ok || !result.paymentUrl) {
    await updatePaymentLink(link.id, {
      status: link.status === 'pending' ? 'pending' : link.status,
      gatewayStatus: `init_failed: ${result.rawStatus || result.error || '?'}`,
      paymentId: undefined,
    });
    return NextResponse.json(
      { ok: false, error: 'gateway_error', detail: result.error || result.rawStatus },
      { status: 502 },
    );
  }

  await updatePaymentLink(link.id, {
    paymentId: result.paymentId,
    gatewayStatus: 'initiated',
    paymentUrlSnapshot: result.paymentUrl,
  });

  return NextResponse.json({ ok: true, paymentUrl: result.paymentUrl });
}
