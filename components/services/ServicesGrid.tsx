'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Building2, CarFront, Cpu, Users, FileText, Cable, Headphones, Droplets, ArrowLeft } from 'lucide-react';

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

  return (
    <section ref={ref} className="section-padding bg-black-primary">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Link href={`/services/${service.slug}`}>
                  <div className="service-card h-full group cursor-pointer">
                    <div className="relative h-56 mb-6 rounded-xl overflow-hidden">
                      <Image
                        src={service.image}
                        alt={service.title}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black-primary to-transparent"></div>
                    </div>

                    <div className="relative w-16 h-16 mb-4 -mt-16 z-10">
                      <div className="absolute inset-0 bg-gradient-luxury rounded-xl"></div>
                      <div className="absolute inset-0.5 bg-black-soft rounded-xl flex items-center justify-center group-hover:bg-black-primary transition-colors">
                        <Icon className="w-8 h-8 text-gold-primary" />
                      </div>
                    </div>

                    <h3 className="text-xl font-bold mb-3 text-white group-hover:text-gold-primary transition-colors">
                      {service.title}
                    </h3>
                    
                    <p className="text-gray-400 mb-4 leading-relaxed">
                      {service.shortDesc}
                    </p>

                    <div className="flex flex-wrap gap-2 mb-4">
                      {service.features.map((feature, i) => (
                        <span
                          key={i}
                          className="text-xs px-3 py-1 bg-gold-primary/10 text-gold-primary rounded-full border border-gold-primary/20"
                        >
                          {feature}
                        </span>
                      ))}
                    </div>

                    <div className="flex items-center text-gold-primary group-hover:translate-x-2 transition-transform">
                      <span className="text-sm font-medium">اعرف المزيد</span>
                      <ArrowLeft className="w-4 h-4 mr-2" />
                    </div>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServicesGrid;
