'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Award, Shield, Clock, Users, TrendingUp, HeadphonesIcon } from 'lucide-react';

const WhyChooseUs = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const reasons = [
    {
      icon: Award,
      title: 'خبرة واسعة',
      description: 'أكثر من 15 عاماً من الخبرة الجماعية في صناعة خدمات صف السيارات والضيافة',
    },
    {
      icon: Shield,
      title: 'أمان وتأمين شامل',
      description: 'جميع السيارات مؤمنة تأميناً شاملاً مع أفضل شركات التأمين في المملكة',
    },
    {
      icon: Clock,
      title: 'خدمة 24/7',
      description: 'متاحون في أي وقت - ليلاً أو نهاراً، في أيام العطل والمواسم',
    },
    {
      icon: Users,
      title: 'فريق محترف مدرب',
      description: 'سائقون مدربون على أعلى المعايير الدولية في القيادة وخدمة العملاء',
    },
    {
      icon: TrendingUp,
      title: 'تقنية متقدمة',
      description: 'أنظمة إلكترونية حديثة لإدارة المواقف والتتبع والتقارير الفورية',
    },
    {
      icon: HeadphonesIcon,
      title: 'دعم متواصل',
      description: 'فريق دعم فني وخدمة عملاء جاهز للمساعدة على مدار الساعة',
    },
  ];

  return (
    <section ref={ref} className="section-padding bg-gradient-to-b from-sage-50 via-white to-sage-50 relative overflow-hidden">
      {/* Animated Blobs */}
      <div className="absolute inset-0 z-0 opacity-10">
        <div className="absolute top-20 -left-20 w-96 h-96 bg-accents-emerald/40 rounded-full mix-blend-multiply filter blur-3xl animate-blob"></div>
        <div className="absolute top-40 -right-20 w-96 h-96 bg-accents-sky/40 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000"></div>
      </div>

      <div className="container-custom relative z-10">
        {/* Header */}
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
            <span className="text-sage-primary font-bold text-sm">لماذا نحن؟</span>
          </motion.div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6">
            <span className="gold-shine-effect">لماذا تختار أومنيرا؟</span>
          </h2>
          <p className="text-brown-dark text-lg md:text-xl max-w-3xl mx-auto font-medium">
            نجمع بين <span className="text-sage-primary font-bold">الخبرة الواسعة</span>، <span className="text-accents-sky font-bold">التقنية المتقدمة</span>، والالتزام بأعلى معايير الجودة
          </p>
        </motion.div>

        {/* Reasons Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, index) => {
            const Icon = reason.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group p-8 rounded-3xl bg-white border-2 border-sage-primary/20 hover:border-sage-primary hover:shadow-2xl hover:scale-105 transition-all duration-300"
              >
                {/* Icon Container */}
                <div className="w-16 h-16 rounded-2xl bg-sage-primary/10 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all">
                  <Icon className="w-8 h-8 text-sage-primary" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold mb-3 text-brown-dark group-hover:text-sage-primary transition-colors">
                  {reason.title}
                </h3>
                <p className="text-brown-text leading-relaxed">
                  {reason.description}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* Trust Indicators */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-16"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="glass-effect p-8 rounded-3xl border-2 border-sage-primary/20 hover:border-sage-primary hover:shadow-xl hover:scale-105 transition-all duration-300 text-center">
              <div className="text-5xl font-black mb-2 bg-gradient-to-r from-sage-primary to-sage-medium bg-clip-text text-transparent">99.9%</div>
              <div className="text-brown-text font-medium">معدل رضا العملاء</div>
            </div>
            <div className="glass-effect p-8 rounded-3xl border-2 border-accents-emerald/20 hover:border-accents-emerald hover:shadow-xl hover:scale-105 transition-all duration-300 text-center">
              <div className="text-5xl font-black mb-2 bg-gradient-to-r from-accents-emerald to-sage-primary bg-clip-text text-transparent">5,000+</div>
              <div className="text-brown-text font-medium">سيارة مخدومة شهرياً</div>
            </div>
            <div className="glass-effect p-8 rounded-3xl border-2 border-accents-sky/20 hover:border-accents-sky hover:shadow-xl hover:scale-105 transition-all duration-300 text-center">
              <div className="text-5xl font-black mb-2 bg-gradient-to-r from-accents-sky to-sage-primary bg-clip-text text-transparent">200+</div>
              <div className="text-brown-text font-medium">عميل راضٍ</div>
            </div>
            <div className="glass-effect p-8 rounded-3xl border-2 border-sunset-golden/20 hover:border-sunset-golden hover:shadow-xl hover:scale-105 transition-all duration-300 text-center">
              <div className="text-5xl font-black mb-2 bg-gradient-to-r from-sunset-golden to-sage-primary bg-clip-text text-transparent">24/7</div>
              <div className="text-brown-text font-medium">خدمة متواصلة</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
