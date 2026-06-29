'use client';

import { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowLeft } from 'lucide-react';

const sectors = [
  { title: 'الفنادق', desc: 'استقبال راقٍ يليق بضيوف الفنادق الفاخرة.', img: '/images/services/hotels-service.jpg', href: '/services/hotels' },
  { title: 'المطاعم', desc: 'تجربة وصول سلسة لروّاد المطاعم الراقية.', img: '/images/services/restaurants-service.jpg', href: '/services/restaurants' },
  { title: 'الفعاليات', desc: 'إدارة وصول مئات السيارات في الفعاليات الكبرى.', img: '/images/services/events-service.jpg', href: '/services/events' },
  { title: 'المراكز التجارية', desc: 'انسيابية وراحة لزوّار المولات والمراكز.', img: '/images/testimonials/mall.jpg', href: '/services/malls' },
  { title: 'الشركات', desc: 'حلول مواقف متكاملة للمقرّات والمنشآت الكبرى.', img: '/images/hero/hero-4.jpg', href: '/services/corporate' },
];

export default function HorizontalSectors() {
  const ref = useRef<HTMLElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const [dist, setDist] = useState(0);

  useEffect(() => {
    const measure = () => {
      if (trackRef.current) setDist(Math.max(0, trackRef.current.scrollWidth - window.innerWidth));
    };
    measure();
    const t = setTimeout(measure, 800);
    window.addEventListener('resize', measure);
    return () => {
      clearTimeout(t);
      window.removeEventListener('resize', measure);
    };
  }, []);

  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end end'] });
  const x = useTransform(scrollYProgress, [0, 1], [0, -dist]);

  return (
    <section
      ref={ref}
      data-no-reveal
      className="relative block bg-[#0A0A0C]"
      style={{ height: '320vh' }}
    >
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">
        <motion.div
          ref={trackRef}
          style={{ x }}
          dir="ltr"
          className="flex items-center gap-5 pl-[6vw] pr-[6vw]"
        >
          {/* intro text panel */}
          <div dir="rtl" className="w-[80vw] shrink-0 pr-2 sm:w-[44vw] lg:w-[32vw]">
            <span className="mb-6 flex items-center gap-3 text-[11px] font-medium tracking-[0.3em] text-gold-primary/90">
              <span className="h-px w-10 bg-gold-primary/60" />
              القطاعات
            </span>
            <h2 className="font-extralight leading-[1.1] text-white text-4xl sm:text-5xl lg:text-6xl">
              أينما كان
              <br />
              وصولك،
              <br />
              <span className="text-gold-light">نحن هناك.</span>
            </h2>
            <p className="mt-7 text-sm tracking-[0.2em] text-white/40">مرّر للأسفل ←</p>
          </div>

          {/* cinematic image panels */}
          {sectors.map((s, i) => (
            <Link
              key={s.title}
              href={s.href}
              dir="rtl"
              className="group relative h-[68vh] w-[82vw] shrink-0 overflow-hidden rounded-2xl border border-white/10 sm:w-[58vw] lg:w-[44vw]"
            >
              <Image
                src={s.img}
                alt={s.title}
                fill
                sizes="60vw"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0C] via-[#0A0A0C]/25 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-8 lg:p-10">
                <span className="font-mono text-sm text-gold-primary/70">0{i + 1}</span>
                <h3 className="mt-2 font-black text-white text-4xl lg:text-6xl">{s.title}</h3>
                <p className="mt-3 max-w-xs text-sm leading-relaxed text-white/65">{s.desc}</p>
                <span className="mt-5 inline-flex items-center gap-2 text-sm text-gold-primary transition-all duration-300 group-hover:gap-3">
                  اعرف المزيد
                  <ArrowLeft className="h-4 w-4" />
                </span>
              </div>
            </Link>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
