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
      <div>
        <h2 className="text-3xl font-bold mb-6 text-gold-primary">معلومات التواصل</h2>
        <p className="text-gray-400 mb-8">
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
              className="p-6 rounded-xl bg-gradient-dark border border-gold-primary/20 hover:border-gold-primary transition-all"
            >
              <div className="flex items-start space-x-4 space-x-reverse">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-lg bg-gold-primary/10 flex items-center justify-center">
                    <Icon className="w-6 h-6 text-gold-primary" />
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold mb-2 text-white">{item.title}</h3>
                  {item.link ? (
                    <a
                      href={item.link}
                      target={item.link.startsWith('http') ? '_blank' : undefined}
                      rel={item.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                      className="text-gray-300 hover:text-gold-primary transition-colors"
                    >
                      {item.details.map((detail, i) => (
                        <div key={i}>{detail}</div>
                      ))}
                    </a>
                  ) : (
                    <div className="text-gray-300">
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
        className="rounded-xl overflow-hidden border border-gold-primary/20"
      >
        <div className="relative h-64 bg-gradient-dark flex items-center justify-center">
          <p className="text-gray-400">خريطة الموقع - Google Maps</p>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default ContactInfo;
