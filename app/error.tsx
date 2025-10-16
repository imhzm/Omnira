'use client';

import { useEffect } from 'react';
import Link from 'next/link';
import { ArrowRight, RefreshCw } from 'lucide-react';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-beige-light via-white to-beige-light flex items-center justify-center px-4">
      <div className="max-w-2xl mx-auto text-center">
        <h1 className="text-9xl font-black mb-4">
          <span className="gold-shine-effect">خطأ</span>
        </h1>
        <h2 className="text-4xl font-bold mb-6 text-brown-dark">
          حدث خطأ ما
        </h2>
        <p className="text-xl text-brown-text mb-8">
          عذراً، حدث خطأ غير متوقع. يرجى المحاولة مرة أخرى
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={reset}
            className="btn-gold inline-flex items-center justify-center space-x-2 space-x-reverse px-8 py-4 text-lg"
          >
            <span>حاول مرة أخرى</span>
            <RefreshCw className="w-5 h-5" />
          </button>
          <Link
            href="/"
            className="inline-flex items-center justify-center space-x-2 space-x-reverse px-8 py-4 text-lg border-2 border-sage-primary text-sage-dark rounded-2xl hover:bg-sage-primary hover:text-white transition-all"
          >
            <span>العودة للرئيسية</span>
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </div>
  );
}
