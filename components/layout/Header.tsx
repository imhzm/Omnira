'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { Menu, X, Phone, ChevronDown } from 'lucide-react';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import Magnetic from '@/components/ui/Magnetic';
import { useQuoteModal } from '@/lib/quote-modal-store';

const Header = () => {
  const openQuote = useQuoteModal((s) => s.openQuote);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [showServicesMenu, setShowServicesMenu] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const pathname = usePathname();

  // hover-intent: open instantly, close with a small forgiving delay
  const openMenu = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setShowServicesMenu(true);
  };
  const scheduleClose = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    closeTimer.current = setTimeout(() => setShowServicesMenu(false), 200);
  };
  useEffect(() => {
    return () => {
      if (closeTimer.current) clearTimeout(closeTimer.current);
    };
  }, []);

  // close menus on route change
  useEffect(() => {
    setShowServicesMenu(false);
    setIsMobileMenuOpen(false);
    setMobileServicesOpen(false);
  }, [pathname]);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMobileMenuOpen]);

  const navItems = [
    { name: 'الرئيسية', href: '/', hasSubmenu: false },
    { name: 'من نحن', href: '/about', hasSubmenu: false },
    { name: 'خدماتنا', href: '/services', hasSubmenu: true },
    { name: 'أعمالنا', href: '/portfolio', hasSubmenu: false },
    { name: 'المدن', href: '/locations', hasSubmenu: false },
    { name: 'الأسعار', href: '/pricing', hasSubmenu: false },
    { name: 'المقالات', href: '/blog', hasSubmenu: false },
    { name: 'اتصل بنا', href: '/contact', hasSubmenu: false },
  ];

  const servicesMenu = [
    { name: 'فاليه باركينج فاخر', href: '/services/valet-parking', desc: 'خدمة صف السيارات المتكاملة للفنادق والوجهات' },
    { name: 'إدارة وتشغيل المواقف', href: '/services/parking-management', desc: 'حلول تشغيل وتأجير وأنظمة مواقف ذكية' },
    { name: 'التقنيات المتقدمة', href: '/services/advanced-technology', desc: 'أنظمة الفاليه الرقمية وقراءة اللوحات' },
    { name: 'المنظمون المحترفون', href: '/services/professional-organizers', desc: 'كوادر مؤهلة لإدارة وتنظيم حركة المركبات' },
    { name: 'خدمات كبار الشخصيات', href: '/services/vip', desc: 'بروتوكول وصول خاص ومسارات مخصصة' },
    { name: 'إدارة مواقف الفعاليات', href: '/services/events', desc: 'تشغيل مواقف المؤتمرات والاحتفالات' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled || isMobileMenuOpen
          ? 'bg-[#090A0C]/90 backdrop-blur-xl border-b border-white/[0.08]'
          : 'bg-transparent'
      }`}
    >
      <div className="container-custom relative">
        <div className="flex items-center justify-between h-16 lg:h-[76px]">
          {/* Logo */}
          <Link href="/" className="group flex items-center h-full py-2.5" aria-label="أومنيرا فاليه">
            <Image
              src="/logo.png"
              alt="Omnira Valet"
              width={300}
              height={84}
              className="object-contain w-auto h-10 md:h-12 drop-shadow-[0_2px_10px_rgba(201,162,74,0.35)] transition-transform duration-300 group-hover:scale-[1.03]"
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => {
              const isActive =
                pathname === item.href || (item.href !== '/' && pathname.startsWith(item.href));

              return (
                <div
                  key={item.name}
                  className="relative"
                  onMouseEnter={() => item.hasSubmenu && openMenu()}
                  onMouseLeave={() => item.hasSubmenu && scheduleClose()}
                >
                  <Link
                    href={item.href}
                    className={`group relative flex items-center gap-1.5 px-4 py-2 text-sm font-medium tracking-wide transition-colors duration-200 ${
                      isActive ? 'text-gold-primary' : 'text-white/65 hover:text-white'
                    }`}
                  >
                    <span>{item.name}</span>
                    {item.hasSubmenu && (
                      <ChevronDown className="w-3.5 h-3.5 transition-transform duration-200 group-hover:rotate-180" />
                    )}
                    {/* thin gold underline */}
                    <span
                      className={`pointer-events-none absolute -bottom-0.5 right-4 left-4 h-0.5 bg-gold-primary transition-transform duration-200 origin-right ${
                        isActive ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                      }`}
                    />
                  </Link>

                  {/* Services Mega Menu */}
                  {item.hasSubmenu && showServicesMenu && (
                    <div
                      className="absolute top-full right-1/2 z-[100] w-[420px] translate-x-1/2 pt-3"
                      onMouseEnter={openMenu}
                      onMouseLeave={scheduleClose}
                    >
                      <div className="bg-[#0E0E12]/95 backdrop-blur-2xl shadow-2xl rounded-2xl border border-white/[0.1] p-5">
                        <div className="flex items-center justify-between mb-3 pb-3 border-b border-white/[0.08]">
                          <span className="text-[11px] font-medium tracking-[0.2em] text-gold-primary">
                            باقة خدمات أومنيرا
                          </span>
                          <Link
                            href="/services"
                            className="text-xs text-white/50 hover:text-gold-primary transition-colors duration-200"
                            onClick={() => setShowServicesMenu(false)}
                          >
                            عرض الدليل الكامل ←
                          </Link>
                        </div>
                        <div className="grid grid-cols-1 gap-1.5">
                          {servicesMenu.map((service) => (
                            <Link
                              key={service.href}
                              href={service.href}
                              className="group flex items-start justify-between gap-3 p-2.5 rounded-xl transition-all duration-200 hover:bg-white/[0.05]"
                              onClick={() => setShowServicesMenu(false)}
                            >
                              <div>
                                <span className="block text-sm font-medium text-white/80 group-hover:text-gold-primary transition-colors duration-200">
                                  {service.name}
                                </span>
                                <span className="block text-xs text-white/45 mt-0.5 line-clamp-1">
                                  {service.desc}
                                </span>
                              </div>
                              <span className="text-gold-primary opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200 text-sm mt-1">
                                ←
                              </span>
                            </Link>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </nav>

          {/* CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href="tel:+966551962033"
              className="min-h-[44px] min-w-[44px] flex items-center justify-center rounded-full text-white/60 hover:text-gold-primary hover:bg-white/[0.04] transition-colors duration-200"
              aria-label="اتصل بنا: 966551962033"
            >
              <Phone className="w-5 h-5" />
            </a>
            <Magnetic strength={0.3}>
              <button
                onClick={() => openQuote({ source: 'header' })}
                className="group inline-flex items-center gap-2 rounded-full bg-gold-primary px-6 py-2.5 text-sm font-medium text-[#0A0A0C] transition-all duration-300 hover:bg-gold-light hover:shadow-[0_4px_20px_rgba(205,170,82,0.25)]"
              >
                <span>احجز الآن</span>
                <span className="transition-transform duration-300 group-hover:-translate-x-0.5">←</span>
              </button>
            </Magnetic>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden min-h-[44px] min-w-[44px] flex items-center justify-center rounded-lg p-2 text-white hover:bg-white/[0.06] transition-colors"
            aria-label={isMobileMenuOpen ? 'إغلاق القائمة' : 'فتح القائمة الرئيسية'}
            aria-expanded={isMobileMenuOpen}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden border-t border-white/10 bg-[#0A0A0C]/95 backdrop-blur-xl">
          <nav className="container-custom py-6 space-y-1">
            {navItems.map((item) => {
              const isActive =
                pathname === item.href || (item.href !== '/' && pathname.startsWith(item.href));

              // خدماتنا — expandable accordion on mobile
              if (item.hasSubmenu) {
                return (
                  <div key={item.name}>
                    <div className="flex items-center justify-between">
                      <Link
                        href={item.href}
                        className={`flex-1 py-3.5 text-base font-medium transition-colors duration-300 ${
                          isActive ? 'text-gold-primary' : 'text-white/70 hover:text-white'
                        }`}
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        {item.name}
                      </Link>
                      <button
                        onClick={() => setMobileServicesOpen((v) => !v)}
                        aria-label="فتح قائمة الخدمات"
                        aria-expanded={mobileServicesOpen}
                        className="p-3 text-white/60"
                      >
                        <ChevronDown
                          className={`h-5 w-5 transition-transform duration-300 ${
                            mobileServicesOpen ? 'rotate-180 text-gold-primary' : ''
                          }`}
                        />
                      </button>
                    </div>
                    <div
                      className={`grid transition-[grid-template-rows] duration-300 ${
                        mobileServicesOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'
                      }`}
                    >
                      <div className="overflow-hidden">
                        <div className="mb-2 space-y-1 rounded-xl border border-white/10 bg-white/[0.03] p-2">
                          {servicesMenu.map((service) => (
                            <Link
                              key={service.href}
                              href={service.href}
                              className="block rounded-lg px-4 py-3 text-sm text-white/65 transition-colors duration-300 hover:bg-white/[0.05] hover:text-white"
                              onClick={() => setIsMobileMenuOpen(false)}
                            >
                              {service.name}
                            </Link>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                );
              }

              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`block py-3.5 text-base font-medium transition-colors duration-300 ${
                    isActive ? 'text-gold-primary' : 'text-white/70 hover:text-white'
                  }`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              );
            })}
            <button
              onClick={() => { setIsMobileMenuOpen(false); openQuote({ source: 'header-mobile' }); }}
              className="mt-5 block w-full rounded-full bg-gold-primary py-3.5 text-center text-sm font-medium text-[#0A0A0C] transition-colors duration-300 hover:bg-gold-light"
            >
              احجز الآن
            </button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
