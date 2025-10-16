'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

/**
 * Prefetch important pages in the background for faster navigation
 */
const PrefetchLinks = () => {
  const router = useRouter();

  useEffect(() => {
    // Prefetch critical pages after initial load
    const prefetchTimer = setTimeout(() => {
      // Most visited pages
      router.prefetch('/about');
      router.prefetch('/services');
      router.prefetch('/contact');
      router.prefetch('/pricing');
      router.prefetch('/locations');
    }, 2000); // Wait 2s after page load

    return () => clearTimeout(prefetchTimer);
  }, [router]);

  return null;
};

export default PrefetchLinks;
