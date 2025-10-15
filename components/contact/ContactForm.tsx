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
      <div className="bg-gradient-dark p-8 rounded-2xl border border-gold-primary/20">
        <h2 className="text-3xl font-bold mb-6 text-gold-primary">أرسل لنا رسالة</h2>
        
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-gray-300 mb-2">الاسم الكامل *</label>
            <input
              type="text"
              name="name"
              required
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-3 bg-black-soft border border-gray-700 rounded-lg text-white focus:border-gold-primary focus:outline-none transition-colors"
              placeholder="أدخل اسمك الكامل"
            />
          </div>

          <div>
            <label className="block text-gray-300 mb-2">البريد الإلكتروني *</label>
            <input
              type="email"
              name="email"
              required
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-3 bg-black-soft border border-gray-700 rounded-lg text-white focus:border-gold-primary focus:outline-none transition-colors"
              placeholder="example@email.com"
            />
          </div>

          <div>
            <label className="block text-gray-300 mb-2">رقم الجوال *</label>
            <input
              type="tel"
              name="phone"
              required
              value={formData.phone}
              onChange={handleChange}
              className="w-full px-4 py-3 bg-black-soft border border-gray-700 rounded-lg text-white focus:border-gold-primary focus:outline-none transition-colors"
              placeholder="05xxxxxxxx"
            />
          </div>

          <div>
            <label className="block text-gray-300 mb-2">نوع الخدمة</label>
            <select
              name="service"
              value={formData.service}
              onChange={handleChange}
              className="w-full px-4 py-3 bg-black-soft border border-gray-700 rounded-lg text-white focus:border-gold-primary focus:outline-none transition-colors"
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
            <label className="block text-gray-300 mb-2">الرسالة *</label>
            <textarea
              name="message"
              required
              value={formData.message}
              onChange={handleChange}
              rows={5}
              className="w-full px-4 py-3 bg-black-soft border border-gray-700 rounded-lg text-white focus:border-gold-primary focus:outline-none transition-colors resize-none"
              placeholder="اكتب رسالتك هنا..."
            />
          </div>

          <button
            type="submit"
            className="btn-gold w-full py-4 text-lg inline-flex items-center justify-center space-x-2 space-x-reverse"
          >
            <Send className="w-5 h-5" />
            <span>إرسال الرسالة</span>
          </button>
        </form>
      </div>
    </motion.div>
  );
};

export default ContactForm;
