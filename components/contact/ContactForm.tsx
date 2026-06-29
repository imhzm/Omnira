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
      <div className="bg-white/[0.03] backdrop-blur-md p-10 md:p-10 rounded-3xl border border-white/10">
        <div className="mb-8">
          <h2 className="text-2xl lg:text-3xl font-medium mb-3 text-white">أرسل لنا رسالة</h2>
          <p className="text-white/50 text-base">املأ النموذج وسنتواصل معك خلال 24 ساعة</p>
        </div>
        
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-white/70 font-medium mb-3 text-sm">الاسم الكامل *</label>
            <input
              type="text"
              name="name"
              required
              value={formData.name}
              onChange={handleChange}
              className="w-full px-5 py-4 bg-[#1A1A20] border border-white/10 rounded-xl text-brown-dark placeholder:text-brown-text/50 focus:border-sage-primary focus:ring-4 focus:ring-sage-primary/10 focus:outline-none transition-all"
              placeholder="أدخل اسمك الكامل"
            />
          </div>

          <div>
            <label className="block text-white/70 font-medium mb-3 text-sm">البريد الإلكتروني *</label>
            <input
              type="email"
              name="email"
              required
              value={formData.email}
              onChange={handleChange}
              className="w-full px-5 py-4 bg-[#1A1A20] border border-white/10 rounded-xl text-brown-dark placeholder:text-brown-text/50 focus:border-sage-primary focus:ring-4 focus:ring-sage-primary/10 focus:outline-none transition-all"
              placeholder="example@email.com"
            />
          </div>

          <div>
            <label className="block text-white/70 font-medium mb-3 text-sm">رقم الجوال *</label>
            <input
              type="tel"
              name="phone"
              required
              value={formData.phone}
              onChange={handleChange}
              className="w-full px-5 py-4 bg-[#1A1A20] border border-white/10 rounded-xl text-brown-dark placeholder:text-brown-text/50 focus:border-sage-primary focus:ring-4 focus:ring-sage-primary/10 focus:outline-none transition-all"
              placeholder="05xxxxxxxx"
            />
          </div>

          <div>
            <label className="block text-white/70 font-medium mb-3 text-sm">نوع الخدمة</label>
            <select
              name="service"
              value={formData.service}
              onChange={handleChange}
              className="w-full px-5 py-4 bg-[#1A1A20] border border-white/10 rounded-xl text-brown-dark focus:border-sage-primary focus:ring-4 focus:ring-sage-primary/10 focus:outline-none transition-all"
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
            <label className="block text-white/70 font-medium mb-3 text-sm">الرسالة *</label>
            <textarea
              name="message"
              required
              value={formData.message}
              onChange={handleChange}
              rows={6}
              className="w-full px-5 py-4 bg-[#1A1A20] border border-white/10 rounded-xl text-brown-dark placeholder:text-brown-text/50 focus:border-sage-primary focus:ring-4 focus:ring-sage-primary/10 focus:outline-none transition-all resize-none"
              placeholder="اكتب رسالتك هنا..."
            />
          </div>

          <button
            type="submit"
            className="btn-gold w-full py-4 text-base gap-3 group"
          >
            <Send className="w-5 h-5 transition-transform duration-300 group-hover:-translate-x-1" />
            <span>إرسال الرسالة</span>
          </button>
        </form>
      </div>
    </motion.div>
  );
};

export default ContactForm;
