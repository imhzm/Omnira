'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import Link from 'next/link';
import { Check, ArrowLeft } from 'lucide-react';

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
        'فريق من 8 سائقين محترفين',
        'خدمة لمدة 8 ساعات كاملة',
        'نظام تذاكر إلكتروني متقدم',
        'تأمين شامل على جميع السيارات',
        'زيّ موحّد احترافي فاخر',
        'مشرف موقع متخصص',
        'تطبيق تتبّع فوري',
      ],
      extras: [
        '300 ريال لكل ساعة إضافية',
        '200 ريال رسوم إلغاء (إن وُجدت)',
      ],
      badge: null as string | null,
    },
    {
      name: 'باقة المنشآت الشهرية',
      price: '6,000',
      period: 'شهرياً',
      description: 'للمطاعم، الفنادق، المراكز التجارية والمستشفيات',
      popular: true,
      features: [
        'فريق دائم مخصص لمنشأتك',
        'خدمة مستمرة طوال الشهر',
        'نظام إدارة متكامل وذكي',
        'تقارير شهرية تفصيلية',
        'تأمين شامل ممتد',
        'زيّ موحّد بهوية منشأتك',
        'مشرف ميداني متفرّغ',
        'دعم فني 24/7',
        'تطبيق خاص للإدارة',
        'عقد مرن قابل للتجديد',
      ],
      extras: [] as string[],
      badge: 'الأكثر طلباً',
    },
  ];

  return (
    <section ref={ref} className="py-28 lg:py-40 bg-[#0A0A0C]">
      <div className="container-custom">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="mb-16 text-center text-white/65 text-base lg:text-lg"
        >
          جميع الباقات تشمل تأميناً شاملاً، فريقاً محترفاً، ونظام تتبّع إلكتروني.
        </motion.p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`relative rounded-3xl p-10 md:p-12 transition-colors duration-300 ${
                plan.popular
                  ? 'bg-white/[0.04] border border-gold-primary/30'
                  : 'bg-white/[0.03] border border-white/10 hover:border-white/20'
              }`}
            >
              {plan.badge && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-gold-primary px-5 py-1.5 text-xs font-medium text-[#0A0A0C]">
                  {plan.badge}
                </div>
              )}

              <div className="mb-9">
                <h3 className="mb-3 text-2xl font-medium text-white">{plan.name}</h3>
                <p className="mb-7 text-sm leading-relaxed text-white/65">{plan.description}</p>
                <div className="flex items-baseline gap-2">
                  <span className="text-6xl font-extralight text-gold-light">{plan.price}</span>
                  <span className="text-lg font-light text-white/60">ريال</span>
                  <span className="text-sm text-white/55">/ {plan.period}</span>
                </div>
              </div>

              <div className="mb-9 space-y-4 border-t border-white/10 pt-8">
                {plan.features.map((feature, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <Check className="mt-0.5 h-4 w-4 flex-shrink-0 text-gold-primary" />
                    <span className="text-sm leading-relaxed text-white/70">{feature}</span>
                  </div>
                ))}
              </div>

              {plan.extras.length > 0 && (
                <div className="mb-9 space-y-2 border-t border-white/10 pt-6">
                  <p className="mb-3 text-[11px] font-medium tracking-[0.2em] text-gold-primary/70">
                    إضافات متاحة
                  </p>
                  {plan.extras.map((extra, i) => (
                    <p key={i} className="text-sm text-white/60">{extra}</p>
                  ))}
                </div>
              )}

              <Link
                href="/contact"
                className="group inline-flex items-center gap-3 text-base text-white"
              >
                <span className="border-b border-gold-primary/50 pb-1 transition-colors duration-300 group-hover:border-gold-primary">
                  احجز الآن
                </span>
                <ArrowLeft className="h-5 w-5 text-gold-primary transition-transform duration-300 group-hover:-translate-x-1.5" />
              </Link>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.3 }}
          className="mt-14 text-center text-sm text-white/55"
        >
          للحصول على عرض سعر مخصّص، يسعدنا تواصلك معنا.
        </motion.p>
      </div>
    </section>
  );
};

export default PricingPlans;
