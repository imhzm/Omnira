import Link from 'next/link';
import { ArrowRight, Search, Home, Phone } from 'lucide-react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'الصفحة غير موجودة | أومنيرا فاليه - لم يتم العثور على الصفحة المطلوبة',
  description: 'لم يتم العثور على الصفحة التي تبحث عنها. يمكنك العودة للصفحة الرئيسية أو استعراض خدماتنا في صف السيارات والفاليه باركينج وإدارة المواقف.',
  robots: {
    index: false,
    follow: true,
  }
};

export default function NotFound() {
  // الصفحات الرئيسية المقترحة
  const suggestedPages = [
    { title: 'الرئيسية', href: '/', icon: <Home className="w-5 h-5" /> },
    { title: 'خدماتنا', href: '/services', icon: <Search className="w-5 h-5" /> },
    { title: 'اتصل بنا', href: '/contact', icon: <Phone className="w-5 h-5" /> },
  ];

  // الخدمات المشهورة
  const popularServices = [
    { title: 'خدمة الفاليه باركينج', href: '/services/valet-parking' },
    { title: 'إدارة المواقف', href: '/services/parking-management' },
    { title: 'خدمات الفنادق', href: '/services/hotels' },
  ];

  return (
    <>
      <Header />
      
      <div className="min-h-[70vh] py-20 bg-gradient-to-b from-beige-light via-[#0E0E11] to-beige-light flex items-center justify-center px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-9xl font-black mb-4">
            <span className="gold-shine-effect">404</span>
          </h1>
          <h2 className="text-4xl font-bold mb-6 text-brown-dark">
            الصفحة غير موجودة
          </h2>
          <p className="text-xl text-brown-text mb-8">
            عذراً، الصفحة التي تبحث عنها غير موجودة أو تم نقلها. يمكنك تجربة أحد الروابط التالية.
          </p>
          
          {/* الأزرار الرئيسية */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {suggestedPages.map((page) => (
              <Link
                key={page.href}
                href={page.href}
                className="btn-gold flex items-center space-x-2 space-x-reverse px-6 py-3 text-base"
              >
                {page.icon}
                <span>{page.title}</span>
              </Link>
            ))}
          </div>
          
          {/* الخدمات الشائعة */}
          <div className="mt-8">
            <h3 className="text-lg font-bold text-brown-dark mb-4">خدماتنا الشائعة:</h3>
            <div className="flex flex-wrap justify-center gap-3">
              {popularServices.map((service) => (
                <Link
                  key={service.href}
                  href={service.href}
                  className="text-brown-text hover:text-gold-primary underline underline-offset-4 mx-2"
                >
                  {service.title}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </>
  );
}
