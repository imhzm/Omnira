'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Phone } from 'lucide-react';
import { useState } from 'react';

interface ServiceDetailHeroProps {
  data: {
    title: string;
    subtitle: string;
    heroImage: string;
  };
}

const ServiceDetailHero = ({ data }: ServiceDetailHeroProps) => {
  const [imgError, setImgError] = useState(false);
  const FALLBACK_HERO = 'https://images.pexels.com/photos/1831234/pexels-photo-1831234.jpeg?auto=compress&cs=tinysrgb&w=1920';
  return (
    <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden pt-20 bg-gradient-to-br from-beige-light via-white to-beige-light">
      <div className="absolute inset-0 z-0">
        <Image
          src={imgError ? FALLBACK_HERO : data.heroImage}
          alt={data.title}
          fill
          sizes="100vw"
          className="object-cover"
          priority
          onError={() => setImgError(true)}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-beige-primary/90 via-white/70 to-beige-primary"></div>
      </div>

      <div className="container-custom relative z-10 py-20">
        <motion.div
          initial={false}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl"
        >
          {/* Breadcrumb */}
          <div className="flex items-center space-x-3 space-x-reverse text-sm text-brown-medium mb-6">
            <Link href="/" className="hover:text-gold-primary transition-colors">
              الرئيسية
            </Link>
            <span>/</span>
            <Link href="/services" className="hover:text-gold-primary transition-colors">
              الخدمات
            </Link>
            <span>/</span>
            <span className="text-sage-primary">{data.title}</span>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-on-media">
            <span className="gold-shine-effect">{data.title}</span>
          </h1>

          <p className="text-xl md:text-2xl text-brown-text mb-8 leading-relaxed">
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
              className="px-8 py-4 text-lg border-2 border-sage-primary text-sage-dark rounded-lg hover:bg-sage-primary hover:text-white transition-all inline-flex items-center justify-center space-x-2 space-x-reverse"
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
