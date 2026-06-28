'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';

const sectors = [
  {
    title: 'الفنادق',
    desc: 'استقبال راقٍ يليق بضيوف الفنادق الفاخرة الخمس نجوم.',
    img: '/images/services/hotels-service.jpg',
    href: '/services/hotels',
  },
  {
    title: 'المطاعم',
    desc: 'تجربة وصول سلسة وأنيقة لروّاد المطاعم الراقية.',
    img: '/images/services/restaurants-service.jpg',
    href: '/services/restaurants',
  },
  {
    title: 'الفعاليات',
    desc: 'إدارة وصول مئات السيارات في أكبر الفعاليات والمناسبات.',
    img: '/images/services/events-service.jpg',
    href: '/services/events',
  },
  {
    title: 'المراكز التجارية',
    desc: 'انسيابية وراحة لزوّار المولات والمراكز التجارية.',
    img: '/images/testimonials/mall.jpg',
    href: '/services/malls',
  },
  {
    title: 'الشركات',
    desc: 'حلول مواقف متكاملة لمقرّات الشركات والمنشآت الكبرى.',
    img: '/images/hero/hero-4.jpg',
    href: '/services/corporate',
  },
];

export default function GiantSectors() {
  return (
    <section id="sectors" className="relative bg-[#0A0A0C] py-24 lg:py-32 overflow-hidden">
      {/* heading */}
      <div className="container-custom mb-14 lg:mb-20">
        <motion.span
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          className="flex items-center gap-3 text-gold-primary tracking-[0.25em] text-[11px] md:text-sm font-bold mb-5"
        >
          <span className="h-px w-10 bg-gold-primary/70" />
          القطاعات التي نخدمها
        </motion.span>
        <motion.h2
          initial={{ opacity: 0, y: 36 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.8, ease: [0.22, 0.61, 0.36, 1] }}
          className="text-white font-black leading-[0.95] tracking-tight text-4xl sm:text-6xl lg:text-7xl"
        >
          أينما كان وصولك،
          <br />
          <span className="text-white/35">نحن في الاستقبال.</span>
        </motion.h2>
      </div>

      {/* giant interactive rows */}
      <div className="border-t border-white/10">
        {sectors.map((s, i) => (
          <Link
            key={s.title}
            href={s.href}
            className="group relative block overflow-hidden border-b border-white/10"
          >
            {/* image reveal */}
            <div className="pointer-events-none absolute inset-0 scale-110 opacity-0 transition-all duration-700 ease-out group-hover:scale-100 group-hover:opacity-100">
              <Image src={s.img} alt={s.title} fill sizes="100vw" className="object-cover" />
              <div className="absolute inset-0 bg-gradient-to-l from-black/85 via-black/55 to-black/90" />
            </div>

            <div className="container-custom relative z-10 flex items-center justify-between gap-6 py-7 lg:py-10">
              <div className="flex min-w-0 items-baseline gap-5 lg:gap-9">
                <span className="shrink-0 font-mono text-sm text-gold-primary/60 lg:text-base">
                  0{i + 1}
                </span>
                <div className="min-w-0">
                  <h3 className="font-black leading-none tracking-tight text-white text-[2.7rem] sm:text-7xl lg:text-8xl transition-transform duration-500 group-hover:-translate-x-2">
                    {s.title}
                  </h3>
                  <p className="mt-0 max-h-0 overflow-hidden text-sm text-white/0 transition-all duration-500 group-hover:mt-3 group-hover:max-h-24 group-hover:text-white/80 lg:text-lg">
                    {s.desc}
                  </p>
                </div>
              </div>
              <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full border border-white/25 text-white transition-all duration-500 group-hover:border-gold-primary group-hover:bg-gold-primary group-hover:text-[#0A0A0C] lg:h-16 lg:w-16">
                <ArrowLeft className="h-6 w-6 -rotate-45 transition-transform duration-500 group-hover:rotate-0" />
              </span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
