'use client';

import { useState, useEffect } from 'react';
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
  const [isAppleDevice, setIsAppleDevice] = useState(false);
  const paid = payment.status === 'paid';

  useEffect(() => {
    try {
      const isApple =
        typeof window !== 'undefined' &&
        (/iPhone|iPad|iPod|Macintosh/i.test(navigator.userAgent) ||
          !!(window as unknown as { ApplePaySession?: unknown }).ApplePaySession);
      setIsAppleDevice(isApple);
    } catch {
      setIsAppleDevice(false);
    }
  }, []);

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
                {/* زر أبل باي - يظهر فقط على أجهزة Apple المدعومة */}
                {isAppleDevice && (
                  <button
                    onClick={startPayment}
                    disabled={loading}
                    className="flex w-full items-center justify-center gap-2.5 rounded-2xl bg-black border border-white/20 py-3.5 text-sm font-semibold text-white transition-all duration-200 hover:bg-neutral-900 hover:border-white/40 disabled:opacity-60 shadow-md"
                  >
                    {loading ? (
                      <Loader2 className="h-4 w-4 animate-spin" />
                    ) : (
                      <div className="flex items-center gap-1">
                        <svg viewBox="0 0 170 170" className="h-4 w-4 fill-current -mt-0.5" xmlns="http://www.w3.org/2000/svg">
                          <path d="M150.37 130.25c-2.45 5.66-5.35 10.87-8.71 15.66-4.58 6.53-8.33 11.05-11.22 13.56-4.48 4.12-9.28 6.23-14.42 6.35-3.69 0-8.14-1.05-13.32-3.18-5.19-2.12-9.97-3.17-14.34-3.17-4.58 0-9.49 1.05-14.75 3.17-5.26 2.13-9.5 3.24-12.74 3.35-4.35.13-9.16-1.9-14.42-6.08-3.69-3.04-7.67-7.86-11.96-14.44-6.42-9.9-11.38-20.9-14.88-32.99-3.5-12.09-5.25-23.23-5.25-33.43 0-14.43 3.65-26.24 10.96-35.43 7.31-9.19 16.27-13.88 26.88-14.07 4.9.11 10.15 1.41 15.75 3.88 5.6 2.47 9.4 3.75 11.4 3.84 1.7-.1 5.75-1.46 12.14-4.08 6.39-2.61 11.96-3.79 16.71-3.52 13.9.77 24.81 5.86 32.74 15.26-12.21 7.42-18.23 17.51-18.06 30.26.17 10.19 4.09 18.66 11.75 25.4 7.66 6.74 16.89 10.49 27.69 11.25-2.58 7.62-5.74 15.34-9.48 23.16zM119.22 33.64c0-7.39 2.67-14.18 8.01-20.36 5.34-6.19 11.9-10.08 19.67-11.69.17 1.09.25 2.05.25 2.87 0 7.4-2.78 14.34-8.34 20.82-5.56 6.48-12.27 10.33-20.14 11.55-.26-1.04-.45-2.1-.45-3.19z"/>
                        </svg>
                        <span className="text-sm font-semibold tracking-tight">Pay</span>
                      </div>
                    )}
                    <span>{loading ? 'جارٍ التحويل...' : 'الدفع السريع عبر Apple Pay'}</span>
                  </button>
                )}

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
                  <div className="inline-flex items-center gap-1 rounded-lg bg-black border border-white/20 px-2.5 py-1 text-white shadow-sm">
                    <svg viewBox="0 0 170 170" className="h-3 w-3 fill-current -mt-0.5" xmlns="http://www.w3.org/2000/svg">
                      <path d="M150.37 130.25c-2.45 5.66-5.35 10.87-8.71 15.66-4.58 6.53-8.33 11.05-11.22 13.56-4.48 4.12-9.28 6.23-14.42 6.35-3.69 0-8.14-1.05-13.32-3.18-5.19-2.12-9.97-3.17-14.34-3.17-4.58 0-9.49 1.05-14.75 3.17-5.26 2.13-9.5 3.24-12.74 3.35-4.35.13-9.16-1.9-14.42-6.08-3.69-3.04-7.67-7.86-11.96-14.44-6.42-9.9-11.38-20.9-14.88-32.99-3.5-12.09-5.25-23.23-5.25-33.43 0-14.43 3.65-26.24 10.96-35.43 7.31-9.19 16.27-13.88 26.88-14.07 4.9.11 10.15 1.41 15.75 3.88 5.6 2.47 9.4 3.75 11.4 3.84 1.7-.1 5.75-1.46 12.14-4.08 6.39-2.61 11.96-3.79 16.71-3.52 13.9.77 24.81 5.86 32.74 15.26-12.21 7.42-18.23 17.51-18.06 30.26.17 10.19 4.09 18.66 11.75 25.4 7.66 6.74 16.89 10.49 27.69 11.25-2.58 7.62-5.74 15.34-9.48 23.16zM119.22 33.64c0-7.39 2.67-14.18 8.01-20.36 5.34-6.19 11.9-10.08 19.67-11.69.17 1.09.25 2.05.25 2.87 0 7.4-2.78 14.34-8.34 20.82-5.56 6.48-12.27 10.33-20.14 11.55-.26-1.04-.45-2.1-.45-3.19z"/>
                    </svg>
                    <span className="font-semibold text-xs leading-none">Pay</span>
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
