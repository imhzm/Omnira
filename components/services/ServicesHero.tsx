'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { useState } from 'react';

const ServicesHero = () => {
  const [imgError, setImgError] = useState(false);
  const FALLBACK_HERO = 'https://images.pexels.com/photos/1831234/pexels-photo-1831234.jpeg?auto=compress&cs=tinysrgb&w=2074';
  return (
    <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden pt-20 bg-gradient-to-br from-beige-light via-white to-beige-light">
      <div className="absolute inset-0 z-0">
        <Image
          src={imgError ? FALLBACK_HERO : "https://images.unsplash.com/photo-1590674899484-d5640e854abe?q=80&w=2074"}
          alt="خدمات صف السيارات الاحترافية - إدارة مواقف حديثة"
          fill
          sizes="100vw"
          className="object-cover"
          priority
          onError={() => setImgError(true)}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-beige-primary/90 via-beige-primary/60 to-beige-primary/90"></div>
      </div>

      <div className="container-custom relative z-10 text-center py-20">
        <motion.div
          initial={false}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            initial={false}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="inline-block px-8 py-3 chip-blur rounded-full mb-6"
          >
            <span className="text-sage-dark font-semibold">8 خدمات احترافية</span>
          </motion.div>

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6">
            <span className="gold-shine-effect block">خدماتنا المتميزة</span>
          </h1>

          <p className="text-xl md:text-2xl text-brown-text max-w-3xl mx-auto leading-relaxed">
            حلول شاملة ومتكاملة لإدارة مواقف السيارات بأحدث التقنيات وأعلى معايير الجودة
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesHero;
