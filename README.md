# 🏆 OMNIRA - موقع خدمات صف السيارات

![OMNIRA](https://img.shields.io/badge/OMNIRA-Valet%20Parking-D4AF37?style=for-the-badge)

موقع احترافي لشركة OMNIRA المتخصصة في خدمات صف السيارات (Valet Parking) في المملكة العربية السعودية.

## 🎨 التقنيات المستخدمة

- **Next.js 14** - React Framework
- **TypeScript** - Type Safety
- **TailwindCSS** - Styling
- **Framer Motion** - Animations
- **Lucide React** - Icons
- **PostgreSQL** - Database
- **Prisma** - ORM

## 🚀 البدء

### المتطلبات

- Node.js 20+
- npm أو yarn

### التنصيب

```bash
# تنصيب المكتبات
npm install

# تشغيل الموقع في وضع التطوير
npm run dev

# بناء الموقع للإنتاج
npm run build

# تشغيل الموقع في وضع الإنتاج
npm start
```

افتح [http://localhost:3000](http://localhost:3000) في المتصفح.

## 📁 هيكل المشروع

```
omnira-website/
├── app/                    # Pages & Routes
├── components/             # React Components
│   ├── home/              # Homepage Components
│   └── layout/            # Layout Components
├── lib/                    # Utilities
├── public/                 # Static Files
└── styles/                 # Global Styles
```

## 🎨 الألوان

- **Gold Primary:** #D4AF37
- **Gold Light:** #F4E4C1
- **Black Primary:** #0A0A0A
- **Black Soft:** #1A1A1A

## 📝 الصفحات

- `/` - الصفحة الرئيسية
- `/about` - من نحن
- `/services` - الخدمات
- `/locations` - المدن
- `/pricing` - الأسعار
- `/contact` - اتصل بنا

## 🔒 المتغيرات البيئية

انسخ `.env.example` إلى `.env.local` وقم بتعبئة القيم المطلوبة.

## 🌐 النشر على Netlify

الموقع جاهز للنشر على Netlify:

1. قم بربط المشروع مع Netlify
2. أضف المتغيرات البيئية في لوحة تحكم Netlify
3. سيتم البناء والنشر تلقائياً

### المتغيرات البيئية المطلوبة على Netlify:

- `DATABASE_URL` - رابط قاعدة البيانات
- `NEXTAUTH_SECRET` - مفتاح التشفير
- `NEXTAUTH_URL` - رابط الموقع
- `NEXT_PUBLIC_GOOGLE_MAPS_API_KEY` - مفتاح Google Maps
- المتغيرات الاختيارية الأخرى حسب الحاجة

## 📄 الترخيص

© 2025 OMNIRA Company Holding - جميع الحقوق محفوظة
