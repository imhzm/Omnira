import { Metadata } from 'next';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import LocationsHero from '@/components/locations/LocationsHero';
import LocationsGrid from '@/components/locations/LocationsGrid';

export const metadata: Metadata = {
  title: 'المدن التي نخدمها | OMNIRA - خدمات فاليه باركينج في 150+ مدينة سعودية',
  description: 'خدمات صف السيارات والفاليه باركينج من أومنيرا متوفرة في أكثر من 150 مدينة سعودية. خدماتنا تغطي الرياض، جدة، الدمام، مكة المكرمة، المدينة المنورة، الخبر، الطائف، تبوك، أبها، وجميع مدن المملكة. فريق محترف متواجد في كل منطقة.',
  keywords: [
    'مدن السعودية',
    'خدمات صف سيارات الرياض',
    'فاليه جدة',
    'صف سيارات الدمام',
    'valet parking Riyadh',
    'مواقف الخبر',
    'فاليه الطائف',
    'صف سيارات مكة',
    'فاليه المدينة',
    'خدمات المدن السعودية',
    'صف سيارات القطيف',
    'فاليه الجبيل',
    'مواقف أبها',
    'صف سيارات تبوك',
    'فاليه باركينج السعودية',
  ],
  authors: [{ name: 'OMNIRA Company Holding' }],
  metadataBase: new URL('https://omnira.sa'),
  alternates: {
    canonical: '/locations',
  },
  openGraph: {
    title: 'المدن التي نخدمها | OMNIRA - تغطية شاملة لـ 150+ مدينة سعودية',
    description: 'خدمات صف السيارات في جميع مدن السعودية: الرياض، جدة، الدمام، مكة، المدينة، الخبر، الطائف، وأكثر',
    url: 'https://omnira.sa/locations',
    siteName: 'OMNIRA',
    images: [{
      url: 'https://omnira.sa/og-locations.jpg',
      width: 1200,
      height: 630,
      alt: 'خدمات أومنيرا في جميع مدن السعودية',
    }],
    locale: 'ar_SA',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'المدن التي نخدمها | OMNIRA',
    description: '150+ مدينة سعودية - خدمات صف السيارات والفاليه في جميع أنحاء المملكة',
    images: ['https://omnira.sa/og-locations.jpg'],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function LocationsPage() {
  return (
    <main className="min-h-screen bg-beige-primary">
      <Header />
      <LocationsHero />
      <LocationsGrid />
      <Footer />
    </main>
  );
}
