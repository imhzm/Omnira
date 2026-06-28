'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import Link from 'next/link';
import { Check, Star, ArrowLeft } from 'lucide-react';

const PricingPlans = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const plans = [
    {
      name: 'باقة الفعاليات',
      price: '2,500',
      period: 'للفعالية',
      description: 'مثالية للمناسبات والفعاليات الخاصة والمؤتمرات',
      popular: false,
      features: [
        '👥 فريق من 8 سائقين محترفين',
        '⏰ خدمة لمدة 8 ساعات كاملة',
        '🎫 نظام تذاكر إلكتروني متقدم',
        '🛡️ تأمين شامل على جميع السيارات',
        '👔 زي موحد احترافي فاخر',
        '📊 مشرف موقع متخصص',
        '📱 تطبيق تتبع فوري',
      ],
      extras: [
        '🕑 300 ريال لكل ساعة إضافية',
        '❌ 200 ريال رسوم إلغاء (إن وجدت)',
      ],
      badge: '🎉 فعاليات',
    },
    {
      name: 'باقة المنشآت الشهرية',
      price: '6,000',
      period: 'شهرياً',
      description: 'للمطاعم، الفنادق، المراكز التجارية والمستشفيات',
      popular: true,
      features: [
        '👥 فريق دائم مخصص لمنشأتك',
        '⏰ خدمة مستمرة طوال الشهر',
        '📊 نظام إدارة متكامل وذكي',
        '📈 تقارير شهرية تفصيلية',
        '🛡️ تأمين شامل ممتد',
        '👔 زي موحد بهوية منشأتك',
        '👨‍💼 مشرف ميداني متفرغ',
        '📞 دعم فني 24/7',
        '📱 تطبيق خاص للإدارة',
        '📝 عقد مرن قابل للتجديد',
      ],
      extras: [],
      badge: '⭐ الأكثر طلباً',
    },
  ];

  return (
    <section ref={ref} className="section-padding bg-gradient-to-b from-[#0A0A0C] via-beige-light to-[#0A0A0C]">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-16"
        >
          <p className="text-brown-text text-lg mb-4">
            جميع الباقات تشمل تأميناً شاملاً وفريقاً محترفاً ونظام تتبع إلكتروني
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.2, delay: 0 }}
              className={`relative p-8 md:p-10 rounded-3xl transition-all duration-300 hover:scale-105 hover:shadow-2xl ${
                plan.popular
                  ? 'bg-gradient-to-br from-[#141418] via-sage-50 to-[#141418] border-2 border-sage-primary shadow-xl shadow-sage-primary/20'
                  : 'bg-[#141418]/90 backdrop-blur-md border-2 border-sage-primary/30 hover:border-sage-primary'
              }`}
            >
              {plan.badge && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10">
                  <div className={`px-6 py-2 rounded-full font-bold text-sm shadow-lg ${
                    plan.popular
                      ? 'bg-gradient-to-r from-accent-amber to-sunset-golden text-[#0A0A0C] animate-pulseSoft'
                      : 'bg-gradient-to-r from-sage-primary to-sage-medium text-[#0A0A0C]'
                  }`}>
                    <span>{plan.badge}</span>
                  </div>
                </div>
              )}

              <div className="text-center mb-8">
                <h3 className={`text-3xl font-black mb-3 ${
                  plan.popular ? 'gold-shine-effect' : 'text-sage-primary'
                }`}>
                  {plan.name}
                </h3>
                <p className="text-brown-text mb-6 leading-relaxed">
                  {plan.description}
                </p>
                <div className="mb-2">
                  <span className="text-6xl font-black bg-gradient-to-r from-sage-primary to-sage-medium bg-clip-text text-transparent">
                    {plan.price}
                  </span>
                  {plan.price !== 'حسب الطلب' && (
                    <span className="text-2xl text-brown-dark font-bold"> ريال</span>
                  )}
                </div>
                {plan.period && (
                  <p className="text-base text-brown-text font-medium bg-sage-50 px-4 py-2 rounded-full inline-block">{plan.period}</p>
                )}
              </div>

              <div className="space-y-3 mb-8">
                {plan.features.map((feature, i) => (
                  <div key={i} className="flex items-start space-x-3 space-x-reverse p-3 rounded-xl hover:bg-sage-50 transition-colors group">
                    <Check className="w-5 h-5 flex-shrink-0 mt-0.5 text-sage-primary group-hover:scale-125 transition-transform" />
                    <span className="text-brown-dark font-medium text-base">{feature}</span>
                  </div>
                ))}
              </div>

              {plan.extras.length > 0 && (
                <div className="border-t-2 border-sage-primary/20 pt-6 mb-6">
                  <p className="text-base font-black mb-4 text-sage-primary flex items-center space-x-2 space-x-reverse">
                    <span>✨</span>
                    <span>إضافات متاحة:</span>
                  </p>
                  <div className="space-y-2">
                    {plan.extras.map((extra, i) => (
                      <p key={i} className="text-sm text-brown-dark bg-[#1A1A20] px-4 py-2 rounded-lg border border-accent-amber/20">
                        {extra}
                      </p>
                    ))}
                  </div>
                </div>
              )}

              <Link
                href="/contact"
                className={`block w-full py-5 rounded-2xl text-center font-black text-lg transition-all duration-500 shadow-lg group ${
                  plan.popular
                    ? 'bg-gradient-to-r from-sage-primary to-sage-medium text-[#0A0A0C] hover:shadow-xl hover:shadow-sage-primary/20'
                    : 'bg-sage-primary text-[#0A0A0C] hover:bg-sage-600 hover:shadow-lg'
                }`}
              >
                <span className="inline-flex items-center space-x-2 space-x-reverse">
                  <span>{plan.price === 'حسب الطلب' ? 'اطلب عرض سعر' : 'احجز الآن'}</span>
                  <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform duration-500" />
                </span>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Note */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0 }}
          className="mt-12 text-center"
        >
          <p className="text-brown-text text-sm">
            للمزيد من التفاصيل أو للحصول على عرض سعر مخصص، يرجى التواصل معنا
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default PricingPlans;
