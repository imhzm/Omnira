import Link from 'next/link';
import Image from 'next/image';
import { Facebook, Twitter, Instagram, Linkedin, MessageCircle, Mail, MapPin } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    services: [
      { name: 'إدارة وتشغيل المواقف', href: '/services/parking-management' },
      { name: 'خدمات الفاليه باركينج', href: '/services/valet-parking' },
      { name: 'التقنيات المتقدمة', href: '/services/advanced-technology' },
      { name: 'المنظمين المحترفين', href: '/services/professional-organizers' },
      { name: 'الاستشارات', href: '/services/consultation' },
    ],
    moreServices: [
      { name: 'جولف كار', href: '/services/golf-cart' },
      { name: 'خدمات مساندة', href: '/services/support-services' },
      { name: 'غسيل السيارات', href: '/services/car-wash' },
    ],
    company: [
      { name: 'من نحن', href: '/about' },
      { name: 'الأسعار', href: '/pricing' },
      { name: 'المدن', href: '/locations' },
      { name: 'اتصل بنا', href: '/contact' },
    ],
  };

  return (
    <footer className="bg-gradient-to-b from-sage-50 via-white to-sage-50 border-t-2 border-sage-primary/30 relative overflow-hidden">
      {/* Animated Blobs */}
      <div className="absolute inset-0 z-0 opacity-5">
        <div className="absolute -top-40 -left-40 w-96 h-96 bg-sage-primary/40 rounded-full mix-blend-multiply filter blur-3xl animate-blob"></div>
        <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-sunset-golden/40 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000"></div>
      </div>

      <div className="container-custom py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div>
            <div className="mb-6 h-14 flex items-center group">
              <div className="relative">
                {/* Shadow Glow Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-gold-primary/30 via-gold-primary/20 to-gold-primary/30 blur-xl scale-110 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="absolute inset-0 bg-gold-primary/20 blur-md scale-105 animate-pulse"></div>
                
                <Image
                  src="/logo.png"
                  alt="OMNIRA - أومنيرا"
                  width={180}
                  height={50}
                  className="object-contain w-auto h-full relative z-10 drop-shadow-[0_4px_12px_rgba(218,165,32,0.4)] group-hover:drop-shadow-[0_8px_24px_rgba(218,165,32,0.6)] group-hover:scale-105 transition-all duration-500 animate-float"
                />
              </div>
            </div>
            <p className="text-brown-text text-sm mb-6 leading-relaxed">
              شركة سعودية رائدة في <span className="text-sage-primary font-bold">خدمات صف السيارات</span>. نساهم في تحقيق <span className="text-sunset-golden font-bold">رؤية 2030</span>
            </p>
            <div className="flex space-x-3 space-x-reverse">
              <a href="#" className="group p-3 rounded-xl bg-sage-primary/10 text-sage-primary hover:bg-sage-primary hover:text-white transition-all duration-300" aria-label="Facebook">
                <Facebook className="w-5 h-5 group-hover:scale-110 transition-transform" />
              </a>
              <a href="#" className="group p-3 rounded-xl bg-accents-sky/10 text-accents-sky hover:bg-accents-sky hover:text-white transition-all duration-300" aria-label="Twitter">
                <Twitter className="w-5 h-5 group-hover:scale-110 transition-transform" />
              </a>
              <a href="#" className="group p-3 rounded-xl bg-sunset-golden/10 text-sunset-golden hover:bg-sunset-golden hover:text-white transition-all duration-300" aria-label="Instagram">
                <Instagram className="w-5 h-5 group-hover:scale-110 transition-transform" />
              </a>
              <a href="#" className="group p-3 rounded-xl bg-accents-emerald/10 text-accents-emerald hover:bg-accents-emerald hover:text-white transition-all duration-300" aria-label="LinkedIn">
                <Linkedin className="w-5 h-5 group-hover:scale-110 transition-transform" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-sage-primary font-black text-lg mb-6">خدماتنا</h4>
            <ul className="space-y-2">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-brown-text hover:text-sage-primary transition-all duration-300 text-sm font-medium group inline-flex items-center"
                  >
                    <span className="group-hover:translate-x-1 transition-transform">←</span>
                    <span className="mr-2">{link.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* More Services */}
          <div>
            <h4 className="text-sage-primary font-black text-lg mb-6">خدمات أخرى</h4>
            <ul className="space-y-2">
              {footerLinks.moreServices.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-brown-text hover:text-sage-primary transition-all duration-300 text-sm font-medium group inline-flex items-center"
                  >
                    <span className="group-hover:translate-x-1 transition-transform">←</span>
                    <span className="mr-2">{link.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
            <h4 className="text-sage-primary font-black text-lg mb-6 mt-8">الشركة</h4>
            <ul className="space-y-2">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-brown-text hover:text-sage-primary transition-all duration-300 text-sm font-medium group inline-flex items-center"
                  >
                    <span className="group-hover:translate-x-1 transition-transform">←</span>
                    <span className="mr-2">{link.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sage-primary font-black text-lg mb-6">تواصل معنا</h4>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3 space-x-reverse group">
                <div className="p-2 rounded-lg bg-sage-primary/10 group-hover:bg-sage-primary transition-colors">
                  <MapPin className="w-4 h-4 text-sage-primary group-hover:text-white flex-shrink-0 transition-colors" />
                </div>
                <span className="text-brown-text text-sm">
                  عبدالرحمن الشعيبي، حي الروضة<br />
                  الرياض 12311، السعودية
                </span>
              </li>
              <li className="flex items-center space-x-3 space-x-reverse group">
                <div className="p-2 rounded-lg bg-accents-emerald/10 group-hover:bg-accents-emerald transition-colors">
                  <MessageCircle className="w-4 h-4 text-accents-emerald group-hover:text-white flex-shrink-0 transition-colors" />
                </div>
                <a href="https://wa.me/966XXXXXXXXX" target="_blank" rel="noopener noreferrer" className="text-brown-text hover:text-sage-primary text-sm transition-colors">
                  واتساب: +966 XX XXX XXXX
                </a>
              </li>
              <li className="flex items-center space-x-3 space-x-reverse group">
                <div className="p-2 rounded-lg bg-accents-sky/10 group-hover:bg-accents-sky transition-colors">
                  <Mail className="w-4 h-4 text-accents-sky group-hover:text-white flex-shrink-0 transition-colors" />
                </div>
                <a href="mailto:info@omnira.sa" className="text-brown-text hover:text-sage-primary text-sm transition-colors">
                  info@omnira.sa
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t-2 border-sage-primary/20 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-brown-dark text-sm font-medium">
              © {currentYear} <span className="text-sage-primary font-bold">OMNIRA</span> Company Holding. جميع الحقوق محفوظة
            </p>
            <p className="text-brown-medium text-sm">
              السجل التجاري: <span className="text-sage-primary font-bold">7051975600</span>
            </p>
          </div>
          <div className="mt-6 pt-6 border-t border-sage-primary/10 text-center">
            <p className="text-brown-medium text-sm">
              تم التصميم بكل حب <span className="text-sunset-golden">❤️</span> بواسطة 
              <a
                href="https://www.skywaveads.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sage-primary hover:text-sage-medium font-bold mx-1 transition-colors"
              >
                Sky Wave
              </a>
              —
              <a
                href="https://wa.me/201067894321"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-accents-emerald hover:text-accents-emerald/80 font-medium mr-1 transition-colors"
              >
                <MessageCircle className="w-3 h-3" />
                <span>+201067894321</span>
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
