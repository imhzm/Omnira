import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { getPublicPayment } from '@/lib/payments/store';
import PayClient from './PayClient';

export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
  title: 'دفع إلكتروني | أومنيرا فاليه',
  robots: { index: false, follow: false, nocache: true },
};

export default async function PayPage({ params }: { params: { id: string } }) {
  const payment = await getPublicPayment(params.id);
  if (!payment) notFound();
  return <PayClient payment={payment} />;
}
