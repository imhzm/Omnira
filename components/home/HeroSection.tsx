'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowLeft, Play } from 'lucide-react';
import Image from 'next/image';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24">
      {/* Background Slideshow */}
      <div className="absolute inset-0 z-0">
        {/* Main Background Image */}
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1514316454349-750a7fd3da3a?q=80&w=2187"
            alt="فاليه باركينج فاخر - سيارات فخمة أمام فندق 5 نجوم"
            fill
            className="object-cover"
            priority
            quality={95}
          />
        </div>
        {/* Gradient Overlays - طبقات فاخرة */}
        <div className="absolute inset-0 bg-gradient-to-b from-black via-black/70 to-black"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-transparent to-black/80"></div>
        <div className="absolute inset-0 bg-gradient-hero-premium"></div>
        {/* Animated Mesh Gradient */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-0 -left-4 w-72 h-72 bg-gold-primary/20 rounded-full mix-blend-multiply filter blur-3xl animate-blob"></div>
          <div className="absolute top-0 -right-4 w-72 h-72 bg-gold-rose/20 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000"></div>
          <div className="absolute -bottom-8 left-20 w-72 h-72 bg-gold-champagne/20 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-4000"></div>
        </div>
      </div>

      {/* Animated Particles */}
      <div className="absolute inset-0 z-10 pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-gold-light rounded-full"
            initial={{ opacity: 0, scale: 0 }}
            animate={{
              opacity: [0, 1, 0],
              scale: [0, 1, 0],
              x: Math.random() * 1920,
              y: Math.random() * 1080,
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="container-custom relative z-20 text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          {/* Premium Badge - شارة فاخرة */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="inline-flex items-center space-x-2 space-x-reverse glass-effect px-8 py-4 rounded-full border border-gold-primary/40 mb-10 relative overflow-hidden group"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-gold-primary/5 via-gold-primary/10 to-gold-primary/5 group-hover:from-gold-primary/10 group-hover:via-gold-primary/20 group-hover:to-gold-primary/10 transition-all duration-500"></div>
            <div className="absolute inset-0 bg-gradient-shimmer animate-shimmer"></div>
            <span className="w-2.5 h-2.5 bg-gold-primary rounded-full animate-pulse relative z-10 shadow-lg shadow-gold-primary/50"></span>
            <span className="text-gold-primary text-sm font-semibold relative z-10 tracking-wide">السجل التجاري: 7051975600</span>
          </motion.div>

          {/* Main Heading - عنوان فاخر */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-5xl md:text-6xl lg:text-8xl font-black mb-8 leading-[1.1]"
          >
            <span className="heading-gradient block">فاليه باركينج</span>
            <span className="text-white block mt-3">فاخر يليق بك</span>
          </motion.h1>

          {/* Subtitle - عنوان فرعي فاخر */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="max-w-4xl mx-auto mb-12 space-y-4"
          >
            <p className="text-2xl md:text-3xl text-gold-light font-semibold leading-relaxed">
              خدمة فاخرة • راحة استثنائية • احترافية عالية
            </p>
            <p className="text-lg md:text-xl text-gray-300 leading-relaxed max-w-3xl mx-auto">
              نوفر لك ولضيوفك تجربة فاليه باركينج مميزة تجمع بين الأمان والفخامة. 
              <span className="text-gold-primary font-semibold">حلول ذكية</span> للفنادق، المطاعم، والفعاليات في جميع أنحاء المملكة.
            </p>
          </motion.div>

          {/* CTA Buttons - أزرار فاخرة */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-6"
          >
            <Link
              href="/contact"
              className="btn-gold px-10 py-5 text-lg font-bold group inline-flex items-center space-x-3 space-x-reverse shadow-2xl shadow-gold-primary/30 hover:shadow-gold-primary/50 transition-all duration-300"
            >
              <span>احجز الآن</span>
              <ArrowLeft className="w-6 h-6 group-hover:-translate-x-2 transition-transform" />
            </Link>
            
            <button className="px-10 py-5 text-lg font-semibold border-2 border-gold-primary/50 text-white rounded-xl hover:bg-gold-primary/10 hover:border-gold-primary transition-all duration-300 inline-flex items-center space-x-3 space-x-reverse group backdrop-blur-sm relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-gold-primary/0 via-gold-primary/5 to-gold-primary/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <Play className="w-5 h-5 group-hover:scale-125 transition-transform relative z-10" />
              <span className="relative z-10">شاهد الفيديو</span>
            </button>
          </motion.div>

          {/* Trust Badges */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.8 }}
            className="mt-16 flex flex-wrap items-center justify-center gap-8"
          >
            <div className="flex items-center space-x-2 space-x-reverse text-gray-400">
              <svg className="w-5 h-5 text-gold-primary" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
              <span className="text-sm">99.9% رضا العملاء</span>
            </div>
            <div className="flex items-center space-x-2 space-x-reverse text-gray-400">
              <svg className="w-5 h-5 text-gold-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
              <span className="text-sm">تأمين شامل</span>
            </div>
            <div className="flex items-center space-x-2 space-x-reverse text-gray-400">
              <svg className="w-5 h-5 text-gold-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span className="text-sm">خدمة 24/7</span>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-6 h-10 border-2 border-gold-primary rounded-full flex justify-center p-2"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-1 h-2 bg-gold-primary rounded-full"
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
