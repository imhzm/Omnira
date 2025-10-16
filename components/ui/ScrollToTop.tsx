'use client';

import { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 z-50 group"
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0, opacity: 0 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          transition={{ type: 'spring', stiffness: 260, damping: 20 }}
        >
          {/* Glow Effect */}
          <div className="absolute inset-0 bg-sage-primary rounded-full blur-xl opacity-50 group-hover:opacity-75 animate-pulse transition-opacity" />
          
          {/* Button Base */}
          <div className="relative bg-gradient-to-br from-sage-primary to-sage-dark hover:from-sage-medium hover:to-sage-primary p-4 rounded-full shadow-2xl transition-all duration-300 border-2 border-white/30 backdrop-blur-sm">
            <ArrowUp className="w-6 h-6 text-white" strokeWidth={2.5} />
          </div>

          {/* Tooltip */}
          <motion.div
            className="absolute bottom-full right-0 mb-2 bg-brown-dark/95 backdrop-blur-md text-white px-3 py-1.5 rounded-lg shadow-xl whitespace-nowrap opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity"
            initial={{ y: 10, opacity: 0 }}
            whileHover={{ y: 0, opacity: 1 }}
          >
            <span className="text-sm font-medium">العودة للأعلى</span>
            <div className="absolute top-full right-4 w-2 h-2 bg-brown-dark/95 rotate-45 -mt-1" />
          </motion.div>

          {/* Animated Ring */}
          <motion.div
            className="absolute inset-0 rounded-full border-2 border-sage-light"
            initial={{ scale: 1, opacity: 0.5 }}
            animate={{ scale: 1.5, opacity: 0 }}
            transition={{ duration: 1.5, repeat: Infinity, ease: 'easeOut' }}
          />
        </motion.button>
      )}
    </AnimatePresence>
  );
}
