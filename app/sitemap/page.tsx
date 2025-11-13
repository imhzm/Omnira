import { Metadata } from 'next';
import Link from 'next/link';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

export const metadata: Metadata = {
  title: 'خريطة الموقع | أومنيرا - تصفح كافة صفحات وخدمات أومنيرا',
  description: 'تصفح خريطة موقع أومنيرا وابحث بسهولة عن الخدمات والصفحات التي تحتاجها. خدمات فاليه باركينج، إدارة المواقف، وحلول صف السيارات المتكاملة في الرياض، جدة، والدمام.',
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: '/sitemap',
  },
};

// بيانات خريطة الموقع
const sitemapData = {
  mainPages: [
    { name: 'الرئيسية', url: '/' },
    { name: 'من نحن', url: '/about' },
    { name: 'الخدمات', url: '/services' },
    { name: 'الباقات والأسعار', url: '/pricing' },
    { name: 'المواقع', url: '/locations' },
    { name: 'اتصل بنا', url: '/contact' },
  ],
  services: [
    { name: 'خدمة الفاليه باركينج', url: '/services/valet-parking' },
    { name: 'إدارة وتشغيل المواقف', url: '/services/parking-management' },
    { name: 'التقنيات المتقدمة', url: '/services/advanced-technology' },
    { name: 'المنظمين المحترفين', url: '/services/professional-organizers' },
    { name: 'الاستشارات الهندسية', url: '/services/consultation' },
    { name: 'خدمة الجولف كار', url: '/services/golf-cart' },
    { name: 'الخدمات المساندة', url: '/services/support-services' },
    { name: 'خدمة غسيل السيارات', url: '/services/car-wash' },
  ],
  clientSectors: [
    { name: 'خدمات الفنادق', url: '/services/hotels' },
    { name: 'خدمات المطاعم', url: '/services/restaurants' },
    { name: 'خدمات المولات', url: '/services/malls' },
    { name: 'خدمات الفعاليات', url: '/services/events' },
    { name: 'خدمات المستشفيات', url: '/services/hospitals' },
    { name: 'خدمات الشركات', url: '/services/corporate' },
    { name: 'خدمات VIP', url: '/services/vip' },
  ],
  locations: [
    { name: 'الرياض', url: '/locations/riyadh' },
    { name: 'جدة', url: '/locations/jeddah' },
    { name: 'الدمام', url: '/locations/dammam' },
    { name: 'مكة المكرمة', url: '/locations/makkah' },
    { name: 'المدينة المنورة', url: '/locations/madinah' },
  ],
};

export default function SitemapPage() {
  return (
    <>
      <main className="min-h-screen bg-white">
        <Header />
        
        <section className="py-12 sm:py-16 lg:py-20 px-4 container mx-auto">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-3xl sm:text-4xl font-bold mb-8 text-black-primary text-center">
              خريطة الموقع
            </h1>
            <p className="text-lg text-gray-600 mb-12 text-center">
              استكشف جميع صفحات وخدمات أومنيرا من خلال هذه الخريطة التفاعلية للموقع
            </p>
            
            {/* الصفحات الرئيسية */}
            <div className="mb-12">
              <h2 className="text-2xl font-semibold mb-6 text-gold-primary border-r-4 border-gold-primary pr-3">
                الصفحات الرئيسية
              </h2>
              <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {sitemapData.mainPages.map((page) => (
                  <li key={page.url} className="border border-gray-200 rounded-lg hover:shadow-md transition duration-300">
                    <Link href={page.url} className="block p-4 text-black-primary hover:text-gold-primary">
                      {page.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            
            {/* الخدمات */}
            <div className="mb-12">
              <h2 className="text-2xl font-semibold mb-6 text-gold-primary border-r-4 border-gold-primary pr-3">
                خدماتنا
              </h2>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {sitemapData.services.map((page) => (
                  <li key={page.url} className="border border-gray-200 rounded-lg hover:shadow-md transition duration-300">
                    <Link href={page.url} className="block p-4 text-black-primary hover:text-gold-primary">
                      {page.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            
            {/* قطاعات العملاء */}
            <div className="mb-12">
              <h2 className="text-2xl font-semibold mb-6 text-gold-primary border-r-4 border-gold-primary pr-3">
                قطاعات العملاء
              </h2>
              <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {sitemapData.clientSectors.map((page) => (
                  <li key={page.url} className="border border-gray-200 rounded-lg hover:shadow-md transition duration-300">
                    <Link href={page.url} className="block p-4 text-black-primary hover:text-gold-primary">
                      {page.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            
            {/* المواقع */}
            <div className="mb-12">
              <h2 className="text-2xl font-semibold mb-6 text-gold-primary border-r-4 border-gold-primary pr-3">
                مدن المملكة
              </h2>
              <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {sitemapData.locations.map((page) => (
                  <li key={page.url} className="border border-gray-200 rounded-lg hover:shadow-md transition duration-300">
                    <Link href={page.url} className="block p-4 text-black-primary hover:text-gold-primary">
                      {page.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            
          </div>
        </section>
        
        <Footer />
      </main>
    </>
  );
}
