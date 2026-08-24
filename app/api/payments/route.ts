import { NextRequest, NextResponse } from 'next/server';
import { createPaymentLinkSchema } from '@/lib/payments/types';
import { createPaymentLink, listPaymentLinks } from '@/lib/payments/store';
import { isAuthed, isSameOrigin } from '@/lib/leads/auth';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

export async function GET() {
  if (!isAuthed()) {
    return NextResponse.json({ ok: false, error: 'unauthorized' }, { status: 401 });
  }
  const links = await listPaymentLinks();
  return NextResponse.json({ ok: true, links });
}

export async function POST(req: NextRequest) {
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
  const parsed = createPaymentLinkSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json(
      { ok: false, error: 'validation', issues: parsed.error.flatten().fieldErrors },
      { status: 422 },
    );
  }
  const link = await createPaymentLink(parsed.data);
  return NextResponse.json({ ok: true, link }, { status: 201 });
}
