'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import Image from 'next/image';
import { Star, Quote } from 'lucide-react';

const Testimonials = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const testimonials = [
    {
      name: 'محمد العلي',
      position: 'مدير عام فندق الرياض الكبير',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=1000',
      rating: 5,
      text: 'خدمة استثنائية! فريق أومنيرا محترف جداً وملتزم. ضيوفنا يشيدون دائماً بمستوى الخدمة السريعة والراقية. أصبحوا جزءاً أساسياً من تجربة الضيافة في فندقنا.',
    },
    {
      name: 'سارة القحطاني',
      position: 'مالكة مطعم النخبة',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=1000',
      rating: 5,
      text: 'تحول كبير في تجربة عملائنا! منذ أن بدأنا العمل مع أومنيرا، زاد رضا العملاء بشكل ملحوظ. الخدمة السريعة والأسعار المعقولة جعلتهم الخيار الأمثل.',
    },
    {
      name: 'خالد السالم',
      position: 'منسق فعاليات كبرى',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1000',
      rating: 5,
      text: 'نظمنا حفل زفاف بـ 300 ضيف وكان فريق أومنيرا رائعاً! تخطيط مسبق ممتاز، سائقون مهذبون، ونظام إلكتروني سهّل كل شيء. أنصح بهم بشدة!',
    },
    {
      name: 'فهد المطيري',
      position: 'مدير مركز الأعمال',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1000',
      rating: 5,
      text: 'عقدنا معهم سنوياً لإدارة موقف المركز. الخدمة احترافية، التقارير الشهرية مفصلة، والأسعار تنافسية. علاقة شراكة حقيقية.',
    },
    {
      name: 'نورة العتيبي',
      position: 'مديرة علاقات عامة',
      image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1000',
      rating: 5,
      text: 'استخدمنا خدمة VIP لاستقبال وفد دولي. السرية، الاحترافية، والاهتمام بالتفاصيل كان على أعلى مستوى. شكراً أومنيرا!',
    },
    {
      name: 'عبدالله الدوسري',
      position: 'صاحب مجمع تجاري',
      image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=1000',
      rating: 5,
      text: 'النظام الذكي الذي قدموه غيّر تجربة التسوق في مجمعنا. الزوار يجدون مواقف بسهولة والازدحام انخفض بنسبة 40%. استثمار يستحق!',
    },
  ];

  return (
    <section ref={ref} className="section-padding bg-black-soft">
      <div className="container-custom">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="heading-gradient">ماذا يقول عملاؤنا</span>
          </h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            ثقة عملائنا ورضاهم هي أكبر إنجازاتنا
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="luxury-card relative"
            >
              {/* Quote Icon */}
              <Quote className="absolute top-6 left-6 w-12 h-12 text-gold-primary/20" />

              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-gold-primary text-gold-primary" />
                ))}
              </div>

              {/* Text */}
              <p className="text-gray-300 leading-relaxed mb-6 relative z-10">
                &ldquo;{testimonial.text}&rdquo;
              </p>

              {/* Author */}
              <div className="flex items-center gap-4 pt-6 border-t border-gold-primary/20">
                <div className="relative w-12 h-12 rounded-full overflow-hidden">
                  <Image
                    src={testimonial.image}
                    alt={testimonial.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <div className="font-bold text-white">{testimonial.name}</div>
                  <div className="text-sm text-gray-400">{testimonial.position}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center mt-16"
        >
          <p className="text-gray-400 text-lg mb-6">
            انضم إلى أكثر من 200 عميل راضٍ عن خدماتنا
          </p>
          <a href="/contact" className="btn-gold px-10 py-5 text-lg inline-flex items-center gap-2">
            <span>احجز استشارة مجانية</span>
            <span>←</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
