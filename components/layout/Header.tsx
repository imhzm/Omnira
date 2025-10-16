'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X, Phone, Mail } from 'lucide-react';
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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${
        isScrolled
          ? 'glass-advanced shadow-2xl border-b-2 border-sage-primary/30'
          : 'bg-white/80 backdrop-blur-2xl shadow-xl border-b border-sage-primary/20'
      }`}
      style={{
        backdropFilter: 'blur(25px) saturate(180%)',
      }}
    >
      <div className="container-custom">
        <div className="flex items-center justify-between h-24">
          {/* Logo المطور */}
          <Link href="/" className="flex items-center space-x-3 space-x-reverse group">
            <div className="relative w-14 h-14">
              {/* Glow Effect */}
              <div className="absolute inset-0 bg-gradient-luxury rounded-xl blur-lg opacity-50 group-hover:opacity-100 transition-opacity duration-300"></div>
              {/* Outer Border */}
              <div className="absolute inset-0 bg-gradient-luxury rounded-xl p-[2px]">
                <div className="w-full h-full bg-white rounded-xl flex items-center justify-center relative overflow-hidden">
                  {/* Shimmer Effect */}
                  <div className="absolute inset-0 bg-gradient-shimmer animate-shimmer"></div>
                  {/* Logo Letter */}
                  <span className="text-3xl font-black gold-shine-effect relative z-10">O</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <h1 className="text-2xl font-black tracking-tight">
                <span className="gold-shine-effect">OMNIRA</span>
              </h1>
            </div>
          </Link>

          {/* Desktop Navigation المطور */}
          <nav className="hidden lg:flex items-center space-x-1 space-x-reverse">
            {navItems.map((item, index) => (
              <Link
                key={item.name}
                href={item.href}
                className="relative px-4 py-2 text-brown-text hover:text-brown-dark transition-all duration-300 group"
              >
                <span className="relative z-10 font-medium">{item.name}</span>
                {/* Hover Background */}
                <div className="absolute inset-0 bg-gradient-to-r from-gold-primary/0 via-gold-primary/10 to-gold-primary/0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                {/* Bottom Border */}
                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-[2px] bg-gradient-luxury group-hover:w-3/4 transition-all duration-300 rounded-full"></span>
                {/* Glow Effect */}
                <div className="absolute inset-0 bg-gold-primary/5 rounded-lg blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </Link>
            ))}
          </nav>

          {/* CTA Button المطور */}
          <div className="hidden lg:flex items-center space-x-4 space-x-reverse">
            {/* Phone Icon */}
            <a 
              href="tel:+966XXXXXXXXX" 
              className="relative p-3 text-brown-medium hover:text-sage-primary transition-all duration-300 group"
              aria-label="اتصل بنا"
            >
              <div className="absolute inset-0 bg-gold-primary/10 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <Phone className="w-5 h-5 relative z-10 group-hover:scale-110 transition-transform duration-300" />
              <div className="absolute inset-0 bg-gold-primary/20 rounded-full blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </a>
            {/* CTA Button */}
            <Link 
              href="/contact" 
              className="btn-gold px-8 py-3 text-sm font-semibold shadow-lg shadow-gold-primary/20 hover:shadow-xl hover:shadow-gold-primary/30 transition-all duration-300"
            >
              احجز الآن
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
                className="block py-4 px-4 text-brown-text hover:text-brown-dark transition-all duration-300 rounded-xl relative group overflow-hidden"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-gold-primary/0 via-gold-primary/10 to-gold-primary/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <span className="relative z-10 font-medium">{item.name}</span>
                <div className="absolute right-4 top-1/2 -translate-y-1/2 w-0 h-[2px] bg-gradient-luxury group-hover:w-8 transition-all duration-300"></div>
              </Link>
            ))}
            <Link
              href="/contact"
              className="block mt-6 text-center btn-gold py-4 shadow-lg shadow-gold-primary/20"
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
