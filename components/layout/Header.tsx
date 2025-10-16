'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X, Phone, ChevronDown, Sparkles } from 'lucide-react';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [showServicesMenu, setShowServicesMenu] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      
      // Calculate scroll progress
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      const scrollTop = window.scrollY;
      const progress = (scrollTop / (documentHeight - windowHeight)) * 100;
      setScrollProgress(Math.min(progress, 100));
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'الرئيسية', href: '/', icon: null },
    { name: 'من نحن', href: '/about', icon: null },
    { name: 'خدماتنا', href: '/services', icon: ChevronDown, hasSubmenu: true },
    { name: 'المدن', href: '/locations', icon: null },
    { name: 'الأسعار', href: '/pricing', icon: null },
    { name: 'اتصل بنا', href: '/contact', icon: null },
  ];

  const servicesMenu = [
    { name: 'فاليه باركينج', href: '/services/valet-parking', emoji: '🚗' },
    { name: 'إدارة المواقف', href: '/services/parking-management', emoji: '🅿️' },
    { name: 'تقنيات متقدمة', href: '/services/advanced-technology', emoji: '🤖' },
    { name: 'خدمات VIP', href: '/services/vip', emoji: '⭐' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-xl shadow-2xl border-b-2 border-sage-primary/30'
          : 'bg-white/90 backdrop-blur-lg shadow-lg border-b border-sage-primary/20'
      }`}
    >
      <div className="container-custom relative">
        <div className="flex items-center justify-between h-20 relative">
          {/* Logo */}
          <Link href="/" className="group flex items-center h-full py-3 relative">
            <div className="relative">
              {/* Shadow Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-gold-primary/30 via-gold-primary/20 to-gold-primary/30 blur-xl scale-110 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="absolute inset-0 bg-gold-primary/20 blur-md scale-105 animate-pulse"></div>
              
              <Image
                src="/logo.png"
                alt="OMNIRA - أومنيرا"
                width={126}
                height={35}
                className="object-contain w-auto h-full relative z-10 drop-shadow-[0_4px_12px_rgba(218,165,32,0.4)] group-hover:drop-shadow-[0_8px_24px_rgba(218,165,32,0.6)] group-hover:scale-110 transition-all duration-500 animate-float"
                priority
              />
            </div>
          </Link>

          {/* Desktop Navigation - احترافي جداً */}
          <nav className="hidden lg:flex items-center space-x-1 space-x-reverse">
            {navItems.map((item) => {
              const isActive = pathname === item.href || (item.href !== '/' && pathname.startsWith(item.href));
              const Icon = item.icon;
              
              return (
                <div
                  key={item.name}
                  className="relative"
                  onMouseEnter={() => item.hasSubmenu && setShowServicesMenu(true)}
                  onMouseLeave={() => item.hasSubmenu && setShowServicesMenu(false)}
                >
                  <Link
                    href={item.href}
                    className={`relative px-5 py-3 font-bold transition-all duration-300 group flex items-center space-x-1 space-x-reverse rounded-xl ${
                      isActive 
                        ? 'text-sage-primary bg-sage-primary/10' 
                        : 'text-brown-dark hover:text-sage-primary'
                    }`}
                  >
                    {isActive && (
                      <Sparkles className="w-4 h-4 text-gold-primary animate-pulse absolute -top-1 -right-1" />
                    )}
                    <span className="relative z-10">{item.name}</span>
                    {Icon && <Icon className="w-4 h-4 group-hover:rotate-180 transition-transform duration-300" />}
                    
                    {/* Hover Background with animation */}
                    <div className="absolute inset-0 bg-gradient-to-r from-sage-primary/10 via-sage-primary/5 to-sage-primary/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-gradient"></div>
                    
                    {/* Active & Hover indicator */}
                    <span className={`absolute bottom-0 left-1/2 -translate-x-1/2 h-[3px] bg-gradient-to-r from-sage-primary via-gold-primary to-sunset-golden rounded-full transition-all duration-300 ${
                      isActive ? 'w-3/4' : 'w-0 group-hover:w-3/4'
                    }`}></span>
                  </Link>
                  
                  {/* Mega Menu للخدمات */}
                  {item.hasSubmenu && showServicesMenu && (
                    <div className="absolute top-full left-1/2 -translate-x-1/2 mt-4 w-80 bg-white/98 backdrop-blur-xl shadow-2xl rounded-2xl border-2 border-sage-primary/30 p-6 animate-slideDown z-[100]">
                      {/* السهم في الأعلى */}
                      <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-6 h-6 bg-white rotate-45 border-t-2 border-l-2 border-sage-primary/30"></div>
                      
                      {/* العنوان */}
                      <div className="mb-4 pb-3 border-b-2 border-sage-primary/20">
                        <h3 className="text-lg font-black text-brown-dark flex items-center space-x-2 space-x-reverse">
                          <span className="w-2 h-2 bg-gold-primary rounded-full animate-pulse"></span>
                          <span>خدماتنا المميزة</span>
                        </h3>
                      </div>
                      
                      {/* القائمة */}
                      <div className="space-y-2">
                        {servicesMenu.map((service, idx) => (
                          <Link
                            key={service.href}
                            href={service.href}
                            className="flex items-center space-x-3 space-x-reverse p-4 rounded-xl hover:bg-gradient-to-r hover:from-sage-primary/10 hover:to-gold-primary/10 transition-all duration-300 group border-2 border-transparent hover:border-sage-primary/20 animate-fadeInUp"
                            onClick={() => setShowServicesMenu(false)}
                            style={{ animationDelay: `${idx * 100}ms`, opacity: 0 }}
                          >
                            <div className="flex-shrink-0 w-10 h-10 bg-sage-primary/10 rounded-xl flex items-center justify-center group-hover:bg-sage-primary/20 group-hover:scale-110 transition-all duration-300">
                              <span className="text-2xl">{service.emoji}</span>
                            </div>
                            <span className="font-bold text-brown-dark group-hover:text-sage-primary transition-colors duration-300 flex-1 text-right">{service.name}</span>
                            <svg className="w-5 h-5 text-sage-primary opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                            </svg>
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </nav>

          {/* CTA Button المطور */}
          <div className="hidden lg:flex items-center space-x-4 space-x-reverse">
            {/* Phone Icon */}
            <a 
              href="tel:+966XXXXXXXXX" 
              className="relative p-3 text-sage-primary hover:text-sage-medium transition-all duration-300 group"
              aria-label="اتصل بنا"
            >
              <div className="absolute inset-0 bg-sage-primary/10 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <Phone className="w-5 h-5 relative z-10 group-hover:scale-110 group-hover:rotate-12 transition-all duration-300" />
            </a>
            {/* CTA Button */}
            <Link 
              href="/contact" 
              className="group inline-flex items-center justify-center space-x-2 space-x-reverse bg-gradient-to-r from-sage-primary to-sage-medium text-white px-8 py-3 text-sm font-black rounded-xl hover:shadow-lg hover:shadow-sage-primary/20 transition-all duration-500"
            >
              <span>احجز الآن</span>
              <span className="group-hover:-translate-x-0.5 transition-transform duration-500">←</span>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden text-brown-dark p-2"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu المطور */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-white/98 backdrop-blur-xl border-t border-sage-primary/20 shadow-2xl">
          <nav className="container-custom py-6 space-y-2">
            {navItems.map((item, index) => (
              <Link
                key={item.name}
                href={item.href}
                className="block py-4 px-4 text-brown-dark font-semibold hover:text-sage-primary transition-all duration-300 rounded-xl relative group overflow-hidden"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <div className="absolute inset-0 bg-sage-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <span className="relative z-10">{item.name}</span>
                <div className="absolute right-4 top-1/2 -translate-y-1/2 w-0 h-[3px] bg-gradient-to-r from-sage-primary to-sunset-golden group-hover:w-8 transition-all duration-300 rounded-full"></div>
              </Link>
            ))}
            <Link
              href="/contact"
              className="block mt-6 text-center bg-gradient-to-r from-sage-primary to-sage-medium text-white py-4 font-black rounded-xl hover:shadow-2xl hover:shadow-sage-primary/30 transition-all"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              احجز الآن
            </Link>
          </nav>
        </div>
      )}
      
      {/* Scroll Progress Bar */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-sage-primary/20 to-transparent">
        <div 
          className="h-full bg-gradient-to-r from-sage-primary via-gold-primary to-sunset-golden transition-all duration-300 shadow-lg shadow-gold-primary/50"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>
    </header>
  );
};

export default Header;
