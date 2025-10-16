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
      {/* Background Decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gold-primary/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gold-primary/5 rounded-full blur-3xl"></div>

      <div className="container-custom relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gold-shine-effect">لماذا نحن الخيار الأفضل؟</span>
          </h2>
          <p className="text-brown-text text-lg max-w-2xl mx-auto">
            نجمع بين الخبرة والتكنولوجيا لتقديم خدمة استثنائية تفوق توقعاتك
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
      <div className="relative p-8 rounded-2xl bg-white border-2 border-beige-medium hover:border-sage-primary transition-all duration-300 h-full shadow-sm hover:shadow-xl">
        {/* Icon */}
        <div className="relative w-16 h-16 mb-6">
          <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} rounded-xl opacity-20 group-hover:opacity-30 transition-opacity`}></div>
          <div className="absolute inset-0 flex items-center justify-center">
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
        <div className="absolute bottom-0 right-0 left-0 h-1 bg-gradient-luxury transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 rounded-b-2xl"></div>
      </div>
    </motion.div>
  );
};

export default FeaturesSection;
