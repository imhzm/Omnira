'use client';

import { useEffect, useRef } from 'react';

interface SmoothScrollProps {
  children: React.ReactNode;
}

export default function SmoothScroll({ children }: SmoothScrollProps) {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let scrollAnimation: number;
    let current = 0;
    let target = 0;
    const ease = 0.075;

    const smoothScroll = () => {
      target = window.scrollY;
      current += (target - current) * ease;
      
      if (scrollRef.current) {
        scrollRef.current.style.transform = `translateY(-${current}px)`;
      }

      scrollAnimation = requestAnimationFrame(smoothScroll);
    };

    // Only apply smooth scroll on desktop
    if (window.innerWidth > 1024) {
      document.body.style.height = `${scrollRef.current?.scrollHeight}px`;
      smoothScroll();
    }

    return () => {
      cancelAnimationFrame(scrollAnimation);
      document.body.style.height = 'auto';
    };
  }, []);

  return (
    <div ref={scrollRef} className="will-change-transform">
      {children}
    </div>
  );
}
