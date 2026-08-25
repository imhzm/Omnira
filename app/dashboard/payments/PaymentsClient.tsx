'use client';

import { useMemo, useState, useCallback, useEffect } from 'react';
import {
  CreditCard, Plus, Copy, ExternalLink, Trash2, RefreshCw,
  CheckCircle2, Clock, XCircle, Ban, Wallet, Link2, MessageCircle,
} from 'lucide-react';
import type { PaymentLink, PaymentLinkStatus } from '@/lib/payments/types';

const STATUS_META: Record<PaymentLinkStatus, { label: string; style: string; Icon: typeof Clock }> = {
  pending: { label: 'بانتظار الدفع', style: 'bg-gold-primary/15 text-gold-light border-gold-primary/30', Icon: Clock },
  paid: { label: 'مدفوعة', style: 'bg-emerald-500/15 text-emerald-300 border-emerald-500/30', Icon: CheckCircle2 },
  failed: { label: 'فاشلة', style: 'bg-red-500/15 text-red-300 border-red-500/30', Icon: XCircle },
  cancelled: { label: 'ملغاة', style: 'bg-white/5 text-white/40 border-white/10', Icon: Ban },
};

function fmtSar(n: number): string {
  return new Intl.NumberFormat('ar-SA', { minimumFractionDigits: 2, maximumFractionDigits: 2 }).format(n);
}

function fmtDate(iso: string): string {
  try {
    return new Date(iso).toLocaleString('ar-EG', { day: 'numeric', month: 'short', hour: '2-digit', minute: '2-digit' });
  } catch {
    return iso;
  }
}

interface Stats {
  total: number;
  pending: number;
  paid: number;
  failed: number;
  cancelled: number;
  paidAmount: number;
  pendingAmount: number;
}

export default function PaymentsClient({
  initialLinks,
  initialStats,
}: {
  initialLinks: PaymentLink[];
  initialStats: Stats;
}) {
  const [links, setLinks] = useState<PaymentLink[]>(initialLinks);
  const [stats] = useState<Stats>(initialStats);
  const [showForm, setShowForm] = useState(false);
  const [busy, setBusy] = useState<string | null>(null);
  const [copied, setCopied] = useState<string | null>(null);
  const [filter, setFilter] = useState<PaymentLinkStatus | 'all'>('all');
  const [error, setError] = useState('');

  // نموذج إنشاء رابط
  const [title, setTitle] = useState('');
  const [amount, setAmount] = useState('');
  const [customerName, setCustomerName] = useState('');
  const [customerPhone, setCustomerPhone] = useState('');
  const [reference, setReference] = useState('');
  const [description, setDescription] = useState('');

  const refresh = useCallback(async () => {
    const res = await fetch('/api/payments');
    if (res.ok) {
      const data = await res.json();
      setLinks(data.links || []);
    }
  }, []);

  useEffect(() => {
    if (!showForm) return;
    // لا شيء — النموذج بسيط
  }, [showForm]);

  const createLink = async (e: React.FormEvent) => {
    e.preventDefault();
    setBusy('__form');
    setError('');
    try {
      const res = await fetch('/api/payments', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          title,
          amount: Number(amount),
          customerName: customerName || undefined,
          customerPhone: customerPhone || undefined,
          reference: reference || undefined,
          description: description || undefined,
        }),
      });
      const data = await res.json().catch(() => ({}));
      if (res.status === 201 && data.ok) {
        setLinks((prev) => [data.link, ...prev]);
        setShowForm(false);
        resetForm();
      } else if (res.status === 422) {
        setError('تحقق من الحقول: العنوان والمبلغ مطلوبان.');
      } else {
        setError(data.error === 'unauthorized' ? 'انتهت الجلسة — أعد تسجيل الدخول.' : 'تعذّر إنشاء الرابط.');
      }
    } catch {
      setError('تعذّر الاتصال.');
    } finally {
      setBusy(null);
    }
  };

  const resetForm = () => {
    setTitle(''); setAmount(''); setCustomerName(''); setCustomerPhone(''); setReference(''); setDescription('');
  };

  const copyUrl = async (id: string) => {
    const url = `${window.location.origin}/pay/${id}`;
    try {
      await navigator.clipboard.writeText(url);
      setCopied(id);
      setTimeout(() => setCopied(null), 1500);
    } catch {
      window.open(url, '_blank');
    }
  };

  const waShare = (p: PaymentLink) => {
    let d = (p.customerPhone || '').replace(/[^\d]/g, '');
    if (d.startsWith('00')) d = d.slice(2);
    if (d.startsWith('0')) d = '966' + d.slice(1);
    else if (!d.startsWith('966')) d = '966' + d;
    const url = `${window.location.origin}/pay/${p.id}`;
    const msg = encodeURIComponent(
      `مرحبًا ${p.customerName || ''}، معك أومنيرا فاليه 🌟\nفاتورة: ${p.title}\nالمبلغ: ${fmtSar(p.amount)} ر.س\nللدفع الإلكتروني الآمن:\n${url}`,
    );
    window.open(`https://wa.me/${d}?text=${msg}`, '_blank');
  };

  const initiatePayment = async (p: PaymentLink) => {
    setBusy(p.id);
    setError('');
    try {
      const res = await fetch(`/api/payments/${p.id}/initiate`, { method: 'POST' });
      const data = await res.json().catch(() => ({}));
      if (res.ok && data.ok && data.paymentUrl) {
        window.open(data.paymentUrl, '_blank');
        await refresh();
      } else if (data.error === 'already_paid') {
        setError('هذه الفاتورة مدفوعة بالفعل.');
      } else if (res.status === 502) {
        setError(`البوابة لم تُصدر رابط دفع${data.detail ? ` (${String(data.detail).slice(0, 60)})` : ''} — تأكد من إعدادات NeoLeap.`);
      } else {
        setError('تعذّر بدء الدفع عبر البوابة.');
      }
    } catch {
      setError('تعذّر الاتصال بالبوابة.');
    } finally {
      setBusy(null);
    }
  };

  const cancelLink = async (p: PaymentLink) => {
    setBusy(p.id);
    try {
      const res = await fetch(`/api/payments/${p.id}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ status: 'cancelled' }),
      });
      if (res.ok) setLinks((prev) => prev.map((x) => (x.id === p.id ? { ...x, status: 'cancelled' } : x)));
    } finally {
      setBusy(null);
    }
  };

  const removeLink = async (p: PaymentLink) => {
    if (!confirm(`حذف رابط دفع "${p.title}"؟`)) return;
    setBusy(p.id);
    try {
      const res = await fetch(`/api/payments/${p.id}`, { method: 'DELETE' });
      if (res.ok) setLinks((prev) => prev.filter((x) => x.id !== p.id));
    } finally {
      setBusy(null);
    }
  };

  const filtered = useMemo(
    () => (filter === 'all' ? links : links.filter((l) => l.status === filter)),
    [links, filter],
  );

  return (
    <div className="min-h-screen bg-[#0A0A0C] pb-24">
      {/* رأس الصفحة */}
      <header className="sticky top-0 z-20 border-b border-white/5 bg-[#0A0A0C]/85 backdrop-blur-xl">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-3 px-6 py-4">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-gold-primary/25 bg-gold-primary/10">
              <CreditCard className="h-5 w-5 text-gold-primary" />
            </div>
            <div>
              <h1 className="text-sm font-medium text-white">روابط وفواتير الدفع</h1>
              <p className="text-xs text-white/40">مصرف الراجحي · مدى · Apple Pay · Visa · Mastercard</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <a
              href="/dashboard"
              className="rounded-full border border-white/10 px-4 py-2 text-xs text-white/60 transition-colors hover:bg-white/5"
            >
              الليدز
            </a>
            <button
              onClick={refresh}
              className="rounded-full border border-white/10 p-2.5 text-white/60 transition-colors hover:bg-white/5"
              title="تحديث"
            >
              <RefreshCw className="h-4 w-4" />
            </button>
            <button
              onClick={() => setShowForm((v) => !v)}
              className="flex items-center gap-1.5 rounded-full bg-gold-primary px-4 py-2.5 text-xs font-medium text-[#0A0A0C] transition-colors hover:bg-gold-light"
            >
              <Plus className="h-4 w-4" /> رابط دفع جديد
            </button>
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-6xl px-6 pt-8">
        {/* بطاقات الإحصاء */}
        <div className="grid grid-cols-2 gap-3 md:grid-cols-4">
          <StatCard icon={Wallet} label="محصّل" value={`${fmtSar(stats.paidAmount)} ر.س`} tone="emerald" sub={`${stats.paid} فاتورة`} />
          <StatCard icon={Clock} label="قيد التحصيل" value={`${fmtSar(stats.pendingAmount)} ر.س`} tone="gold" sub={`${stats.pending} فاتورة`} />
          <StatCard icon={CheckCircle2} label="مدفوعة" value={String(stats.paid)} tone="white" />
          <StatCard icon={XCircle} label="فاشلة / ملغاة" value={String(stats.failed + stats.cancelled)} tone="white" />
        </div>

        {error && (
          <div className="mt-4 rounded-xl border border-red-500/25 bg-red-500/10 px-4 py-3 text-sm text-red-300">{error}</div>
        )}

        {/* نموذج الإنشاء */}
        {showForm && (
          <form onSubmit={createLink} className="mt-6 rounded-3xl border border-white/10 bg-gradient-to-b from-white/[0.06] to-white/[0.015] p-6">
            <h2 className="mb-5 flex items-center gap-2 text-sm font-medium text-white">
              <Link2 className="h-4 w-4 text-gold-primary" /> إنشاء رابط دفع جديد
            </h2>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              <Field label="البيان *">
                <input required value={title} onChange={(e) => setTitle(e.target.value)}
                  placeholder="مثال: باقة المطاعم — شهر تجريبي"
                  className={inputCls} />
              </Field>
              <Field label="المبلغ (ر.س) *">
                <input required type="number" min="1" step="0.01" value={amount} onChange={(e) => setAmount(e.target.value)}
                  placeholder="9000"
                  className={inputCls} />
              </Field>
              <Field label="اسم العميل">
                <input value={customerName} onChange={(e) => setCustomerName(e.target.value)}
                  placeholder="اختياري" className={inputCls} />
              </Field>
              <Field label="جوال العميل (واتساب)">
                <input dir="ltr" value={customerPhone} onChange={(e) => setCustomerPhone(e.target.value)}
                  placeholder="05xxxxxxxx" className={inputCls} />
              </Field>
              <Field label="مرجع داخلي">
                <input value={reference} onChange={(e) => setReference(e.target.value)}
                  placeholder="رقم عرض السعر — اختياري" className={inputCls} />
              </Field>
              <Field label="وصف تفصيلي">
                <input value={description} onChange={(e) => setDescription(e.target.value)}
                  placeholder="اختياري" className={inputCls} />
              </Field>
            </div>
            <div className="mt-4 flex flex-wrap items-center gap-2 text-[11px] text-white/40">
              <span>الرابط يدعم السداد الفوري عبر:</span>
              <span className="rounded bg-white px-1.5 py-0.5 font-bold text-[#005A9C] text-[10px]">mada مدى</span>
              <span className="rounded bg-black border border-white/20 px-1.5 py-0.5 font-bold text-white text-[10px]">Pay</span>
              <span className="rounded bg-white px-1.5 py-0.5 font-black italic text-[#1A1F71] text-[10px]">VISA</span>
              <span className="rounded bg-[#18181c] border border-white/10 px-1.5 py-0.5 font-semibold text-white text-[10px]">Mastercard</span>
            </div>
            <div className="mt-5 flex gap-2">
              <button type="submit" disabled={busy === '__form'}
                className="rounded-full bg-gold-primary px-6 py-2.5 text-xs font-medium text-[#0A0A0C] transition-colors hover:bg-gold-light disabled:opacity-60">
                {busy === '__form' ? '...' : 'إنشاء الرابط'}
              </button>
              <button type="button" onClick={() => setShowForm(false)}
                className="rounded-full border border-white/10 px-6 py-2.5 text-xs text-white/60 transition-colors hover:bg-white/5">
                إلغاء
              </button>
            </div>
          </form>
        )}

        {/* فلاتر */}
        <div className="mt-8 flex flex-wrap gap-2">
          {(['all', 'pending', 'paid', 'failed', 'cancelled'] as const).map((f) => (
            <button key={f} onClick={() => setFilter(f)}
              className={`rounded-full border px-4 py-1.5 text-xs transition-colors ${
                filter === f
                  ? 'border-gold-primary/40 bg-gold-primary/15 text-gold-light'
                  : 'border-white/10 text-white/45 hover:bg-white/5'
              }`}>
              {f === 'all' ? `الكل (${links.length})` : `${STATUS_META[f].label} (${links.filter((l) => l.status === f).length})`}
            </button>
          ))}
        </div>

        {/* القائمة */}
        <div className="mt-4 space-y-3">
          {filtered.length === 0 && (
            <div className="rounded-3xl border border-dashed border-white/10 p-12 text-center text-sm text-white/35">
              لا توجد روابط دفع بعد — أنشئ أول رابط وابعته لعميلك على واتساب.
            </div>
          )}
          {filtered.map((p) => {
            const meta = STATUS_META[p.status];
            const Icon = meta.Icon;
            return (
              <div key={p.id} className={`rounded-2xl border border-white/10 bg-gradient-to-b from-white/[0.05] to-white/[0.01] p-5 ${busy === p.id ? 'opacity-60' : ''}`}>
                <div className="flex flex-wrap items-start justify-between gap-4">
                  <div className="min-w-0 flex-1">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="font-medium text-white">{p.title}</span>
                      <span className={`inline-flex items-center gap-1 rounded-full border px-2.5 py-0.5 text-[11px] ${meta.style}`}>
                        <Icon className="h-3 w-3" /> {meta.label}
                      </span>
                    </div>
                    <div className="mt-2 flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-white/40">
                      <span className="font-semibold text-base text-gold-primary">{fmtSar(p.amount)} ر.س</span>
                      {p.customerName && <span>{p.customerName}</span>}
                      {p.customerPhone && <span dir="ltr">{p.customerPhone}</span>}
                      {p.reference && <span>مرجع: {p.reference}</span>}
                      <span>{fmtDate(p.createdAt)}</span>
                      {p.trackId && <span className="font-mono text-[10px] text-white/25">{p.trackId}</span>}
                    </div>
                    {(p.authCode || p.bankRef) && (
                      <div className="mt-1.5 text-[11px] text-emerald-300/70">
                        {p.authCode && <span>تفويض: {p.authCode} </span>}
                        {p.bankRef && <span>· مرجع البنك: {p.bankRef}</span>}
                      </div>
                    )}
                    {p.gatewayStatus?.startsWith?.('init_failed') && (
                      <div className="mt-1.5 font-mono text-[11px] text-red-300/70">{p.gatewayStatus.slice(0, 90)}</div>
                    )}
                  </div>

                  <div className="flex flex-wrap items-center gap-2">
                    <IconBtn title="نسخ الرابط" onClick={() => copyUrl(p.id)}>
                      {copied === p.id ? <CheckCircle2 className="h-4 w-4 text-emerald-400" /> : <Copy className="h-4 w-4" />}
                    </IconBtn>
                    <IconBtn title="فتح صفحة الدفع" onClick={() => window.open(`/pay/${p.id}`, '_blank')}>
                      <ExternalLink className="h-4 w-4" />
                    </IconBtn>
                    {p.customerPhone && (
                      <IconBtn title="إرسال واتساب" onClick={() => waShare(p)}>
                        <MessageCircle className="h-4 w-4" />
                      </IconBtn>
                    )}
                    {p.status !== 'paid' && p.status !== 'cancelled' && (
                      <>
                        <button
                          onClick={() => initiatePayment(p)}
                          disabled={busy === p.id}
                          className="flex items-center gap-1.5 rounded-full bg-gold-primary px-4 py-2 text-xs font-medium text-[#0A0A0C] transition-colors hover:bg-gold-light disabled:opacity-60">
                          <RefreshCw className={`h-3.5 w-3.5 ${busy === p.id ? 'animate-spin' : ''}`} /> توليد رابط الدفع
                        </button>
                        <IconBtn title="إلغاء الفاتورة" onClick={() => cancelLink(p)}>
                          <Ban className="h-4 w-4" />
                        </IconBtn>
                      </>
                    )}
                    <IconBtn title="حذف" onClick={() => removeLink(p)}>
                      <Trash2 className="h-4 w-4 text-red-400/70" />
                    </IconBtn>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </main>
    </div>
  );
}

const inputCls =
  'w-full rounded-xl border border-white/10 bg-[#131318] px-4 py-3 text-sm text-white placeholder:text-white/25 transition-all focus:border-gold-primary/60 focus:outline-none focus:ring-4 focus:ring-gold-primary/10';

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <label className="block">
      <span className="mb-2 block text-xs text-white/55">{label}</span>
      {children}
    </label>
  );
}

function IconBtn({ title, onClick, children }: { title: string; onClick: () => void; children: React.ReactNode }) {
  return (
    <button
      title={title}
      onClick={onClick}
      className="rounded-full border border-white/10 p-2.5 text-white/55 transition-colors hover:bg-white/5 hover:text-white"
    >
      {children}
    </button>
  );
}

function StatCard({
  icon: Icon,
  label,
  value,
  sub,
  tone,
}: {
  icon: typeof Wallet;
  label: string;
  value: string;
  sub?: string;
  tone: 'gold' | 'emerald' | 'white';
}) {
  const toneCls =
    tone === 'gold'
      ? 'text-gold-light'
      : tone === 'emerald'
        ? 'text-emerald-300'
        : 'text-white';
  return (
    <div className="rounded-2xl border border-white/10 bg-gradient-to-b from-white/[0.05] to-white/[0.01] p-4">
      <div className="flex items-center gap-2 text-xs text-white/40">
        <Icon className="h-3.5 w-3.5" /> {label}
      </div>
      <p className={`mt-2 truncate text-lg font-semibold ${toneCls}`}>{value}</p>
      {sub && <p className="mt-0.5 text-[11px] text-white/30">{sub}</p>}
    </div>
  );
}
