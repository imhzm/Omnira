'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const ServicesHero = () => {
  return (
    <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden pt-20">
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1590674899484-d5640e854abe?q=80&w=2074"
          alt="خدمات صف السيارات الاحترافية - إدارة مواقف حديثة"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black-primary via-black-primary/70 to-black-primary"></div>
      </div>

      <div className="container-custom relative z-10 text-center py-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="inline-block px-6 py-3 bg-gold-primary/10 border border-gold-primary/30 rounded-full mb-6"
          >
            <span className="text-gold-primary font-medium">8 خدمات احترافية</span>
          </motion.div>

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6">
            <span className="gold-shine-effect block">خدماتنا المتميزة</span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            حلول شاملة ومتكاملة لإدارة مواقف السيارات بأحدث التقنيات وأعلى معايير الجودة
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesHero;
