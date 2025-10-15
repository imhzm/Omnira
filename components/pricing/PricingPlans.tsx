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
      period: 'يبدأ من',
      description: 'مثالية للمناسبات والفعاليات الخاصة',
      popular: false,
      features: [
        'فريق من 4 سائقين',
        'خدمة لمدة 6 ساعات',
        'تغطية حتى 100 سيارة',
        'نظام تذاكر إلكتروني',
        'تأمين شامل',
        'مشرف موقع',
        'زي موحد احترافي',
      ],
      extras: [
        '+ 300 ريال لكل ساعة إضافية',
        '+ 200 ريال لكل سائق إضافي',
      ],
    },
    {
      name: 'باقة المنشآت الشهرية',
      price: '8,000',
      period: 'شهرياً',
      description: 'للفنادق والمطاعم والمنشآت التجارية',
      popular: true,
      features: [
        'فريق دائم',
        'خدمة 12 ساعة يومياً',
        '6 أيام في الأسبوع',
        'نظام إدارة كامل',
        'تقارير شهرية',
        'تأمين شامل',
        'زي موحد برعايتكم',
        'مشرف ميداني',
        'خصم 10% على العقود السنوية',
        'دعم فني 24/7',
      ],
      extras: [],
    },
    {
      name: 'باقة VIP',
      price: 'حسب الطلب',
      period: '',
      description: 'خدمة فاخرة ومخصصة بالكامل',
      popular: false,
      features: [
        'خدمة مخصصة تماماً',
        'سائقون متخصصون',
        'خدمات إضافية حسب الطلب',
        'أولوية قصوى',
        'سرية تامة',
        'مدير حساب مخصص',
        'تقارير تفصيلية',
        'SLA مخصص',
      ],
      extras: [],
    },
  ];

  return (
    <section ref={ref} className="section-padding bg-black-primary">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-16"
        >
          <p className="text-gray-400 text-lg mb-4">
            جميع الباقات تشمل تأميناً شاملاً وفريقاً محترفاً ونظام تتبع إلكتروني
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
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
                <h3 className={`text-2xl font-bold mb-2 ${plan.popular ? 'text-black-primary' : 'text-gold-primary'}`}>
                  {plan.name}
                </h3>
                <p className={`text-sm mb-4 ${plan.popular ? 'text-black-soft' : 'text-gray-400'}`}>
                  {plan.description}
                </p>
                <div className="mb-2">
                  <span className={`text-5xl font-bold ${plan.popular ? 'text-black-primary' : 'text-white'}`}>
                    {plan.price}
                  </span>
                  {plan.price !== 'حسب الطلب' && (
                    <span className={`text-xl ${plan.popular ? 'text-black-soft' : 'text-gray-400'}`}> ريال</span>
                  )}
                </div>
                {plan.period && (
                  <p className={`text-sm ${plan.popular ? 'text-black-soft' : 'text-gray-400'}`}>{plan.period}</p>
                )}
              </div>

              <div className="space-y-4 mb-8">
                {plan.features.map((feature, i) => (
                  <div key={i} className="flex items-start space-x-3 space-x-reverse">
                    <Check className={`w-5 h-5 flex-shrink-0 mt-0.5 ${plan.popular ? 'text-black-primary' : 'text-gold-primary'}`} />
                    <span className={plan.popular ? 'text-black-primary' : 'text-gray-300'}>{feature}</span>
                  </div>
                ))}
              </div>

              {plan.extras.length > 0 && (
                <div className="border-t border-gray-700 pt-6 mb-6">
                  <p className={`text-sm font-bold mb-3 ${plan.popular ? 'text-black-primary' : 'text-gold-primary'}`}>
                    إضافات:
                  </p>
                  {plan.extras.map((extra, i) => (
                    <p key={i} className={`text-sm mb-2 ${plan.popular ? 'text-black-soft' : 'text-gray-400'}`}>
                      {extra}
                    </p>
                  ))}
                </div>
              )}

              <Link
                href="/contact"
                className={`block w-full py-4 rounded-lg text-center font-bold transition-all ${
                  plan.popular
                    ? 'bg-black-primary text-gold-primary hover:bg-black-soft'
                    : 'bg-gold-primary text-black-primary hover:bg-gold-medium'
                }`}
              >
                {plan.price === 'حسب الطلب' ? 'اطلب عرض سعر' : 'احجز الآن'}
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Additional Services */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8 }}
          className="mt-16 text-center"
        >
          <h3 className="text-2xl font-bold mb-8 text-gold-primary">خدمات إضافية</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { name: 'جولف كار', price: 'حسب المدة' },
              { name: 'غسيل سريع', price: '30-40 ريال' },
              { name: 'غسيل شامل', price: '120-150 ريال' },
              { name: 'خدمات مساندة', price: 'حسب الاحتياج' },
            ].map((service, i) => (
              <div key={i} className="p-6 rounded-xl bg-gradient-dark border border-gold-primary/20">
                <h4 className="font-bold text-white mb-2">{service.name}</h4>
                <p className="text-gold-primary">{service.price}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default PricingPlans;
