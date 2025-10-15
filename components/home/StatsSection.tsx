'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';
import { Car, Users, Award, Clock } from 'lucide-react';

const StatsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const stats = [
    {
      icon: Car,
      value: 5000,
      suffix: '+',
      label: 'سيارة مخدومة شهرياً',
      color: 'text-gold-primary',
    },
    {
      icon: Users,
      value: 200,
      suffix: '+',
      label: 'عميل راضي',
      color: 'text-gold-medium',
    },
    {
      icon: Award,
      value: 99.9,
      suffix: '%',
      label: 'معدل الرضا',
      color: 'text-gold-light',
    },
    {
      icon: Clock,
      value: 24,
      suffix: '/7',
      label: 'خدمة مستمرة',
      color: 'text-gold-dark',
    },
  ];

  return (
    <section ref={ref} className="section-padding bg-black-soft relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle, #D4AF37 1px, transparent 1px)',
          backgroundSize: '50px 50px'
        }}></div>
      </div>

      <div className="container-custom relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <StatCard
              key={index}
              stat={stat}
              index={index}
              isInView={isInView}
            />
          ))}
        </div>
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
    color: string;
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
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="text-center group"
    >
      <motion.div
        whileHover={{ scale: 1.1, rotate: 5 }}
        transition={{ duration: 0.3 }}
        className={`inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-dark border-2 border-gold-primary/30 mb-4 group-hover:border-gold-primary transition-colors ${stat.color}`}
      >
        <Icon className="w-10 h-10" />
      </motion.div>
      
      <div className="text-4xl md:text-5xl font-bold mb-2">
        <span className="gold-shine-effect">
          {count.toLocaleString('ar-SA')}
          {stat.suffix}
        </span>
      </div>
      
      <p className="text-gray-400 text-sm md:text-base">{stat.label}</p>
    </motion.div>
  );
};

export default StatsSection;
