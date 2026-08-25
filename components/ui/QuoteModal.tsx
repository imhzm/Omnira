'use client';

import { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { X, Send, CheckCircle2, Loader2, CreditCard, ShieldCheck, FileText } from 'lucide-react';
import { useQuoteModal } from '@/lib/quote-modal-store';

const SERVICES = [
  { v: 'valet-parking', l: 'خدمات الفاليه باركينج', defaultAmt: 500 },
  { v: 'events-package', l: 'باقة الفعاليات الكاملة (2,500 ر.س)', defaultAmt: 2500 },
  { v: 'parking-management', l: 'إدارة وتشغيل المواقف — عربون (1,000 ر.س)', defaultAmt: 1000 },
  { v: 'advanced-technology', l: 'التقنيات المتقدمة ونظام التذاكر', defaultAmt: 1500 },
  { v: 'professional-organizers', l: 'المنظمين المحترفين', defaultAmt: 2000 },
  { v: 'consultation', l: 'الاستشارات الميدانية', defaultAmt: 500 },
  { v: 'golf-cart', l: 'سيارات الجولف كار', defaultAmt: 800 },
  { v: 'car-wash', l: 'غسيل وتلميع السيارات', defaultAmt: 300 },
];

export default function QuoteModal() {
  const { open, source, service, note, closeQuote } = useQuoteModal();
  const [mode, setMode] = useState<'quote' | 'pay'>('quote');
  const [form, setForm] = useState({
    name: '',
    phone: '',
    email: '',
    service: '',
    amount: 500,
    message: '',
    company: '',
  });
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');
  const [errorMsg, setErrorMsg] = useState('');

  // fresh form each time the modal opens, seeded with the triggering CTA's service/note
  useEffect(() => {
    if (open) {
      const initService = service || 'events-package';
      const found = SERVICES.find((s) => s.v === initService);
      setForm({
        name: '',
        phone: '',
        email: '',
        service: initService,
        amount: found?.defaultAmt || 500,
        message: note || '',
        company: '',
      });
      setStatus('idle');
      setMode(source === 'pricing' ? 'pay' : 'quote');
    }
  }, [open, service, note, source]);

  // lock body scroll + close on Esc
  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && closeQuote();
    window.addEventListener('keydown', onKey);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener('keydown', onKey);
    };
  }, [open, closeQuote]);

  const onServiceChange = (sVal: string) => {
    const found = SERVICES.find((s) => s.v === sVal);
    setForm((f) => ({
      ...f,
      service: sVal,
      amount: found?.defaultAmt || f.amount,
    }));
  };

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');
    setErrorMsg('');

    if (mode === 'pay') {
      // Direct payment flow
      try {
        const found = SERVICES.find((s) => s.v === form.service);
        const res = await fetch('/api/payments/checkout', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            name: form.name,
            phone: form.phone,
            email: form.email || undefined,
            service: form.service,
            serviceTitle: found?.l || form.service,
            amount: Number(form.amount) || 500,
            notes: form.message,
            company: form.company,
          }),
        });
        const data = await res.json();
        if (res.ok && data.ok && data.paymentUrl) {
          window.location.href = data.paymentUrl;
          return;
        }
        setStatus('error');
        setErrorMsg(data.message || 'تعذّر بدء الدفع الإلكتروني. يرجى المحاولة لاحقًا.');
      } catch {
        setStatus('error');
        setErrorMsg('تعذّر الاتصال ببوابة الدفع. يرجى المحاولة مجددًا.');
      }
      return;
    }

    // Lead / Quote request flow
    try {
      const res = await fetch('/api/leads', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...form,
          source: source || 'quote-modal',
          pagePath: typeof window !== 'undefined' ? window.location.pathname : undefined,
        }),
      });
      if (res.ok) {
        setStatus('success');
        setForm({ name: '', phone: '', email: '', service: '', amount: 500, message: '', company: '' });
      } else if (res.status === 429) {
        setStatus('error');
        setErrorMsg('لقد أرسلت عدّة طلبات — يرجى المحاولة بعد قليل.');
      } else {
        setStatus('error');
        setErrorMsg('تعذّر الإرسال، تأكد من البيانات وحاول مجددًا.');
      }
    } catch {
      setStatus('error');
      setErrorMsg('تعذّر الاتصال. حاول مجددًا.');
    }
  };

  const inputCls =
    'w-full rounded-xl border border-white/10 bg-[#131318] px-4 py-3.5 text-white placeholder:text-white/30 focus:border-gold-primary/60 focus:outline-none focus:ring-4 focus:ring-gold-primary/10 transition-all text-sm';

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-[9998] flex items-center justify-center p-4 overflow-y-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={closeQuote}
          dir="rtl"
        >
          <div className="fixed inset-0 bg-black/75 backdrop-blur-sm" />
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.98 }}
            transition={{ duration: 0.35, ease: [0.22, 0.61, 0.36, 1] }}
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-lg overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-b from-[#141418] to-[#0C0C0F] p-7 shadow-2xl sm:p-9 my-8"
          >
            <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold-primary to-transparent" />
            <button
              onClick={closeQuote}
              aria-label="إغلاق"
              className="absolute left-5 top-5 rounded-lg p-2 text-white/45 transition-colors hover:bg-white/5 hover:text-white"
            >
              <X className="h-5 w-5" />
            </button>

            {status === 'success' ? (
              <div className="flex flex-col items-center py-8 text-center">
                <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl border border-emerald-500/25 bg-emerald-500/10">
                  <CheckCircle2 className="h-8 w-8 text-emerald-400" />
                </div>
                <h3 className="mb-3 text-2xl font-medium text-white">تم استلام طلبك بنجاح</h3>
                <p className="mb-8 max-w-xs text-white/55">سيتواصل معك فريق أومنيرا فاليه خلال 24 ساعة لتأكيد التفاصيل.</p>
                <button
                  onClick={closeQuote}
                  className="rounded-full bg-gold-primary px-9 py-3 text-sm font-medium text-[#0A0A0C] transition-colors hover:bg-gold-light"
                >
                  تم
                </button>
              </div>
            ) : (
              <>
                <div className="mb-6">
                  <div className="mb-3 flex items-center justify-between">
                    <span className="flex items-center gap-2 text-[11px] font-medium tracking-[0.2em] text-gold-primary/80">
                      <span className="h-px w-6 bg-gold-primary/50" />
                      {mode === 'pay' ? 'حجز ودفع إلكتروني فوري' : 'طلب عرض سعر'}
                    </span>
                  </div>

                  {/* Mode switcher tabs */}
                  <div className="grid grid-cols-2 gap-2 rounded-2xl bg-white/[0.04] p-1.5 border border-white/5 mb-5">
                    <button
                      type="button"
                      onClick={() => setMode('pay')}
                      className={`flex items-center justify-center gap-2 rounded-xl py-2.5 text-xs font-medium transition-all ${
                        mode === 'pay'
                          ? 'bg-gold-primary text-[#0A0A0C] shadow-lg'
                          : 'text-white/60 hover:text-white hover:bg-white/5'
                      }`}
                    >
                      <CreditCard className="h-3.5 w-3.5" />
                      حجز ودفع أونلاين
                    </button>
                    <button
                      type="button"
                      onClick={() => setMode('quote')}
                      className={`flex items-center justify-center gap-2 rounded-xl py-2.5 text-xs font-medium transition-all ${
                        mode === 'quote'
                          ? 'bg-gold-primary text-[#0A0A0C] shadow-lg'
                          : 'text-white/60 hover:text-white hover:bg-white/5'
                      }`}
                    >
                      <FileText className="h-3.5 w-3.5" />
                      طلب عرض سعر
                    </button>
                  </div>

                  <h3 className="text-xl font-medium text-white sm:text-2xl">
                    {mode === 'pay' ? 'تأكيد الحجز والدفع المؤمّن' : 'تواصل معنا لعرض سعر مخصّص'}
                  </h3>
                  <p className="mt-1 text-xs text-white/50">
                    {mode === 'pay'
                      ? 'اختر الخدمة وسيتم تحويلك فوراً لصفحة مصرف الراجحي المؤمّنة لإتمام الدفع.'
                      : 'أدخل بياناتك وسنعاود التواصل معك خلال 24 ساعة.'}
                  </p>
                </div>

                <form onSubmit={submit} className="space-y-3.5">
                  <div>
                    <label className="mb-1.5 block text-xs text-white/60">الاسم الكامل *</label>
                    <input
                      type="text"
                      required
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      className={inputCls}
                      placeholder="مثال: فهد السبيعي"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="mb-1.5 block text-xs text-white/60">رقم الجوال *</label>
                      <input
                        type="tel"
                        required
                        dir="ltr"
                        value={form.phone}
                        onChange={(e) => setForm({ ...form, phone: e.target.value })}
                        className={`${inputCls} text-right`}
                        placeholder="05xxxxxxxx"
                      />
                    </div>
                    <div>
                      <label className="mb-1.5 block text-xs text-white/60">البريد الإلكتروني (اختياري)</label>
                      <input
                        type="email"
                        dir="ltr"
                        value={form.email}
                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                        className={`${inputCls} text-right`}
                        placeholder="name@example.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="mb-1.5 block text-xs text-white/60">الخدمة أو الباقة المطلوبة *</label>
                    <select
                      value={form.service}
                      onChange={(e) => onServiceChange(e.target.value)}
                      className={inputCls}
                      required
                    >
                      <option value="">اختر الخدمة أو الباقة</option>
                      {SERVICES.map((s) => (
                        <option key={s.v} value={s.v}>{s.l}</option>
                      ))}
                    </select>
                  </div>

                  {mode === 'pay' && (
                    <div>
                      <label className="mb-1.5 block text-xs text-white/60">المبلغ المطلوب سداده (ريال سعودي) *</label>
                      <div className="relative">
                        <input
                          type="number"
                          min="1"
                          max="500000"
                          step="1"
                          required
                          value={form.amount}
                          onChange={(e) => setForm({ ...form, amount: Number(e.target.value) })}
                          className={`${inputCls} font-mono text-base font-semibold text-gold-primary`}
                        />
                        <span className="absolute left-4 top-1/2 -translate-y-1/2 text-xs text-white/40">
                          ر.س
                        </span>
                      </div>
                    </div>
                  )}

                  <div>
                    <label className="mb-1.5 block text-xs text-white/60">ملاحظات أو تفاصيل الموقع (اختياري)</label>
                    <textarea
                      rows={2}
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      className={`${inputCls} resize-none`}
                      placeholder="تاريخ وموقع الفعالية أو أية متطلبات خاصة..."
                    />
                  </div>

                  {/* honeypot */}
                  <input
                    type="text"
                    name="company"
                    value={form.company}
                    onChange={(e) => setForm({ ...form, company: e.target.value })}
                    tabIndex={-1}
                    autoComplete="off"
                    aria-hidden="true"
                    className="absolute -left-[9999px] h-0 w-0 opacity-0"
                  />

                  {mode === 'pay' && (
                    <div className="rounded-xl border border-white/10 bg-white/[0.03] p-3 text-center">
                      <p className="mb-2 text-xs text-white/50">طرق الدفع المتاحة فوراً:</p>
                      <div className="flex flex-wrap items-center justify-center gap-2">
                        <div className="inline-flex items-center gap-1 rounded bg-white px-2 py-0.5 shadow-sm">
                          <span className="font-bold text-[#005A9C] text-[11px]">mada</span>
                          <span className="text-[10px] font-bold text-[#87B827]">مدى</span>
                        </div>
                        <div className="inline-flex items-center rounded bg-black border border-white/20 px-2 py-0.5 text-white shadow-sm">
                          <span className="font-bold text-[11px]">Pay</span>
                        </div>
                        <div className="inline-flex items-center rounded bg-white px-2 py-0.5 shadow-sm">
                          <span className="font-black italic text-[#1A1F71] text-[11px]">VISA</span>
                        </div>
                        <div className="inline-flex items-center gap-1 rounded bg-[#18181c] border border-white/15 px-2 py-0.5 shadow-sm">
                          <div className="flex -space-x-1.5 items-center">
                            <div className="h-3 w-3 rounded-full bg-[#EB001B]"></div>
                            <div className="h-3 w-3 rounded-full bg-[#F79E1B]/95"></div>
                          </div>
                          <span className="text-[9px] font-semibold text-white/90">Mastercard</span>
                        </div>
                      </div>
                    </div>
                  )}

                  {status === 'error' && <p className="text-xs text-red-400">{errorMsg}</p>}

                  <button
                    type="submit"
                    disabled={status === 'sending'}
                    className="flex w-full items-center justify-center gap-2 rounded-full bg-gold-primary py-3.5 text-sm font-semibold text-[#0A0A0C] transition-all duration-300 hover:bg-gold-light disabled:opacity-70 shadow-lg shadow-gold-primary/10 mt-1"
                  >
                    {status === 'sending' ? (
                      <Loader2 className="h-4 w-4 animate-spin" />
                    ) : mode === 'pay' ? (
                      <ShieldCheck className="h-4 w-4" />
                    ) : (
                      <Send className="h-4 w-4" />
                    )}
                    {status === 'sending'
                      ? mode === 'pay'
                        ? 'جارٍ تجهيز الحجز...'
                        : 'جارٍ إرسال الطلب...'
                      : mode === 'pay'
                      ? 'احجز الآن'
                      : 'إرسال طلب عرض السعر'}
                  </button>

                  {mode === 'pay' ? (
                    <div className="flex items-center justify-center gap-1.5 pt-1 text-[11px] text-white/40">
                      <ShieldCheck className="h-3.5 w-3.5 text-emerald-400" />
                      <span>دفع بنكي آمن ومشفّر 100% عبر مصرف الراجحي</span>
                    </div>
                  ) : (
                    <p className="text-center text-xs text-white/35 pt-1">
                      أو اتصل مباشرة:{' '}
                      <a href="tel:+966551962033" dir="ltr" className="text-white/60 hover:text-gold-primary font-mono">
                        +966 55 196 2033
                      </a>
                    </p>
                  )}
                </form>
              </>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

