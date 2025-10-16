'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import Image from 'next/image';
import { CheckCircle, ChevronDown } from 'lucide-react';
import { useState } from 'react';

interface ServiceContentProps {
  data: any;
}

const FALLBACK_IMG = 'https://images.pexels.com/photos/1831234/pexels-photo-1831234.jpeg?auto=compress&cs=tinysrgb&w=2070';

const ServiceContent = ({ data }: ServiceContentProps) => {
  return (
    <div className="bg-gradient-to-b from-white via-beige-light to-white">
      <OverviewSection data={data.overview} />
      <BenefitsSection benefits={data.benefits} />
      <FeaturesSection features={data.features} />
      <ProcessSection process={data.process} />
      <ClientsSection clients={data.clients} />
      <FAQSection faqs={data.faqs} />
    </div>
  );
};

const FeatureItem = ({ feature, index, isInView }: { feature: any; index: number; isInView: boolean }) => {
  const [imgError, setImgError] = useState(false);
  return (
    <motion.div
      key={index}
      initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.8, delay: index * 0.2 }}
      className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-8 items-center`}
    >
      <div className="flex-1">
        <div className="relative h-64 rounded-xl overflow-hidden">
          <Image
            src={imgError ? FALLBACK_IMG : feature.image}
            alt={feature.title}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 50vw"
            className="object-cover"
            onError={() => setImgError(true)}
          />
        </div>
      </div>
      <div className="flex-1">
        <h3 className="text-3xl font-black mb-4 text-sage-primary">{feature.title}</h3>
        <p className="text-brown-dark leading-relaxed text-lg">{feature.description}</p>
      </div>
    </motion.div>
  );
};

const OverviewSection = ({ data }: any) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section ref={ref} className="section-padding bg-white">
      <div className="container-custom max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="bg-white/80 backdrop-blur-md p-10 md:p-16 rounded-3xl border-2 border-sage-primary/20 shadow-2xl"
        >
          <h2 className="text-4xl md:text-5xl font-black mb-10 gold-shine-effect">{data.title}</h2>
          <div className="text-brown-dark text-lg leading-loose space-y-6 whitespace-pre-line">
            {data.description}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const BenefitsSection = ({ benefits }: any) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section ref={ref} className="section-padding bg-gradient-to-br from-beige-light to-sage-soft">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-black mb-6 gold-shine-effect">
            الفوائد والمزايا
          </h2>
          <p className="text-brown-dark text-xl max-w-3xl mx-auto font-medium">
            اكتشف كيف تضيف خدماتنا قيمة حقيقية لأعمالك
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit: any, index: number) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="p-8 rounded-2xl bg-white/90 backdrop-blur-md border-2 border-sage-primary/20 hover:border-sage-primary hover:shadow-2xl hover:shadow-sage-primary/10 transition-all group"
            >
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-sage-primary/20 to-sage-medium/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform border border-sage-primary/30">
                <CheckCircle className="w-8 h-8 text-sage-primary" />
              </div>
              <h3 className="text-2xl font-black mb-4 text-brown-dark">{benefit.title}</h3>
              <p className="text-brown-text leading-relaxed text-base">{benefit.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const FeaturesSection = ({ features }: any) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section ref={ref} className="section-padding bg-white">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-black mb-6 gold-shine-effect">
            المميزات التقنية
          </h2>
          <p className="text-brown-dark text-xl max-w-3xl mx-auto font-medium">
            تقنيات وأدوات متقدمة لضمان أفضل خدمة
          </p>
        </motion.div>

        <div className="space-y-16">
          {features.map((feature: any, index: number) => (
            <FeatureItem key={index} feature={feature} index={index} isInView={isInView} />
          ))}
        </div>
      </div>
    </section>
  );
};

const ProcessSection = ({ process }: any) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section ref={ref} className="section-padding bg-gradient-to-br from-sage-soft to-beige-light">
      <div className="container-custom max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-black mb-6 gold-shine-effect">
            كيف نعمل؟
          </h2>
          <p className="text-brown-dark text-xl font-medium">عملية واضحة ومنظمة من البداية للنهاية</p>
        </motion.div>

        <div className="relative">
          {/* Vertical Line */}
          <div className="hidden lg:block absolute right-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-sage-primary via-sage-medium to-sage-primary rounded-full"></div>

          <div className="space-y-12">
            {process.map((step: any, index: number) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className="relative"
              >
                <div className="flex flex-col lg:flex-row items-center gap-8">
                  <div className={`flex-1 ${index % 2 === 0 ? 'lg:text-left' : 'lg:text-right lg:order-2'} p-6 md:p-8 rounded-2xl bg-white/80 backdrop-blur-md border-2 border-sage-primary/20 shadow-lg`}>
                    <h3 className="text-2xl font-black mb-3 text-sage-primary">{step.title}</h3>
                    <p className="text-brown-dark leading-relaxed">{step.description}</p>
                  </div>

                  {/* Circle */}
                  <div className="relative w-20 h-20 flex-shrink-0 lg:order-1">
                    <div className="absolute inset-0 bg-gradient-to-br from-sage-primary to-sage-medium rounded-full shadow-xl shadow-sage-primary/30"></div>
                    <div className="absolute inset-1 bg-white rounded-full flex items-center justify-center">
                      <span className="text-3xl font-black text-sage-primary">{step.step}</span>
                    </div>
                  </div>

                  <div className={`flex-1 ${index % 2 === 0 ? 'lg:order-2' : ''}`}></div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const ClientsSection = ({ clients }: any) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section ref={ref} className="section-padding bg-white">
      <div className="container-custom max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-black mb-6 gold-shine-effect">
            من نخدم؟
          </h2>
          <p className="text-brown-dark text-xl font-medium">نخدم مجموعة متنوعة من العملاء في مختلف القطاعات</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {clients.map((client: string, index: number) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="p-6 rounded-2xl bg-gradient-to-br from-sage-primary/10 to-sage-soft border-2 border-sage-primary/20 text-center hover:border-sage-primary hover:shadow-lg hover:scale-105 transition-all group"
            >
              <p className="text-brown-dark font-bold group-hover:text-sage-primary transition-colors">{client}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const FAQSection = ({ faqs }: any) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section ref={ref} className="section-padding bg-black-primary">
      <div className="container-custom max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 gold-shine-effect">
            الأسئلة الشائعة
          </h2>
        </motion.div>

        <div className="space-y-4">
          {faqs.map((faq: any, index: number) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="border-2 border-sage-primary/30 rounded-xl overflow-hidden bg-white/80 backdrop-blur-sm"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full p-6 text-right flex items-center justify-between hover:bg-sage-primary/10 transition-colors"
              >
                <span className="text-lg font-bold text-brown-dark">{faq.question}</span>
                <ChevronDown
                  className={`w-5 h-5 text-gold-primary transition-transform ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                />
              </button>
              {openIndex === index && (
                <div className="px-6 pb-6 bg-sage-primary/5">
                  <p className="text-brown-text leading-relaxed">{faq.answer}</p>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceContent;
