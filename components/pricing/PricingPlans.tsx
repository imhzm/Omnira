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
      price: '500',
      period: '',
      description: 'مثالية للمناسبات والفعاليات الخاصة',
      popular: false,
      features: [
        'فريق مكون من 6 أشخاص',
        'خدمة 8 ساعات',
        'نظام تذاكر إلكتروني',
        'تأمين شامل',
        'مشرف موقع',
        'زي موحد احترافي',
      ],
      extras: [
        '+ 30 ريال لكل ساعة إضافية (أوفرتايم)',
        '+ 20 ريال للدقيقة',
      ],
    },
    {
      name: 'باقة المطاعم والفنادق',
      price: '3,000',
      period: 'شهرياً',
      description: 'للمطاعم والفنادق والمنشآت التجارية',
      popular: true,
      features: [
        'فريق دائم',
        'خدمة مستمرة شهرياً',
        'نظام إدارة كامل',
        'تقارير شهرية',
        'تأمين شامل',
        'زي موحد برعايتكم',
        'مشرف ميداني',
        'دعم فني مستمر',
      ],
      extras: [],
    },
  ];

  return (
    <section ref={ref} className="section-padding bg-gradient-to-b from-white via-beige-light to-white">
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
              className={`relative p-8 rounded-2xl ${
                plan.popular
                  ? 'bg-gradient-luxury border-2 border-gold-primary'
                  : 'bg-gradient-dark border border-gold-primary/20'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-gold-primary text-black-primary px-6 py-2 rounded-full font-bold flex items-center space-x-2 space-x-reverse">
                    <Star className="w-4 h-4 fill-current" />
                    <span>الأكثر طلباً</span>
                  </div>
                </div>
              )}

              <div className="text-center mb-8">
                <h3 className={`text-2xl font-bold mb-2 ${plan.popular ? 'text-brown-dark' : 'text-sage-primary'}`}>
                  {plan.name}
                </h3>
                <p className={`text-sm mb-4 ${plan.popular ? 'text-brown-medium' : 'text-brown-text'}`}>
                  {plan.description}
                </p>
                <div className="mb-2">
                  <span className={`text-5xl font-bold text-brown-dark`}>
                    {plan.price}
                  </span>
                  {plan.price !== 'حسب الطلب' && (
                    <span className={`text-xl text-brown-medium`}> ريال</span>
                  )}
                </div>
                {plan.period && (
                  <p className={`text-sm text-brown-medium`}>{plan.period}</p>
                )}
              </div>

              <div className="space-y-4 mb-8">
                {plan.features.map((feature, i) => (
                  <div key={i} className="flex items-start space-x-3 space-x-reverse">
                    <Check className={`w-5 h-5 flex-shrink-0 mt-0.5 ${plan.popular ? 'text-sage-primary' : 'text-sage-primary'}`} />
                    <span className={plan.popular ? 'text-brown-dark' : 'text-brown-text'}>{feature}</span>
                  </div>
                ))}
              </div>

              {plan.extras.length > 0 && (
                <div className="border-t border-beige-medium pt-6 mb-6">
                  <p className={`text-sm font-bold mb-3 ${plan.popular ? 'text-sage-primary' : 'text-sage-primary'}`}>
                    إضافات:
                  </p>
                  {plan.extras.map((extra, i) => (
                    <p key={i} className={`text-sm mb-2 text-brown-medium`}>
                      {extra}
                    </p>
                  ))}
                </div>
              )}

              <Link
                href="/contact"
                className={`block w-full py-4 rounded-lg text-center font-bold transition-all bg-sage-primary text-white hover:bg-sage-dark`}
              >
                {plan.price === 'حسب الطلب' ? 'اطلب عرض سعر' : 'احجز الآن'}
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
