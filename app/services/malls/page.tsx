import { Metadata } from 'next';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import ServiceDetailHero from '@/components/services/ServiceDetailHero';
import ServiceContent from '@/components/services/ServiceContent';

export const metadata: Metadata = {
  title: 'حلول إدارة مواقف المراكز التجارية الذكية | OMNIRA - نظام متطور يزيد الإشغال 40%',
  description: 'نظام إدارة مواقف ذكي للمراكز التجارية والمولات الكبرى في السعودية. نزيد السعة الاستيعابية بنسبة 30-40% بدون توسعات، نقلل وقت البحث عن موقف 60%، شاشات LED توجيهية، تطبيق جوال للحجز المسبق، دفع إلكتروني متعدد، مراقبة 24/7، تقارير تحليلية فورية، أمن متقدم. نخدم مولات الرياض، جدة، الدمام، مكة. نحسّن تجربة التسوق ونزيد رضا الزوار. ROI مثبت خلال 12 شهر. استشارة مجانية وعرض توضيحي!',
  keywords: [
    'إدارة مواقف المراكز التجارية',
    'mall parking management Saudi Arabia',
    'نظام مواقف ذكي للمولات',
    'smart parking system',
    'إدارة مواقف مولات الرياض',
    'parking management shopping centers',
    'نظام توجيه مواقف LED',
    'تطبيق حجز مواقف',
    'حل ازدحام المواقف',
    'زيادة سعة المواقف',
    'تقارير تحليلية مواقف',
    'نظام دفع إلكتروني مواقف',
    'أمن مواقف المولات',
    'تحسين تجربة التسوق',
    'إدارة مواقف احترافية',
    'تكنولوجيا مواقف متقدمة',
  ],
  authors: [{ name: 'OMNIRA Smart Solutions', url: 'https://omnira.sa' }],
  metadataBase: new URL('https://omnira.sa'),
  alternates: {
    canonical: '/services/malls',
  },
  openGraph: {
    title: 'حلول إدارة مواقف المراكز التجارية الذكية | OMNIRA - زيادة 40% في السعة',
    description: 'نظام ذكي متطور - شاشات LED، تطبيق جوال، دفع إلكتروني، تقارير فورية - نحسّن تجربة التسوق',
    url: 'https://omnira.sa/services/malls',
    siteName: 'OMNIRA',
    images: [{
      url: 'https://omnira.sa/og-malls.jpg',
      width: 1200,
      height: 630,
      alt: 'حلول إدارة المواقف الذكية للمراكز التجارية',
    }],
    locale: 'ar_SA',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'نظام مواقف ذكي للمولات | OMNIRA',
    description: 'زيادة السعة 40%، تقليل الازدحام، تحسين التجربة - حلول متطورة للمراكز التجارية',
    images: ['https://omnira.sa/og-malls.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    'max-image-preview': 'large',
    'max-snippet': -1,
  },
};

export default function MallsPage() {
  const serviceData = {
    title: 'إدارة مواقف المراكز التجارية',
    subtitle: 'حلول ذكية ومتطورة لإدارة المواقف وزيادة رضا المتسوقين',
    heroImage: 'https://images.unsplash.com/photo-1519567241046-7f570eee3ce6?q=80&w=2071',
    
    overview: {
      title: 'نظام إدارة مواقف ذكي يحول التحدي إلى ميزة تنافسية',
      description: `إدارة مواقف المراكز التجارية الكبرى تحدٍ يومي يؤثر مباشرة على تجربة المتسوقين ورضاهم. في أومنيرا، نقدم حلولاً تقنية متقدمة تحول هذا التحدي إلى ميزة تنافسية قوية. نظامنا الذكي يجمع بين التكنولوجيا المتطورة والإدارة البشرية الاحترافية لضمان تجربة سلسة ومريحة لكل زائر.`,
    },

    benefits: [
      {
        title: 'زيادة رضا المتسوقين',
        description: 'تجربة موقف سلسة تشجع على العودة والتوصية',
      },
      {
        title: 'استغلال أمثل للمساحات',
        description: 'زيادة السعة بنسبة 30-40% بدون توسعات',
      },
      {
        title: 'تقليل الازدحام والانتظار',
        description: 'نظام توجيه ذكي يقلل وقت البحث عن موقف',
      },
      {
        title: 'تقارير وإحصائيات دقيقة',
        description: 'بيانات فورية عن الإشغال والتدفق',
      },
      {
        title: 'تحسين الأمن والسلامة',
        description: 'مراقبة 24/7 ونظام استجابة سريع',
      },
      {
        title: 'زيادة الإيرادات',
        description: 'تحسين الكفاءة يزيد عدد الزوار',
      },
    ],

    features: [
      {
        title: 'نظام توجيه ذكي',
        description: 'شاشات LED تعرض المواقف المتاحة في كل طابق ومنطقة',
        image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=2070',
      },
      {
        title: 'تطبيق جوال متكامل',
        description: 'حجز مسبق، توجيه للموقف، دفع إلكتروني',
        image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=2070',
      },
      {
        title: 'نظام دفع متعدد',
        description: 'نقدي، بطاقات، محافظ رقمية، اشتراكات',
        image: 'https://images.unsplash.com/photo-1556742044-3c52d6e88c62?q=80&w=2070',
      },
      {
        title: 'مراقبة وأمن متقدم',
        description: 'كاميرات، دوريات، استجابة فورية',
        image: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=2074',
      },
      {
        title: 'فريق إدارة محترف',
        description: 'مشرفون وموظفون مدربون على مدار الساعة',
        image: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=2070',
      },
      {
        title: 'تقارير تحليلية شاملة',
        description: 'إحصائيات مفصلة لاتخاذ قرارات مبنية على البيانات',
        image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070',
      },
    ],

    process: [
      {
        step: 1,
        title: 'دراسة وتحليل',
        description: 'تحليل شامل للموقف الحالي والتحديات',
      },
      {
        step: 2,
        title: 'تصميم الحل',
        description: 'اقتراح نظام مخصص حسب الاحتياجات',
      },
      {
        step: 3,
        title: 'التركيب والإعداد',
        description: 'تركيب الأنظمة والبنية التحتية',
      },
      {
        step: 4,
        title: 'التدريب',
        description: 'تدريب الفريق على الأنظمة والعمليات',
      },
      {
        step: 5,
        title: 'التشغيل التجريبي',
        description: 'فترة تجريبية لضبط الأداء',
      },
      {
        step: 6,
        title: 'التشغيل والدعم',
        description: 'إدارة كاملة مع دعم مستمر',
      },
    ],

    clients: [
      'المراكز التجارية الكبرى',
      'المولات الإقليمية',
      'مراكز التسوق المحلية',
      'الأسواق المركزية',
      'مجمعات البيع بالتجزئة',
      'المراكز الترفيهية',
      'مراكز المعارض',
      'المجمعات التجارية',
    ],

    faqs: [
      {
        question: 'كم تكلفة نظام الإدارة الذكي؟',
        answer: 'التكلفة تعتمد على حجم الموقف، عدد الطوابق، والأنظمة المطلوبة. نقدم حلولاً متدرجة تناسب مختلف الميزانيات.',
      },
      {
        question: 'كم يستغرق التركيب؟',
        answer: 'عادةً 4-8 أسابيع حسب حجم المشروع، مع إمكانية العمل على مراحل لتقليل التأثير على التشغيل.',
      },
      {
        question: 'هل يمكن التكامل مع الأنظمة الحالية؟',
        answer: 'نعم، أنظمتنا مصممة للتكامل مع معظم الأنظمة الموجودة.',
      },
      {
        question: 'هل توفرون التشغيل والصيانة؟',
        answer: 'نعم، نقدم خدمة إدارة كاملة شاملة التشغيل والصيانة الدورية.',
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
