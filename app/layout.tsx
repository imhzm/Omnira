import type { Metadata } from "next";
import { Tajawal, Cairo, Inter } from "next/font/google";
import "./globals.css";
import { localBusinessSchema, organizationSchema } from "@/lib/schemas";

const tajawal = Tajawal({
  weight: ['200', '300', '400', '500', '700', '800', '900'],
  subsets: ['arabic'],
  variable: '--font-tajawal',
  display: 'swap',
});

const cairo = Cairo({
  weight: ['200', '300', '400', '500', '600', '700', '800', '900'],
  subsets: ['arabic'],
  variable: '--font-cairo',
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
  description: "أومنيرا - شركة سعودية رائدة في خدمات صف السيارات الاحترافية (Valet Parking). حلول ذكية للفنادق، المطاعم، الفعاليات والمنشآت التجارية في الرياض، جدة والدمام.",
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
    images: [{
      url: '/og-image.jpg',
      width: 1200,
      height: 630,
      alt: 'OMNIRA Valet Parking Services',
    }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'OMNIRA - أومنيرا | خدمات صف السيارات الاحترافية',
    description: 'شركة سعودية رائدة في خدمات صف السيارات الاحترافية',
    images: ['/og-image.jpg'],
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
      <body className={`${tajawal.variable} ${cairo.variable} ${inter.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
