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
    <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden pt-20 bg-gradient-to-br from-sage-soft via-white to-beige-light">
      <div className="absolute inset-0 z-0">
        <Image
          src={imgError ? FALLBACK_HERO : data.heroImage}
          alt={data.title}
          fill
          sizes="100vw"
          className="object-cover opacity-15"
          priority
          onError={() => setImgError(true)}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-beige-light/95 via-white/90 to-beige-light/95"></div>
      </div>

      <div className="container-custom relative z-10 py-24">
        <motion.div
          initial={{ opacity: 1 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-5xl mx-auto"
        >
          {/* Breadcrumb */}
          <div className="flex items-center space-x-3 space-x-reverse text-sm mb-8">
            <Link href="/" className="text-brown-dark hover:text-sage-primary transition-colors font-medium">
              الرئيسية
            </Link>
            <span className="text-brown-text">/</span>
            <Link href="/services" className="text-brown-dark hover:text-sage-primary transition-colors font-medium">
              الخدمات
            </Link>
            <span className="text-brown-text">/</span>
            <span className="text-sage-primary font-bold">{data.title}</span>
          </div>

          {/* Badge */}
          <div className="inline-flex items-center space-x-2 space-x-reverse glass-effect px-6 py-3 rounded-full border border-sage-primary/30 mb-6">
            <div className="w-2 h-2 bg-sage-primary rounded-full animate-pulse"></div>
            <span className="text-sage-primary font-bold text-sm">خدمة احترافية</span>
          </div>

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-black mb-6 leading-tight">
            <span className="gold-shine-effect">{data.title}</span>
          </h1>

          <p className="text-xl md:text-2xl text-brown-dark font-medium mb-10 leading-relaxed max-w-3xl">
            {data.subtitle}
          </p>

          {/* Features Pills */}
          <div className="flex flex-wrap gap-3 mb-10">
            <div className="glass-effect px-5 py-2 rounded-xl border border-sage-primary/20 text-brown-dark font-semibold text-sm">
              ✅ تأمين شامل
            </div>
            <div className="glass-effect px-5 py-2 rounded-xl border border-sage-primary/20 text-brown-dark font-semibold text-sm">
              ✅ فريق محترف
            </div>
            <div className="glass-effect px-5 py-2 rounded-xl border border-sage-primary/20 text-brown-dark font-semibold text-sm">
              ✅ خدمة 24/7
            </div>
            <div className="glass-effect px-5 py-2 rounded-xl border border-sage-primary/20 text-brown-dark font-semibold text-sm">
              ✅ أسعار تنافسية
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/contact"
              className="btn-gold px-10 py-5 text-lg font-bold inline-flex items-center justify-center space-x-3 space-x-reverse group transition-all duration-500"
            >
              <span>احجز الآن</span>
              <ArrowRight className="w-6 h-6 group-hover:-translate-x-1 transition-transform duration-500" />
            </Link>
            
            <a
              href="https://wa.me/966XXXXXXXXX"
              target="_blank"
              rel="noopener noreferrer"
              className="px-10 py-5 text-lg font-bold border-2 border-sage-primary text-brown-dark bg-white/80 backdrop-blur-sm rounded-2xl hover:bg-sage-primary hover:text-white transition-all inline-flex items-center justify-center space-x-3 space-x-reverse group"
            >
              <Phone className="w-6 h-6 group-hover:rotate-12 transition-transform" />
              <span>واتساب فوري</span>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ServiceDetailHero;
