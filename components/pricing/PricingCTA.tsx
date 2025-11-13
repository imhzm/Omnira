'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ArrowLeft, ChevronLeft, SendHorizonal } from 'lucide-react';

export default function PricingCTA() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setLoading(true);
    
    // محاكاة الإرسال (سيتم استبداله بالكود الحقيقي للإرسال)
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      setEmail('');
    }, 1500);
  };

  return (
    <section className="py-20 bg-gradient-to-r from-black-primary to-gray-900">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            باقة مخصصة لاحتياجاتك
          </h2>
          <p className="text-xl text-gray-300 mb-10">
            لا تجد الباقة المناسبة لاحتياجاتك؟ دعنا نصمم لك باقة مخصصة تناسب متطلبات منشأتك بالضبط.
          </p>

          <div className="flex flex-wrap gap-6 justify-center items-center mb-12">
            <Link 
              href="/contact?source=pricing"
              className="px-8 py-4 rounded-lg bg-gold-primary text-white font-bold text-lg hover:bg-gold-dark transition duration-300 flex items-center gap-2"
            >
              <span>احصل على عرض سعر مخصص</span>
              <ChevronLeft className="w-5 h-5" />
            </Link>
            <a
              href="tel:+966500000000"
              className="px-8 py-4 rounded-lg border-2 border-gold-primary text-gold-primary font-bold text-lg hover:bg-gold-primary hover:text-white transition-all duration-300"
            >
              اتصل بنا مباشرة
            </a>
          </div>

          <div className="mt-12 p-8 bg-white/10 backdrop-blur-sm rounded-xl">
            <h3 className="text-2xl font-bold text-white mb-4">ابقَ على اطلاع بأحدث العروض</h3>
            <p className="text-gray-300 mb-6">
              سجل بريدك الإلكتروني للحصول على آخر العروض والخصومات الخاصة
            </p>
            
            {submitted ? (
              <div className="p-4 bg-green-600/20 border border-green-500 rounded-lg text-white">
                شكراً لتسجيلك! سنتواصل معك قريباً بأحدث العروض.
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="البريد الإلكتروني"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="flex-1 px-4 py-3 rounded-lg bg-white/20 text-white border border-white/30 focus:outline-none focus:border-gold-primary placeholder-gray-400"
                  required
                />
                <button
                  type="submit"
                  disabled={loading}
                  className="px-6 py-3 rounded-lg bg-gold-primary text-white font-bold hover:bg-gold-dark transition duration-300 flex items-center justify-center gap-2"
                >
                  {loading ? (
                    <span className="inline-block w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
                  ) : (
                    <>
                      <span>اشتراك</span>
                      <SendHorizonal className="w-4 h-4" />
                    </>
                  )}
                </button>
              </form>
            )}
          </div>

          <div className="mt-12">
            <h4 className="text-xl font-bold text-white mb-2">تحتاج إلى مساعدة في اختيار الباقة المناسبة؟</h4>
            <p className="text-gray-400 mb-6">
              فريق خدمة العملاء لدينا متاح على مدار الساعة للإجابة على جميع استفساراتك
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center text-gold-primary hover:text-gold-light"
            >
              <span className="underline">تواصل مع فريق المبيعات</span>
              <ArrowLeft className="w-4 h-4 ms-1" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
