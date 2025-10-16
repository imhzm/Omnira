'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import Image from 'next/image';
import { Award, Users, Target, Heart, Lightbulb, Shield } from 'lucide-react';

const AboutContent = () => {
  return (
    <div className="bg-white">
      <StorySection />
      <VisionMissionSection />
      <ValuesSection />
      <StatsSection />
      <TeamSection />
    </div>
  );
};

const StorySection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section ref={ref} className="section-padding bg-gradient-to-b from-white via-beige-light to-white">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <div className="relative h-96 rounded-2xl overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070"
                alt="مقر شركة أومنيرا"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold mb-6 gold-shine-effect">قصتنا</h2>
            <div className="space-y-4 text-brown-text leading-relaxed">
              <p>
                تأسست <span className="text-sage-primary font-bold">أومنيرا (OMNIRA)</span> برؤية واضحة: 
                تحويل صناعة صف السيارات في المملكة من خدمة عادية إلى تجربة فاخرة لا تُنسى.
              </p>
              <p>
                نؤمن بأن كل تفصيل مهم، من اللحظة التي يصل فيها الضيف إلى لحظة مغادرته. 
                فريقنا المدرب بعناية، وأنظمتنا التقنية المتطورة، وشغفنا بالتميز، كلها عناصر 
                تجعل OMNIRA الخيار الأول للفنادق الفاخرة، المطاعم الراقية، والمنشآت الكبرى.
              </p>
              <p>
                <strong className="text-sage-primary">السجل التجاري:</strong> 7051975600<br/>
                <strong className="text-sage-primary">المقر الرئيسي:</strong> الرياض، المملكة العربية السعودية
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const VisionMissionSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section ref={ref} className="section-padding bg-gradient-to-b from-white via-sage-50 to-white">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.2 }}
            className="p-8 rounded-3xl bg-gradient-to-br from-white to-sage-50 border-2 border-sage-primary/20 hover:border-sage-primary hover:shadow-2xl transition-all"
          >
            <div className="w-16 h-16 rounded-full bg-sage-primary/10 flex items-center justify-center mb-6">
              <Target className="w-8 h-8 text-sage-primary" />
            </div>
            <h3 className="text-3xl font-bold mb-4 text-sage-primary">رؤيتنا</h3>
            <p className="text-brown-dark text-lg leading-relaxed">
              أن نكون الخيار الأول لخدمات صف السيارات في المملكة والمنطقة، ونضع معايير 
              جديدة للاحترافية والجودة في هذا القطاع. نسعى للمساهمة في تحقيق أهداف 
              <span className="text-sunset-golden font-semibold">رؤية المملكة 2030</span> من خلال تقديم خدمات متطورة تدعم قطاع الضيافة والسياحة.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.2, delay: 0 }}
            className="p-8 rounded-3xl bg-gradient-to-br from-white to-sage-50 border-2 border-sage-primary/20 hover:border-sage-primary hover:shadow-2xl transition-all"
          >
            <div className="w-16 h-16 rounded-full bg-sage-primary/10 flex items-center justify-center mb-6">
              <Award className="w-8 h-8 text-sage-primary" />
            </div>
            <h3 className="text-3xl font-bold mb-4 text-sage-primary">رسالتنا</h3>
            <p className="text-brown-dark text-lg leading-relaxed">
              تقديم خدمات صف سيارات استثنائية تجمع بين التكنولوجيا المتقدمة، الفريق المحترف، 
              والاهتمام بأدق التفاصيل لضمان تجربة مميزة لعملائنا وضيوفهم.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const ValuesSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const values = [
    {
      icon: Award,
      title: 'الاحترافية',
      description: 'نلتزم بأعلى معايير المهنية في كل ما نقوم به',
    },
    {
      icon: Shield,
      title: 'الأمانة',
      description: 'ثقة عملائنا هي أغلى ما نملك، نحافظ عليها بكل أمانة',
    },
    {
      icon: Target,
      title: 'التميز',
      description: 'نسعى دائماً للتفوق وتقديم أفضل من المتوقع',
    },
    {
      icon: Lightbulb,
      title: 'الابتكار',
      description: 'نستخدم أحدث التقنيات لتحسين خدماتنا باستمرار',
    },
    {
      icon: Heart,
      title: 'العناية بالعميل',
      description: 'رضا عملائنا وضيوفهم هو هدفنا الأول والأخير',
    },
    {
      icon: Users,
      title: 'العمل الجماعي',
      description: 'نؤمن بقوة الفريق والتعاون لتحقيق النجاح',
    },
  ];

  return (
    <section ref={ref} className="section-padding bg-gradient-to-b from-white via-beige-light to-white">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4 gold-shine-effect">قيمنا</h2>
          <p className="text-brown-text text-lg">المبادئ التي نؤمن بها ونعمل وفقها</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {values.map((value, index) => {
            const Icon = value.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="p-6 rounded-3xl bg-white border-2 border-sage-primary/20 hover:border-sage-primary hover:shadow-2xl hover:scale-105 transition-all duration-300 group"
              >
                <Icon className="w-12 h-12 text-sage-primary mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="text-xl font-bold mb-2 text-brown-dark">{value.title}</h3>
                <p className="text-brown-text leading-relaxed">{value.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

const StatsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const stats = [
    { label: 'سيارة مخدومة شهرياً', value: '5,000+' },
    { label: 'عميل راضي', value: '200+' },
    { label: 'معدل الرضا', value: '99.9%' },
    { label: 'موظف محترف', value: '100+' },
  ];

  return (
    <section ref={ref} className="section-padding bg-gradient-to-b from-sage-50 via-white to-sage-50">
      <div className="container-custom">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="text-center glass-effect p-8 rounded-3xl border-2 border-sage-primary/20 hover:border-sage-primary hover:shadow-2xl hover:scale-105 transition-all duration-300"
            >
              <div className="text-5xl font-bold mb-2 bg-gradient-to-r from-sage-primary to-sage-medium bg-clip-text text-transparent">{stat.value}</div>
              <div className="text-brown-text font-medium">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const TeamSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section ref={ref} className="section-padding bg-gradient-to-b from-white via-beige-light to-white">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4 gold-shine-effect">فريقنا</h2>
          <p className="text-brown-text text-lg max-w-2xl mx-auto">
            فريق متخصص من الخبراء الملتزمين بتقديم أفضل خدمة لعملائنا
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[1, 2, 3].map((_, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.2, delay: 0 }}
              className="group"
            >
              <div className="relative h-64 mb-4 rounded-3xl overflow-hidden border-2 border-sage-primary/20 group-hover:border-sage-primary transition-all">
                <Image
                  src={`https://images.unsplash.com/photo-${index === 0 ? '1560250097-0b93528c311a' : index === 1 ? '1573496359142-b8d87734a5a2' : '1500648767791-00dcc994a43e'}?q=80&w=1000`}
                  alt="عضو فريق"
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-sage-primary/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </div>
              <h3 className="text-xl font-bold text-sage-primary mb-2 text-center">
                {index === 0 ? 'فريق الإدارة' : index === 1 ? 'فريق العمليات' : 'فريق خدمة العملاء'}
              </h3>
              <p className="text-brown-text text-center">محترفون في مجالهم</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutContent;
