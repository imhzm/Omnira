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
    <section ref={ref} className="section-padding section-gradient">
      <div className="container-custom">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="heading-gradient">لماذا تختار أومنيرا؟</span>
          </h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            نجمع بين الخبرة الواسعة، التقنية المتقدمة، والالتزام بأعلى معايير الجودة
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
                className="luxury-card group"
              >
                {/* Icon Container */}
                <div className="icon-container mb-6">
                  <Icon className="w-8 h-8 text-gold-primary" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold mb-3 text-white group-hover:text-gold-primary transition-colors">
                  {reason.title}
                </h3>
                <p className="text-gray-400 leading-relaxed">
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
          className="mt-16 pt-16 border-t border-gold-primary/20"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="stat-number mb-2">99.9%</div>
              <div className="text-gray-400">معدل رضا العملاء</div>
            </div>
            <div>
              <div className="stat-number mb-2">5,000+</div>
              <div className="text-gray-400">سيارة مخدومة شهرياً</div>
            </div>
            <div>
              <div className="stat-number mb-2">200+</div>
              <div className="text-gray-400">عميل راضٍ</div>
            </div>
            <div>
              <div className="stat-number mb-2">24/7</div>
              <div className="text-gray-400">خدمة متواصلة</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
