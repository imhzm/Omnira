'use client';

import { useState } from 'react';
import { Check, X } from 'lucide-react';

// تعريف أنواع البيانات لتحسين التوافق مع TypeScript
type Feature = 'سائقون محترفون' | 'تأمين شامل' | 'خدمة 24/7' | 'تقارير دورية' | 'زي موحد خاص' | 
           'إدارة مواقف كاملة' | 'تذاكر إلكترونية' | 'دعم تقني مباشر' | 'تطبيق جوال' | 
           'خدمة غسيل سيارات' | 'خدمة استقبال VIP';

type FeaturesMap = {
  [key in Feature]: boolean;
};

type PlanName = 'باقة الفنادق' | 'باقة المطاعم' | 'باقة الفعاليات';

type Plan = {
  name: PlanName;
  features: FeaturesMap;
};

// نموذج بيانات مقارنة الباقات
const comparisonData = {
  categories: [
    'المزايا الأساسية',
    'الخدمات المشمولة',
    'القطاعات المناسبة',
    'الدعم الفني',
  ],
  plans: [
    {
      name: 'باقة الفنادق' as PlanName,
      features: {
        'سائقون محترفون': true,
        'تأمين شامل': true,
        'خدمة 24/7': true,
        'تقارير دورية': true,
        'زي موحد خاص': true,
        'إدارة مواقف كاملة': true,
        'تذاكر إلكترونية': true,
        'دعم تقني مباشر': true,
        'تطبيق جوال': true,
        'خدمة غسيل سيارات': true,
        'خدمة استقبال VIP': true,
      } as FeaturesMap
    },
    {
      name: 'باقة المطاعم' as PlanName,
      features: {
        'سائقون محترفون': true,
        'تأمين شامل': true,
        'خدمة 24/7': false,
        'تقارير دورية': true,
        'زي موحد خاص': true,
        'إدارة مواقف كاملة': false,
        'تذاكر إلكترونية': true,
        'دعم تقني مباشر': true,
        'تطبيق جوال': false,
        'خدمة غسيل سيارات': false,
        'خدمة استقبال VIP': false,
      } as FeaturesMap
    },
    {
      name: 'باقة الفعاليات' as PlanName,
      features: {
        'سائقون محترفون': true,
        'تأمين شامل': true,
        'خدمة 24/7': false,
        'تقارير دورية': false,
        'زي موحد خاص': true,
        'إدارة مواقف كاملة': true,
        'تذاكر إلكترونية': true,
        'دعم تقني مباشر': true,
        'تطبيق جوال': false,
        'خدمة غسيل سيارات': false,
        'خدمة استقبال VIP': true,
      } as FeaturesMap
    }
  ] as Plan[]
};

// القطاعات المناسبة لكل باقة
type SectorsMap = {
  [key in PlanName]: string[];
};

const suitableSectors: SectorsMap = {
  'باقة الفنادق': ['الفنادق 5 نجوم', 'المنتجعات', 'الأجنحة الفندقية', 'قصور الضيافة'],
  'باقة المطاعم': ['المطاعم الفاخرة', 'الكافيهات', 'النوادي', 'المقاهي الراقية'],
  'باقة الفعاليات': ['المؤتمرات', 'المعارض', 'حفلات الزفاف', 'المهرجانات', 'الفعاليات الرياضية'],
};

export default function PricingComparison() {
  const [activePlan, setActivePlan] = useState<PlanName>('باقة الفنادق');

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl font-bold text-black-primary mb-4">
            قارن بين باقاتنا
          </h2>
          <p className="text-gray-600 mb-8">
            اختر الباقة المناسبة لاحتياجاتك من خلال مقارنة المزايا والخدمات المتاحة في كل باقة
          </p>
        </div>

        {/* أزرار اختيار الباقات */}
        <div className="flex flex-wrap justify-center gap-4 mb-10">
          {comparisonData.plans.map((plan) => (
            <button
              key={plan.name}
              className={`px-6 py-3 rounded-lg font-medium text-lg transition-all duration-300 ${
                activePlan === plan.name
                  ? 'bg-gold-primary text-white shadow-lg'
                  : 'bg-white text-gray-700 border border-gray-200 hover:bg-gray-100'
              }`}
              onClick={() => setActivePlan(plan.name)}
            >
              {plan.name}
            </button>
          ))}
        </div>

        {/* جدول المقارنة */}
        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="bg-gray-50">
                  <th className="px-6 py-4 text-right text-lg font-semibold text-gray-700 border-b">المزايا</th>
                  {comparisonData.plans.map((plan) => (
                    <th 
                      key={plan.name}
                      className={`px-6 py-4 text-center text-lg font-semibold border-b ${
                        activePlan === plan.name
                          ? 'text-gold-primary bg-gold-50'
                          : 'text-gray-700'
                      }`}
                    >
                      {plan.name}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {Object.keys(comparisonData.plans[0].features).map((feature, index) => (
                  <tr key={feature} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                    <td className="px-6 py-4 text-gray-800 font-medium">{feature}</td>
                    {comparisonData.plans.map((plan) => (
                      <td
                        key={`${plan.name}-${feature}`}
                        className={`px-6 py-4 text-center ${
                          activePlan === plan.name ? 'bg-gold-50/30' : ''
                        }`}
                      >
                        {plan.features[feature as Feature] ? (
                          <Check className="text-green-500 w-6 h-6 mx-auto" />
                        ) : (
                          <X className="text-red-400 w-6 h-6 mx-auto" />
                        )}
                      </td>
                    ))}
                  </tr>
                ))}

                {/* القطاعات المناسبة */}
                <tr className="bg-gray-50">
                  <td className="px-6 py-4 text-gray-800 font-medium">القطاعات المناسبة</td>
                  {comparisonData.plans.map((plan) => (
                    <td
                      key={`${plan.name}-sectors`}
                      className={`px-6 py-4 text-center ${
                        activePlan === plan.name ? 'bg-gold-50/30' : ''
                      }`}
                    >
                      <div className="flex flex-wrap justify-center gap-1">
                        {suitableSectors[plan.name as PlanName].map((sector: string) => (
                          <span
                            key={sector}
                            className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-full"
                          >
                            {sector}
                          </span>
                        ))}
                      </div>
                    </td>
                  ))}
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* نص توضيحي */}
        <div className="mt-8 text-center text-sm text-gray-500">
          * جميع الباقات تشمل تأميناً شاملاً وسائقين محترفين ومدربين. تفاصيل أكثر عن الباقات متوفرة عند التواصل معنا.
        </div>
      </div>
    </section>
  );
}
