import { Metadata } from 'next';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import PricingHero from '@/components/pricing/PricingHero';
import PricingPlans from '@/components/pricing/PricingPlans';
import PricingFAQ from '@/components/pricing/PricingFAQ';

export const metadata: Metadata = {
  title: 'الأسعار والباقات | OMNIRA - باقات صف السيارات والفاليه باركينج بأسعار تنافسية',
  description: 'أسعار وباقات خدمات صف السيارات والفاليه باركينج من أومنيرا في السعودية. باقات مرنة للفعاليات، الفنادق، المطاعم، المراكز التجارية، والشركات. خدمة VIP، باقات شهرية، عقود سنوية، وحلول مخصصة. أسعار تنافسية، جودة عالية، فريق محترف. اطلب عرض سعر مجاني الآن!',
  keywords: [
    'أسعار صف السيارات',
    'باقات الفاليه',
    'تكلفة خدمة valet',
    'أسعار تنافسية',
    'valet parking prices',
    'باقات صف السيارات',
    'أسعار الفاليه باركينج',
    'عروض OMNIRA',
    'باقات شهرية',
    'عقود سنوية',
    'pricing packages',
    'أسعار فاليه',
    'تكلفة صف سيارات',
    'باقات VIP',
    'أسعار خدمات المواقف',
  ],
  authors: [{ name: 'OMNIRA Company Holding' }],
  metadataBase: new URL('https://omnira.sa'),
  alternates: {
    canonical: '/pricing',
  },
  openGraph: {
    title: 'الأسعار والباقات | OMNIRA - باقات مرنة بأسعار تنافسية',
    description: 'باقات صف السيارات والفاليه: شهرية، سنوية، VIP، وحلول مخصصة. أسعار تنافسية وجودة عالية',
    url: 'https://omnira.sa/pricing',
    siteName: 'OMNIRA',
    images: [{
      url: 'https://omnira.sa/og-pricing.jpg',
      width: 1200,
      height: 630,
      alt: 'أسعار وباقات خدمات أومنيرا',
    }],
    locale: 'ar_SA',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'الأسعار والباقات | OMNIRA',
    description: 'باقات مرنة للفاليه وصف السيارات - أسعار تنافسية وجودة عالية',
    images: ['https://omnira.sa/og-pricing.jpg'],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function PricingPage() {
  return (
    <main className="min-h-screen bg-black-primary">
      <Header />
      <PricingHero />
      <PricingPlans />
      <PricingFAQ />
      <Footer />
    </main>
  );
}
