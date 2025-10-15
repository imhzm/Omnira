// Local Business Schema للسعودية
export const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  '@id': 'https://omnira.sa/#business',
  name: 'OMNIRA - أومنيرا للخدمات',
  alternateName: 'OMNIRA Company Holding',
  description: 'شركة أومنيرا الرائدة في تقديم خدمات الفاليه باركينج وإدارة مواقف السيارات في المملكة العربية السعودية. نوفر حلولاً احترافية للفنادق، المطاعم، الفعاليات، والمنشآت التجارية.',
  
  url: 'https://omnira.sa',
  logo: 'https://omnira.sa/logo.png',
  image: [
    'https://omnira.sa/images/omnira-hero.jpg',
    'https://omnira.sa/images/valet-service.jpg',
    'https://omnira.sa/images/professional-team.jpg'
  ],

  // معلومات التواصل
  telephone: '+966XXXXXXXXX',
  email: 'info@omnira.sa',
  
  // العنوان الرئيسي في السعودية
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'شارع الملك فهد',
    addressLocality: 'الرياض',
    addressRegion: 'الرياض',
    postalCode: '12345',
    addressCountry: 'SA'
  },

  // منطقة الخدمة
  areaServed: [
    {
      '@type': 'City',
      name: 'الرياض',
      '@id': 'https://www.wikidata.org/wiki/Q3692'
    },
    {
      '@type': 'City',
      name: 'جدة',
      '@id': 'https://www.wikidata.org/wiki/Q374365'
    },
    {
      '@type': 'City',
      name: 'الدمام',
      '@id': 'https://www.wikidata.org/wiki/Q184452'
    },
    {
      '@type': 'City',
      name: 'مكة المكرمة',
      '@id': 'https://www.wikidata.org/wiki/Q5806'
    },
    {
      '@type': 'City',
      name: 'المدينة المنورة',
      '@id': 'https://www.wikidata.org/wiki/Q35484'
    },
    {
      '@type': 'Country',
      name: 'المملكة العربية السعودية',
      '@id': 'https://www.wikidata.org/wiki/Q851'
    }
  ],

  // الإحداثيات الجغرافية (الرياض)
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 24.7136,
    longitude: 46.6753
  },

  // ساعات العمل
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: [
        'Sunday',
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday'
      ],
      opens: '00:00',
      closes: '23:59'
    }
  ],

  // الخدمات المقدمة
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'خدمات أومنيرا',
    itemListElement: [
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'خدمات الفاليه باركينج',
          description: 'خدمة فاليه باركينج احترافية للفنادق والمطاعم والفعاليات',
          provider: {
            '@id': 'https://omnira.sa/#business'
          }
        }
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'إدارة مواقف السيارات',
          description: 'حلول شاملة لإدارة المواقف للمراكز التجارية والمنشآت الكبرى',
          provider: {
            '@id': 'https://omnira.sa/#business'
          }
        }
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'صف السيارات للفعاليات',
          description: 'خدمات متخصصة للمؤتمرات والحفلات والفعاليات الكبرى',
          provider: {
            '@id': 'https://omnira.sa/#business'
          }
        }
      }
    ]
  },

  // التقييمات
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '4.9',
    reviewCount: '250',
    bestRating: '5',
    worstRating: '1'
  },

  // معلومات إضافية
  priceRange: '$$-$$$',
  paymentAccepted: 'Cash, Credit Card, Invoice',
  currenciesAccepted: 'SAR',
  
  // روابط التواصل الاجتماعي
  sameAs: [
    'https://www.facebook.com/omnira',
    'https://www.twitter.com/omnira',
    'https://www.instagram.com/omnira',
    'https://www.linkedin.com/company/omnira',
    'https://www.youtube.com/omnira'
  ],

  // معلومات الشركة
  foundingDate: '2020',
  legalName: 'OMNIRA Company Holding',
  taxID: '7051975600',
  
  // الكلمات المفتاحية
  keywords: 'فاليه باركينج, valet parking, صف سيارات, إدارة مواقف, خدمات الفنادق, فاليه الرياض, valet Saudi Arabia'
};

// Organization Schema
export const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  '@id': 'https://omnira.sa/#organization',
  name: 'OMNIRA Company Holding',
  alternateName: 'أومنيرا',
  url: 'https://omnira.sa',
  logo: 'https://omnira.sa/logo.png',
  
  contactPoint: [
    {
      '@type': 'ContactPoint',
      telephone: '+966XXXXXXXXX',
      contactType: 'Customer Service',
      areaServed: 'SA',
      availableLanguage: ['Arabic', 'English']
    },
    {
      '@type': 'ContactPoint',
      telephone: '+966XXXXXXXXX',
      contactType: 'Sales',
      areaServed: 'SA',
      availableLanguage: ['Arabic', 'English']
    }
  ],

  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Riyadh',
    addressRegion: 'Riyadh',
    addressCountry: 'SA'
  },

  sameAs: [
    'https://www.facebook.com/omnira',
    'https://www.twitter.com/omnira',
    'https://www.instagram.com/omnira',
    'https://www.linkedin.com/company/omnira'
  ]
};

// Service Schema
export const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  serviceType: 'Valet Parking Service',
  provider: {
    '@id': 'https://omnira.sa/#business'
  },
  areaServed: {
    '@type': 'Country',
    name: 'Saudi Arabia'
  },
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'خدمات الفاليه باركينج',
    itemListElement: [
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'فاليه باركينج للفنادق',
          description: 'خدمة 24/7 للفنادق الفاخرة'
        }
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'فاليه باركينج للمطاعم',
          description: 'خدمة احترافية للمطاعم الراقية'
        }
      }
    ]
  }
};

// BreadcrumbList Schema Generator
export function generateBreadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url
    }))
  };
}
