'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Phone } from 'lucide-react';

interface ServiceDetailHeroProps {
  data: {
    title: string;
    subtitle: string;
    heroImage: string;
  };
}

const ServiceDetailHero = ({ data }: ServiceDetailHeroProps) => {
  return (
    <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden pt-20">
      <div className="absolute inset-0 z-0">
        <Image
          src={data.heroImage}
          alt={data.title}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black-primary via-black-primary/80 to-black-primary"></div>
      </div>

      <div className="container-custom relative z-10 py-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl"
        >
          {/* Breadcrumb */}
          <div className="flex items-center space-x-3 space-x-reverse text-sm text-gray-400 mb-6">
            <Link href="/" className="hover:text-gold-primary transition-colors">
              الرئيسية
            </Link>
            <span>/</span>
            <Link href="/services" className="hover:text-gold-primary transition-colors">
              الخدمات
            </Link>
            <span>/</span>
            <span className="text-gold-primary">{data.title}</span>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            <span className="gold-shine-effect">{data.title}</span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
            {data.subtitle}
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/contact"
              className="btn-gold px-8 py-4 text-lg inline-flex items-center justify-center space-x-2 space-x-reverse"
            >
              <span>احجز الآن</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
            
            <a
              href="tel:+966XXXXXXXXX"
              className="px-8 py-4 text-lg border-2 border-gold-primary text-white rounded-lg hover:bg-gold-primary/10 transition-all inline-flex items-center justify-center space-x-2 space-x-reverse"
            >
              <Phone className="w-5 h-5" />
              <span>اتصل بنا</span>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ServiceDetailHero;
