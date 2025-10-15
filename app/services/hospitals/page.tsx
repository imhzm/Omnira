import { Metadata } from 'next';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import ServiceDetailHero from '@/components/services/ServiceDetailHero';
import ServiceContent from '@/components/services/ServiceContent';

export const metadata: Metadata = {
  title: 'خدمات الفاليه باركينج للمستشفيات والمراكز الطبية | OMNIRA - أولوية قصوى للطوارئ 24/7',
  description: 'خدمات فاليه باركينج متخصصة للمستشفيات والمراكز الطبية في السعودية. نخفف الضغط على المرضى وعائلاتهم. أولوية قصوى لحالات الطوارئ، استجابة فورية على مدار الساعة، فريق متعاطف مدرب على الحساسية، دعم خاص لكبار السن وذوي الإعاقة، مساعدة الكراسي المتحركة، تنسيق مباشر مع قسم الطوارئ، نظام استدعاء سريع، معايير نظافة عالية. نخدم مستشفيات الرياض، جدة، الدمام، مكة، المدينة. خدمة 24/7/365. عقود مرنة للمستشفيات الحكومية والخاصة.',
  keywords: [
    'فاليه باركينج للمستشفيات',
    'hospital valet parking Saudi Arabia',
    'خدمات صف سيارات المراكز الطبية',
    'valet service hospitals',
    'فاليه طوارئ المستشفيات',
    'صف سيارات للمرضى',
    'خدمة فاليه حساسة',
    'دعم ذوي الإعاقة المستشفيات',
    'فاليه 24/7 مستشفيات',
    'تنسيق طوارئ فاليه',
    'خدمات صحية مواقف',
    'مساعدة كبار السن مواقف',
    'نظام استدعاء سريع',
    'فاليه مستشفيات الرياض',
    'إدارة مواقف المستشفيات',
    'تخفيف ضغط المرضى',
  ],
  authors: [{ name: 'OMNIRA Healthcare Services', url: 'https://omnira.sa' }],
  metadataBase: new URL('https://omnira.sa'),
  alternates: {
    canonical: '/services/hospitals',
  },
  openGraph: {
    title: 'خدمات الفاليه للمستشفيات | OMNIRA - راحة المرضى أولويتنا',
    description: 'خدمة حساسة 24/7 - أولوية للطوارئ، دعم ذوي الإعاقة، فريق متعاطف - نخفف الضغط',
    url: 'https://omnira.sa/services/hospitals',
    siteName: 'OMNIRA',
    images: [{
      url: 'https://omnira.sa/og-hospitals.jpg',
      width: 1200,
      height: 630,
      alt: 'خدمات الفاليه باركينج للمستشفيات والمراكز الطبية',
    }],
    locale: 'ar_SA',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'فاليه متخصص للمستشفيات | OMNIRA',
    description: 'خدمة حساسة 24/7 - أولوية طوارئ، دعم خاص، فريق متعاطف',
    images: ['https://omnira.sa/og-hospitals.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    'max-image-preview': 'large',
    'max-snippet': -1,
  },
};

export default function HospitalsPage() {
  const serviceData = {
    title: 'خدمات صف السيارات للمستشفيات',
    subtitle: 'خدمة حساسة ومدروسة لبيئة الرعاية الصحية مع أولوية للطوارئ',
    heroImage: 'https://images.unsplash.com/photo-1587351021759-3e566b6af7cc?q=80&w=2072',
    
    overview: {
      title: 'خدمة فاليه تفهم حساسية بيئة الرعاية الصحية',
      description: `في المستشفيات والمراكز الطبية، كل ثانية تهم. المرضى وزوارهم يمرون بأوقات حساسة ومليئة بالتوتر. خدمة الفاليه في هذه البيئة ليست مجرد راحة، بل ضرورة تخفف الضغط وتسمح للمرضى والزوار بالتركيز على ما هو أهم - الصحة والعافية.`,
    },

    benefits: [
      {
        title: 'تخفيف الضغط على المرضى',
        description: 'راحة فورية في أوقات صعبة',
      },
      {
        title: 'أولوية للحالات الطارئة',
        description: 'استجابة سريعة للطوارئ على مدار الساعة',
      },
      {
        title: 'تحسين تجربة الزوار',
        description: 'سهولة الوصول والمغادرة',
      },
      {
        title: 'حل مشكلة نقص المواقف',
        description: 'استغلال أمثل للمساحات المتاحة',
      },
      {
        title: 'دعم كبار السن وذوي الإعاقة',
        description: 'مساعدة خاصة للفئات الأكثر احتياجاً',
      },
      {
        title: 'خدمة 24/7',
        description: 'متاحة في أي وقت ليلاً ونهاراً',
      },
    ],

    features: [
      {
        title: 'بروتوكول طوارئ خاص',
        description: 'استجابة فورية للحالات الطارئة مع أولوية قصوى',
        image: 'https://images.unsplash.com/photo-1516549655169-df83a0774514?q=80&w=2070',
      },
      {
        title: 'فريق متعاطف ومدرب',
        description: 'تدريب خاص على التعامل مع المرضى والحساسية',
        image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=2070',
      },
      {
        title: 'دعم لذوي الاحتياجات الخاصة',
        description: 'مساعدة إضافية لكبار السن والكراسي المتحركة',
        image: 'https://images.unsplash.com/photo-1581594693702-fbdc51b2763b?q=80&w=2070',
      },
      {
        title: 'تنسيق مع الطوارئ',
        description: 'تواصل مباشر مع قسم الطوارئ للحالات العاجلة',
        image: 'https://images.unsplash.com/photo-1504813184591-01572f98c85f?q=80&w=2071',
      },
      {
        title: 'نظام استدعاء سريع',
        description: 'استرجاع فوري للسيارات عند الحاجة',
        image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=2070',
      },
      {
        title: 'نظافة وتعقيم',
        description: 'معايير نظافة عالية تتماشى مع البيئة الطبية',
        image: 'https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?q=80&w=2070',
      },
    ],

    process: [
      {
        step: 1,
        title: 'تقييم البيئة الطبية',
        description: 'دراسة احتياجات المستشفى والتدفق',
      },
      {
        step: 2,
        title: 'تصميم بروتوكولات خاصة',
        description: 'وضع إجراءات للطوارئ والحالات الخاصة',
      },
      {
        step: 3,
        title: 'تدريب متخصص',
        description: 'تدريب الفريق على الحساسية والتعاطف',
      },
      {
        step: 4,
        title: 'التنسيق مع الأقسام',
        description: 'ربط مع الطوارئ والأمن والإدارة',
      },
      {
        step: 5,
        title: 'التشغيل المراقب',
        description: 'بدء بمراقبة مكثفة وضبط',
      },
      {
        step: 6,
        title: 'الخدمة المستمرة',
        description: 'عمل 24/7 مع تحسين دائم',
      },
    ],

    clients: [
      'المستشفيات العامة الكبرى',
      'المستشفيات الخاصة',
      'المراكز الطبية المتخصصة',
      'مستشفيات الولادة',
      'مراكز العيادات الخارجية',
      'مراكز الطوارئ',
      'المستشفيات الجامعية',
      'مراكز التشخيص الطبي',
    ],

    faqs: [
      {
        question: 'كيف تتعاملون مع حالات الطوارئ؟',
        answer: 'لدينا بروتوكول خاص للطوارئ مع أولوية قصوى واستجابة فورية على مدار الساعة.',
      },
      {
        question: 'هل يساعد الفريق ذوي الاحتياجات الخاصة؟',
        answer: 'نعم، فريقنا مدرب على مساعدة كبار السن، الكراسي المتحركة، وأي احتياجات خاصة.',
      },
      {
        question: 'هل الخدمة متاحة 24/7؟',
        answer: 'نعم، نوفر خدمة متواصلة على مدار الساعة طوال أيام الأسبوع.',
      },
      {
        question: 'كيف تتعاملون مع الأزمات والازدحام؟',
        answer: 'لدينا فريق احتياطي وخطط طوارئ للتعامل مع أي ازدحام مفاجئ.',
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
