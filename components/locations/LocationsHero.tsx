'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const LocationsHero = () => {
  return (
    <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden pt-20">
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1570268499668-daac19e08478?q=80&w=2074"
          alt="مدن المملكة العربية السعودية"
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
          <motion.div
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="inline-block px-6 py-3 bg-gold-primary/10 border border-gold-primary/30 rounded-full mb-6"
          >
            <span className="text-gold-primary font-medium">نخدم جميع أنحاء المملكة</span>
          </motion.div>

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6">
            <span className="gold-shine-effect block">المدن التي نخدمها</span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            خدمات صف السيارات الاحترافية متوفرة في جميع مدن المملكة العربية السعودية
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default LocationsHero;
