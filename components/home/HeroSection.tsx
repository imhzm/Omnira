'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';

const HeroSection = () => {
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);
  const [shouldLoadVideo, setShouldLoadVideo] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [imageErrors, setImageErrors] = useState<Set<number>>(new Set());
  const videoRef = useRef<HTMLDivElement>(null);

  // صور السلايدر - باركينج وخدمات السيارات الفاخرة
  const sliderImages = [
    {
      url: 'https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?auto=format&fit=crop&w=2070&q=80',
      alt: 'خدمات صف السيارات الفاخرة'
    },
    {
      url: 'https://images.unsplash.com/photo-1542362567-b07e54358753?auto=format&fit=crop&w=2070&q=80',
      alt: 'موقف سيارات فندق فاخر'
    },
    {
      url: 'https://images.unsplash.com/photo-1553440569-bcc63803a83d?auto=format&fit=crop&w=2070&q=80',
      alt: 'سيارة فاخرة في خدمة الفاليه'
    },
    {
      url: 'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=2070&q=80',
      alt: 'سيارات فاخرة في موقف احترافي'
    },
    {
      url: 'https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?auto=format&fit=crop&w=2070&q=80',
      alt: 'خدمات فاليه باركينج احترافية'
    }
  ];

  useEffect(() => {
    // تأخير تحميل الفيديو ليظهر السلايدر أولاً
    const videoLoadTimer = setTimeout(() => {
      setShouldLoadVideo(true);
    }, 8000); // 8 ثواني - يعرض السلايدر أولاً

    return () => clearTimeout(videoLoadTimer);
  }, []);

  // تحديث حالة تحميل الفيديو بعد فترة من بدء التحميل
  useEffect(() => {
    if (shouldLoadVideo) {
      const videoReadyTimer = setTimeout(() => {
        setIsVideoLoaded(true);
      }, 3000); // 3 ثواني لتحميل وتشغيل الفيديو

      return () => clearTimeout(videoReadyTimer);
    }
  }, [shouldLoadVideo]);

  // سلايدر تلقائي
  useEffect(() => {
    if (!isVideoLoaded) {
      const interval = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % sliderImages.length);
      }, 3000); // تغيير كل 3 ثواني

      return () => clearInterval(interval);
    }
  }, [isVideoLoaded, sliderImages.length]);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24">
      {/* Background Video */}
      <div className="absolute inset-0 z-0" ref={videoRef}>
        {/* Image Slider - يعرض لحين تحميل الفيديو */}
        <div className={`absolute inset-0 transition-opacity duration-500 ${isVideoLoaded ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}>
          {sliderImages.map((image, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-1000 ${
                currentSlide === index ? 'opacity-100' : 'opacity-0'
              }`}
            >
              {!imageErrors.has(index) ? (
                <Image
                  src={image.url}
                  alt={image.alt}
                  fill
                  sizes="100vw"
                  className="object-cover"
                  priority={index === 0}
                  quality={85}
                  onError={() => {
                    setImageErrors(prev => new Set(prev).add(index));
                  }}
                  loading={index === 0 ? 'eager' : 'lazy'}
                  unoptimized
                />
              ) : (
                // صورة احتياطية بلون متدرج
                <div className="w-full h-full bg-gradient-to-br from-sage-primary/30 via-gold-primary/20 to-sage-medium/30 flex items-center justify-center">
                  <div className="text-center text-white/80">
                    <div className="text-6xl mb-4">🚗</div>
                    <p className="text-xl font-bold">خدمات صف السيارات الفاخرة</p>
                    <p className="text-sm">OMNIRA - أومنيرا</p>
                  </div>
                </div>
              )}
            </div>
          ))}
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70 z-10"></div>
          
          {/* Slider Indicators */}
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex space-x-2 space-x-reverse">
            {sliderImages.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  currentSlide === index 
                    ? 'w-8 bg-gold-primary' 
                    : 'w-2 bg-white/50 hover:bg-white/80'
                }`}
                aria-label={`الذهاب إلى الصورة ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Vimeo Video Background - lazy loaded */}
        {shouldLoadVideo && (
          <div className="absolute inset-0 overflow-hidden">
            <div style={{ padding: '56.67% 0 0 0', position: 'relative', width: '100%', height: '100%' }}>
              <iframe
                src="https://player.vimeo.com/video/1127926871?badge=0&autopause=0&player_id=0&app_id=58479&autoplay=1&muted=1&loop=1&background=1&controls=0&quality=auto&speed=1"
                frameBorder="0"
                allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media"
                referrerPolicy="strict-origin-when-cross-origin"
                loading="eager"
                style={{
                  position: 'absolute',
                  top: '50%',
                  left: '50%',
                  width: '100vw',
                  height: '100vh',
                  minWidth: '100%',
                  minHeight: '100%',
                  transform: 'translate(-50%, -50%)',
                  objectFit: 'cover',
                }}
                title="OMNIRA Valet Parking KSA"
              />
            </div>
          </div>
        )}
        {/* Enhanced Gradient Overlays */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/60 z-10"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-sage-primary/20 via-transparent to-sage-primary/20 z-10"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-beige-primary/60 via-transparent to-transparent z-10"></div>
        {/* Animated Mesh Gradient */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-0 -left-4 w-72 h-72 bg-gold-primary/20 rounded-full mix-blend-multiply filter blur-3xl animate-blob"></div>
          <div className="absolute top-0 -right-4 w-72 h-72 bg-gold-rose/20 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000"></div>
          <div className="absolute -bottom-8 left-20 w-72 h-72 bg-gold-champagne/20 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-4000"></div>
        </div>
      </div>

      {/* Animated Particles */}
      <div className="absolute inset-0 z-10 pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-gold-light rounded-full"
            initial={{ opacity: 0, scale: 0 }}
            animate={{
              opacity: [0, 1, 0],
              scale: [0, 1, 0],
              x: Math.random() * 1920,
              y: Math.random() * 1080,
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="container-custom relative z-20 text-center">
        <div>
          {/* Premium Badge - شارة فاخرة */}
          <div className="inline-flex items-center space-x-2 space-x-reverse glass-effect px-8 py-4 rounded-full border border-gold-primary/40 mb-10 relative overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-r from-gold-primary/5 via-gold-primary/10 to-gold-primary/5 group-hover:from-gold-primary/10 group-hover:via-gold-primary/20 group-hover:to-gold-primary/10 transition-all duration-500"></div>
            <div className="absolute inset-0 bg-gradient-shimmer animate-shimmer"></div>
            <span className="w-2.5 h-2.5 bg-gold-primary rounded-full animate-pulse relative z-10 shadow-lg shadow-gold-primary/50"></span>
            <span className="text-gold-primary text-sm font-semibold relative z-10 tracking-wide">السجل التجاري: 7051975600</span>
          </div>

          {/* Main Heading - عنوان فاخر */}
          <h1 className="text-5xl md:text-6xl lg:text-8xl font-black mb-8 leading-[1.1]">
            <span className="text-white drop-shadow-2xl block">التميّز في خدماتنا</span>
          </h1>

          {/* Subtitle - عنوان فرعي فاخر */}
          <div className="max-w-4xl mx-auto mb-12 space-y-4">
            <p className="text-2xl md:text-3xl text-white drop-shadow-lg font-bold leading-relaxed">
              خدمة فاخرة • راحة استثنائية • احترافية عالية
            </p>
            <p className="text-lg md:text-xl text-white/90 drop-shadow-lg leading-relaxed max-w-3xl mx-auto">
              نوفر لك ولضيوفك تجربة مميزة تجمع بين الأمان والفخامة في خدمات صف السيارات وإدارة المواقف. 
              <span className="text-sunset-golden font-bold drop-shadow-md">حلول ذكية</span> للفنادق، المطاعم، والفعاليات في جميع أنحاء المملكة.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <Link
              href="/contact"
              className="btn-gold px-10 py-5 text-lg font-bold group inline-flex items-center space-x-3 space-x-reverse shadow-lg shadow-gold-primary/20 hover:shadow-xl hover:shadow-gold-primary/30 transition-all duration-500"
            >
              <span>احجز الآن</span>
              <ArrowLeft className="w-6 h-6 group-hover:-translate-x-1 transition-transform duration-500" />
            </Link>
          </div>

          {/* Trust Badges */}
          <div className="mt-16 flex flex-wrap items-center justify-center gap-8">
            <div className="glass-effect px-4 py-3 rounded-xl flex items-center space-x-2 space-x-reverse border border-white/20">
              <svg className="w-5 h-5 text-sunset-golden" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
              <span className="text-sm font-bold text-white">99.9% رضا العملاء</span>
            </div>
            <div className="glass-effect px-4 py-3 rounded-xl flex items-center space-x-2 space-x-reverse border border-white/20">
              <svg className="w-5 h-5 text-accents-emerald" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
              <span className="text-sm font-bold text-white">تأمين شامل</span>
            </div>
            <div className="glass-effect px-4 py-3 rounded-xl flex items-center space-x-2 space-x-reverse border border-white/20">
              <svg className="w-5 h-5 text-accents-sky" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span className="text-sm font-bold text-white">خدمة 24/7</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
