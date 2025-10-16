'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { Sparkles, Shield, Clock, TrendingDown, CheckCircle2, Star } from 'lucide-react';

const PricingHero = () => {
  const features = [
    { icon: Shield, text: 'تأمين شامل' },
    { icon: CheckCircle2, text: 'بدون رسوم خفية' },
    { icon: TrendingDown, text: 'أسعار تنافسية' },
    { icon: Clock, text: 'خدمة 24/7' },
  ];

  return (
    <section className="relative min-h-[75vh] flex items-center justify-center overflow-hidden pt-20 bg-gradient-to-br from-sage-50 via-white to-beige-light">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=2070"
          alt="الأسعار والباقات"
          fill
          sizes="100vw"
          className="object-cover opacity-10"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-white/95 via-beige-light/90 to-white/95"></div>
      </div>

      {/* Animated Blobs */}
      <div className="absolute inset-0 z-0 opacity-20">
        <div className="absolute top-20 left-10 w-96 h-96 bg-sage-primary/20 rounded-full mix-blend-multiply filter blur-3xl animate-blob"></div>
        <div className="absolute top-40 right-10 w-96 h-96 bg-sunset-golden/20 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-20 left-1/3 w-96 h-96 bg-accents-mint/20 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-4000"></div>
      </div>

      <div className="container-custom relative z-10 py-20">
        <motion.div
          initial={false}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-5xl mx-auto"
        >
          {/* Badge */}
          <motion.div
            initial={false}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.1 }}
            className="inline-flex items-center space-x-2 space-x-reverse glass-effect px-6 py-3 rounded-full border-2 border-sage-primary/30 mb-8 group hover:border-sage-primary transition-all"
          >
            <Star className="w-5 h-5 text-sunset-golden animate-pulse" />
            <span className="text-sage-primary font-bold text-sm">عرض خاص: خصم 10% على العقود السنوية</span>
            <Sparkles className="w-4 h-4 text-sunset-golden" />
          </motion.div>

          {/* Main Title */}
          <motion.h1
            initial={false}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-5xl md:text-6xl lg:text-7xl font-black mb-6 leading-tight"
          >
            <span className="gold-shine-effect">الأسعار والباقات</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={false}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-xl md:text-2xl text-brown-dark font-medium max-w-3xl mx-auto mb-12 leading-relaxed"
          >
            اختر الباقة المثالية لاحتياجاتك • 
            <span className="text-sage-primary font-bold"> جودة عالية</span> • 
            <span className="text-sunset-golden font-bold"> أسعار تنافسية</span>
          </motion.p>

          {/* Features Grid */}
          <motion.div
            initial={false}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto"
          >
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.5 + index * 0.1 }}
                  className="glass-effect p-6 rounded-2xl border-2 border-sage-primary/20 hover:border-sage-primary hover:shadow-xl hover:scale-105 transition-all duration-300 group"
                >
                  <Icon className="w-8 h-8 text-sage-primary mx-auto mb-3 group-hover:scale-110 transition-transform" />
                  <p className="text-brown-dark font-bold text-sm">{feature.text}</p>
                </motion.div>
              );
            })}
          </motion.div>

          {/* Pricing Note */}
          <motion.div
            initial={false}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9 }}
            className="mt-12 inline-flex items-center space-x-2 space-x-reverse bg-gradient-to-r from-accents-emerald/10 to-sage-primary/10 px-6 py-3 rounded-full border border-sage-primary/30"
          >
            <CheckCircle2 className="w-5 h-5 text-sage-primary" />
            <span className="text-brown-dark font-medium text-sm">جميع الأسعار شاملة للتأمين والدعم الفني</span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default PricingHero;
