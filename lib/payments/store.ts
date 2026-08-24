import { promises as fs } from 'fs';
import path from 'path';
import crypto from 'crypto';
import type { PaymentLink, PaymentLinkStatus, CreatePaymentLinkInput } from './types';

/**
 * مخزن روابط الدفع — نفس نمط مخزن الليدز (JSON file + mutex + atomic rename).
 * البيانات تعيش في data/payments.json خارج شجرة git فلا يمسحها الـdeploy.
 */

const DATA_DIR = process.env.LEADS_DATA_DIR || path.join(process.cwd(), 'data');
const FILE = path.join(DATA_DIR, 'payments.json');

let writeChain: Promise<unknown> = Promise.resolve();
function withLock<T>(fn: () => Promise<T>): Promise<T> {
  const run = writeChain.then(fn, fn);
  writeChain = run.then(
    () => undefined,
    () => undefined,
  );
  return run;
}

async function ensureDir() {
  await fs.mkdir(DATA_DIR, { recursive: true });
}

async function readRaw(): Promise<PaymentLink[]> {
  try {
    const buf = await fs.readFile(FILE, 'utf8');
    const parsed = JSON.parse(buf);
    return Array.isArray(parsed) ? (parsed as PaymentLink[]) : [];
  } catch (e: unknown) {
    if ((e as NodeJS.ErrnoException).code === 'ENOENT') return [];
    throw e;
  }
}

async function writeRaw(links: PaymentLink[]) {
  await ensureDir();
  const tmp = `${FILE}.${process.pid}.${Date.now()}.tmp`;
  await fs.writeFile(tmp, JSON.stringify(links, null, 2), 'utf8');
  await fs.rename(tmp, FILE);
}

export async function listPaymentLinks(): Promise<PaymentLink[]> {
  const links = await readRaw();
  return links.sort((a, b) => (a.createdAt < b.createdAt ? 1 : -1));
}

export async function getPaymentLink(id: string): Promise<PaymentLink | null> {
  const links = await readRaw();
  return links.find((p) => p.id === id) ?? null;
}

/** للصفحة العامة — بدون أي بيانات داخلية */
export async function getPublicPayment(id: string) {
  const p = await getPaymentLink(id);
  if (!p) return null;
  return {
    id: p.id,
    title: p.title,
    description: p.description || undefined,
    amount: p.amount,
    status: p.status,
    createdAt: p.createdAt,
    paidAt: p.paidAt,
    customerName: p.customerName,
    reference: p.reference,
  };
}

export async function createPaymentLink(input: CreatePaymentLinkInput): Promise<PaymentLink> {
  const now = new Date().toISOString();
  const link: PaymentLink = {
    id: crypto.randomUUID(),
    createdAt: now,
    updatedAt: now,
    title: input.title.trim(),
    description: input.description?.trim() || undefined,
    amount: Math.round(input.amount * 100) / 100,
    customerName: input.customerName?.trim() || undefined,
    customerPhone: input.customerPhone?.replace(/[^\d+]/g, '') || undefined,
    customerEmail: input.customerEmail?.trim() || undefined,
    reference: input.reference?.trim() || undefined,
    trackId: `OMN-${Date.now()}-${crypto.randomBytes(2).toString('hex').toUpperCase()}`,
    status: 'pending',
    gatewayStatus: undefined,
    paymentId: undefined,
    authCode: undefined,
    bankRef: undefined,
    notes: [],
  };
  await withLock(async () => {
    const links = await readRaw();
    links.push(link);
    await writeRaw(links);
  });
  return link;
}

export type PaymentPatch = Partial<
  Pick<
    PaymentLink,
    | 'title'
    | 'description'
    | 'amount'
    | 'customerName'
    | 'customerPhone'
    | 'customerEmail'
    | 'reference'
    | 'status'
    | 'gatewayStatus'
    | 'paymentId'
    | 'authCode'
    | 'bankRef'
    | 'paidAt'
    | 'paymentUrlSnapshot'
  >
>;

export async function updatePaymentLink(id: string, patch: PaymentPatch): Promise<PaymentLink | null> {
  let updated: PaymentLink | null = null;
  await withLock(async () => {
    const links = await readRaw();
    const idx = links.findIndex((p) => p.id === id);
    if (idx === -1) return;
    updated = {
      ...links[idx],
      ...patch,
      updatedAt: new Date().toISOString(),
    };
    if (patch.amount !== undefined) updated.amount = Math.round(patch.amount * 100) / 100;
    links[idx] = updated;
    await writeRaw(links);
  });
  return updated;
}

export async function deletePaymentLink(id: string): Promise<boolean> {
  let done = false;
  await withLock(async () => {
    const links = await readRaw();
    const next = links.filter((p) => p.id !== id);
    if (next.length === links.length) return;
    await writeRaw(next);
    done = true;
  });
  return done;
}

/** إضافة ملاحظة سجل داخلي (تدقيق يدوي) */
export async function appendPaymentNote(id: string, note: string): Promise<PaymentLink | null> {
  let updated: PaymentLink | null = null;
  await withLock(async () => {
    const links = await readRaw();
    const idx = links.findIndex((p) => p.id === id);
    if (idx === -1) return;
    updated = {
      ...links[idx],
      notes: [...(links[idx].notes || []), { at: new Date().toISOString(), text: note }],
      updatedAt: new Date().toISOString(),
    };
    links[idx] = updated;
    await writeRaw(links);
  });
  return updated;
}

export interface PaymentStats {
  total: number;
  pending: number;
  paid: number;
  failed: number;
  cancelled: number;
  paidAmount: number;
  pendingAmount: number;
}

export function computePaymentStats(links: PaymentLink[]): PaymentStats {
  const s: PaymentStats = { total: links.length, pending: 0, paid: 0, failed: 0, cancelled: 0, paidAmount: 0, pendingAmount: 0 };
  for (const p of links) {
    switch (p.status) {
      case 'paid':
        s.paid += 1;
        s.paidAmount += p.amount;
        break;
      case 'pending':
        s.pending += 1;
        s.pendingAmount += p.amount;
        break;
      case 'failed':
        s.failed += 1;
        break;
      case 'cancelled':
        s.cancelled += 1;
        break;
    }
  }
  return s;
}
