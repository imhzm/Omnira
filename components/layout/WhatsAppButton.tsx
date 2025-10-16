'use client';

import { MessageCircle, Phone, X } from 'lucide-react';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { contactConfig } from '@/lib/contact-config';

export default function WhatsAppButton() {
  const [isOpen, setIsOpen] = useState(false);
  const { whatsapp, phone } = contactConfig;

  const handleWhatsAppClick = () => {
    const url = `https://wa.me/${whatsapp.number}?text=${encodeURIComponent(whatsapp.defaultMessage)}`;
    window.open(url, '_blank');
  };

  const handleCallClick = () => {
    window.location.href = `tel:${phone.primary}`;
  };

  return (
    <>
      {/* Main WhatsApp Button */}
      <motion.div
        className="fixed bottom-8 left-8 z-50"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 1, type: 'spring', stiffness: 260, damping: 20 }}
      >
        {/* Menu Options */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              className="absolute bottom-20 left-0 space-y-3 mb-2"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.2 }}
            >
              {/* WhatsApp Option */}
              <motion.button
                onClick={handleWhatsAppClick}
                className="group flex items-center gap-3 bg-gradient-to-r from-green-600 to-green-500 hover:from-green-500 hover:to-green-400 text-white px-5 py-3 rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 min-w-[200px]"
                whileHover={{ scale: 1.05, x: -5 }}
                whileTap={{ scale: 0.95 }}
              >
                <div className="bg-white/20 p-2 rounded-full group-hover:bg-white/30 transition-colors">
                  <MessageCircle className="w-5 h-5" />
                </div>
                <span className="font-semibold">محادثة واتساب</span>
              </motion.button>

              {/* Call Option */}
              <motion.button
                onClick={handleCallClick}
                className="group flex items-center gap-3 bg-gradient-to-r from-sage-primary to-sage-medium hover:from-sage-medium hover:to-sage-light text-white px-5 py-3 rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 min-w-[200px]"
                whileHover={{ scale: 1.05, x: -5 }}
                whileTap={{ scale: 0.95 }}
              >
                <div className="bg-white/20 p-2 rounded-full group-hover:bg-white/30 transition-colors">
                  <Phone className="w-5 h-5" />
                </div>
                <span className="font-semibold">اتصال مباشر</span>
              </motion.button>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Main Toggle Button */}
        <motion.button
          onClick={() => setIsOpen(!isOpen)}
          className="relative group"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          {/* Glow Effect */}
          <div className="absolute inset-0 bg-green-500 rounded-full blur-xl opacity-50 group-hover:opacity-75 animate-pulse transition-opacity" />
          
          {/* Button Base */}
          <div className="relative bg-gradient-to-br from-green-500 to-green-600 hover:from-green-400 hover:to-green-500 p-5 rounded-full shadow-2xl transition-all duration-300 border-2 border-white/20">
            {/* Icon */}
            <AnimatePresence mode="wait">
              {isOpen ? (
                <motion.div
                  key="close"
                  initial={{ rotate: -180, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 180, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <X className="w-7 h-7 text-white" />
                </motion.div>
              ) : (
                <motion.div
                  key="whatsapp"
                  initial={{ rotate: 180, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -180, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <MessageCircle className="w-7 h-7 text-white fill-white" />
                </motion.div>
              )}
            </AnimatePresence>

            {/* Notification Badge */}
            <motion.div
              className="absolute -top-1 -right-1 bg-gold-primary text-black text-xs font-bold rounded-full w-6 h-6 flex items-center justify-center border-2 border-white shadow-lg"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 1.5, type: 'spring', stiffness: 500, damping: 15 }}
            >
              1
            </motion.div>
          </div>
        </motion.button>

        {/* Floating Particles */}
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(3)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-green-400 rounded-full"
              initial={{ x: 0, y: 0, opacity: 0 }}
              animate={{
                x: [0, (i - 1) * 30, (i - 1) * 20],
                y: [0, -40 - i * 10, -60 - i * 15],
                opacity: [0, 0.8, 0],
              }}
              transition={{
                duration: 2 + i * 0.5,
                repeat: Infinity,
                delay: i * 0.3,
              }}
            />
          ))}
        </div>
      </motion.div>

      {/* Helper Text - يظهر لأول مرة */}
      <AnimatePresence>
        {!isOpen && (
          <motion.div
            className="fixed bottom-24 left-8 z-40 bg-black-soft/95 backdrop-blur-md text-white px-4 py-2 rounded-lg shadow-xl border border-gold-primary/20"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ delay: 2 }}
          >
            <p className="text-sm font-medium">تواصل معنا الآن</p>
            <div className="absolute -bottom-1 left-8 w-2 h-2 bg-black-soft/95 rotate-45 border-l border-b border-gold-primary/20" />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
