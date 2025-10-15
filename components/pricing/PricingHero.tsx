'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const PricingHero = () => {
  return (
    <section className="relative min-h-[50vh] flex items-center justify-center overflow-hidden pt-20">
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=2070"
          alt="الأسعار والباقات"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black-primary via-black-primary/80 to-black-primary"></div>
      </div>

      <div className="container-custom relative z-10 text-center py-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="gold-shine-effect">الأسعار والباقات</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-2xl mx-auto">
            اختر الباقة التي تناسب احتياجاتك - جودة عالية بأسعار تنافسية
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default PricingHero;
