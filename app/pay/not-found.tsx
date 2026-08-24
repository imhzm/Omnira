import Link from 'next/link';

export default function PayNotFound() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-[#0A0A0C] px-6">
      <div className="text-center">
        <h1 className="text-2xl font-medium text-white">رابط الدفع غير موجود</h1>
        <p className="mt-3 text-sm text-white/50">
          تأكد من الرابط أو تواصل مع فريق أومنيرا فاليه للحصول على رابط دفع جديد.
        </p>
        <Link
          href="/"
          className="mt-8 inline-block rounded-full bg-gold-primary px-8 py-3 text-sm font-medium text-[#0A0A0C] transition-colors hover:bg-gold-light"
        >
          العودة للرئيسية
        </Link>
      </div>
    </main>
  );
}
