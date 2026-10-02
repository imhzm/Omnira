'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Link from 'next/link';
import Image from '@/components/ui/BlurImage';
import Particles from '@/components/ui/Particles';
import WebGLFog from '@/components/ui/WebGLFog';
import Magnetic from '@/components/ui/Magnetic';
import { MessageCircle, ArrowLeft } from 'lucide-react';

const fade = {
  hidden: { opacity: 0, y: 26 },
  show: { opacity: 1, y: 0, transition: { duration: 1, ease: [0.22, 0.61, 0.36, 1] } },
};

const lineReveal = {
  hidden: { y: '115%' },
  show: { y: 0, transition: { duration: 1.1, ease: [0.22, 0.61, 0.36, 1] } },
};

const HeroSection = () => {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  });
  const bgScale = useTransform(scrollYProgress, [0, 1], [1, 1.22]);
  const bgY = useTransform(scrollYProgress, [0, 1], ['0%', '14%']);
  const contentY = useTransform(scrollYProgress, [0, 1], [0, -90]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  return (
    <section
      ref={ref}
      data-no-reveal
      className="relative flex min-h-screen items-center overflow-hidden bg-[#0A0A0C]"
    >
      {/* atmospheric background — scrubs with scroll */}
      <motion.div style={{ scale: bgScale, y: bgY }} className="absolute inset-0">
        <Image
          src="/images/atmos/atmos-1.jpg"
          alt="سيارة فاخرة سوداء في خدمة الفاليه وسط الضباب"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0C] via-[#0A0A0C]/55 to-[#0A0A0C]/35" />
        <div className="absolute inset-0 bg-gradient-to-l from-transparent to-[#0A0A0C]/75" />
      </motion.div>

      {/* volumetric gold fog (WebGL) + drifting dust */}
      <WebGLFog className="absolute inset-0 z-[1] opacity-70 mix-blend-screen" />
      <Particles className="absolute inset-0 z-[2]" />

      {/* minimal content — drifts up + fades on scroll */}
      <motion.div style={{ y: contentY, opacity: contentOpacity }} className="container-custom relative z-10">
        <motion.div
          initial="hidden"
          animate="show"
          variants={{ show: { transition: { staggerChildren: 0.18, delayChildren: 0.25 } } }}
          className="max-w-3xl"
        >
          <motion.span
            variants={fade}
            className="mb-9 flex items-center gap-4 text-[11px] font-medium tracking-[0.4em] text-gold-primary/90 md:text-xs"
          >
            <span className="h-px w-12 bg-gold-primary/50" />
            OMNIRA VALET
          </motion.span>

          <motion.h1
            variants={{ show: { transition: { staggerChildren: 0.12 } } }}
            className="font-extralight leading-[1.12] text-white text-[2.7rem] sm:text-6xl lg:text-[5.5rem]"
          >
            <span className="block overflow-hidden pb-[0.12em]">
              <motion.span variants={lineReveal} className="block">نُعيد تعريف</motion.span>
            </span>
            <span className="block overflow-hidden pb-[0.12em]">
              <motion.span variants={lineReveal} className="block">
                لحظة <span className="font-light text-gold-light">الوصول</span>
              </motion.span>
            </span>
          </motion.h1>

          <motion.p
            variants={fade}
            className="mt-9 max-w-md text-base font-light leading-relaxed text-white/55 md:text-lg"
          >
            خدمة صفّ سيارات تليق بمكانك — هدوء، أناقة، وإتقان في كل تفصيلة.
          </motion.p>

          <motion.div variants={fade} className="mt-12 flex flex-wrap items-center gap-4 sm:gap-6">
            <Magnetic strength={0.4}>
              <Link
                href="/contact"
                className="group inline-flex items-center gap-2.5 rounded-full bg-gradient-to-r from-gold-primary via-[#E5B54F] to-gold-light px-7 py-3.5 text-sm font-semibold text-[#0A0A0C] shadow-lg shadow-gold-primary/20 transition-all duration-300 hover:shadow-gold-primary/40 hover:scale-[1.02]"
              >
                <span>احجز الخدمة الآن</span>
                <ArrowLeft className="h-4 w-4 transition-transform duration-300 group-hover:-translate-x-1" />
              </Link>
            </Magnetic>

            <a
              href="https://wa.me/966551962033?text=%D9%85%D8%B1%D8%AD%D8%A8%D8%A7%D9%8B%D8%8C%20%D8%A3%D9%88%D8%AF%20%D8%A7%D9%84%D8%A7%D8%B3%D8%AA%D9%81%D8%B3%D8%A7%D8%B1%20%D8%B9%D9%86%20%D8%AE%D8%AF%D9%85%D8%A7%D8%AA%20%D9%88%D8%AD%D8%AC%D8%B2%20%D8%A3%D9%88%D9%85%D9%86%D9%8A%D8%B1%D8%A7%20%D9%81%D8%A7%D9%84%D9%8A%D9%87"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 rounded-full border border-white/20 bg-white/5 px-6 py-3.5 text-sm font-medium text-white backdrop-blur-md transition-all duration-300 hover:border-[#25D366]/50 hover:bg-[#25D366]/10 hover:text-white"
            >
              <MessageCircle className="h-4 w-4 text-[#25D366]" />
              <span>استشارة واتساب سريعة</span>
            </a>

            <Link
              href="/services"
              className="inline-flex items-center gap-1.5 px-3 py-2 text-sm text-white/60 transition-colors duration-300 hover:text-white"
            >
              <span>استكشف الخدمات</span>
              <span className="text-xs text-gold-primary">←</span>
            </Link>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* scroll hint */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-8 left-1/2 z-10 flex -translate-x-1/2 flex-col items-center gap-3"
      >
        <span className="text-[10px] tracking-[0.4em] text-white/40">SCROLL</span>
        <motion.span
          animate={{ scaleY: [0.4, 1, 0.4], opacity: [0.4, 1, 0.4] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          className="h-8 w-px origin-top bg-gradient-to-b from-gold-primary/80 to-transparent"
        />
      </motion.div>
    </section>
  );
};

export default HeroSection;
