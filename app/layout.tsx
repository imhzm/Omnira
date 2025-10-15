import type { Metadata } from "next";
import { IBM_Plex_Sans_Arabic, Almarai, Inter } from "next/font/google";
import "./globals.css";
import { localBusinessSchema, organizationSchema } from "@/lib/schemas";
import WhatsAppButton from "@/components/layout/WhatsAppButton";

const ibmPlexArabic = IBM_Plex_Sans_Arabic({
  weight: ['200', '300', '400', '500', '600', '700'],
  subsets: ['arabic'],
  variable: '--font-ibm-plex',
  display: 'swap',
});

const almarai = Almarai({
  weight: ['300', '400', '700', '800'],
  subsets: ['arabic'],
  variable: '--font-almarai',
  display: 'swap',
});

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

export const metadata: Metadata = {
  title: {
    default: "OMNIRA - أومنيرا | خدمات صف السيارات الاحترافية في السعودية",
    template: "%s | OMNIRA - أومنيرا"
  },
  description: "أومنيرا - شركة سعودية رائدة في خدمات صف السيارات الاحترافية وإدارة المواقف الذكية. حلول متطورة للفنادق، المطاعم، الفعاليات والمنشآت التجارية في الرياض، جدة والدمام.",
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
    <html lang="ar" dir="rtl" className="dark">
      <head>
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
      <body className={`${ibmPlexArabic.variable} ${almarai.variable} ${inter.variable} antialiased`}>
        {children}
        <WhatsAppButton />
      </body>
    </html>
  );
}
