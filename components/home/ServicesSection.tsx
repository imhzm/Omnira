'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Calendar, Hotel, Utensils, ShoppingBag, Building2, Briefcase, Crown, ArrowLeft } from 'lucide-react';

const ServicesSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const services = [
    {
      icon: Calendar,
      title: 'صف السيارات للفعاليات',
      description: 'خدمة احترافية متكاملة لجميع أنواع الفعاليات من حفلات الزفاف إلى المؤتمرات والمعارض',
      image: 'https://images.unsplash.com/photo-1511578314322-379afb476865?q=80&w=2069',
      href: '/services/events',
      features: ['تخطيط مسبق', 'فريق محترف', 'نظام إلكتروني'],
    },
    {
      icon: Hotel,
      title: 'صف السيارات للفنادق',
      description: 'حلول فاخرة ومخصصة لصناعة الضيافة مع خدمة 24/7 وسائقون مدربون على أعلى مستوى',
      image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=2070',
      href: '/services/hotels',
      features: ['خدمة 24/7', 'تكامل النظام', 'سائقون محترفون'],
    },
    {
      icon: Utensils,
      title: 'صف السيارات للمطاعم',
      description: 'عزز تجربة عملائك مع خدمة فاليه احترافية تجعل زيارة مطعمك تجربة لا تُنسى',
      image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=2070',
      href: '/services/restaurants',
      features: ['خدمة سريعة', 'أسعار تنافسية', 'مرونة عالية'],
    },
    {
      icon: ShoppingBag,
      title: 'صف السيارات للمراكز التجارية',
      description: 'حلول ذكية لإدارة مواقف المراكز التجارية الكبرى وزيادة رضا المتسوقين',
      image: 'https://images.unsplash.com/photo-1519567241046-7f570eee3ce6?q=80&w=2071',
      href: '/services/malls',
      features: ['نظام متطور', 'تتبع فوري', 'تقارير تحليلية'],
    },
    {
      icon: Building2,
      title: 'صف السيارات للمستشفيات',
      description: 'خدمة حساسة ومدروسة لبيئة الرعاية الصحية مع أولوية للطوارئ',
      image: 'https://images.unsplash.com/photo-1587351021759-3e566b6af7cc?q=80&w=2072',
      href: '/services/hospitals',
      features: ['خدمة سريعة', 'أولوية للطوارئ', 'تعامل راقي'],
    },
    {
      icon: Briefcase,
      title: 'حلول الشركات',
      description: 'باقات مخصصة للمقرات الرئيسية والمكاتب الكبرى مع عقود مرنة',
      image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070',
      href: '/services/corporate',
      features: ['عقود مرنة', 'إدارة متكاملة', 'خصومات خاصة'],
    },
    {
      icon: Crown,
      title: 'خدمة VIP الفاخرة',
      description: 'تجربة استثنائية للعملاء المميزين مع خدمة شخصية راقية واهتمام بأدق التفاصيل',
      image: 'https://images.unsplash.com/photo-1563720223185-11003d516935?q=80&w=2070',
      href: '/services/vip',
      features: ['سائقون متخصصون', 'أولوية قصوى', 'سرية تامة'],
    },
  ];

  return (
    <section ref={ref} className="section-padding bg-beige-light">
      <div className="container-custom">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.2 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gold-shine-effect">خدماتنا المتميزة</span>
          </h2>
          <p className="text-brown-text text-lg max-w-2xl mx-auto">
            نقدم مجموعة شاملة من خدمات صف السيارات الاحترافية المصممة خصيصاً لتلبية احتياجاتك
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              service={service}
              index={index}
              isInView={isInView}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

interface ServiceCardProps {
  service: {
    icon: any;
    title: string;
    description: string;
    image: string;
    href: string;
    features: string[];
  };
  index: number;
  isInView: boolean;
}

const ServiceCard = ({ service, index, isInView }: ServiceCardProps) => {
  const Icon = service.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.2, delay: 0 }}
    >
      <Link href={service.href}>
        <div className="service-card h-full group cursor-pointer">
          {/* Image */}
          <div className="relative h-48 mb-6 rounded-xl overflow-hidden">
            <Image
              src={service.image}
              alt={service.title}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className="object-cover group-hover:scale-110 transition-transform duration-500"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-brown-dark/80 to-transparent"></div>
          </div>

          {/* Icon */}
          <div className="relative w-16 h-16 mb-4 -mt-16 z-10">
            <div className="absolute inset-0 bg-gradient-luxury rounded-xl"></div>
            <div className="absolute inset-0.5 bg-white rounded-xl flex items-center justify-center group-hover:bg-beige-light transition-colors">
              <Icon className="w-8 h-8 text-sage-primary" />
            </div>
          </div>

          {/* Content */}
          <h3 className="text-xl font-bold mb-3 text-brown-dark group-hover:text-sage-primary transition-colors">
            {service.title}
          </h3>
          
          <p className="text-brown-text mb-4 leading-relaxed">
            {service.description}
          </p>

          {/* Features */}
          <div className="flex flex-wrap gap-2 mb-4">
            {service.features.map((feature, i) => (
              <span
                key={i}
                className="text-xs px-3 py-1 bg-sage-primary/10 text-sage-dark rounded-full border border-sage-primary/20"
              >
                {feature}
              </span>
            ))}
          </div>

          {/* CTA */}
          <div className="flex items-center text-sage-primary group-hover:translate-x-2 transition-transform">
            <span className="text-sm font-medium">اعرف المزيد</span>
            <ArrowLeft className="w-4 h-4 mr-2" />
          </div>
        </div>
      </Link>
    </motion.div>
  );
};

export default ServicesSection;
