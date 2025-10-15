'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';
import { Car, Users, Award, Clock, TrendingUp, Shield } from 'lucide-react';

const StatsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const stats = [
    {
      icon: Clock,
      value: 24,
      suffix: '/7',
      label: 'خدمة مستمرة',
      description: 'متاحون على مدار الساعة',
      color: 'from-gold-primary to-gold-medium',
      bgGlow: 'bg-gold-primary/10',
    },
    {
      icon: Award,
      value: 99.9,
      suffix: '%',
      label: 'معدل الرضا',
      description: 'رضا عملائنا أولويتنا',
      color: 'from-gold-medium to-gold-light',
      bgGlow: 'bg-gold-medium/10',
    },
    {
      icon: Users,
      value: 200,
      suffix: '+',
      label: 'عميل راضي',
      description: 'شركاء النجاح',
      color: 'from-gold-light to-gold-champagne',
      bgGlow: 'bg-gold-light/10',
    },
    {
      icon: Car,
      value: 5000,
      suffix: '+',
      label: 'سيارة مخدومة شهرياً',
      description: 'نخدمهم بكل فخر',
      color: 'from-gold-champagne to-gold-rose',
      bgGlow: 'bg-gold-rose/10',
    },
  ];

  return (
    <section ref={ref} className="section-padding relative overflow-hidden">
      {/* Premium Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-black-soft to-black"></div>
      
      {/* Animated Gold Glow */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gold-primary rounded-full blur-[120px] animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gold-medium rounded-full blur-[120px] animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      {/* Decorative Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle, #D4AF37 1px, transparent 1px)',
          backgroundSize: '40px 40px'
        }}></div>
      </div>

      <div className="container-custom relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={isInView ? { scale: 1 } : {}}
            transition={{ duration: 0.6, type: 'spring' }}
            className="inline-flex items-center gap-2 bg-gradient-to-r from-gold-primary/20 to-gold-medium/20 px-6 py-2 rounded-full border border-gold-primary/30 mb-6"
          >
            <TrendingUp className="w-5 h-5 text-gold-primary" />
            <span className="text-gold-primary font-semibold">إنجازاتنا المميزة</span>
          </motion.div>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            <span className="heading-gradient">أرقام تتحدث عن نفسها</span>
          </h2>
          
          <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto">
            نفخر بثقة عملائنا وجودة خدماتنا المتميزة
          </p>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {stats.map((stat, index) => (
            <StatCard
              key={index}
              stat={stat}
              index={index}
              isInView={isInView}
            />
          ))}
        </div>

        {/* Trust Badge */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16 text-center"
        >
          <div className="inline-flex items-center gap-3 bg-black-soft/80 backdrop-blur-sm px-8 py-4 rounded-full border border-gold-primary/20">
            <Shield className="w-6 h-6 text-gold-primary" />
            <span className="text-gray-300">
              <span className="text-gold-primary font-bold">معتمدون رسمياً</span> من الهيئة العامة للمنشآت الصغيرة والمتوسطة
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

interface StatCardProps {
  stat: {
    icon: any;
    value: number;
    suffix: string;
    label: string;
    description: string;
    color: string;
    bgGlow: string;
  };
  index: number;
  isInView: boolean;
}

const StatCard = ({ stat, index, isInView }: StatCardProps) => {
  const [count, setCount] = useState(0);
  const Icon = stat.icon;

  useEffect(() => {
    if (isInView) {
      let start = 0;
      const end = stat.value;
      const duration = 2000;
      const increment = end / (duration / 16);

      const timer = setInterval(() => {
        start += increment;
        if (start >= end) {
          setCount(end);
          clearInterval(timer);
        } else {
          setCount(Math.floor(start));
        }
      }, 16);

      return () => clearInterval(timer);
    }
  }, [isInView, stat.value]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 50, scale: 0.9 }}
      animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
      transition={{ duration: 0.6, delay: index * 0.15, type: 'spring' }}
      className="relative group"
    >
      {/* Card Container */}
      <div className="relative h-full p-8 rounded-3xl bg-gradient-to-br from-black-soft/80 to-black-rich/60 backdrop-blur-xl border border-gold-primary/20 hover:border-gold-primary/50 transition-all duration-500 overflow-hidden">
        {/* Glow Effect on Hover */}
        <div className={`absolute inset-0 ${stat.bgGlow} opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-2xl`}></div>
        
        {/* Shimmer Effect */}
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-gold-primary/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 flex flex-col items-center">
          {/* Icon Container */}
          <motion.div
            whileHover={{ scale: 1.15, rotate: 360 }}
            transition={{ duration: 0.6, type: 'spring' }}
            className="relative mb-6"
          >
            {/* Icon Glow */}
            <div className={`absolute inset-0 bg-gradient-to-br ${stat.color} rounded-2xl blur-xl opacity-50 group-hover:opacity-100 transition-opacity duration-500`}></div>
            
            {/* Icon */}
            <div className={`relative flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-br ${stat.color} shadow-2xl`}>
              <Icon className="w-10 h-10 text-black" strokeWidth={2.5} />
            </div>
            
            {/* Floating Ring */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
              className="absolute inset-0 border-2 border-gold-primary/30 rounded-2xl"
            ></motion.div>
          </motion.div>

          {/* Number */}
          <div className="text-5xl md:text-6xl font-black mb-3">
            <span className={`bg-gradient-to-br ${stat.color} bg-clip-text text-transparent`}>
              {stat.suffix === '%' 
                ? count.toFixed(1) 
                : count.toLocaleString('ar-SA')}
              {stat.suffix}
            </span>
          </div>

          {/* Label */}
          <h3 className="text-xl font-bold text-white mb-2 text-center">
            {stat.label}
          </h3>

          {/* Description */}
          <p className="text-gray-400 text-sm text-center leading-relaxed">
            {stat.description}
          </p>

          {/* Bottom Accent Line */}
          <div className="mt-6 w-16 h-1 bg-gradient-to-r from-transparent via-gold-primary to-transparent opacity-50 group-hover:opacity-100 group-hover:w-full transition-all duration-500"></div>
        </div>
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500">
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-gold-primary rounded-full"
            initial={{ x: '50%', y: '50%', opacity: 0 }}
            animate={{
              x: ['50%', `${50 + (i - 1) * 30}%`],
              y: ['50%', `${20 - i * 10}%`],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              delay: i * 0.3,
            }}
          />
        ))}
      </div>
    </motion.div>
  );
};

export default StatsSection;
