'use client';

import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock, MessageCircle } from 'lucide-react';

const ContactInfo = () => {
  const contactItems = [
    {
      icon: MapPin,
      title: 'العنوان',
      details: ['POMF+3FG روضة، الرياض السعودية', 'حي الروضة، الرياض 12311', 'المملكة العربية السعودية'],
      coordinates: '24°43\'57.7"N 46°46\'25.4"E',
      mapLink: 'https://maps.app.goo.gl/BpyJj4V4sjPssrbf9',
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

      {/* Google Maps - خريطة تفاعلية */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.5 }}
        className="rounded-2xl overflow-hidden border-2 border-sage-primary/30 shadow-2xl hover:shadow-sage-primary/20 transition-all duration-300"
      >
        {/* Header */}
        <div className="bg-gradient-to-r from-sage-primary to-sage-medium p-4 flex items-center justify-between">
          <div className="flex items-center space-x-3 space-x-reverse">
            <MapPin className="w-6 h-6 text-white" />
            <div>
              <h3 className="text-white font-black text-lg">موقعنا على الخريطة</h3>
              <p className="text-white/80 text-sm">POMF+3FG روضة، الرياض</p>
            </div>
          </div>
          <a
            href="https://maps.app.goo.gl/BpyJj4V4sjPssrbf9"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white/20 hover:bg-white/30 text-white px-4 py-2 rounded-lg text-sm font-bold transition-all duration-300 flex items-center space-x-2 space-x-reverse"
          >
            <span>فتح في Google Maps</span>
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </a>
        </div>
        
        {/* Map */}
        <div className="relative h-96 bg-gray-100">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3624.0989!2d46.773722!3d24.73269!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjTCsDQzJzU3LjciTiA0NsKwNDYnMjUuNCJF!5e0!3m2!1sar!2ssa!4v1234567890"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="موقع OMNIRA على الخريطة"
            className="absolute inset-0"
          />
        </div>
        
        {/* Footer Info */}
        <div className="bg-gradient-to-r from-beige-light to-white p-4 border-t-2 border-sage-primary/10">
          <div className="flex items-center justify-between text-sm">
            <div className="flex items-center space-x-2 space-x-reverse text-brown-dark">
              <span className="font-bold">الإحداثيات:</span>
              <span className="font-mono text-sage-primary">24°43&apos;57.7&quot;N 46°46&apos;25.4&quot;E</span>
            </div>
            <div className="flex items-center space-x-2 space-x-reverse text-brown-text">
              <MapPin className="w-4 h-4" />
              <span>حي الروضة، الرياض 12311</span>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default ContactInfo;
