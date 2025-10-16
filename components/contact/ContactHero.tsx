'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { Phone, Mail, MessageCircle } from 'lucide-react';

const ContactHero = () => {
  return (
    <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden pt-20 bg-gradient-to-br from-beige-light via-white to-sage-soft">
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1423666639041-f56000c27a9a?q=80&w=2074"
          alt="تواصل معنا"
          fill
          sizes="100vw"
          className="object-cover opacity-20"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-beige-light/95 via-white/90 to-beige-light/95"></div>
      </div>

      <div className="container-custom relative z-10 text-center py-20">
        <motion.div
          initial={false}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-6"
        >
          <div className="inline-flex items-center space-x-2 space-x-reverse glass-effect px-6 py-3 rounded-full border border-sage-primary/30 mb-4">
            <div className="w-2 h-2 bg-sage-primary rounded-full animate-pulse"></div>
            <span className="text-sage-primary font-semibold text-sm">متاحون 24/7</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-black mb-6">
            <span className="gold-shine-effect">تواصل معنا</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-brown-dark font-medium max-w-3xl mx-auto leading-relaxed">
            نسعد بخدمتك! فريقنا المحترف جاهز للرد على استفساراتك وتقديم أفضل حلول صف السيارات
          </p>
          
          <div className="flex flex-wrap items-center justify-center gap-6 mt-8">
            <div className="flex items-center space-x-3 space-x-reverse glass-effect px-6 py-3 rounded-xl border border-sage-primary/20">
              <Phone className="w-5 h-5 text-sage-primary" />
              <span className="text-brown-dark font-semibold">رد فوري</span>
            </div>
            <div className="flex items-center space-x-3 space-x-reverse glass-effect px-6 py-3 rounded-xl border border-sage-primary/20">
              <Mail className="w-5 h-5 text-sage-primary" />
              <span className="text-brown-dark font-semibold">دعم 24/7</span>
            </div>
            <div className="flex items-center space-x-3 space-x-reverse glass-effect px-6 py-3 rounded-xl border border-sage-primary/20">
              <MessageCircle className="w-5 h-5 text-sage-primary" />
              <span className="text-brown-dark font-semibold">واتساب فوري</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactHero;
