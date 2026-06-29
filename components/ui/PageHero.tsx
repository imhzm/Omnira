'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const fade = {
  hidden: { opacity: 0, y: 26 },
  show: { opacity: 1, y: 0, transition: { duration: 1, ease: [0.22, 0.61, 0.36, 1] } },
};

export default function PageHero({
  kicker,
  title,
  accent,
  subtitle,
  image,
}: {
  kicker: string;
  title: string;
  accent?: string;
  subtitle?: string;
  image: string;
}) {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden bg-[#0A0A0C] pt-20">
      <div className="absolute inset-0">
        <Image
          src={image}
          alt={title}
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0C] via-[#0A0A0C]/55 to-[#0A0A0C]/40" />
        <div className="absolute inset-0 bg-gradient-to-l from-transparent to-[#0A0A0C]/70" />
      </div>

      <div className="container-custom relative z-10">
        <motion.div
          initial="hidden"
          animate="show"
          variants={{ show: { transition: { staggerChildren: 0.16, delayChildren: 0.2 } } }}
          className="max-w-3xl"
        >
          <motion.span
            variants={fade}
            className="mb-8 flex items-center gap-4 text-[11px] font-medium tracking-[0.4em] text-gold-primary/90"
          >
            <span className="h-px w-12 bg-gold-primary/50" />
            {kicker}
          </motion.span>

          <motion.h1
            variants={fade}
            className="font-extralight leading-[1.1] text-white text-4xl sm:text-6xl lg:text-7xl"
          >
            {title}
            {accent && (
              <>
                {' '}
                <span className="font-light text-gold-light">{accent}</span>
              </>
            )}
          </motion.h1>

          {subtitle && (
            <motion.p
              variants={fade}
              className="mt-8 max-w-lg text-base font-light leading-relaxed text-white/55 md:text-lg"
            >
              {subtitle}
            </motion.p>
          )}
        </motion.div>
      </div>
    </section>
  );
}
