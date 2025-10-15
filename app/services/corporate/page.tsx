import { Metadata } from 'next';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import ServiceDetailHero from '@/components/services/ServiceDetailHero';
import ServiceContent from '@/components/services/ServiceContent';

export const metadata: Metadata = {
  title: 'حلول إدارة المواقف للشركات والمقرات الرئيسية | OMNIRA - وفر وقت موظفيك واهتم بعملائك',
  description: 'حلول متكاملة لإدارة مواقف الشركات والأبراج المكتبية في السعودية. وفر 30 دقيقة يومياً لكل موظف، انطباع احترافي للعملاء والزوار، عقود سنوية مرنة بأسعار تفضيلية، خدمة VIP للإدارة العليا، نظام اشتراكات للموظفين، إدارة زوار الشركة، تقارير شهرية تفصيلية، تكامل مع أنظمة الأمن، تطبيق جوال للطلب المسبق. نخدم شركات الرياض، جدة، الدمام. باقات من 8,000 ريال شهرياً. خصومات للعقود طويلة الأجل. ROI مثبت في 6 أشهر!',
  keywords: [
    'إدارة مواقف الشركات',
    'corporate parking management Saudi Arabia',
    'حلول مواقف المقرات الرئيسية',
    'valet service corporate',
    'فاليه أبراج مكتبية',
    'اشتراكات مواقف موظفين',
    'خدمة VIP للإدارة',
    'عقود مواقف شركات',
    'إدارة زوار الشركات',
    'تقارير مواقف شهرية',
    'تكامل أمن مواقف',
    'حلول مواقف مؤسسية',
    'توفير وقت الموظفين',
    'انطباع احترافي للشركات',
    'باقات مواقف مرنة',
    'خصومات عقود طويلة',
  ],
  authors: [{ name: 'OMNIRA Corporate Solutions', url: 'https://omnira.sa' }],
  metadataBase: new URL('https://omnira.sa'),
  alternates: {
    canonical: '/services/corporate',
  },
  openGraph: {
    title: 'حلول إدارة المواقف للشركات | OMNIRA - استثمار في إنتاجية فريقك',
    description: 'وفر 30 دقيقة يومياً - عقود مرنة، خدمة VIP، اشتراكات موظفين، تقارير تفصيلية',
    url: 'https://omnira.sa/services/corporate',
    siteName: 'OMNIRA',
    images: [{
      url: 'https://omnira.sa/og-corporate.jpg',
      width: 1200,
      height: 630,
      alt: 'حلول إدارة المواقف للشركات والمقرات',
    }],
    locale: 'ar_SA',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'حلول مواقف احترافية للشركات | OMNIRA',
    description: 'عقود مرنة، VIP للإدارة، اشتراكات موظفين - وفر وقت فريقك',
    images: ['https://omnira.sa/og-corporate.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    'max-image-preview': 'large',
    'max-snippet': -1,
  },
};

export default function CorporatePage() {
  const serviceData = {
    title: 'حلول صف السيارات للشركات',
    subtitle: 'باقات مخصصة للمقرات الرئيسية والمكاتب الكبرى مع عقود مرنة',
    heroImage: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070',
    
    overview: {
      title: 'حلول احترافية مصممة لبيئة الأعمال',
      description: `في عالم الأعمال، الوقت أغلى ما يملك المديرون والموظفون. توفير خدمة موقف احترافية ليس مجرد رفاهية، بل استثمار في إنتاجية الفريق ورضا العملاء. نقدم حلولاً متكاملة للشركات بعقود مرنة تناسب احتياجاتك.`,
    },

    benefits: [
      {
        title: 'توفير وقت الموظفين',
        description: 'التركيز على العمل بدلاً من البحث عن موقف',
      },
      {
        title: 'انطباع احترافي للعملاء',
        description: 'استقبال راقٍ يعكس مستوى الشركة',
      },
      {
        title: 'عقود مرنة وشفافة',
        description: 'باقات شهرية وسنوية بأسعار تنافسية',
      },
      {
        title: 'تقارير مفصلة',
        description: 'إحصائيات دقيقة عن الاستخدام والأداء',
      },
      {
        title: 'خدمات VIP للإدارة',
        description: 'مواقف مخصصة واستقبال خاص',
      },
      {
        title: 'تكامل مع أنظمة الشركة',
        description: 'ربط مع الأمن وإدارة المرافق',
      },
    ],

    features: [
      {
        title: 'عقود سنوية مخصصة',
        description: 'باقات شاملة بأسعار تفضيلية وشروط مرنة',
        image: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=80&w=2070',
      },
      {
        title: 'خدمة VIP للإدارة العليا',
        description: 'مواقف مخصصة، استقبال خاص، سرية تامة',
        image: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=2071',
      },
      {
        title: 'نظام اشتراكات للموظفين',
        description: 'بطاقات شهرية بخصومات خاصة للموظفين',
        image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?q=80&w=2070',
      },
      {
        title: 'إدارة زوار الشركة',
        description: 'تسجيل وتتبع سيارات الضيوف والعملاء',
        image: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=2070',
      },
      {
        title: 'تقارير شهرية تفصيلية',
        description: 'إحصائيات وبيانات لاتخاذ قرارات مستنيرة',
        image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070',
      },
      {
        title: 'دعم وصيانة مستمرة',
        description: 'فريق دعم متخصص وصيانة دورية',
        image: 'https://images.unsplash.com/photo-1556740738-b6a63e27c4df?q=80&w=2070',
      },
    ],

    process: [
      {
        step: 1,
        title: 'تحليل الاحتياجات',
        description: 'دراسة عدد الموظفين والزوار والمساحة',
      },
      {
        step: 2,
        title: 'تصميم الحل المؤسسي',
        description: 'اقتراح نظام يناسب ثقافة الشركة',
      },
      {
        step: 3,
        title: 'مفاوضات العقد',
        description: 'شروط مرنة وأسعار تنافسية',
      },
      {
        step: 4,
        title: 'الإعداد والتكامل',
        description: 'تركيب الأنظمة والربط مع البنية التحتية',
      },
      {
        step: 5,
        title: 'تدريب فريق الأمن',
        description: 'تنسيق مع أمن الشركة والإدارات',
      },
      {
        step: 6,
        title: 'التشغيل والمتابعة',
        description: 'خدمة مستمرة مع مراجعات دورية',
      },
    ],

    clients: [
      'المقرات الرئيسية للشركات',
      'الأبراج المكتبية',
      'المجمعات التجارية',
      'مراكز الأعمال',
      'الشركات متعددة الجنسيات',
      'البنوك والمؤسسات المالية',
      'شركات التقنية والاتصالات',
      'المكاتب الحكومية',
    ],

    faqs: [
      {
        question: 'ما هي مدة العقود المتاحة؟',
        answer: 'نقدم عقوداً شهرية، سنوية، أو متعددة السنوات مع خصومات للعقود الطويلة.',
      },
      {
        question: 'هل يمكن تخصيص الخدمة لموظفين محددين؟',
        answer: 'نعم، يمكننا تقديم بطاقات اشتراك مخصصة لموظفين أو إدارات معينة.',
      },
      {
        question: 'كيف تتعاملون مع زوار الشركة؟',
        answer: 'نوفر نظاماً خاصاً لتسجيل وإدارة سيارات الزوار والضيوف.',
      },
      {
        question: 'هل توفرون خدمات إضافية؟',
        answer: 'نعم، مثل غسيل السيارات، صيانة بسيطة، وشحن السيارات الكهربائية.',
      },
    ],
  };

  return (
    <main className="min-h-screen bg-black-primary">
      <Header />
      <ServiceDetailHero data={serviceData} />
      <ServiceContent data={serviceData} />
      <Footer />
    </main>
  );
}
