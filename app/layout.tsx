import type { Metadata } from "next";
import dynamic from "next/dynamic";
import localFont from "next/font/local";
import './globals.css';
import './favicon.css'; 
import "./performance.css";
import { localBusinessSchema, organizationSchema } from "@/lib/schemas";
import ScrollProgress from "@/components/ui/ScrollProgress";

const WhatsAppButton = dynamic(() => import("@/components/layout/WhatsAppButton"), { ssr: false });
const FloatingElements = dynamic(() => import("@/components/ui/FloatingElements"), { ssr: false });
const ScrollToTop = dynamic(() => import("@/components/ui/ScrollToTop"), { ssr: false });

const arabicFont = localFont({
  src: [
    { path: "../public/fonts/Cairo-Regular.ttf", weight: "400", style: "normal" },
    { path: "../public/fonts/Cairo-Medium.ttf", weight: "500", style: "normal" },
    { path: "../public/fonts/Cairo-SemiBold.ttf", weight: "600", style: "normal" },
    { path: "../public/fonts/Cairo-Bold.ttf", weight: "700", style: "normal" },
  ],
  variable: "--font-ibm-plex",
  display: "swap",
  fallback: ["Cairo", "system-ui", "Tahoma"],
});

const englishFont = localFont({
  src: [
    { path: "../public/fonts/Arial-Regular.ttf", weight: "400", style: "normal" },
    { path: "../public/fonts/Arial-Bold.ttf", weight: "700", style: "normal" },
  ],
  variable: "--font-inter",
  display: "swap",
  fallback: ["Arial", "system-ui", "Segoe UI"],
});

export const metadata: Metadata = {
  title: {
    default: "Omnira Valet | خدمات صف السيارات الاحترافية في السعودية",
    template: "%s | Omnira Valet"
  },
  description: "أومنيرا فاليه - شركة سعودية رائدة في خدمات صف السيارات الاحترافية وإدارة المواقف الذكية. حلول متطورة للفنادق، المطاعم، الفعاليات والمنشآت التجارية في الرياض، جدة والدمام.",
  icons: {
    icon: [
      { url: '/favicon.png', sizes: 'any' },
    ],
    apple: [
      { url: '/favicon.png', sizes: 'any', type: 'image/png' },
    ],
    shortcut: '/favicon.png',
  },
  metadataBase: new URL('https://omniravalet.com'),
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
  authors: [{ name: "Omnira Valet" }],
  creator: "Omnira Valet",
  publisher: "Omnira Valet",
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
    url: 'https://omniravalet.com',
    title: 'Omnira Valet | خدمات صف السيارات الاحترافية',
    description: 'شركة سعودية رائدة في خدمات صف السيارات الاحترافية',
    siteName: 'Omnira Valet',
    images: [
      {
        url: '/favicon.png',
        width: 800,
        height: 800,
        alt: 'Omnira Valet | خدمات صف السيارات الاحترافية في السعودية',
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Omnira Valet | خدمات صف السيارات الاحترافية',
    description: 'شركة سعودية رائدة في خدمات صف السيارات الاحترافية',
    images: ['/favicon.png'],
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
        {/* PWA Support */}
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#C68B48" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <link rel="apple-touch-icon" href="/icons/apple-touch-icon.png" />
        
        {/* Preconnect to external domains for faster loading */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://player.vimeo.com" />
        <link rel="preconnect" href="https://i.vimeocdn.com" />
        <link rel="dns-prefetch" href="https://vimeo.com" />
        <link rel="dns-prefetch" href="https://images.unsplash.com" />
        <link rel="dns-prefetch" href="https://images.pexels.com" />
        <link rel="dns-prefetch" href="https://cdn.pixabay.com" />
        
        {/* SEO enhancements */}
        <link rel="canonical" href="https://omniravalet.com" />
        <link rel="alternate" hrefLang="ar" href="https://omniravalet.com" />
        <link rel="alternate" hrefLang="x-default" href="https://omniravalet.com" />
        
        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(localBusinessSchema),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema),
          }}
        />
        
        {/* Circular Favicon Script */}
        <script src="/circular-favicon.js" async defer />
      </head>
      <body className={`${arabicFont.variable} ${englishFont.variable} antialiased`}>
        <ScrollProgress />
        <FloatingElements />
        {children}
        <WhatsAppButton />
        <ScrollToTop />
      </body>
    </html>
  );
}
