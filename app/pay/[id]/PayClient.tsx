'use client';

import { useState } from 'react';
import { ShieldCheck, Loader2, CheckCircle2, XCircle, Car } from 'lucide-react';

interface PublicPayment {
  id: string;
  title: string;
  description?: string;
  amount: number;
  status: 'pending' | 'paid' | 'failed' | 'cancelled';
  createdAt: string;
  paidAt?: string;
  customerName?: string;
  reference?: string;
}

function fmtSar(n: number): string {
  return new Intl.NumberFormat('ar-SA', { minimumFractionDigits: 2, maximumFractionDigits: 2 }).format(n);
}

export default function PayClient({ payment }: { payment: PublicPayment }) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const paid = payment.status === 'paid';

  const startPayment = async () => {
    setLoading(true);
    setError('');
    try {
      const res = await fetch(`/api/payments/${payment.id}/initiate`, { method: 'POST' });
      const data = await res.json().catch(() => ({}));
      if (res.ok && data.ok && data.paymentUrl) {
        window.location.href = data.paymentUrl;
        return;
      }
      if (data.error === 'already_paid') {
        setError('هذه الفاتورة مدفوعة بالفعل.');
      } else if (res.status === 502) {
        setError('بوابة الدفع غير متاحة حاليًا — حاول بعد قليل أو تواصل معنا واتساب.');
      } else {
        setError('تعذّر بدء عملية الدفع. حاول مجددًا أو تواصل معنا.');
      }
    } catch {
      setError('تعذّر الاتصال. تحقّق من الإنترنت وحاول مجددًا.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="flex min-h-screen items-center justify-center bg-[#0A0A0C] px-6 py-12">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_50%_40%_at_50%_35%,rgba(201,162,74,0.08),transparent_70%)]" />

      <div className="relative w-full max-w-md">
        {/* شعار/هوية */}
        <div className="mb-6 flex items-center justify-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-gold-primary/25 bg-gold-primary/10">
            <Car className="h-5 w-5 text-gold-primary" />
          </div>
          <div>
            <p className="text-lg font-medium text-white">أومنيرا فاليه</p>
            <p className="text-xs text-white/40">Omnira Valet</p>
          </div>
        </div>

        <div className="rounded-3xl border border-white/10 bg-gradient-to-b from-white/[0.06] to-white/[0.015] p-8">
          {paid ? (
            /* ------------------ مدفوعة ------------------ */
            <div className="text-center">
              <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-emerald-500/15">
                <CheckCircle2 className="h-9 w-9 text-emerald-400" />
              </div>
              <h1 className="text-xl font-medium text-white">تم استلام دفعتك بنجاح</h1>
              <p className="mt-2 text-sm text-white/50">
                شكرًا لك{payment.customerName ? ` ${payment.customerName}` : ''} — سيتواصل معك فريقنا لتأكيد التفاصيل.
              </p>
              <div className="mt-6 rounded-2xl border border-white/10 bg-[#131318] p-4 text-right">
                <Row label="البيان" value={payment.title} />
                <Row label="المبلغ" value={`${fmtSar(payment.amount)} ر.س`} strong />
                <Row label="المرجع" value={payment.reference || payment.id.slice(0, 8)} mono />
                {payment.paidAt && <Row label="تاريخ الدفع" value={new Date(payment.paidAt).toLocaleString('ar-EG')} />}
              </div>
              <p className="mt-5 flex items-center justify-center gap-1.5 text-xs text-white/35">
                <ShieldCheck className="h-3.5 w-3.5" /> تمت المعاملة عبر بوابة دفع معتمدة ومؤمّنة
              </p>
            </div>
          ) : payment.status === 'cancelled' ? (
            <div className="text-center">
              <XCircle className="mx-auto mb-4 h-12 w-12 text-white/30" />
              <h1 className="text-xl font-medium text-white">طلب الدفع ملغي</h1>
              <p className="mt-2 text-sm text-white/50">تواصل مع فريق أومنيرا فاليه للحصول على رابط جديد.</p>
            </div>
          ) : (
            /* --------------- بانتظار الدفع --------------- */
            <>
              <div className="mb-6 text-center">
                <p className="text-sm text-white/45">فاتورة دفع</p>
                <h1 className="mt-1 text-xl font-medium leading-relaxed text-white">{payment.title}</h1>
                {payment.description && <p className="mt-2 text-sm text-white/50">{payment.description}</p>}
                <p className="mt-5 text-4xl font-semibold tracking-tight text-gold-primary">
                  {fmtSar(payment.amount)} <span className="text-base font-normal text-white/50">ر.س</span>
                </p>
                {payment.reference && (
                  <p className="mt-2 text-xs text-white/35">مرجع: {payment.reference}</p>
                )}
              </div>

              <div className="space-y-2.5">
                {/* زر أبل باي */}
                <button
                  onClick={startPayment}
                  disabled={loading}
                  className="flex w-full items-center justify-center gap-2 rounded-2xl bg-black border border-white/20 py-3.5 text-sm font-semibold text-white transition-all duration-200 hover:bg-neutral-900 hover:border-white/40 disabled:opacity-60 shadow-md"
                >
                  {loading ? (
                    <Loader2 className="h-4 w-4 animate-spin" />
                  ) : (
                    <span className="text-base font-bold leading-none tracking-tight">Pay</span>
                  )}
                  <span>{loading ? 'جارٍ التحويل...' : 'الدفع السريع عبر Apple Pay'}</span>
                </button>

                {/* زر مدى والبطاقات */}
                <button
                  onClick={startPayment}
                  disabled={loading}
                  className="flex w-full items-center justify-center gap-2 rounded-2xl bg-gold-primary py-3.5 text-sm font-semibold text-[#0A0A0C] transition-all duration-200 hover:bg-gold-light disabled:opacity-60 shadow-lg shadow-gold-primary/10"
                >
                  {loading ? (
                    <Loader2 className="h-4 w-4 animate-spin" />
                  ) : (
                    <ShieldCheck className="h-4 w-4" />
                  )}
                  <span>{loading ? 'جارٍ التحويل لبوابة الراجحي...' : 'الدفع ببطاقة مدى أو البطاقة الائتمانية'}</span>
                </button>
              </div>

              {error && <p className="mt-4 text-center text-sm text-red-400">{error}</p>}

              {/* شريط وسائل الدفع المقبولة */}
              <div className="mt-6 border-t border-white/10 pt-5 text-center">
                <p className="mb-3 text-xs text-white/50">طرق الدفع المعتمدة:</p>
                <div className="flex flex-wrap items-center justify-center gap-2">
                  <div className="inline-flex items-center gap-1 rounded-lg bg-white px-2.5 py-1 shadow-sm">
                    <span className="font-bold text-[#005A9C] text-xs">mada</span>
                    <span className="text-[11px] font-bold text-[#87B827]">مدى</span>
                  </div>
                  <div className="inline-flex items-center rounded-lg bg-black border border-white/20 px-2.5 py-1 text-white shadow-sm">
                    <span className="font-bold text-xs">Pay</span>
                  </div>
                  <div className="inline-flex items-center rounded-lg bg-white px-2.5 py-1 shadow-sm">
                    <span className="font-black italic text-[#1A1F71] text-xs">VISA</span>
                  </div>
                  <div className="inline-flex items-center gap-1 rounded-lg bg-[#18181c] border border-white/15 px-2.5 py-1 shadow-sm">
                    <div className="flex -space-x-1.5 items-center">
                      <div className="h-3.5 w-3.5 rounded-full bg-[#EB001B]"></div>
                      <div className="h-3.5 w-3.5 rounded-full bg-[#F79E1B]/95"></div>
                    </div>
                    <span className="text-[10px] font-semibold text-white/90">Mastercard</span>
                  </div>
                </div>

                <p className="mt-4 flex items-center justify-center gap-1.5 text-[11px] text-white/40">
                  <ShieldCheck className="h-3.5 w-3.5 text-emerald-400" />
                  دفع بنكي آمن ومشفّر 100% عبر مصرف الراجحي ومؤسسة النقد (ساما)
                </p>
              </div>
            </>
          )}
        </div>

        <p className="mt-6 text-center text-xs text-white/25">
          هذه الفاتورة صادرة من omniravalet.com — لأي استفسار تواصل معنا واتساب
        </p>
      </div>
    </main>
  );
}

function Row({ label, value, strong, mono }: { label: string; value: string; strong?: boolean; mono?: boolean }) {
  return (
    <div className="flex items-center justify-between py-1.5 text-sm">
      <span className="text-white/40">{label}</span>
      <span className={`${strong ? 'font-semibold text-gold-primary' : 'text-white/80'} ${mono ? 'font-mono text-xs' : ''}`}>
        {value}
      </span>
    </div>
  );
}
