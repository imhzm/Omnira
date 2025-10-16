'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { useState } from 'react';
import { Building2, CarFront, Cpu, Users, FileText, Cable, Headphones, Droplets, Sparkles } from 'lucide-react';

const ServicesHero = () => {
  const [imgError, setImgError] = useState(false);
  const FALLBACK_HERO = 'https://images.pexels.com/photos/1831234/pexels-photo-1831234.jpeg?auto=compress&cs=tinysrgb&w=2074';
  
  const stats = [
    { number: '8', label: 'خدمات متكاملة', icon: Sparkles },
    { number: '500+', label: 'مشروع ناجح', icon: Building2 },
    { number: '24/7', label: 'دعم فني', icon: Headphones },
  ];

  return (
    <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden pt-20 bg-gradient-to-br from-sage-50 via-white to-beige-light">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <Image
          src={imgError ? FALLBACK_HERO : "https://images.unsplash.com/photo-1590674899484-d5640e854abe?q=80&w=2074"}
          alt="خدمات صف السيارات الاحترافية"
          fill
          sizes="100vw"
          className="object-cover opacity-10"
          priority
          onError={() => setImgError(true)}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-white/95 via-beige-light/90 to-white/95"></div>
      </div>

      {/* Animated Blobs */}
      <div className="absolute inset-0 z-0 opacity-20">
        <div className="absolute top-20 -left-20 w-96 h-96 bg-sage-primary/30 rounded-full mix-blend-multiply filter blur-3xl animate-blob"></div>
        <div className="absolute top-40 -right-20 w-96 h-96 bg-sunset-golden/30 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-10 left-1/2 w-96 h-96 bg-accents-mint/30 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-4000"></div>
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
            <Sparkles className="w-5 h-5 text-sage-primary animate-pulse" />
            <span className="text-sage-primary font-black text-base">8 خدمات احترافية متكاملة</span>
            <Sparkles className="w-5 h-5 text-sunset-golden animate-pulse" />
          </motion.div>

          {/* Main Title */}
          <motion.h1
            initial={false}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-5xl md:text-6xl lg:text-7xl font-black mb-8 leading-tight"
          >
            <span className="gold-shine-effect block">خدماتنا المتميزة</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={false}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-xl md:text-2xl text-brown-dark font-medium max-w-4xl mx-auto mb-16 leading-relaxed"
          >
            حلول شاملة ومتكاملة لإدارة مواقف السيارات • 
            <span className="text-sage-primary font-bold"> أحدث التقنيات</span> • 
            <span className="text-sunset-golden font-bold"> معايير عالمية</span>
          </motion.p>

          {/* Stats */}
          <motion.div
            initial={false}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto"
          >
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.5 + index * 0.1 }}
                  className="glass-effect p-8 rounded-3xl border-2 border-sage-primary/20 hover:border-sage-primary hover:shadow-2xl hover:scale-105 transition-all duration-300 group"
                >
                  <Icon className="w-10 h-10 text-sage-primary mx-auto mb-4 group-hover:scale-110 transition-transform" />
                  <div className="text-5xl font-black mb-2 bg-gradient-to-r from-sage-primary to-sage-medium bg-clip-text text-transparent">
                    {stat.number}
                  </div>
                  <p className="text-brown-dark font-bold text-sm">{stat.label}</p>
                </motion.div>
              );
            })}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesHero;
