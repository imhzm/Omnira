import type { Metadata } from "next";
import dynamic from "next/dynamic";
import { IBM_Plex_Sans_Arabic, Almarai } from "next/font/google";
import "./globals.css";
import "./performance.css";
import { localBusinessSchema, organizationSchema } from "@/lib/schemas";
import ScrollProgress from "@/components/ui/ScrollProgress";

const WhatsAppButton = dynamic(() => import("@/components/layout/WhatsAppButton"), { ssr: false });
const FloatingElements = dynamic(() => import("@/components/ui/FloatingElements"), { ssr: false });
const ScrollToTop = dynamic(() => import("@/components/ui/ScrollToTop"), { ssr: false });

const ibmPlexArabic = IBM_Plex_Sans_Arabic({
  weight: ['400', '700'],
  subsets: ['arabic'],
  variable: '--font-ibm-plex',
  display: 'swap',
  fallback: ['system-ui', 'arial'],
});

const almarai = Almarai({
  weight: ['400'],
  subsets: ['arabic'],
  variable: '--font-almarai',
  display: 'swap',
  fallback: ['system-ui', 'arial'],
});

export const metadata: Metadata = {
  title: {
    default: "OMNIRA - أومنيرا | خدمات صف السيارات الاحترافية في السعودية",
    template: "%s | OMNIRA - أومنيرا"
  },
  description: "أومنيرا - شركة سعودية رائدة في خدمات صف السيارات الاحترافية وإدارة المواقف الذكية. حلول متطورة للفنادق، المطاعم، الفعاليات والمنشآت التجارية في الرياض، جدة والدمام.",
  icons: {
    icon: [
      { url: '/logo.png', sizes: 'any' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
    shortcut: '/logo.png',
  },
  keywords: [
    "صف السيارات",
    "خدمات فاليه",
    "valet parking",
    "صف سيارات الرياض",
    "صف سيارات جدة",
    "أومنيرا",
    "OMNIRA",
    "خدمات صف السيارات السعودية",
    "صف السيارات للفعاليات",
    "صف السيارات للفنادق"
  ],
  authors: [{ name: "OMNIRA Company Holding" }],
  creator: "OMNIRA Company Holding",
  publisher: "OMNIRA Company Holding",
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
  openGraph: {
    type: 'website',
    locale: 'ar_SA',
    url: 'https://omnira.sa',
    title: 'OMNIRA - أومنيرا | خدمات صف السيارات الاحترافية',
    description: 'شركة سعودية رائدة في خدمات صف السيارات الاحترافية',
    siteName: 'OMNIRA',
  },
  twitter: {
    card: 'summary',
    title: 'OMNIRA - أومنيرا | خدمات صف السيارات الاحترافية',
    description: 'شركة سعودية رائدة في خدمات صف السيارات الاحترافية',
  },
  verification: {
    google: 'your-google-verification-code',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar" dir="rtl">
      <head>
        {/* Preconnect to external domains for faster loading */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://images.unsplash.com" />
        <link rel="dns-prefetch" href="https://images.pexels.com" />
        <link rel="dns-prefetch" href="https://cdn.pixabay.com" />
        {/* Local Business Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(localBusinessSchema),
          }}
        />
        {/* Organization Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema),
          }}
        />
      </head>
      <body className={`${ibmPlexArabic.variable} ${almarai.variable} antialiased`}>
        <ScrollProgress />
        <FloatingElements />
        {children}
        <WhatsAppButton />
        <ScrollToTop />
      </body>
    </html>
  );
}
