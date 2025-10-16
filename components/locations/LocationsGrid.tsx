'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { MapPin, Phone, Mail } from 'lucide-react';

const LocationsGrid = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  // جميع مدن السعودية مقسمة حسب المناطق
  const regions = [
    {
      name: 'منطقة الرياض',
      cities: ['الرياض', 'الخرج', 'الدوادمي', 'المجمعة', 'القويعية', 'وادي الدواسر', 'الأفلاج', 'الزلفي', 'شقراء', 'حوطة بني تميم', 'عفيف', 'السليل', 'ضرما', 'المزاحمية', 'رماح'],
    },
    {
      name: 'منطقة مكة المكرمة',
      cities: ['مكة المكرمة', 'جدة', 'الطائف', 'القنفذة', 'الليث', 'رابغ', 'خليص', 'رنية', 'تربة', 'الجموم', 'الكامل', 'المويه', 'ميسان', 'أضم', 'العرضيات'],
    },
    {
      name: 'المنطقة الشرقية',
      cities: ['الدمام', 'الخبر', 'الظهران', 'الجبيل', 'الأحساء', 'حفر الباطن', 'القطيف', 'رأس تنورة', 'بقيق', 'النعيرية', 'الخفجي', 'قرية العليا', 'صفوى', 'سيهات', 'عنك'],
    },
    {
      name: 'المنطقة الشمالية',
      cities: ['عرعر', 'طريف', 'رفحاء', 'العويقيلة'],
    },
    {
      name: 'منطقة المدينة المنورة',
      cities: ['المدينة المنورة', 'ينبع', 'العلا', 'مهد الذهب', 'بدر', 'خيبر', 'الحناكية', 'العيص', 'وادي الفرع'],
    },
    {
      name: 'منطقة القصيم',
      cities: ['بريدة', 'عنيزة', 'الرس', 'المذنب', 'البكيرية', 'الأسياح', 'النبهانية', 'الشماسية', 'عيون الجواء', 'رياض الخبراء', 'عقلة الصقور', 'ضرية'],
    },
    {
      name: 'منطقة حائل',
      cities: ['حائل', 'بقعاء', 'الغزالة', 'الشنان', 'السليمي', 'الحائط', 'الشملي', 'موقق', 'سميراء'],
    },
    {
      name: 'منطقة عسير',
      cities: ['أبها', 'خميس مشيط', 'بيشة', 'النماص', 'محايل', 'سراة عبيدة', 'أحد رفيدة', 'رجال ألمع', 'بللسمر', 'بلقرن', 'تنومة', 'المجاردة', 'ظهران الجنوب', 'تثليث'],
    },
    {
      name: 'منطقة تبوك',
      cities: ['تبوك', 'الوجه', 'ضباء', 'تيماء', 'أملج', 'حقل'],
    },
    {
      name: 'منطقة جازان',
      cities: ['جازان', 'صبيا', 'أبو عريش', 'صامطة', 'الدرب', 'بيش', 'العارضة', 'الحرث', 'ضمد', 'الريث', 'فرسان', 'الداير'],
    },
    {
      name: 'منطقة نجران',
      cities: ['نجران', 'شرورة', 'حبونا', 'بدر الجنوب', 'يدمة', 'ثار', 'خباش'],
    },
    {
      name: 'منطقة الباحة',
      cities: ['الباحة', 'بلجرشي', 'المخواة', 'المندق', 'العقيق', 'قلوة', 'القرى', 'الحجرة', 'غامد الزناد'],
    },
    {
      name: 'منطقة الجوف',
      cities: ['سكاكا', 'القريات', 'دومة الجندل', 'طبرجل'],
    },
  ];

  return (
    <section ref={ref} className="section-padding bg-gradient-to-b from-white via-beige-light to-white">
      <div className="container-custom">
        {/* معلومات الاتصال العامة */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="max-w-4xl mx-auto mb-16"
        >
          <div className="p-8 rounded-2xl bg-white border-2 border-beige-medium shadow-sm">
            <h2 className="text-3xl font-bold mb-6 text-sage-primary text-center">
              تواصل معنا في أي مدينة
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="flex items-center justify-center space-x-3 space-x-reverse">
                <Phone className="w-5 h-5 text-sage-primary" />
                <span className="text-brown-text">+966 XX XXX XXXX</span>
              </div>
              <div className="flex items-center justify-center space-x-3 space-x-reverse">
                <Mail className="w-5 h-5 text-sage-primary" />
                <span className="text-brown-text">info@omnira.sa</span>
              </div>
              <div className="flex items-center justify-center space-x-3 space-x-reverse">
                <MapPin className="w-5 h-5 text-sage-primary" />
                <span className="text-brown-text">متاح في جميع المدن</span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* شبكة المدن حسب المناطق */}
        <div className="space-y-16">
          {regions.map((region, regionIndex) => (
            <motion.div
              key={regionIndex}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.2, delay: regionIndex * 0.1 }}
            >
              {/* عنوان المنطقة */}
              <div className="mb-8">
                <h3 className="text-3xl font-bold text-sage-primary mb-2">{region.name}</h3>
                <div className="h-1 w-24 bg-gradient-luxury rounded-full"></div>
              </div>

              {/* شبكة المدن */}
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
                {region.cities.map((city, cityIndex) => (
                  <motion.div
                    key={cityIndex}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.4, delay: (regionIndex * 0.1) + (cityIndex * 0.03) }}
                    whileHover={{ scale: 1.05, y: -5 }}
                    className="group relative"
                  >
                    <div className="relative p-6 rounded-xl bg-white border-2 border-beige-medium hover:border-sage-primary transition-all duration-300 overflow-hidden shadow-sm hover:shadow-xl">
                      {/* تأثير الخلفية عند Hover */}
                      <div className="absolute inset-0 bg-gradient-luxury opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
                      
                      {/* أيقونة الموقع */}
                      <div className="relative flex flex-col items-center text-center space-y-3">
                        <div className="w-12 h-12 rounded-full bg-sage-primary/10 flex items-center justify-center group-hover:bg-sage-primary/20 transition-colors">
                          <MapPin className="w-6 h-6 text-sage-primary" />
                        </div>
                        
                        {/* اسم المدينة */}
                        <h4 className="font-bold text-brown-dark group-hover:text-sage-primary transition-colors">
                          {city}
                        </h4>
                      </div>

                      {/* خط سفلي متحرك */}
                      <div className="absolute bottom-0 right-0 left-0 h-1 bg-gradient-luxury transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA في النهاية */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 1 }}
          className="mt-20 text-center"
        >
          <div className="p-12 rounded-2xl bg-white border-2 border-beige-medium shadow-sm">
            <h2 className="text-4xl font-bold mb-4 gold-shine-effect">
              لم تجد مدينتك؟
            </h2>
            <p className="text-brown-text text-lg mb-8 max-w-2xl mx-auto">
              نحن نتوسع باستمرار! اتصل بنا لمعرفة إمكانية تقديم خدماتنا في منطقتك
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="btn-gold px-10 py-4 text-lg inline-flex items-center justify-center"
              >
                اتصل بنا الآن
              </a>
              <a
                href="tel:+966XXXXXXXXX"
                className="px-10 py-4 text-lg border-2 border-sage-primary text-sage-dark rounded-lg hover:bg-sage-primary hover:text-white transition-all inline-flex items-center justify-center"
              >
                <Phone className="w-5 h-5 ml-2" />
                <span>+966 XX XXX XXXX</span>
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default LocationsGrid;
