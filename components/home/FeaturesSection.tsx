'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Shield, Users, DollarSign, Eye, TrendingUp, Clock } from 'lucide-react';

const FeaturesSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const features = [
    {
      icon: Shield,
      title: 'تأمين شامل',
      description: 'جميع السيارات مؤمنة بالكامل خلال فترة الخدمة. راحة بالك أولويتنا وسلامة سيارتك مضمونة 100%',
      gradient: 'from-gold-primary to-gold-medium',
    },
    {
      icon: Users,
      title: 'فريق محترف ومدرب',
      description: 'سائقونا يخضعون لبرامج تدريبية مكثفة في القيادة الآمنة وخدمة العملاء. مظهر احترافي وسلوك راقٍ دائماً',
      gradient: 'from-gold-medium to-gold-light',
    },
    {
      icon: Eye,
      title: 'تتبع مباشر',
      description: 'تابع سيارتك لحظة بلحظة من خلال تطبيقنا. شفافية كاملة وتحديثات فورية في كل خطوة',
      gradient: 'from-gold-light to-gold-primary',
    },
    {
      icon: TrendingUp,
      title: 'حلول ذكية ومتطورة',
      description: 'نستخدم أحدث التقنيات في إدارة وتتبع السيارات. نظام تذاكر إلكتروني، تطبيق جوال، ولوحة تحكم شاملة',
      gradient: 'from-gold-primary to-gold-dark',
    },
    {
      icon: DollarSign,
      title: 'أسعار تنافسية',
      description: 'باقات مرنة تناسب جميع الميزانيات. جودة عالية بأسعار عادلة ومنافسة. لا رسوم خفية',
      gradient: 'from-gold-dark to-gold-medium',
    },
    {
      icon: Clock,
      title: 'خدمة 24/7',
      description: 'متاحون على مدار الساعة طوال أيام الأسبوع. فريق دعم جاهز للرد على استفساراتك في أي وقت',
      gradient: 'from-gold-medium to-gold-primary',
    },
  ];

  return (
    <section ref={ref} className="section-padding bg-gradient-to-b from-white via-beige-light to-white relative overflow-hidden">
      {/* Animated Blobs */}
      <div className="absolute inset-0 z-0 opacity-10">
        <div className="absolute top-0 right-0 w-96 h-96 bg-sunset-golden/40 rounded-full mix-blend-multiply filter blur-3xl animate-blob"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-accents-violet/40 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000"></div>
        <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-sage-primary/40 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-4000"></div>
      </div>

      <div className="container-custom relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            className="inline-flex items-center space-x-2 space-x-reverse glass-effect px-6 py-3 rounded-full border-2 border-sage-primary/30 mb-8"
          >
            <span className="text-sage-primary font-bold text-sm">مزايانا</span>
          </motion.div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6">
            <span className="gold-shine-effect">لماذا نحن الخيار الأفضل؟</span>
          </h2>
          <p className="text-brown-dark text-lg md:text-xl max-w-3xl mx-auto font-medium">
            نجمع بين <span className="text-sage-primary font-bold">الخبرة</span> و<span className="text-accents-sky font-bold">التكنولوجيا</span> لتقديم خدمة <span className="text-sunset-golden font-bold">استثنائية</span>
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              feature={feature}
              index={index}
              isInView={isInView}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

interface FeatureCardProps {
  feature: {
    icon: any;
    title: string;
    description: string;
    gradient: string;
  };
  index: number;
  isInView: boolean;
}

const FeatureCard = ({ feature, index, isInView }: FeatureCardProps) => {
  const Icon = feature.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="group"
    >
      <div className="relative p-8 rounded-3xl bg-white border-2 border-sage-primary/20 hover:border-sage-primary transition-all duration-300 h-full hover:shadow-2xl hover:scale-105">
        {/* Icon */}
        <div className="relative w-16 h-16 mb-6">
          <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${feature.gradient} opacity-10 group-hover:opacity-20 transition-opacity absolute inset-0`}></div>
          <div className="w-16 h-16 rounded-2xl bg-sage-primary/10 flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-all relative">
            <Icon className="w-8 h-8 text-sage-primary" />
          </div>
        </div>

        {/* Content */}
        <h3 className="text-xl font-bold mb-3 text-brown-dark group-hover:text-sage-primary transition-colors">
          {feature.title}
        </h3>
        
        <p className="text-brown-text leading-relaxed">
          {feature.description}
        </p>

        {/* Hover Effect Line */}
        <div className="absolute bottom-0 right-0 left-0 h-1.5 bg-gradient-to-r from-sage-primary to-sunset-golden transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 rounded-b-3xl"></div>
      </div>
    </motion.div>
  );
};

export default FeaturesSection;
