'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import Image from 'next/image';
import { Star, Quote } from 'lucide-react';

const TestimonialsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const testimonials = [
    {
      name: 'محمد العتيبي',
      position: 'عميل خاص',
      location: 'الرياض',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200',
      rating: 5,
      comment: 'خدمة احترافية للغاية. استخدمت OMNIRA في حفل زفافي وكانت التجربة رائعة. الفريق منظم ومحترم جداً.',
    },
    {
      name: 'سارة القحطاني',
      position: 'مديرة فندق',
      location: 'جدة',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200',
      rating: 5,
      comment: 'نتعامل معهم منذ سنة في فندقنا. نزلاؤنا دائماً راضون عن الخدمة. احترافية وسرعة استجابة ممتازة.',
    },
    {
      name: 'خالد السبيعي',
      position: 'صاحب مطعم',
      location: 'الدمام',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=200',
      rating: 5,
      comment: 'أفضل شركة صف سيارات تعاملت معها. النظام الإلكتروني سهل والأسعار معقولة. أنصح بها بشدة.',
    },
    {
      name: 'عبدالله المطيري',
      position: 'رجل أعمال',
      location: 'الرياض',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=200',
      rating: 5,
      comment: 'خدمة VIP استثنائية. اهتمام بالتفاصيل وسرية تامة. يستحقون التقييم الكامل.',
    },
  ];

  return (
    <section ref={ref} className="section-padding bg-black-soft relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-gold-primary/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-72 h-72 bg-gold-primary/5 rounded-full blur-3xl"></div>

      <div className="container-custom relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gold-shine-effect">آراء عملائنا</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            ثقة عملائنا هي أغلى ما نملك. اقرأ تجاربهم معنا
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard
              key={index}
              testimonial={testimonial}
              index={index}
              isInView={isInView}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

interface TestimonialCardProps {
  testimonial: {
    name: string;
    position: string;
    location: string;
    image: string;
    rating: number;
    comment: string;
  };
  index: number;
  isInView: boolean;
}

const TestimonialCard = ({ testimonial, index, isInView }: TestimonialCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="group"
    >
      <div className="relative p-8 rounded-2xl bg-gradient-dark border border-gold-primary/20 hover:border-gold-primary transition-all duration-300 h-full">
        {/* Quote Icon */}
        <div className="absolute top-6 left-6 opacity-10">
          <Quote className="w-16 h-16 text-gold-primary" />
        </div>

        {/* Rating */}
        <div className="flex items-center space-x-1 space-x-reverse mb-4">
          {[...Array(testimonial.rating)].map((_, i) => (
            <Star key={i} className="w-5 h-5 fill-gold-primary text-gold-primary" />
          ))}
        </div>

        {/* Comment */}
        <p className="text-gray-300 leading-relaxed mb-6 relative z-10">
          &ldquo;{testimonial.comment}&rdquo;
        </p>

        {/* Author */}
        <div className="flex items-center space-x-4 space-x-reverse relative z-10">
          <div className="relative w-14 h-14 rounded-full overflow-hidden ring-2 ring-gold-primary/30 group-hover:ring-gold-primary transition-all">
            <Image
              src={testimonial.image}
              alt={testimonial.name}
              fill
              className="object-cover"
            />
          </div>
          <div>
            <h4 className="font-bold text-white">{testimonial.name}</h4>
            <p className="text-sm text-gray-400">{testimonial.position}</p>
            <p className="text-xs text-gold-primary">{testimonial.location}</p>
          </div>
        </div>

        {/* Hover Effect */}
        <div className="absolute bottom-0 right-0 left-0 h-1 bg-gradient-luxury transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 rounded-b-2xl"></div>
      </div>
    </motion.div>
  );
};

export default TestimonialsSection;
