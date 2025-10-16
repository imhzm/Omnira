'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Phone, Mail, MessageCircle, ArrowLeft } from 'lucide-react';

const CTASection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section ref={ref} className="section-padding bg-gradient-to-b from-white via-beige-light to-white relative overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?q=80&w=2070"
          alt="اتصل بنا"
          fill
          sizes="100vw"
          className="object-cover opacity-10"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-beige-primary via-white/80 to-transparent"></div>
      </div>

      <div className="container-custom relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            className="text-4xl md:text-5xl font-bold mb-6 gold-shine-effect"
          >
            جاهز للبدء؟
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2 }}
            className="text-xl text-brown-text mb-12"
          >
            احجز خدمة صف السيارات الاحترافية الآن واستمتع بتجربة استثنائية
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
          >
            <Link href="/contact" className="btn-gold px-10 py-5 text-lg">
              احجز الآن
            </Link>
            <Link href="/pricing" className="px-10 py-5 text-lg border-2 border-sage-primary text-sage-dark rounded-lg hover:bg-sage-primary hover:text-white transition-all">
              اطلب عرض سعر
            </Link>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <a href="tel:+966XXXXXXXXX" className="p-6 rounded-2xl bg-white border-2 border-beige-medium hover:border-sage-primary transition-all shadow-sm hover:shadow-xl">
              <Phone className="w-7 h-7 text-sage-primary mx-auto mb-4" />
              <h3 className="font-bold mb-2 text-brown-dark">اتصل بنا</h3>
              <p className="text-sage-primary" dir="ltr">+966 XX XXX XXXX</p>
            </a>
            <a href="https://wa.me/966XXXXXXXXX" className="p-6 rounded-2xl bg-white border-2 border-beige-medium hover:border-sage-primary transition-all shadow-sm hover:shadow-xl">
              <MessageCircle className="w-7 h-7 text-sage-primary mx-auto mb-4" />
              <h3 className="font-bold mb-2 text-brown-dark">واتساب</h3>
              <p className="text-sage-primary">راسلنا الآن</p>
            </a>
            <a href="mailto:info@omnira.sa" className="p-6 rounded-2xl bg-white border-2 border-beige-medium hover:border-sage-primary transition-all shadow-sm hover:shadow-xl">
              <Mail className="w-7 h-7 text-sage-primary mx-auto mb-4" />
              <h3 className="font-bold mb-2 text-brown-dark">البريد</h3>
              <p className="text-sage-primary">info@omnira.sa</p>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
