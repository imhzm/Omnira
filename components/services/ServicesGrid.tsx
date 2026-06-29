'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Building2, CarFront, Cpu, Users, FileText, Cable, Headphones, Droplets, ArrowLeft } from 'lucide-react';

const FALLBACK_IMG = 'https://images.pexels.com/photos/1831234/pexels-photo-1831234.jpeg?auto=compress&cs=tinysrgb&w=2070';

const ServicesGrid = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const services = [
    {
      slug: 'parking-management',
      icon: Building2,
      title: 'إدارة وتشغيل المواقف',
      shortDesc: 'تشغيل مواقف السيارات بكفاءة واحترافية وفق أعلى المعايير',
      image: '/images/services/parking-management.jpg',
      features: ['إدارة متكاملة', 'كفاءة عالية', 'معايير عالمية'],
    },
    {
      slug: 'valet-parking',
      icon: CarFront,
      title: 'تقديم خدمات الفاليه باركينج',
      shortDesc: 'استقبال المركبات وإيقافها بعناية لضمان راحة العملاء',
      image: '/images/services/valet-parking.jpg',
      features: ['خدمة VIP', 'سائقون محترفون', 'راحة تامة'],
    },
    {
      slug: 'advanced-technology',
      icon: Cpu,
      title: 'تقنيات متقدمة لإدارة المواقف',
      shortDesc: 'توفير أحدث الأنظمة والتقنيات لتنظيم وتشغيل المواقف بسهولة وفعالية',
      image: '/images/services/advanced-technology.jpg',
      features: ['أنظمة ذكية', 'تتبع فوري', 'تقارير تحليلية'],
    },
    {
      slug: 'professional-organizers',
      icon: Users,
      title: 'توفير منظمين محترفين',
      shortDesc: 'فريق مؤهل لتنظيم الحركة داخل المواقف وتوجيه المركبات بسلاسة',
      image: '/images/professional-team.jpg',
      features: ['فريق مدرب', 'تنظيم احترافي', 'خدمة متميزة'],
    },
    {
      slug: 'consultation',
      icon: FileText,
      title: 'استشارات ما قبل التطوير والبناء',
      shortDesc: 'تقديم دراسات متخصصة وحلول فعّالة لتخطيط وتصميم مواقف السيارات',
      image: '/images/smart-parking.jpg',
      features: ['دراسات متخصصة', 'حلول فعالة', 'تخطيط احترافي'],
    },
    {
      slug: 'golf-cart',
      icon: Cable,
      title: 'توفير جولف كار',
      shortDesc: 'تسهيل تنقل العملاء داخل المواقف الكبيرة باستخدام عربات الجولف',
      image: '/images/valet-service.jpg',
      features: ['راحة العملاء', 'تنقل سهل', 'مواقف كبيرة'],
    },
    {
      slug: 'support-services',
      icon: Headphones,
      title: 'خدمات مساندة',
      shortDesc: 'دعم متكامل لتشغيل المواقف وتحقيق تجربة سلسة للمستخدمين',
      image: '/images/services/advanced-technology.jpg',
      features: ['دعم فني', 'خدمة 24/7', 'حلول متكاملة'],
    },
    {
      slug: 'car-wash',
      icon: Droplets,
      title: 'غسيل السيارات',
      shortDesc: 'خدمات تنظيف متكاملة للمركبات أثناء تواجدها في المواقف',
      image: '/images/omnira-hero.jpg',
      features: ['تنظيف شامل', 'منتجات عالية', 'خدمة سريعة'],
    },
  ];

  const ServiceCard = ({ service, index, Icon, isInView }: { service: any; index: number; Icon: any; isInView: boolean }) => {
    const [imgError, setImgError] = useState(false);
    return (
      <motion.div
        key={index}
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.2, delay: 0 }}
      >
        <Link href={`/services/${service.slug}`}>
          <div className="h-full group cursor-pointer bg-white/[0.03] rounded-3xl border border-white/10 hover:border-sage-primary transition-all duration-300 overflow-hidden">
            <div className="relative h-56 overflow-hidden">
              <Image
                src={imgError ? FALLBACK_IMG : service.image}
                alt={service.title}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-cover group-hover:scale-110 transition-transform duration-500"
                onError={() => setImgError(true)}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-sage-primary/60 to-transparent"></div>
              
              {/* Floating Icon */}
              <div className="absolute bottom-4 right-4 w-16 h-16 bg-[#1A1A20] rounded-2xl shadow-xl flex items-center justify-center transition-transform">
                <Icon className="w-8 h-8 text-sage-primary" />
              </div>
            </div>

            <div className="p-8">
              <h3 className="text-xl font-medium mb-3 text-brown-dark group-hover:text-sage-primary transition-colors">
                {service.title}
              </h3>
              
              <p className="text-brown-text mb-4 leading-relaxed">
                {service.shortDesc}
              </p>

              <div className="flex flex-wrap gap-2 mb-6">
                {service.features.map((feature: string, i: number) => (
                  <span
                    key={i}
                    className="text-xs px-3 py-1.5 bg-sage-primary/10 text-sage-primary rounded-full border border-sage-primary/20 font-medium"
                  >
                    {feature}
                  </span>
                ))}
              </div>

              <div className="flex items-center text-sage-primary group-hover:gap-3 gap-2 transition-all font-bold">
                <span className="text-sm">اعرف المزيد</span>
                <ArrowLeft className="w-4 h-4 group-hover:-translate-x-2 transition-transform" />
              </div>
            </div>
          </div>
        </Link>
      </motion.div>
    );
  };

  return (
    <section ref={ref} className="py-28 lg:py-40 bg-[#0A0A0C]">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <ServiceCard key={index} service={service} index={index} Icon={Icon} isInView={isInView} />
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServicesGrid;
