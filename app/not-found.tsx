import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-beige-light via-white to-beige-light flex items-center justify-center px-4">
      <div className="max-w-2xl mx-auto text-center">
        <h1 className="text-9xl font-black mb-4">
          <span className="gold-shine-effect">404</span>
        </h1>
        <h2 className="text-4xl font-bold mb-6 text-brown-dark">
          الصفحة غير موجودة
        </h2>
        <p className="text-xl text-brown-text mb-8">
          عذراً، الصفحة التي تبحث عنها غير موجودة أو تم نقلها
        </p>
        <Link
          href="/"
          className="btn-gold inline-flex items-center space-x-2 space-x-reverse px-8 py-4 text-lg"
        >
          <span>العودة للرئيسية</span>
          <ArrowRight className="w-5 h-5" />
        </Link>
      </div>
    </div>
  );
}
