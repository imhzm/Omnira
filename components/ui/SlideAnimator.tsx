'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

/**
 * Site-wide scroll-reveal: as each slide (top-level <section>) enters the
 * viewport, its content blocks animate in with a staggered fade + rise.
 * Uses the Web Animations API with `fill: backwards`, so nothing is left
 * persistently hidden if JS/observers fail (good for SEO & resilience).
 */
export default function SlideAnimator() {
  const pathname = usePathname();

  useEffect(() => {
    if (typeof window === 'undefined') return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const main = document.querySelector('main');
    if (!main) return;

    const inFlow = (el: Element) => {
      const cs = getComputedStyle(el);
      return (
        cs.position !== 'absolute' &&
        cs.position !== 'fixed' &&
        (el as HTMLElement).offsetHeight > 0
      );
    };

    const reveal = (section: HTMLElement) => {
      let blocks = Array.from(section.children).filter(inFlow) as HTMLElement[];
      // dive one level into the main container so individual elements stagger
      if (blocks.length === 1) {
        const inner = Array.from(blocks[0].children).filter(inFlow) as HTMLElement[];
        if (inner.length > 1) blocks = inner;
      }
      blocks.forEach((el, i) => {
        try {
          el.animate(
            [
              { opacity: 0, transform: 'translateY(48px)' },
              { opacity: 1, transform: 'translateY(0)' },
            ],
            {
              duration: 720,
              delay: Math.min(i * 110, 880),
              easing: 'cubic-bezier(0.2, 0.7, 0.2, 1)',
              fill: 'backwards',
            }
          );
        } catch {
          /* WAAPI unsupported — content stays visible */
        }
      });
    };

    const done = new WeakSet<Element>();
    const obs = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (e.isIntersecting && !done.has(e.target)) {
            done.add(e.target);
            reveal(e.target as HTMLElement);
          }
        }),
      { threshold: 0.18 }
    );

    const seen = new Set<Element>();
    const collect = () => {
      (Array.from(main.querySelectorAll('section')) as HTMLElement[])
        .filter((s) => !s.parentElement?.closest('section'))
        .forEach((s) => {
          if (!seen.has(s)) {
            seen.add(s);
            obs.observe(s);
          }
        });
    };
    collect();
    const mo = new MutationObserver(collect);
    mo.observe(main, { childList: true, subtree: true });
    const t = setTimeout(collect, 1600);

    return () => {
      obs.disconnect();
      mo.disconnect();
      clearTimeout(t);
    };
  }, [pathname]);

  return null;
}
