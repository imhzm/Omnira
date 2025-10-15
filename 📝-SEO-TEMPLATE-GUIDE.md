# 📝 دليل Template لـ SEO - تطبيق سريع على الصفحات المتبقية

## 🎯 الهدف
تطبيق SEO احترافي على 11 صفحة متبقية بسرعة وكفاءة

---

## 📋 Template عام لأي صفحة خدمة

### الكود الكامل:

```typescript
import { Metadata } from 'next';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import ServiceDetailHero from '@/components/services/ServiceDetailHero';
import ServiceContent from '@/components/services/ServiceContent';
import { generateServiceSchema, generateFAQSchema } from '@/lib/seo-config';

export const metadata: Metadata = {
  title: '[اسم الخدمة] | OMNIRA - [وصف قصير مع كلمات مفتاحية]',
  description: '[وصف تفصيلي 200-250 حرف يتضمن: الخدمة + الفوائد + المدن + دعوة للعمل]',
  keywords: [
    '[الكلمة الرئيسية 1]',
    '[الكلمة الرئيسية 2]',
    '[الكلمة الرئيسية 3]',
    // ... 15-20 كلمة
  ],
  authors: [{ name: 'OMNIRA Company Holding' }],
  metadataBase: new URL('https://omnira.sa'),
  alternates: {
    canonical: '/services/[service-slug]',
  },
  openGraph: {
    title: '[اسم الخدمة] | OMNIRA - [عنوان جذاب]',
    description: '[وصف مختصر 120-150 حرف]',
    url: 'https://omnira.sa/services/[service-slug]',
    siteName: 'OMNIRA',
    images: [{
      url: 'https://omnira.sa/og-[service-slug].jpg',
      width: 1200,
      height: 630,
      alt: '[وصف الصورة]',
    }],
    locale: 'ar_SA',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: '[اسم الخدمة] | OMNIRA',
    description: '[وصف مختصر]',
    images: ['https://omnira.sa/og-[service-slug].jpg'],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function ServicePage() {
  const serviceSchema = generateServiceSchema({
    name: '[اسم الخدمة]',
    description: '[وصف الخدمة]',
    url: '/services/[service-slug]',
    priceRange: '$$',
  });

  const faqSchema = generateFAQSchema([
    { question: 'السؤال 1', answer: 'الإجابة 1' },
    { question: 'السؤال 2', answer: 'الإجابة 2' },
    // ... من الأسئلة الموجودة في الصفحة
  ]);

  const combinedSchema = {
    '@context': 'https://schema.org',
    '@graph': [serviceSchema, faqSchema],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(combinedSchema) }}
      />
      <main className="min-h-screen bg-black-primary">
        <Header />
        <ServiceDetailHero data={serviceData} />
        <ServiceContent data={serviceData} />
        <Footer />
      </main>
    </>
  );
}
```

---

## 🎯 أمثلة محددة للصفحات المتبقية

### 1. صفحة الفاليه باركينج

```typescript
export const metadata: Metadata = {
  title: 'خدمات الفاليه باركينج | OMNIRA - صف سيارات فاخر واحترافي في السعودية',
  description: 'خدمات فاليه باركينج فاخرة من أومنيرا للفنادق والمطاعم والفعاليات. فريق محترف مدرب، تأمين شامل، خدمة 24/7. نخدم الرياض، جدة، الدمام وجميع مدن المملكة. احجز الآن واحصل على تجربة لا تُنسى!',
  keywords: [
    'فاليه باركينج',
    'valet parking',
    'خدمات فاليه',
    'صف سيارات فاخر',
    'فاليه باركينج الرياض',
    'فاليه جدة',
    'صف سيارات للفنادق',
    'فاليه للمطاعم',
    'خدمة صف السيارات',
    'فاليه باركينج احترافي',
    'valet service Saudi Arabia',
    'luxury valet parking',
    'professional car parking',
    'hotel valet service',
    'restaurant valet parking',
  ],
  // ... باقي الإعدادات
};
```

---

### 2. صفحة إدارة المواقف

```typescript
export const metadata: Metadata = {
  title: 'إدارة وتشغيل المواقف | OMNIRA - حلول ذكية لإدارة مواقف السيارات',
  description: 'خدمات إدارة وتشغيل مواقف السيارات الاحترافية من أومنيرا. أنظمة ذكية، كفاءة تشغيلية عالية، فريق مدرب، تقارير تفصيلية. نخدم المراكز التجارية، الفنادق، المستشفيات في جميع مدن السعودية. اطلب عرض سعر الآن!',
  keywords: [
    'إدارة مواقف السيارات',
    'تشغيل المواقف',
    'parking management',
    'إدارة مواقف تجارية',
    'نظام إدارة المواقف',
    'تشغيل مواقف احترافي',
    'إدارة مواقف الرياض',
    'حلول مواقف السيارات',
    'parking operation services',
    'smart parking management',
    'commercial parking management',
    'parking facility management',
    'automated parking system',
    'parking management Saudi Arabia',
  ],
  // ... باقي الإعدادات
};
```

---

### 3. صفحة الأسعار

```typescript
export const metadata: Metadata = {
  title: 'الأسعار والباقات | OMNIRA - باقات مرنة وأسعار تنافسية لصف السيارات',
  description: 'تعرف على أسعار خدمات صف السيارات من أومنيرا. باقة الفعاليات من 2,500 ريال، باقة المنشآت الشهرية من 8,000 ريال، باقة VIP حسب الطلب. خصومات للعقود السنوية. اطلب عرض سعر مخصص الآن!',
  keywords: [
    'أسعار صف السيارات',
    'باقات الفاليه باركينج',
    'تكلفة خدمة valet',
    'أسعار إدارة المواقف',
    'باقات صف السيارات',
    'تكلفة فاليه باركينج',
    'أسعار تنافسية',
    'عروض OMNIRA',
    'باقات شهرية',
    'أسعار الفعاليات',
    'valet parking prices',
    'parking management cost',
    'affordable valet service',
    'parking packages Saudi Arabia',
  ],
  // ... باقي الإعدادات
};
```

---

### 4. صفحة اتصل بنا

```typescript
export const metadata: Metadata = {
  title: 'اتصل بنا | OMNIRA - نسعد بخدمتك على مدار الساعة 24/7',
  description: 'تواصل مع أومنيرا لخدمات صف السيارات. نسعد بالرد على استفساراتك وتقديم استشارة مجانية. اتصل: +966XXXXXXXXX | واتساب | البريد: info@omnira.sa | زرنا: الرياض، حي الروضة. خدمة عملاء 24/7',
  keywords: [
    'اتصل بنا',
    'تواصل معنا',
    'خدمة عملاء OMNIRA',
    'رقم هاتف أومنيرا',
    'عنوان أومنيرا',
    'دعم فني',
    'استفسارات',
    'طلب عرض سعر',
    'contact OMNIRA',
    'customer service',
    'support center',
    'get in touch',
    'request quote',
    'OMNIRA Riyadh office',
  ],
  // ... باقي الإعدادات
};
```

---

### 5. صفحة المدن

```typescript
export const metadata: Metadata = {
  title: 'المدن التي نخدمها | OMNIRA - خدمات صف السيارات في 150+ مدينة سعودية',
  description: 'خدمات صف السيارات من أومنيرا متوفرة في جميع مدن المملكة: الرياض، جدة، الدمام، مكة، المدينة، الطائف، أبها، تبوك، حائل، جازان، وأكثر من 150 مدينة. نغطي جميع مناطق السعودية. اتصل بنا لمعرفة توفر الخدمة في مدينتك!',
  keywords: [
    'مدن السعودية',
    'خدمات صف سيارات الرياض',
    'فاليه باركينج جدة',
    'صف سيارات الدمام',
    'خدمات مكة',
    'فاليه المدينة المنورة',
    'مواقف الطائف',
    'خدمات جميع المدن',
    'تغطية السعودية',
    'OMNIRA locations',
    'valet parking Riyadh',
    'parking services Jeddah',
    'Saudi Arabia coverage',
    'nationwide parking services',
  ],
  // ... باقي الإعدادات
};
```

---

## 🔍 قائمة الكلمات المفتاحية الشاملة

### كلمات عامة (لجميع الصفحات):
```
- صف سيارات
- فاليه باركينج
- valet parking
- إدارة مواقف السيارات
- خدمات صف السيارات السعودية
- أومنيرا
- OMNIRA
- parking management
- Saudi Arabia valet
```

### كلمات حسب الخدمة:
```
الفاليه: فاليه، valet، صف فاخر، خدمة صف
الإدارة: إدارة، تشغيل، management، operation
التقنيات: تقنيات، ANPR، IoT، AI، ذكية، smart
المنظمين: منظمين، موظفين، فريق، team
الاستشارات: استشارات، دراسة جدوى، تصميم، consultation
جولف كار: جولف كار، عربات، golf cart، shuttle
المساندة: صيانة، نظافة، أمن، دعم، support
الغسيل: غسيل، تنظيف، تلميع، car wash
```

### كلمات حسب المدينة:
```
- الرياض Riyadh
- جدة Jeddah
- الدمام Dammam
- مكة Makkah
- المدينة Madinah
```

### كلمات حسب نوع العميل:
```
- فنادق hotels
- مطاعم restaurants
- فعاليات events
- مراكز تجارية malls
- مستشفيات hospitals
```

---

## 📊 معايير النجاح

### لكل صفحة يجب:
```
✅ Title: 50-60 حرف
✅ Description: 150-250 حرف
✅ Keywords: 15-20 كلمة
✅ Schema: Service + FAQ
✅ Open Graph: كامل
✅ Twitter: كامل
✅ Images: 1200x630
✅ Canonical: صحيح
✅ Robots: index, follow
```

---

## 🎯 خطوات التطبيق السريع

### لكل صفحة:
1. انسخ الـ Template أعلاه
2. استبدل `[اسم الخدمة]` بالاسم الفعلي
3. استبدل `[service-slug]` بالـ URL
4. اختر 15-20 كلمة مفتاحية مناسبة
5. اكتب Description جذاب 200-250 حرف
6. أضف Schema للخدمة والأسئلة
7. احفظ الملف واختبره

### الوقت المتوقع:
- كل صفحة: 3-5 دقائق
- 11 صفحة: 35-55 دقيقة
- المجموع: أقل من ساعة

---

## ✅ قائمة التحقق النهائية

### بعد تطبيق SEO على كل صفحة:

- [ ] Title يحتوي على الكلمة المفتاحية الرئيسية
- [ ] Description جذاب ويشجع على النقر
- [ ] 15-20 كلمة مفتاحية متنوعة
- [ ] Schema markup صحيح
- [ ] Open Graph مكتمل
- [ ] Twitter Cards مكتمل
- [ ] Canonical URL صحيح
- [ ] Images بالمقاس الصحيح
- [ ] لا أخطاء في الكود
- [ ] تم الاختبار في المتصفح

---

## 🚀 أدوات الاختبار

### بعد الانتهاء اختبر كل صفحة:

1. **Google Rich Results Test:**
   ```
   https://search.google.com/test/rich-results
   ```

2. **Facebook Sharing Debugger:**
   ```
   https://developers.facebook.com/tools/debug/
   ```

3. **Twitter Card Validator:**
   ```
   https://cards-dev.twitter.com/validator
   ```

4. **Schema Validator:**
   ```
   https://validator.schema.org/
   ```

---

## 🎊 النتيجة المتوقعة

بعد تطبيق هذا الـ Template على جميع الصفحات:

```
✅ 14 صفحة محسّنة 100%
✅ 200+ كلمة مفتاحية
✅ 70+ Schema markup
✅ Rich Snippets جاهزة
✅ SEO Score: 100/100
✅ جاهز للتصدر في Google!
```

---

**🏆 استخدم هذا الدليل لإكمال SEO جميع الصفحات المتبقية بسرعة وكفاءة!**
