import { NextRequest, NextResponse } from 'next/server';
import { updatePaymentLinkSchema } from '@/lib/payments/types';
import { updatePaymentLink, deletePaymentLink } from '@/lib/payments/store';
import { isAuthed, isSameOrigin } from '@/lib/leads/auth';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

export async function PATCH(req: NextRequest, { params }: { params: { id: string } }) {
  if (!isSameOrigin(req)) {
    return NextResponse.json({ ok: false, error: 'bad_origin' }, { status: 403 });
  }
  if (!isAuthed()) {
    return NextResponse.json({ ok: false, error: 'unauthorized' }, { status: 401 });
  }
  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ ok: false, error: 'invalid_json' }, { status: 400 });
  }
  const parsed = updatePaymentLinkSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json(
      { ok: false, error: 'validation', issues: parsed.error.flatten().fieldErrors },
      { status: 422 },
    );
  }
  // تعديل الحالة يدويًا مسموح للأدمن فقط عبر نفس المسار — لكن paidAt لا يُحدَّد يدويًا
  const { status, ...rest } = parsed.data;
  const patch: Parameters<typeof updatePaymentLink>[1] = { ...rest };
  if (status) {
    patch.status = status;
    if (status !== 'paid') patch.paidAt = null as unknown as undefined;
  }
  const link = await updatePaymentLink(params.id, patch);
  if (!link) return NextResponse.json({ ok: false, error: 'not_found' }, { status: 404 });
  return NextResponse.json({ ok: true, link });
}

export async function DELETE(req: NextRequest, { params }: { params: { id: string } }) {
  if (!isSameOrigin(req)) {
    return NextResponse.json({ ok: false, error: 'bad_origin' }, { status: 403 });
  }
  if (!isAuthed()) {
    return NextResponse.json({ ok: false, error: 'unauthorized' }, { status: 401 });
  }
  const done = await deletePaymentLink(params.id);
  if (!done) return NextResponse.json({ ok: false, error: 'not_found' }, { status: 404 });
  return NextResponse.json({ ok: true });
}
