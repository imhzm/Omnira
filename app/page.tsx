import { Metadata } from 'next';
import dynamic from 'next/dynamic';
import HeroSection from "@/components/home/HeroSection";
import Header from "@/components/layout/Header";
import { jsonLdWebsite, jsonLdOrganization } from '@/lib/seo-config';

const ServicesSection = dynamic(() => import("@/components/home/ServicesSection"), { ssr: true });
const WhyChooseUs = dynamic(() => import("@/components/home/WhyChooseUs"), { ssr: true });
const FeaturesSection = dynamic(() => import("@/components/home/FeaturesSection"), { ssr: true });
const HowItWorksSection = dynamic(() => import("@/components/home/HowItWorksSection"), { ssr: true });
const Testimonials = dynamic(() => import("@/components/home/Testimonials"), { ssr: true });
const CTASection = dynamic(() => import("@/components/home/CTASection"), { ssr: true });
const Footer = dynamic(() => import("@/components/layout/Footer"), { ssr: true });

export const metadata: Metadata = {
  title: 'OMNIRA - أومنيرا | خدمات صف السيارات الاحترافية والإدارة الذكية للمواقف في السعودية',
  description: 'شركة سعودية رائدة في خدمات الفاليه باركينج (Valet Parking) والإدارة الذكية لمواقف السيارات. نساهم في تحقيق رؤية المملكة 2030 من خلال حلول متطورة لقطاع الضيافة والسياحة. نخدم الفنادق، المطاعم، المراكز التجارية، والفعاليات في جميع مدن المملكة. احجز الآن!',
  keywords: [
    'صف سيارات',
    'فاليه باركينج',
    'valet parking',
    'إدارة مواقف السيارات',
    'خدمات صف السيارات السعودية',
    'صف سيارات احترافي',
    'فاليه باركينج الرياض',
    'صف سيارات جدة',
    'إدارة المواقف',
    'خدمات الفاليه',
    'صف سيارات للفنادق',
    'صف سيارات للمطاعم',
    'صف سيارات للفعاليات',
    'أومنيرا',
    'OMNIRA',
    'حلول مواقف السيارات',
    'تقنيات صف السيارات',
    'نظام إدارة المواقف',
    'رؤية المملكة 2030',
    'قطاع الضيافة والسياحة',
  ],
  authors: [{ name: 'OMNIRA Company Holding', url: 'https://omnira.sa' }],
  creator: 'OMNIRA Company Holding',
  publisher: 'OMNIRA Company Holding',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://omnira.sa'),
  alternates: {
    canonical: '/',
    languages: {
      'ar-SA': '/',
      'en-US': '/en',
    },
  },
  openGraph: {
    title: 'OMNIRA - أومنيرا | خدمات صف السيارات الاحترافية في السعودية',
    description: 'شركة سعودية رائدة في الفاليه باركينج وإدارة المواقف. حلول ذكية للفنادق، المطاعم، والمراكز التجارية في جميع مدن المملكة.',
    url: 'https://omnira.sa',
    siteName: 'OMNIRA',
    images: [
      {
        url: 'https://omnira.sa/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'OMNIRA - خدمات صف السيارات الاحترافية',
      },
    ],
    locale: 'ar_SA',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'OMNIRA - أومنيرا | خدمات صف السيارات الاحترافية',
    description: 'شركة سعودية رائدة في الفاليه باركينج وإدارة المواقف الذكية',
    images: ['https://omnira.sa/og-image.jpg'],
    creator: '@omnira_sa',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
    yandex: 'your-yandex-verification-code',
  },
};

export default function Home() {
  const combinedSchema = {
    '@context': 'https://schema.org',
    '@graph': [jsonLdWebsite, jsonLdOrganization],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(combinedSchema) }}
      />
      <main className="min-h-screen bg-beige-primary">
        <Header />
        <HeroSection />
        <ServicesSection />
        <WhyChooseUs />
        <FeaturesSection />
        <HowItWorksSection />
        <Testimonials />
        <CTASection />
        <Footer />
      </main>
    </>
  );
}
