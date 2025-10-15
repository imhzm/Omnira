import { Metadata } from 'next';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import AboutHero from '@/components/about/AboutHero';
import AboutContent from '@/components/about/AboutContent';
import { generateArticleSchema } from '@/lib/seo-config';

export const metadata: Metadata = {
  title: 'من نحن - قصة أومنيرا | OMNIRA - شركة سعودية رائدة في خدمات صف السيارات الاحترافية',
  description: 'تعرف على قصة أومنيرا OMNIRA، الشركة السعودية الرائدة في خدمات الفاليه باركينج وإدارة مواقف السيارات منذ 2025. رؤيتنا: أن نكون الخيار الأول في المملكة. رسالتنا: تقديم خدمات استثنائية بأحدث التقنيات. قيمنا: الاحترافية، الأمانة، التميز، والابتكار.',
  keywords: [
    'من نحن أومنيرا',
    'OMNIRA company',
    'شركة صف سيارات سعودية',
    'قصة نجاح أومنيرا',
    'رؤية ورسالة OMNIRA',
    'فريق أومنيرا',
    'قيم الشركة',
    'تاريخ التأسيس',
    'السجل التجاري 7051975600',
    'شركة فاليه باركينج',
    'إدارة مواقف احترافية',
    'خدمات صف سيارات متطورة',
    'شركة سعودية 2025',
    'about us valet parking',
    'parking management company Saudi Arabia',
  ],
  authors: [{ name: 'OMNIRA Company Holding', url: 'https://omnira.sa' }],
  creator: 'OMNIRA Company Holding',
  publisher: 'OMNIRA Company Holding',
  metadataBase: new URL('https://omnira.sa'),
  alternates: {
    canonical: '/about',
    languages: {
      'ar-SA': '/about',
      'en-US': '/en/about',
    },
  },
  openGraph: {
    title: 'من نحن - أومنيرا | قصة نجاح سعودية في صف السيارات',
    description: 'شركة سعودية رائدة في الفاليه باركينج وإدارة المواقف منذ 2025. تعرف على قصتنا، رؤيتنا، قيمنا، وفريقنا المحترف.',
    url: 'https://omnira.sa/about',
    siteName: 'OMNIRA',
    images: [
      {
        url: 'https://omnira.sa/og-about.jpg',
        width: 1200,
        height: 630,
        alt: 'فريق عمل أومنيرا المحترف',
      },
    ],
    locale: 'ar_SA',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'من نحن - أومنيرا | شركة سعودية رائدة في صف السيارات',
    description: 'قصة نجاح سعودية في خدمات الفاليه باركينج وإدارة المواقف',
    images: ['https://omnira.sa/og-about.jpg'],
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
};

export default function AboutPage() {
  const articleSchema = generateArticleSchema({
    title: 'من نحن - قصة أومنيرا',
    description: 'تعرف على أومنيرا، الشركة السعودية الرائدة في خدمات صف السيارات الاحترافية',
    url: '/about',
    image: 'https://omnira.sa/og-about.jpg',
    datePublished: '2025-10-08',
    dateModified: new Date().toISOString(),
  });

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <main className="min-h-screen bg-black-primary">
        <Header />
        <AboutHero />
        <AboutContent />
        <Footer />
      </main>
    </>
  );
}
