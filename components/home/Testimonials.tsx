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
    <section ref={ref} className="section-padding bg-gradient-to-b from-white via-beige-light to-white relative overflow-hidden">
      {/* Animated Blobs */}
      <div className="absolute inset-0 z-0 opacity-10">
        <div className="absolute top-20 -left-20 w-96 h-96 bg-sunset-golden/40 rounded-full mix-blend-multiply filter blur-3xl animate-blob"></div>
        <div className="absolute -bottom-20 -right-20 w-96 h-96 bg-accents-sky/40 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000"></div>
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
            <Star className="w-5 h-5 text-sunset-golden fill-sunset-golden" />
            <span className="text-sage-primary font-bold text-sm">آراء عملائنا</span>
          </motion.div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6">
            <span className="gold-shine-effect">ماذا يقول عملاؤنا</span>
          </h2>
          <p className="text-brown-dark text-lg md:text-xl max-w-3xl mx-auto font-medium">
            <span className="text-sage-primary font-bold">ثقة عملائنا</span> و<span className="text-sunset-golden font-bold">رضاهم</span> هي أكبر إنجازاتنا
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
              className="group p-8 rounded-3xl bg-white border-2 border-sage-primary/20 hover:border-sage-primary hover:shadow-2xl hover:scale-105 transition-all duration-300 relative"
            >
              {/* Quote Icon */}
              <div className="absolute top-6 left-6 w-14 h-14 rounded-2xl bg-sage-primary/10 flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-all">
                <Quote className="w-7 h-7 text-sage-primary/40" />
              </div>

              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-sunset-golden text-sunset-golden" />
                ))}
              </div>

              {/* Text */}
              <p className="text-brown-text leading-relaxed mb-6 relative z-10">
                &ldquo;{testimonial.text}&rdquo;
              </p>

              {/* Author */}
              <div className="flex items-center gap-4 pt-6 border-t border-beige-medium">
                <div className="relative w-12 h-12 rounded-full overflow-hidden">
                  <Image
                    src={testimonial.image}
                    alt={testimonial.name}
                    fill
                    sizes="48px"
                    className="object-cover"
                  />
                </div>
                <div>
                  <div className="font-bold text-brown-dark">{testimonial.name}</div>
                  <div className="text-sm text-brown-medium">{testimonial.position}</div>
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
          <p className="text-brown-dark text-lg mb-6 font-medium">
            انضم إلى <span className="text-sage-primary font-bold">أكثر من 200 عميل</span> راضٍ عن خدماتنا
          </p>
          <a href="/contact" className="group inline-flex items-center justify-center space-x-3 space-x-reverse bg-gradient-to-r from-sage-primary to-sage-medium text-white px-10 py-5 text-lg font-black rounded-2xl hover:shadow-2xl hover:shadow-sage-primary/30 hover:scale-105 transition-all">
            <span>احجز استشارة مجانية</span>
            <span className="group-hover:-translate-x-2 transition-transform">←</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
