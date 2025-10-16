import { Metadata } from 'next';
import { siteConfig } from './seo-config';

interface PageSEOProps {
  title: string;
  description: string;
  keywords?: string[];
  path: string;
  image?: string;
  type?: 'website' | 'article';
  publishedTime?: string;
  modifiedTime?: string;
  noindex?: boolean;
}

export function generateMetadata({
  title,
  description,
  keywords = [],
  path,
  image,
  type = 'website',
  publishedTime,
  modifiedTime,
  noindex = false,
}: PageSEOProps): Metadata {
  const url = `${siteConfig.url}${path}`;
  const ogImage = image || siteConfig.ogImage;

  // Default keywords for all pages
  const defaultKeywords = [
    'صف سيارات',
    'فاليه باركينج',
    'valet parking',
    'أومنيرا',
    'OMNIRA',
    'السعودية',
    'الرياض',
    'خدمات صف السيارات',
  ];

  const allKeywords = [...new Set([...keywords, ...defaultKeywords])];

  return {
    title: `${title} | OMNIRA - أومنيرا`,
    description,
    keywords: allKeywords,
    authors: [{ name: siteConfig.creator, url: siteConfig.url }],
    creator: siteConfig.creator,
    publisher: siteConfig.creator,
    formatDetection: {
      email: false,
      address: false,
      telephone: false,
    },
    metadataBase: new URL(siteConfig.url),
    alternates: {
      canonical: url,
      languages: {
        'ar-SA': url,
        'en-US': `${url}/en`,
      },
    },
    openGraph: {
      title,
      description,
      url,
      siteName: siteConfig.name,
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
      locale: 'ar_SA',
      type,
      ...(publishedTime && { publishedTime }),
      ...(modifiedTime && { modifiedTime }),
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [ogImage],
      creator: '@omnira_sa',
      site: '@omnira_sa',
    },
    robots: noindex
      ? {
          index: false,
          follow: false,
        }
      : {
          index: true,
          follow: true,
          nocache: false,
          googleBot: {
            index: true,
            follow: true,
            noimageindex: false,
            'max-video-preview': -1,
            'max-image-preview': 'large',
            'max-snippet': -1,
          },
        },
    verification: {
      google: 'your-google-verification-code',
      yandex: 'your-yandex-verification-code',
      other: {
        'msvalidate.01': 'your-bing-verification-code',
      },
    },
    category: 'business',
    classification: 'Valet Parking Services',
  };
}

// SEO Metadata for each page
export const pageSEO = {
  home: {
    title: 'خدمات صف السيارات الاحترافية والإدارة الذكية للمواقف',
    description:
      'شركة سعودية رائدة في خدمات الفاليه باركينج (Valet Parking) والإدارة الذكية لمواقف السيارات. نساهم في تحقيق رؤية المملكة 2030 من خلال حلول متطورة لقطاع الضيافة والسياحة. نخدم الفنادق، المطاعم، المراكز التجارية، والفعاليات في جميع مدن المملكة.',
    keywords: [
      'فاليه باركينج الرياض',
      'صف سيارات جدة',
      'إدارة مواقف السيارات',
      'خدمات صف السيارات للفنادق',
      'صف سيارات للمطاعم',
      'صف سيارات للفعاليات',
      'رؤية 2030',
      'قطاع الضيافة',
    ],
  },
  about: {
    title: 'من نحن - شركة أومنيرا لخدمات صف السيارات',
    description:
      'تعرف على أومنيرا - شركة سعودية رائدة في خدمات صف السيارات الاحترافية. خبرة طويلة، فريق محترف، وحلول مبتكرة لقطاع الضيافة والفعاليات. نساهم في تحقيق رؤية 2030.',
    keywords: [
      'عن أومنيرا',
      'شركة صف سيارات سعودية',
      'فريق أومنيرا',
      'خبرة في صف السيارات',
      'رؤية 2030',
      'شركة فاليه باركينج',
    ],
  },
  services: {
    title: 'خدماتنا المتميزة - حلول شاملة لصف وإدارة السيارات',
    description:
      'اكتشف خدمات أومنيرا الشاملة: الفاليه باركينج، إدارة المواقف، التقنيات المتقدمة، والمنظمين المحترفين. حلول متكاملة للفنادق، المطاعم، المراكز التجارية، المستشفيات، والفعاليات.',
    keywords: [
      'خدمات الفاليه باركينج',
      'إدارة المواقف',
      'تقنيات صف السيارات',
      'منظمين محترفين',
      'استشارات مواقف السيارات',
      'خدمة VIP',
    ],
  },
  pricing: {
    title: 'الأسعار والباقات - خطط مرنة تناسب احتياجاتك',
    description:
      'باقات أومنيرا المرنة لخدمات صف السيارات: أساسية، احترافية، ومتقدمة. أسعار تنافسية، جودة عالية، ودعم متواصل. اختر الباقة المناسبة لمنشأتك.',
    keywords: [
      'أسعار صف السيارات',
      'باقات الفاليه باركينج',
      'تكلفة خدمات المواقف',
      'عروض صف السيارات',
      'باقات احترافية',
    ],
  },
  contact: {
    title: 'اتصل بنا - نحن هنا للإجابة على استفساراتك',
    description:
      'تواصل مع فريق أومنيرا للحصول على استشارة مجانية أو حجز خدماتنا. متاحون 24/7 للرد على جميع استفساراتك. اتصل بنا الآن واحصل على عرض سعر مخصص.',
    keywords: [
      'تواصل مع أومنيرا',
      'حجز خدمة صف سيارات',
      'استشارة مجانية',
      'رقم أومنيرا',
      'عنوان أومنيرا',
      'البريد الإلكتروني',
    ],
  },
  locations: {
    title: 'المدن التي نخدمها - تغطية شاملة في المملكة',
    description:
      'خدمات أومنيرا متوفرة في جميع مدن المملكة: الرياض، جدة، الدمام، مكة المكرمة، المدينة المنورة، والطائف. تغطية شاملة وخدمة احترافية في كل مكان.',
    keywords: [
      'صف سيارات الرياض',
      'فاليه باركينج جدة',
      'صف سيارات الدمام',
      'خدمات مكة المكرمة',
      'المدينة المنورة',
      'مدن المملكة',
    ],
  },
};
