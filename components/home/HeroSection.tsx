'use client';

import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

const HeroSection = () => {
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);
  const [shouldLoadVideo, setShouldLoadVideo] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [imageErrors, setImageErrors] = useState<Set<number>>(new Set());
  const videoRef = useRef<HTMLDivElement>(null);
  
  // استخدام usePathname لتجنب مشاكل hydration
  const pathname = usePathname();

  // حل مشكلة hydration باستخدام useEffect للتحميل المتأخر
  const [isMounted, setIsMounted] = useState(false);
  useEffect(() => {
    setIsMounted(true);
  }, []);

  // صور السلايدر - صور أومنيرا فاليه الفاخرة (Higgsfield)
  const sliderImages = [
    {
      url: '/images/omnira-hero.jpg',
      alt: 'خدمة صف السيارات الفاخرة من أومنيرا فاليه'
    },
    {
      url: '/images/valet-hotel.jpg',
      alt: 'فاليه باركينج أمام فندق خمس نجوم'
    },
    {
      url: '/images/services/events-service.jpg',
      alt: 'خدمة الفاليه في الفعاليات الفاخرة'
    },
    {
      url: '/images/professional-team.jpg',
      alt: 'فريق أومنيرا فاليه الاحترافي'
    },
    {
      url: '/images/smart-parking.jpg',
      alt: 'الإدارة الذكية لمواقف السيارات'
    }
  ];

  // تعريف دالة للتحقق من تحميل الفيديو
  const handleVideoLoad = React.useCallback(() => {
    // تأكد من التنفيذ فقط على جانب العميل
    if (!isMounted || typeof window === 'undefined') return;
    
    // تأخير بسيط للتأكد من جاهزية الفيديو للعرض
    setTimeout(() => {
      setIsVideoLoaded(true);
    }, 1000); // تأخير لمدة ثانية للتأكد من جاهزية الفيديو
  }, [isMounted]); // إضافة isMounted كتبعية
  
  // مرجع للإشارة إلى الإطار
  const iframeRef = useRef<HTMLIFrameElement>(null);

  // بدء تحميل الفيديو مبكرًا لتسريع العملية (فقط على جانب العميل)
  useEffect(() => {
    // تأكد من أننا على جانب العميل
    if (isMounted && typeof window !== 'undefined') {
      // بدء تحميل الفيديو بعد تحميل الصفحة بقليل
      const timer = setTimeout(() => {
        setShouldLoadVideo(true);
      }, 500); // بدء التحميل بعد نصف ثانية لضمان اكتمال الـ hydration أولاً
      
      return () => clearTimeout(timer);
    }
  }, [isMounted]);
  
  // تحقق من حالة تحميل الفيديو - فقط على جانب العميل بعد التحميل
  useEffect(() => {
    // إذا لم يتم تحميل الصفحة بالكامل أو لم يتم طلب تحميل الفيديو، لا تقم بأي معالجة
    if (!isMounted || !shouldLoadVideo) return;
    
    // استخدام مؤقت للتأكد من تحميل الفيديو بدل من الاعتماد على الرسائل فقط
    // هذا سيمنع المشاكل إذا لم تصل رسائل من Vimeo
    const videoTimer = setTimeout(() => {
      handleVideoLoad();
    }, 3000); // انتظر 3 ثواني من بدء التحميل لتأكيد تحميل الفيديو
    
    // استمع لرسائل مشغل فيميو كطريقة إضافية للكشف
    const handleMessage = (event: MessageEvent) => {
      try {
        // تحقق من أن الرسالة من Vimeo أولاً
        if (!event.origin.includes('player.vimeo.com')) return;
        
        // تجنب الأخطاء إذا لم تكن البيانات JSON صالحة
        if (typeof event.data !== 'string') return;
        
        const data = JSON.parse(event.data);
        // إذا كان الفيديو جاهزًا للتشغيل
        if (data.event === 'ready' || data.event === 'play') {
          // إلغاء المؤقت وتشغيل معالج التحميل مباشرة
          clearTimeout(videoTimer);
          handleVideoLoad();
        }
      } catch (e) {
        // تجاهل أخطاء تحليل JSON
      }
    };

    // بعد التأكد من التحميل على جانب العميل
    if (typeof window !== 'undefined') {
      // إضافة مستمع الرسائل بشكل آمن
      window.addEventListener('message', handleMessage, false);
      
      return () => {
        clearTimeout(videoTimer);
        window.removeEventListener('message', handleMessage, false);
      };
    }
    
    return () => clearTimeout(videoTimer);
  }, [isMounted, shouldLoadVideo, handleVideoLoad]);

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
        <div className={`absolute inset-0 transition-opacity duration-1000 z-10 ${isVideoLoaded ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}>
          {sliderImages.map((image, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-1000 ${
                currentSlide === index ? 'opacity-100' : 'opacity-0'
              }`}
            >
              {/* Gradient Placeholder - يظهر أثناء التحميل */}
              <div className="absolute inset-0 bg-gradient-to-br from-sage-primary/40 via-brown-dark/60 to-sage-medium/40 animate-pulse" />
              
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
                  placeholder="blur"
                  blurDataURL="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9IiNDOUEyNEEiLz48L3N2Zz4="
                  unoptimized
                />
              ) : (
                // صورة احتياطية فاخرة
                <div className="w-full h-full bg-gradient-to-br from-sage-primary/50 via-brown-dark/70 to-gold-primary/40 flex items-center justify-center">
                  <div className="text-center text-white backdrop-blur-sm bg-black/30 p-12 rounded-3xl">
                    <div className="text-8xl mb-6 animate-bounce">🚗</div>
                    <p className="text-3xl font-black mb-2">خدمات صف السيارات الفاخرة</p>
                    <p className="text-xl font-bold text-gold-primary">Omnira Valet</p>
                  </div>
                </div>
              )}
            </div>
          ))}
          <div className="absolute inset-0 bg-gradient-to-b from-black/35 via-black/15 to-black/60 z-10"></div>
          
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
        {isMounted && shouldLoadVideo && (
          <div className={`absolute inset-0 overflow-hidden transition-opacity duration-1000 ${isVideoLoaded ? 'opacity-100 z-20' : 'opacity-0'}`}>
            <div style={{ padding: '56.67% 0 0 0', position: 'relative', width: '100%', height: '100%' }}>
              <iframe
                ref={iframeRef}
                src="https://player.vimeo.com/video/1127926871?badge=0&autopause=0&player_id=0&app_id=58479&autoplay=1&muted=1&loop=1&background=1&controls=0&quality=360p&speed=1&dnt=1&api=1"
                frameBorder="0"
                allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media"
                referrerPolicy="strict-origin-when-cross-origin"
                loading="eager"
                onLoad={handleVideoLoad} // هذا الحدث يعمل عندما يكتمل تحميل لعنصر iframe
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
                title="Omnira Valet Parking KSA"
              />
            </div>
            
            {/* مؤشر تحميل فاخر مع رسالة */}
            {isMounted && shouldLoadVideo && !isVideoLoaded && (
              <div className="absolute bottom-24 left-1/2 -translate-x-1/2 z-30 flex flex-col items-center gap-3">
                <div className="flex items-center gap-3">
                  <div className="h-2 w-2 bg-gold-primary rounded-full animate-ping"></div>
                  <div className="h-2 w-2 bg-gold-primary rounded-full animate-ping" style={{ animationDelay: '0.2s' }}></div>
                  <div className="h-2 w-2 bg-gold-primary rounded-full animate-ping" style={{ animationDelay: '0.4s' }}></div>
                </div>
                <div className="bg-black/70 backdrop-blur-sm px-4 py-2 rounded-full text-xs text-gold-primary font-bold">
                  جارٍ تحميل الفيديو...
                </div>
              </div>
            )}
          </div>
        )}
        {/* Enhanced Gradient Overlays - أخف لإبراز الصورة الفاخرة مع وضوح النص */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/45 via-black/15 to-black/65 z-30"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-gold-primary/10 via-transparent to-gold-primary/10 z-30"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-beige-primary/85 via-transparent to-transparent z-30"></div>
        {/* طبقة خفيفة لوضوح النصوص */}
        <div className="absolute inset-0 bg-black/15 z-30"></div>
        {/* Animated Mesh Gradient */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-0 -left-4 w-72 h-72 bg-gold-primary/20 rounded-full mix-blend-multiply filter blur-3xl animate-blob"></div>
          <div className="absolute top-0 -right-4 w-72 h-72 bg-gold-rose/20 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000"></div>
          <div className="absolute -bottom-8 left-20 w-72 h-72 bg-gold-champagne/20 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-4000"></div>
        </div>
      </div>

      {/* Animated Particles - فقط بعد تحميل الصفحة بالكامل على العميل */}
      {isMounted && typeof window !== 'undefined' && (
        <div className="absolute inset-0 z-10 pointer-events-none">
          {[...Array(20)].map((_, i) => {
            // تعيين قيم ثابتة للرندر الأولي لتجنب مشاكل hydration
            const xPos = ((i % 5) * 20) + ((i * 53) % 80); // قيم ثابتة بدلاً من Math.random
            const yPos = ((i % 4) * 25) + ((i * 47) % 75); // قيم ثابتة
            const animDuration = 3 + ((i % 5) * 0.5); // قيمة ثابتة بدلاً من random
            const animDelay = (i % 5) * 0.4; // قيمة ثابتة بدلاً من random
            
            return (
              <motion.div
                key={i}
                className="absolute w-1 h-1 bg-gold-light rounded-full"
                initial={{ opacity: 0, scale: 0 }}
                animate={{
                  opacity: [0, 1, 0],
                  scale: [0, 1, 0],
                  x: `${xPos}%`,
                  y: `${yPos}%`,
                }}
                transition={{
                  duration: animDuration,
                  repeat: Infinity,
                  delay: animDelay,
                }}
              />
            );
          })}
        </div>
      )}

      {/* Content */}
      <div className="container-custom relative z-20 text-center">
        <div>
          {/* Premium Badge - شارة فاخرة */}
          <div className="inline-flex items-center space-x-3 space-x-reverse bg-gradient-to-r from-brown-dark/95 via-brown-dark/90 to-brown-dark/95 backdrop-blur-xl px-10 py-5 rounded-2xl border-2 border-gold-primary/60 mb-10 relative overflow-hidden group shadow-2xl shadow-gold-primary/30">
            {/* Animated Background */}
            <div className="absolute inset-0 bg-gradient-to-r from-gold-primary/20 via-sunset-golden/20 to-gold-primary/20 opacity-0 group-hover:opacity-100 transition-all duration-500 animate-gradient"></div>
            <div className="absolute inset-0 bg-gradient-shimmer animate-shimmer"></div>
            
            {/* Icon */}
            <div className="relative z-10 flex items-center justify-center">
              <div className="absolute w-6 h-6 bg-gold-primary/30 rounded-full blur-md animate-pulse"></div>
              <span className="w-3 h-3 bg-gradient-to-r from-gold-primary to-sunset-golden rounded-full animate-pulse shadow-lg shadow-gold-primary/50"></span>
            </div>
            
            {/* Text */}
            <div className="relative z-10 flex items-center space-x-2 space-x-reverse">
              <span className="text-white/80 text-base font-bold">السجل التجاري:</span>
              <span className="text-2xl font-black bg-gradient-to-r from-gold-primary via-sunset-golden to-gold-primary bg-clip-text text-transparent tracking-wider animate-logo-shine">7051975600</span>
            </div>
            
            {/* Border Glow */}
            <div className="absolute inset-0 rounded-2xl border-2 border-gold-primary/0 group-hover:border-gold-primary/80 transition-all duration-500"></div>
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
