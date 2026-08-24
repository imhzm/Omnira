export type PaymentLinkStatus = 'pending' | 'paid' | 'failed' | 'cancelled';

export const PAYMENT_STATUS_LABEL_AR: Record<PaymentLinkStatus, string> = {
  pending: 'بانتظار الدفع',
  paid: 'مدفوعة',
  failed: 'فاشلة',
  cancelled: 'ملغاة',
};

export interface PaymentNote {
  at: string;
  text: string;
}

export interface PaymentLink {
  id: string;
  createdAt: string;
  updatedAt: string;
  title: string; // وصف مختصر: "باقة المطاعم — شهر تجريبي"
  description?: string;
  amount: number; // ريال سعودي
  customerName?: string;
  customerPhone?: string;
  customerEmail?: string;
  reference?: string; // مرجع داخلي حر (رقم عرض سعر مثلاً)
  trackId: string; // المرجع المرسل للبوابة
  status: PaymentLinkStatus;
  gatewayStatus?: string; // آخر نتيجة خام من البوابة (CAPTURED...)
  paymentId?: string; // paymentId من البوابة
  authCode?: string;
  bankRef?: string;
  paidAt?: string;
  paymentUrlSnapshot?: string; // آخر رابط دفع صادر من البوابة
  notes: PaymentNote[];
}

export interface CreatePaymentLinkInput {
  title: string;
  description?: string;
  amount: number;
  customerName?: string;
  customerPhone?: string;
  customerEmail?: string;
  reference?: string;
}

import { z } from 'zod';

export const createPaymentLinkSchema = z.object({
  title: z.string().trim().min(2).max(120),
  description: z.string().trim().max(500).optional(),
  amount: z.number().positive().max(1_000_000),
  customerName: z.string().trim().max(80).optional(),
  customerPhone: z.string().trim().max(20).optional(),
  customerEmail: z.string().trim().email().optional().or(z.literal('')),
  reference: z.string().trim().max(60).optional(),
});

export const updatePaymentLinkSchema = createPaymentLinkSchema.partial().extend({
  status: z.enum(['pending', 'paid', 'failed', 'cancelled']).optional(),
});
