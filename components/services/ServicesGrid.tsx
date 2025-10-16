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
      image: 'https://images.unsplash.com/photo-1506521781263-d8422e82f27a?q=80&w=2070',
      features: ['إدارة متكاملة', 'كفاءة عالية', 'معايير عالمية'],
    },
    {
      slug: 'valet-parking',
      icon: CarFront,
      title: 'تقديم خدمات الفاليه باركينج',
      shortDesc: 'استقبال المركبات وإيقافها بعناية لضمان راحة العملاء',
      image: 'https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?q=80&w=2070',
      features: ['خدمة VIP', 'سائقون محترفون', 'راحة تامة'],
    },
    {
      slug: 'advanced-technology',
      icon: Cpu,
      title: 'تقنيات متقدمة لإدارة المواقف',
      shortDesc: 'توفير أحدث الأنظمة والتقنيات لتنظيم وتشغيل المواقف بسهولة وفعالية',
      image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=2034',
      features: ['أنظمة ذكية', 'تتبع فوري', 'تقارير تحليلية'],
    },
    {
      slug: 'professional-organizers',
      icon: Users,
      title: 'توفير منظمين محترفين',
      shortDesc: 'فريق مؤهل لتنظيم الحركة داخل المواقف وتوجيه المركبات بسلاسة',
      image: 'https://images.unsplash.com/photo-1521737711867-e3b97375f902?q=80&w=2070',
      features: ['فريق مدرب', 'تنظيم احترافي', 'خدمة متميزة'],
    },
    {
      slug: 'consultation',
      icon: FileText,
      title: 'استشارات ما قبل التطوير والبناء',
      shortDesc: 'تقديم دراسات متخصصة وحلول فعّالة لتخطيط وتصميم مواقف السيارات',
      image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=2070',
      features: ['دراسات متخصصة', 'حلول فعالة', 'تخطيط احترافي'],
    },
    {
      slug: 'golf-cart',
      icon: Cable,
      title: 'توفير جولف كار',
      shortDesc: 'تسهيل تنقل العملاء داخل المواقف الكبيرة باستخدام عربات الجولف',
      image: 'https://images.unsplash.com/photo-1535131749006-b7f58c99034b?q=80&w=2070',
      features: ['راحة العملاء', 'تنقل سهل', 'مواقف كبيرة'],
    },
    {
      slug: 'support-services',
      icon: Headphones,
      title: 'خدمات مساندة',
      shortDesc: 'دعم متكامل لتشغيل المواقف وتحقيق تجربة سلسة للمستخدمين',
      image: 'https://images.unsplash.com/photo-1553877522-43269d4ea984?q=80&w=2070',
      features: ['دعم فني', 'خدمة 24/7', 'حلول متكاملة'],
    },
    {
      slug: 'car-wash',
      icon: Droplets,
      title: 'غسيل السيارات',
      shortDesc: 'خدمات تنظيف متكاملة للمركبات أثناء تواجدها في المواقف',
      image: 'https://images.unsplash.com/photo-1601362840469-51e4d8d58785?q=80&w=2098',
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
          <div className="service-card h-full group cursor-pointer">
            <div className="relative h-56 mb-6 rounded-xl overflow-hidden">
              <Image
                src={imgError ? FALLBACK_IMG : service.image}
                alt={service.title}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-cover group-hover:scale-110 transition-transform duration-500"
                onError={() => setImgError(true)}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brown-dark/40 to-transparent"></div>
            </div>

            <div className="relative w-16 h-16 mb-4 -mt-16 z-10">
              <div className="absolute inset-0 bg-gradient-luxury rounded-xl"></div>
              <div className="absolute inset-0.5 bg-white rounded-xl flex items-center justify-center group-hover:bg-beige-primary transition-colors">
                <Icon className="w-8 h-8 text-sage-primary" />
              </div>
            </div>

            <h3 className="text-xl font-bold mb-3 text-brown-dark group-hover:text-sage-dark transition-colors">
              {service.title}
            </h3>
            
            <p className="text-brown-text mb-4 leading-relaxed">
              {service.shortDesc}
            </p>

            <div className="flex flex-wrap gap-2 mb-4">
              {service.features.map((feature: string, i: number) => (
                <span
                  key={i}
                  className="text-xs px-3 py-1 bg-sage-primary/10 text-sage-primary rounded-full border border-sage-primary/20"
                >
                  {feature}
                </span>
              ))}
            </div>

            <div className="flex items-center text-sage-primary group-hover:translate-x-2 transition-transform">
              <span className="text-sm font-medium">اعرف المزيد</span>
              <ArrowLeft className="w-4 h-4 mr-2" />
            </div>
          </div>
        </Link>
      </motion.div>
    );
  };

  return (
    <section ref={ref} className="py-24 bg-gradient-to-b from-white via-beige-light to-white">
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
