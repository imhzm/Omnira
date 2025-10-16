'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X, Phone } from 'lucide-react';
import Image from 'next/image';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'الرئيسية', href: '/' },
    { name: 'من نحن', href: '/about' },
    { name: 'خدماتنا', href: '/services' },
    { name: 'المدن', href: '/locations' },
    { name: 'الأسعار', href: '/pricing' },
    { name: 'اتصل بنا', href: '/contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-xl shadow-2xl border-b-2 border-sage-primary/30'
          : 'bg-white/90 backdrop-blur-lg shadow-lg border-b border-sage-primary/20'
      }`}
    >
      <div className="container-custom">
        <div className="flex items-center justify-between h-24">
          {/* Logo */}
          <Link href="/" className="group">
            <div className="relative w-40 h-16 group-hover:scale-105 transition-transform duration-300">
              <Image
                src="/logo.png"
                alt="OMNIRA - أومنيرا"
                width={160}
                height={64}
                className="object-contain"
                priority
              />
            </div>
          </Link>

          {/* Desktop Navigation المطور */}
          <nav className="hidden lg:flex items-center space-x-1 space-x-reverse">
            {navItems.map((item, index) => (
              <Link
                key={item.name}
                href={item.href}
                className="relative px-4 py-2 text-brown-dark font-semibold hover:text-sage-primary transition-all duration-300 group"
              >
                <span className="relative z-10">{item.name}</span>
                {/* Hover Background */}
                <div className="absolute inset-0 bg-sage-primary/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                {/* Bottom Border */}
                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-[3px] bg-gradient-to-r from-sage-primary to-sunset-golden group-hover:w-3/4 transition-all duration-300 rounded-full"></span>
              </Link>
            ))}
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
    </header>
  );
};

export default Header;
