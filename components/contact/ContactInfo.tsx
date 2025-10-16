'use client';

import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock, MessageCircle } from 'lucide-react';

const ContactInfo = () => {
  const contactItems = [
    {
      icon: MapPin,
      title: 'العنوان',
      details: ['عبدالرحمن الشعيبي، حي الروضة', 'الرياض 12311', 'المملكة العربية السعودية'],
    },
    {
      icon: Phone,
      title: 'الهاتف',
      details: ['+966 XX XXX XXXX', '+966 5X XXX XXXX'],
      link: 'tel:+966XXXXXXXXX',
    },
    {
      icon: MessageCircle,
      title: 'واتساب',
      details: ['+966 5X XXX XXXX'],
      link: 'https://wa.me/966XXXXXXXXX',
    },
    {
      icon: Mail,
      title: 'البريد الإلكتروني',
      details: ['info@omnira.sa', 'support@omnira.sa'],
      link: 'mailto:info@omnira.sa',
    },
    {
      icon: Clock,
      title: 'ساعات العمل',
      details: ['خدمة العملاء: 24/7', 'المكتب الإداري: الأحد - الخميس', '9:00 ص - 6:00 م'],
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8 }}
      className="space-y-6"
    >
      <div className="mb-8">
        <h2 className="text-4xl font-black mb-4 gold-shine-effect">معلومات التواصل</h2>
        <p className="text-brown-dark text-lg leading-relaxed">
          يسعدنا تواصلك معنا عبر أي من القنوات التالية. فريقنا جاهز لخدمتك على مدار الساعة.
        </p>
      </div>

      <div className="space-y-4">
        {contactItems.map((item, index) => {
          const Icon = item.icon;
          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="p-6 rounded-2xl bg-white/90 backdrop-blur-md border-2 border-sage-primary/20 hover:border-sage-primary hover:shadow-2xl hover:shadow-sage-primary/10 transition-all duration-300 group"
            >
              <div className="flex items-start space-x-4 space-x-reverse">
                <div className="flex-shrink-0">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-sage-primary/20 to-sage-medium/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 border border-sage-primary/30">
                    <Icon className="w-7 h-7 text-sage-primary" />
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold mb-3 text-brown-dark">{item.title}</h3>
                  {item.link ? (
                    <a
                      href={item.link}
                      target={item.link.startsWith('http') ? '_blank' : undefined}
                      rel={item.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                      className="text-brown-dark hover:text-sage-primary transition-colors font-medium"
                    >
                      {item.details.map((detail, i) => (
                        <div key={i}>{detail}</div>
                      ))}
                    </a>
                  ) : (
                    <div className="text-brown-dark font-medium">
                      {item.details.map((detail, i) => (
                        <div key={i}>{detail}</div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Google Maps */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.5 }}
        className="rounded-2xl overflow-hidden border-2 border-sage-primary/20 shadow-xl"
      >
        <div className="relative h-80 bg-gradient-to-br from-sage-primary/5 to-beige-light flex items-center justify-center">
          <div className="text-center">
            <MapPin className="w-16 h-16 text-sage-primary mx-auto mb-4" />
            <p className="text-brown-dark font-bold text-lg">خريطة الموقع</p>
            <p className="text-brown-text text-sm mt-2">الرياض 12311، حي الروضة</p>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default ContactInfo;
