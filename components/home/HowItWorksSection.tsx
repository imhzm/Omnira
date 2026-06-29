'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import Image from 'next/image';
import { Calendar, CheckCircle, CarFront, Key } from 'lucide-react';

const HowItWorksSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const steps = [
    {
      number: '01',
      icon: Calendar,
      title: 'الحجز',
      description: 'احجز الخدمة عبر الموقع أو التطبيق أو اتصل بنا مباشرة. حدد التاريخ، الوقت، والموقع',
      image: '/images/services/advanced-technology.jpg',
    },
    {
      number: '02',
      icon: CheckCircle,
      title: 'التأكيد',
      description: 'نراجع طلبك ونرسل لك تأكيداً فورياً مع تفاصيل الخدمة وفريق العمل المخصص',
      image: '/images/professional-team.jpg',
    },
    {
      number: '03',
      icon: CarFront,
      title: 'الخدمة',
      description: 'يصل فريقنا في الموعد المحدد. نستلم السيارات بمهنية ونديرها بكفاءة عالية',
      image: '/images/services/parking-management.jpg',
    },
    {
      number: '04',
      icon: Key,
      title: 'التسليم',
      description: 'نعيد السيارات لأصحابها بسرعة وأمان. تجربة سلسة من البداية للنهاية',
      image: '/images/services/valet-parking.jpg',
    },
  ];

  return (
    <section ref={ref} className="section-padding bg-gradient-to-b from-[#0A0A0C] via-[#0E0E11] to-[#0A0A0C] relative overflow-hidden">
      <div className="container-custom relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.2 }}
          className="text-center mb-20"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            className="inline-flex items-center space-x-2 space-x-reverse glass-effect px-6 py-3 rounded-full border border-white/10 mb-8"
          >
            <span className="text-sage-primary font-bold text-sm">4 خطوات سهلة</span>
          </motion.div>

          <h2 className="text-4xl sm:text-6xl lg:text-7xl font-black leading-[0.95] mb-6">
            <span className="gold-shine-effect">كيف تعمل الخدمة؟</span>
          </h2>
          <p className="text-brown-dark text-lg md:text-xl max-w-3xl mx-auto font-medium">
            عملية <span className="text-sage-primary font-bold">بسيطة وسريعة</span> من 4 خطوات فقط
          </p>
        </motion.div>

        {/* Steps */}
        <div className="relative">
          {/* Connection Line - Desktop */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-sage-primary via-sunset-golden to-sage-primary transform -translate-y-1/2 z-0 opacity-30"></div>

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 lg:gap-4 relative z-10">
            {steps.map((step, index) => (
              <StepCard
                key={index}
                step={step}
                index={index}
                isInView={isInView}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

interface StepCardProps {
  step: {
    number: string;
    icon: any;
    title: string;
    description: string;
    image: string;
  };
  index: number;
  isInView: boolean;
}

const StepCard = ({ step, index, isInView }: StepCardProps) => {
  const Icon = step.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.2, delay: 0 }}
      className="relative"
    >
      {/* Card */}
      <div className="relative group">
        {/* Image */}
        <div className="relative h-48 rounded-xl overflow-hidden mb-4">
          <Image
            src={step.image}
            alt={step.title}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
            className="object-cover group-hover:scale-110 transition-transform duration-500"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent"></div>
          
          {/* Number Badge */}
          <div className="absolute top-4 right-4">
            <div className="relative w-16 h-16 bg-[#141418] rounded-2xl shadow-xl flex items-center justify-center">
              <span className="text-3xl font-black bg-gradient-to-r from-sage-primary to-sage-medium bg-clip-text text-transparent">{step.number}</span>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="relative p-6 rounded-3xl bg-[#141418] border border-white/10 group-hover:border-sage-primary transition-all duration-300 hover:shadow-2xl">
          {/* Icon */}
          <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-sage-primary/10 border border-white/10 mb-4 group-hover:scale-110 group-hover:rotate-6 transition-all">
            <Icon className="w-7 h-7 text-sage-primary" />
          </div>

          <h3 className="text-xl font-bold mb-2 text-brown-dark group-hover:text-sage-primary transition-colors">
            {step.title}
          </h3>
          
          <p className="text-brown-text text-sm leading-relaxed">
            {step.description}
          </p>
        </div>

        {/* Arrow - Desktop Only */}
        {index < 3 && (
          <div className="hidden lg:block absolute top-1/2 -left-2 transform -translate-y-1/2 z-20">
            <div className="w-4 h-4 border-t-2 border-r-2 border-gold-primary transform rotate-45"></div>
          </div>
        )}
      </div>
    </motion.div>
  );
};

export default HowItWorksSection;
