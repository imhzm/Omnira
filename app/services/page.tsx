import { Metadata } from 'next';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import ServicesHero from '@/components/services/ServicesHero';
import ServicesGrid from '@/components/services/ServicesGrid';

export const metadata: Metadata = {
  title: 'خدماتنا المتميزة | OMNIRA - 8 حلول احترافية لإدارة وصف السيارات في السعودية',
  description: 'اكتشف خدماتنا الشاملة: إدارة وتشغيل المواقف، الفاليه باركينج الفاخر، التقنيات الذكية (ANPR, IoT, AI)، المنظمين المحترفين، الاستشارات الهندسية، جولف كار، خدمات مساندة متكاملة، وغسيل السيارات. حلول مبتكرة للفنادق، المطاعم، المراكز التجارية، والفعاليات في جميع مدن المملكة.',
  keywords: [
    'خدمات صف السيارات',
    'خدمات الفاليه باركينج',
    'إدارة مواقف السيارات',
    'valet parking services',
    'خدمات مواقف احترافية',
    'تقنيات صف السيارات الذكية',
    'منظمي مواقف السيارات',
    'استشارات مواقف السيارات',
    'خدمة جولف كار',
    'غسيل سيارات احترافي',
    'خدمات مساندة للمواقف',
    'حلول مواقف متكاملة',
    'إدارة مواقف تجارية',
    'نظام صف السيارات',
    'parking management services Saudi Arabia',
  ],
  authors: [{ name: 'OMNIRA Company Holding' }],
  metadataBase: new URL('https://omnira.sa'),
  alternates: {
    canonical: '/services',
  },
  openGraph: {
    title: 'خدماتنا | OMNIRA - 8 حلول احترافية لصف السيارات',
    description: 'حلول شاملة: الفاليه باركينج، إدارة المواقف، التقنيات الذكية، والمزيد لجميع احتياجاتك',
    url: 'https://omnira.sa/services',
    siteName: 'OMNIRA',
    locale: 'ar_SA',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'خدمات OMNIRA - حلول صف السيارات الشاملة',
    description: '8 خدمات احترافية لإدارة وصف السيارات في السعودية',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      <ServicesHero />
      <ServicesGrid />
      <Footer />
    </main>
  );
}
