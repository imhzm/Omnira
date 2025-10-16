import Link from 'next/link';
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
    <footer className="bg-beige-medium border-t border-sage-primary/20">
      <div className="container-custom py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-3 space-x-reverse mb-4">
              <div className="relative w-12 h-12">
                <div className="absolute inset-0 bg-gradient-luxury rounded-lg"></div>
                <div className="absolute inset-0.5 bg-white rounded-lg flex items-center justify-center">
                  <span className="text-2xl font-bold gold-shine-effect">O</span>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold gold-shine-effect">OMNIRA</h3>
                <p className="text-xs text-brown-medium">أومنيرا</p>
              </div>
            </div>
            <p className="text-brown-text text-sm mb-4">
              شركة سعودية رائدة في خدمات صف السيارات الاحترافية. نساهم في تحقيق رؤية 2030 من خلال حلول ذكية ومتطورة للفنادق، المطاعم، والفعاليات.
            </p>
            <div className="flex space-x-4 space-x-reverse">
              <a href="#" className="text-brown-medium hover:text-sage-primary transition-colors" aria-label="Facebook">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-brown-medium hover:text-sage-primary transition-colors" aria-label="Twitter">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-brown-medium hover:text-sage-primary transition-colors" aria-label="Instagram">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-brown-medium hover:text-sage-primary transition-colors" aria-label="LinkedIn">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-sage-primary font-semibold mb-4">خدماتنا</h4>
            <ul className="space-y-2">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-brown-text hover:text-sage-primary transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* More Services */}
          <div>
            <h4 className="text-sage-primary font-semibold mb-4">خدمات أخرى</h4>
            <ul className="space-y-2">
              {footerLinks.moreServices.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-brown-text hover:text-sage-primary transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
            <h4 className="text-sage-primary font-semibold mb-4 mt-6">الشركة</h4>
            <ul className="space-y-2">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-brown-text hover:text-sage-primary transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sage-primary font-semibold mb-4">تواصل معنا</h4>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3 space-x-reverse">
                <MapPin className="w-5 h-5 text-sage-primary flex-shrink-0 mt-0.5" />
                <span className="text-brown-text text-sm">
                  عبدالرحمن الشعيبي، حي الروضة<br />
                  الرياض 12311، السعودية
                </span>
              </li>
              <li className="flex items-center space-x-3 space-x-reverse">
                <MessageCircle className="w-5 h-5 text-sage-primary flex-shrink-0" />
                <a href="https://wa.me/966XXXXXXXXX" target="_blank" rel="noopener noreferrer" className="text-brown-text hover:text-sage-primary text-sm transition-colors">
                  واتساب: +966 XX XXX XXXX
                </a>
              </li>
              <li className="flex items-center space-x-3 space-x-reverse">
                <Mail className="w-5 h-5 text-sage-primary flex-shrink-0" />
                <a href="mailto:info@omnira.sa" className="text-brown-text hover:text-sage-primary text-sm transition-colors">
                  info@omnira.sa
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-brown-light/30 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-center items-center">
            <p className="text-brown-medium text-sm text-center">
              © {currentYear} OMNIRA Company Holding. جميع الحقوق محفوظة | السجل التجاري: 7051975600
            </p>
            <p className="text-brown-medium text-sm text-center mt-2">
              تم التصميم بكل حب <span aria-hidden="true">❤️</span> بواسطة Sky Wave —
              <a
                href="https://www.skywaveads.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sage-primary hover:text-sage-dark mx-1"
              >
                www.skywaveads.com
              </a>
              |
              <a
                href="https://wa.me/201067894321"
                target="_blank"
                rel="noopener noreferrer"
                className="text-brown-text hover:text-sage-primary ml-1"
              >
                +201067894321
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
