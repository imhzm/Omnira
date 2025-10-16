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
      image: 'https://images.unsplash.com/photo-1512428559087-560fa5ceab42?q=80&w=2070',
    },
    {
      number: '02',
      icon: CheckCircle,
      title: 'التأكيد',
      description: 'نراجع طلبك ونرسل لك تأكيداً فورياً مع تفاصيل الخدمة وفريق العمل المخصص',
      image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=2070',
    },
    {
      number: '03',
      icon: CarFront,
      title: 'الخدمة',
      description: 'يصل فريقنا في الموعد المحدد. نستلم السيارات بمهنية ونديرها بكفاءة عالية',
      image: 'https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?q=80&w=2070',
    },
    {
      number: '04',
      icon: Key,
      title: 'التسليم',
      description: 'نعيد السيارات لأصحابها بسرعة وأمان. تجربة سلسة من البداية للنهاية',
      image: 'https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?q=80&w=2070',
    },
  ];

  return (
    <section ref={ref} className="section-padding bg-gradient-to-b from-white via-beige-light to-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="50" height="50" patternUnits="userSpaceOnUse">
              <circle cx="25" cy="25" r="1" fill="#D4AF37" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      <div className="container-custom relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.2 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gold-shine-effect">كيف تعمل الخدمة؟</span>
          </h2>
          <p className="text-brown-text text-lg max-w-2xl mx-auto">
            عملية بسيطة وسريعة من 4 خطوات فقط
          </p>
        </motion.div>

        {/* Steps */}
        <div className="relative">
          {/* Connection Line - Desktop */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-luxury transform -translate-y-1/2 z-0"></div>

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
          <div className="absolute inset-0 bg-gradient-to-t from-brown-dark/40 via-transparent to-transparent"></div>
          
          {/* Number Badge */}
          <div className="absolute top-4 right-4">
            <div className="relative w-16 h-16">
              <div className="absolute inset-0 bg-gradient-luxury rounded-full"></div>
              <div className="absolute inset-0.5 bg-white rounded-full flex items-center justify-center">
                <span className="text-2xl font-bold text-gold-primary">{step.number}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="relative p-6 rounded-xl bg-gradient-dark border border-gold-primary/20 group-hover:border-gold-primary transition-all duration-300">
          {/* Icon */}
          <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-gold-primary/10 border border-gold-primary/30 mb-4">
            <Icon className="w-6 h-6 text-gold-primary" />
          </div>

          <h3 className="text-xl font-bold mb-2 text-brown-dark group-hover:text-gold-primary transition-colors">
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
