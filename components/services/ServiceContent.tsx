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
    <div className="bg-black-primary">
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
        <h3 className="text-2xl font-bold mb-4 text-gold-primary">{feature.title}</h3>
        <p className="text-gray-300 leading-relaxed text-lg">{feature.description}</p>
      </div>
    </motion.div>
  );
};

const OverviewSection = ({ data }: any) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section ref={ref} className="section-padding bg-black-soft">
      <div className="container-custom max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-8 gold-shine-effect">{data.title}</h2>
          <div className="text-gray-300 text-lg leading-relaxed space-y-6 whitespace-pre-line">
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
    <section ref={ref} className="section-padding bg-black-primary">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 gold-shine-effect">
            الفوائد والمزايا
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
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
              className="p-6 rounded-xl bg-gradient-dark border border-gold-primary/20 hover:border-gold-primary transition-all group"
            >
              <div className="w-12 h-12 rounded-lg bg-gold-primary/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <CheckCircle className="w-6 h-6 text-gold-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-white">{benefit.title}</h3>
              <p className="text-gray-400 leading-relaxed">{benefit.description}</p>
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
    <section ref={ref} className="section-padding bg-black-soft">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 gold-shine-effect">
            المميزات التقنية
          </h2>
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
    <section ref={ref} className="section-padding bg-black-primary">
      <div className="container-custom max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 gold-shine-effect">
            كيف نعمل؟
          </h2>
          <p className="text-gray-400 text-lg">عملية واضحة ومنظمة من البداية للنهاية</p>
        </motion.div>

        <div className="relative">
          {/* Vertical Line */}
          <div className="hidden lg:block absolute right-1/2 top-0 bottom-0 w-0.5 bg-gradient-luxury"></div>

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
                  <div className={`flex-1 ${index % 2 === 0 ? 'lg:text-left' : 'lg:text-right lg:order-2'}`}>
                    <h3 className="text-xl font-bold mb-2 text-gold-primary">{step.title}</h3>
                    <p className="text-gray-300 leading-relaxed">{step.description}</p>
                  </div>

                  {/* Circle */}
                  <div className="relative w-16 h-16 flex-shrink-0 lg:order-1">
                    <div className="absolute inset-0 bg-gradient-luxury rounded-full"></div>
                    <div className="absolute inset-0.5 bg-black-primary rounded-full flex items-center justify-center">
                      <span className="text-2xl font-bold text-gold-primary">{step.step}</span>
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
    <section ref={ref} className="section-padding bg-black-soft">
      <div className="container-custom max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 gold-shine-effect">
            من نخدم؟
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {clients.map((client: string, index: number) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="p-4 rounded-lg bg-gradient-dark border border-gold-primary/20 text-center hover:border-gold-primary transition-all"
            >
              <p className="text-gray-300">{client}</p>
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
              className="border border-gold-primary/20 rounded-xl overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full p-6 text-right flex items-center justify-between hover:bg-gold-primary/5 transition-colors"
              >
                <span className="text-lg font-bold text-white">{faq.question}</span>
                <ChevronDown
                  className={`w-5 h-5 text-gold-primary transition-transform ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                />
              </button>
              {openIndex === index && (
                <div className="px-6 pb-6">
                  <p className="text-gray-300 leading-relaxed">{faq.answer}</p>
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
