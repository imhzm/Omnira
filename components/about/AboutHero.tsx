'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const AboutHero = () => {
  return (
    <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden pt-20">
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=2070"
          alt="فريق عمل أومنيرا المحترف"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black-primary via-black-primary/80 to-black-primary"></div>
      </div>

      <div className="container-custom relative z-10 text-center py-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="gold-shine-effect">من نحن</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto">
            رواد خدمات صف السيارات الاحترافية في المملكة العربية السعودية
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutHero;
