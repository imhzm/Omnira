'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Phone, Mail, MessageCircle, ArrowLeft, Sparkles } from 'lucide-react';

const CTASection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section ref={ref} className="section-padding bg-gradient-to-b from-sage-50 via-white to-sage-50 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?q=80&w=2070"
          alt="اتصل بنا"
          fill
          sizes="100vw"
          className="object-cover opacity-5"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-white via-sage-50/50 to-white"></div>
      </div>

      {/* Animated Blobs */}
      <div className="absolute inset-0 z-0 opacity-20">
        <div className="absolute -top-20 -left-20 w-96 h-96 bg-sage-primary/30 rounded-full mix-blend-multiply filter blur-3xl animate-blob"></div>
        <div className="absolute -top-20 -right-20 w-96 h-96 bg-sunset-golden/30 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-20 left-1/2 w-96 h-96 bg-accents-mint/30 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-4000"></div>
      </div>

      <div className="container-custom relative z-10">
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              className="inline-flex items-center space-x-2 space-x-reverse glass-effect px-6 py-3 rounded-full border-2 border-sage-primary/30 mb-8"
            >
              <Sparkles className="w-5 h-5 text-sage-primary animate-pulse" />
              <span className="text-sage-primary font-bold text-sm">تواصل معنا اليوم</span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl lg:text-6xl font-black mb-6"
            >
              <span className="gold-shine-effect">جاهز للبدء؟</span>
            </motion.h2>
            
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 }}
              className="text-xl md:text-2xl text-brown-dark font-medium mb-12 max-w-3xl mx-auto"
            >
              احجز خدمة <span className="text-sage-primary font-bold">صف السيارات الاحترافية</span> الآن واستمتع بتجربة <span className="text-sunset-golden font-bold">استثنائية</span>
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4 justify-center mb-16"
            >
              <Link href="/contact" className="group inline-flex items-center justify-center space-x-3 space-x-reverse bg-gradient-to-r from-sage-primary to-sage-medium text-white px-10 py-5 text-lg font-black rounded-2xl hover:shadow-2xl hover:shadow-sage-primary/30 hover:scale-105 transition-all">
                <span>احجز الآن</span>
                <ArrowLeft className="w-5 h-5 group-hover:-translate-x-2 transition-transform" />
              </Link>
              <Link href="/pricing" className="inline-flex items-center justify-center space-x-2 space-x-reverse px-10 py-5 text-lg font-bold border-2 border-sage-primary text-sage-primary rounded-2xl hover:bg-sage-primary hover:text-white hover:shadow-xl transition-all">
                <span>اطلب عرض سعر</span>
              </Link>
            </motion.div>
          </div>

          {/* Contact Cards */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.4 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
          >
            <a href="tel:+966XXXXXXXXX" className="group p-8 rounded-3xl bg-white border-2 border-sage-primary/20 hover:border-sage-primary hover:shadow-2xl hover:scale-105 transition-all duration-300">
              <div className="w-16 h-16 rounded-2xl bg-sage-primary/10 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <Phone className="w-8 h-8 text-sage-primary" />
              </div>
              <h3 className="font-black mb-2 text-brown-dark text-lg">اتصل بنا</h3>
              <p className="text-sage-primary font-bold" dir="ltr">+966 XX XXX XXXX</p>
            </a>
            
            <a href="https://wa.me/966XXXXXXXXX" className="group p-8 rounded-3xl bg-white border-2 border-sage-primary/20 hover:border-sage-primary hover:shadow-2xl hover:scale-105 transition-all duration-300">
              <div className="w-16 h-16 rounded-2xl bg-accents-emerald/10 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <MessageCircle className="w-8 h-8 text-accents-emerald" />
              </div>
              <h3 className="font-black mb-2 text-brown-dark text-lg">واتساب</h3>
              <p className="text-accents-emerald font-bold">راسلنا الآن</p>
            </a>
            
            <a href="mailto:info@omnira.sa" className="group p-8 rounded-3xl bg-white border-2 border-sage-primary/20 hover:border-sage-primary hover:shadow-2xl hover:scale-105 transition-all duration-300">
              <div className="w-16 h-16 rounded-2xl bg-accents-sky/10 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <Mail className="w-8 h-8 text-accents-sky" />
              </div>
              <h3 className="font-black mb-2 text-brown-dark text-lg">البريد الإلكتروني</h3>
              <p className="text-accents-sky font-bold">info@omnira.sa</p>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
