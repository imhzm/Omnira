'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Send } from 'lucide-react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // هنا يمكن إضافة منطق الإرسال
    console.log('Form submitted:', formData);
    alert('شكراً لتواصلك معنا! سنرد عليك في أقرب وقت.');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8 }}
    >
      <div className="bg-white/90 backdrop-blur-md p-8 md:p-10 rounded-3xl border-2 border-sage-primary/20 shadow-2xl">
        <div className="mb-8">
          <h2 className="text-4xl font-black mb-3 gold-shine-effect">أرسل لنا رسالة</h2>
          <p className="text-brown-text text-base">املأ النموذج وسنتواصل معك خلال 24 ساعة</p>
        </div>
        
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-brown-dark font-bold mb-3 text-sm">الاسم الكامل *</label>
            <input
              type="text"
              name="name"
              required
              value={formData.name}
              onChange={handleChange}
              className="w-full px-5 py-4 bg-white border-2 border-sage-primary/20 rounded-xl text-brown-dark placeholder:text-brown-text/50 focus:border-sage-primary focus:ring-4 focus:ring-sage-primary/10 focus:outline-none transition-all"
              placeholder="أدخل اسمك الكامل"
            />
          </div>

          <div>
            <label className="block text-brown-dark font-bold mb-3 text-sm">البريد الإلكتروني *</label>
            <input
              type="email"
              name="email"
              required
              value={formData.email}
              onChange={handleChange}
              className="w-full px-5 py-4 bg-white border-2 border-sage-primary/20 rounded-xl text-brown-dark placeholder:text-brown-text/50 focus:border-sage-primary focus:ring-4 focus:ring-sage-primary/10 focus:outline-none transition-all"
              placeholder="example@email.com"
            />
          </div>

          <div>
            <label className="block text-brown-dark font-bold mb-3 text-sm">رقم الجوال *</label>
            <input
              type="tel"
              name="phone"
              required
              value={formData.phone}
              onChange={handleChange}
              className="w-full px-5 py-4 bg-white border-2 border-sage-primary/20 rounded-xl text-brown-dark placeholder:text-brown-text/50 focus:border-sage-primary focus:ring-4 focus:ring-sage-primary/10 focus:outline-none transition-all"
              placeholder="05xxxxxxxx"
            />
          </div>

          <div>
            <label className="block text-brown-dark font-bold mb-3 text-sm">نوع الخدمة</label>
            <select
              name="service"
              value={formData.service}
              onChange={handleChange}
              className="w-full px-5 py-4 bg-white border-2 border-sage-primary/20 rounded-xl text-brown-dark focus:border-sage-primary focus:ring-4 focus:ring-sage-primary/10 focus:outline-none transition-all"
            >
              <option value="">اختر الخدمة</option>
              <option value="parking-management">إدارة وتشغيل المواقف</option>
              <option value="valet-parking">خدمات الفاليه باركينج</option>
              <option value="advanced-technology">التقنيات المتقدمة</option>
              <option value="professional-organizers">المنظمين المحترفين</option>
              <option value="consultation">الاستشارات</option>
              <option value="golf-cart">جولف كار</option>
              <option value="support-services">خدمات مساندة</option>
              <option value="car-wash">غسيل السيارات</option>
            </select>
          </div>

          <div>
            <label className="block text-brown-dark font-bold mb-3 text-sm">الرسالة *</label>
            <textarea
              name="message"
              required
              value={formData.message}
              onChange={handleChange}
              rows={6}
              className="w-full px-5 py-4 bg-white border-2 border-sage-primary/20 rounded-xl text-brown-dark placeholder:text-brown-text/50 focus:border-sage-primary focus:ring-4 focus:ring-sage-primary/10 focus:outline-none transition-all resize-none"
              placeholder="اكتب رسالتك هنا..."
            />
          </div>

          <button
            type="submit"
            className="btn-gold w-full py-5 text-lg font-bold inline-flex items-center justify-center space-x-3 space-x-reverse group hover:scale-[1.02] transition-transform"
          >
            <Send className="w-6 h-6 group-hover:rotate-12 transition-transform" />
            <span>إرسال الرسالة</span>
          </button>
        </form>
      </div>
    </motion.div>
  );
};

export default ContactForm;
