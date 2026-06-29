import Link from 'next/link';
import Image from 'next/image';
import { Instagram, Linkedin, MessageCircle } from 'lucide-react';

const Footer = () => {
  const year = new Date().getFullYear();

  const columns = [
    {
      title: 'الخدمات',
      links: [
        { name: 'فاليه باركينج', href: '/services/valet-parking' },
        { name: 'إدارة المواقف', href: '/services/parking-management' },
        { name: 'التقنيات المتقدمة', href: '/services/advanced-technology' },
        { name: 'المنظمون المحترفون', href: '/services/professional-organizers' },
      ],
    },
    {
      title: 'الشركة',
      links: [
        { name: 'من نحن', href: '/about' },
        { name: 'الأسعار', href: '/pricing' },
        { name: 'المدن', href: '/locations' },
        { name: 'اتصل بنا', href: '/contact' },
      ],
    },
  ];

  return (
    <footer className="relative border-t border-white/10 bg-[#0A0A0C]">
      <div className="container-custom py-20 lg:py-28">
        <div className="grid grid-cols-1 gap-14 lg:grid-cols-12">
          {/* brand */}
          <div className="lg:col-span-5">
            <Image
              src="/logo.png"
              alt="Omnira Valet"
              width={220}
              height={62}
              className="h-12 w-auto object-contain"
            />
            <p className="mt-7 max-w-sm text-sm font-light leading-relaxed text-white/50">
              خدمة صفّ السيارات الفاخرة في المملكة — نصنع من لحظة الوصول تجربةً لا
              تُنسى.
            </p>
            <div className="mt-8 flex items-center gap-3">
              <a href="#" aria-label="Instagram" className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-white/60 transition-colors duration-300 hover:border-gold-primary hover:text-gold-primary">
                <Instagram className="h-4 w-4" />
              </a>
              <a href="#" aria-label="LinkedIn" className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-white/60 transition-colors duration-300 hover:border-gold-primary hover:text-gold-primary">
                <Linkedin className="h-4 w-4" />
              </a>
              <a href="https://wa.me/966XXXXXXXXX" aria-label="WhatsApp" className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-white/60 transition-colors duration-300 hover:border-gold-primary hover:text-gold-primary">
                <MessageCircle className="h-4 w-4" />
              </a>
            </div>
          </div>

          {columns.map((c) => (
            <div key={c.title} className="lg:col-span-2">
              <h4 className="mb-5 text-[11px] font-medium tracking-[0.25em] text-gold-primary/80">
                {c.title}
              </h4>
              <ul className="space-y-3">
                {c.links.map((l) => (
                  <li key={l.name}>
                    <Link href={l.href} className="text-sm text-white/55 transition-colors duration-300 hover:text-white">
                      {l.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div className="lg:col-span-3">
            <h4 className="mb-5 text-[11px] font-medium tracking-[0.25em] text-gold-primary/80">
              تواصل
            </h4>
            <ul className="space-y-4 text-sm text-white/55">
              <li>الرياض، حي الروضة — المملكة العربية السعودية</li>
              <li>
                <a href="https://wa.me/966XXXXXXXXX" dir="ltr" className="transition-colors duration-300 hover:text-white">
                  +966 XX XXX XXXX
                </a>
              </li>
              <li>
                <a href="mailto:info@omniravalet.com" className="transition-colors duration-300 hover:text-white">
                  info@omniravalet.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 text-xs text-white/40 md:flex-row">
          <p>© {year} Omnira Valet — السجل التجاري 7051975600</p>
          <p className="flex items-center gap-1.5">
            صُمّم بواسطة
            <a href="https://www.skywaveads.com" target="_blank" rel="noopener noreferrer" className="text-white/60 transition-colors duration-300 hover:text-gold-primary">
              Sky Wave
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
