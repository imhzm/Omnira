import { redirect } from 'next/navigation';
import type { Metadata } from 'next';
import { isAuthed } from '@/lib/leads/auth';
import { listPaymentLinks, computePaymentStats } from '@/lib/payments/store';
import PaymentsClient from './PaymentsClient';

export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
  title: 'لوحة المدفوعات | أومنيرا فاليه',
  robots: { index: false, follow: false, nocache: true },
};

export default async function PaymentsPage() {
  if (!isAuthed()) redirect('/dashboard/login');
  const links = await listPaymentLinks();
  const stats = computePaymentStats(links);
  return <PaymentsClient initialLinks={links} initialStats={stats} />;
}
