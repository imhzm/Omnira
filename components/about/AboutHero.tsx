'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { Building2, Users, Award, Sparkles, Target, Heart } from 'lucide-react';

const AboutHero = () => {
  const highlights = [
    { icon: Building2, text: 'شركة سعودية رائدة', color: 'text-accents-emerald' },
    { icon: Award, text: 'معايير عالمية', color: 'text-sunset-golden' },
    { icon: Users, text: 'فريق محترف', color: 'text-accents-sky' },
  ];

  return (
    <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden pt-20 bg-gradient-to-br from-sage-50 via-white to-beige-light">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=2070"
          alt="فريق عمل أومنيرا المحترف"
          fill
          sizes="100vw"
          className="object-cover opacity-10"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-white/95 via-beige-light/90 to-white/95"></div>
      </div>

      {/* Animated Blobs */}
      <div className="absolute inset-0 z-0 opacity-20">
        <div className="absolute top-20 -left-20 w-96 h-96 bg-sage-primary/30 rounded-full mix-blend-multiply filter blur-3xl animate-blob"></div>
        <div className="absolute top-40 -right-20 w-96 h-96 bg-sunset-golden/30 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-10 left-1/2 w-96 h-96 bg-accents-violet/30 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-4000"></div>
      </div>

      <div className="container-custom relative z-10 py-24">
        <motion.div
          initial={false}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-6xl mx-auto"
        >
          {/* Badge */}
          <motion.div
            initial={false}
            animate={{ scale: 1 }}
            transition={{ delay: 0.1 }}
            className="inline-flex items-center space-x-3 space-x-reverse glass-effect px-8 py-4 rounded-full border-2 border-sage-primary/30 mb-10 group hover:border-sage-primary transition-all"
          >
            <Target className="w-5 h-5 text-sage-primary animate-pulse" />
            <span className="text-sage-primary font-black text-base">رؤية 2030 • ابتكار • تميز</span>
            <Sparkles className="w-5 h-5 text-sunset-golden animate-pulse" />
          </motion.div>

          {/* Main Title */}
          <motion.h1
            initial={false}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-5xl md:text-6xl lg:text-7xl font-black mb-8 leading-tight"
          >
            <span className="gold-shine-effect block">من نحن</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={false}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-xl md:text-2xl text-brown-dark font-medium max-w-4xl mx-auto mb-16 leading-relaxed"
          >
            رواد <span className="text-sage-primary font-bold">خدمات صف السيارات الاحترافية</span> في المملكة العربية السعودية • 
            نساهم في تحقيق <span className="text-sunset-golden font-bold">رؤية 2030</span>
          </motion.p>

          {/* Highlights Grid */}
          <motion.div
            initial={false}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto"
          >
            {highlights.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.5 + index * 0.1 }}
                  className="glass-effect p-8 rounded-3xl border-2 border-sage-primary/20 hover:border-sage-primary hover:shadow-2xl hover:scale-105 transition-all duration-300 group"
                >
                  <Icon className={`w-10 h-10 ${item.color} mx-auto mb-4 group-hover:scale-110 transition-transform`} />
                  <p className="text-brown-dark font-bold text-sm">{item.text}</p>
                </motion.div>
              );
            })}
          </motion.div>

          {/* Company Info */}
          <motion.div
            initial={false}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9 }}
            className="mt-12 inline-flex items-center space-x-2 space-x-reverse bg-gradient-to-r from-sage-primary/10 to-sunset-golden/10 px-6 py-3 rounded-full border border-sage-primary/30"
          >
            <Heart className="w-5 h-5 text-sage-primary" />
            <span className="text-brown-dark font-medium text-sm">السجل التجاري: 7051975600 • الرياض، المملكة العربية السعودية</span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutHero;
