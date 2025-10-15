# 🚀 دليل النشر على Netlify

## ✅ جاهز للنشر

الموقع جاهز بالكامل للنشر على Netlify. جميع الملفات المطلوبة موجودة:

- ✅ `netlify.toml` - ملف التكوين
- ✅ `package.json` - المكتبات والاعتمادات
- ✅ `.gitignore` - ملفات التجاهل
- ✅ جميع ملفات المشروع منظمة

## 📋 خطوات النشر

### 1. إنشاء حساب على Netlify
- اذهب إلى [netlify.com](https://netlify.com)
- سجّل دخول باستخدام GitHub أو GitLab أو البريد الإلكتروني

### 2. ربط المشروع
```bash
# إذا كنت تستخدم Git
git add .
git commit -m "Ready for Netlify deployment"
git push
```

### 3. النشر من Netlify Dashboard
1. اضغط على "Add new site"
2. اختر "Import an existing project"
3. اختر مستودع Git الخاص بك
4. Netlify سيكتشف تلقائياً أنه مشروع Next.js

### 4. إعدادات البناء (Build Settings)
سيتم تطبيقها تلقائياً من `netlify.toml`:
- **Build command**: `npm run build`
- **Publish directory**: `.next`
- **Node version**: 18

### 5. إضافة المتغيرات البيئية
في لوحة تحكم Netlify، اذهب إلى:
- Site settings → Environment variables
- أضف المتغيرات التالية:

#### المتغيرات الأساسية:
```
NEXTAUTH_SECRET=<your-secret-key>
NEXTAUTH_URL=<your-netlify-url>
```

#### المتغيرات الاختيارية (إذا كنت تستخدمها):
```
DATABASE_URL=<your-database-url>
NEXT_PUBLIC_GOOGLE_MAPS_API_KEY=<your-maps-key>
MOYASAR_API_KEY=<your-moyasar-key>
MOYASAR_SECRET=<your-moyasar-secret>
UNIFONIC_API_ID=<your-unifonic-id>
UNIFONIC_SENDER_ID=<your-sender-id>
RESEND_API_KEY=<your-resend-key>
NEXT_PUBLIC_GA_ID=<your-google-analytics-id>
```

### 6. النشر
- اضغط على "Deploy site"
- انتظر حتى ينتهي البناء (2-5 دقائق)
- موقعك جاهز! 🎉

## 🔧 التحديثات التلقائية

بعد الربط الأولي، كل `git push` سيؤدي إلى:
1. بناء تلقائي جديد
2. نشر تلقائي للتحديثات
3. إشعار بحالة البناء

## 🌐 اسم النطاق المخصص

لإضافة نطاق مخصص:
1. اذهب إلى "Domain settings"
2. اضغط "Add custom domain"
3. اتبع التعليمات لتحديث DNS

## 📊 المراقبة والتحليلات

- **Build logs**: تحقق من سجلات البناء في Netlify Dashboard
- **Analytics**: متوفرة في لوحة التحكم
- **Performance**: مراقبة أداء الموقع تلقائياً

## ⚠️ ملاحظات مهمة

1. **قاعدة البيانات**: تأكد من أن قاعدة البيانات متاحة عبر الإنترنت
2. **API Keys**: لا تشارك مفاتيح API الخاصة بك
3. **Environment Variables**: تأكد من إضافة جميع المتغيرات المطلوبة
4. **Build Time**: أول بناء قد يستغرق وقتاً أطول

## 🆘 حل المشاكل

### فشل البناء:
- تحقق من سجلات البناء في Netlify
- تأكد من أن جميع المتغيرات البيئية موجودة
- تأكد من أن `npm run build` يعمل محلياً

### صفحة 404:
- تأكد من أن `netlify.toml` موجود
- تحقق من إعدادات redirects

### أخطاء البيئة:
- راجع المتغيرات البيئية في Netlify Dashboard
- تأكد من عدم وجود أخطاء إملائية

## 📞 الدعم

- [Netlify Documentation](https://docs.netlify.com/)
- [Next.js on Netlify](https://docs.netlify.com/frameworks/next-js/)
- [Community Support](https://answers.netlify.com/)

---

© 2025 OMNIRA Company Holding
