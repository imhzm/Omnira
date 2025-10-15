import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Premium Gold Palette - فخامة الذهب
        gold: {
          primary: '#D4AF37',      // ذهبي كلاسيكي
          light: '#F4E4C1',        // ذهبي فاتح شامبين
          medium: '#E6C87F',       // ذهبي متوسط
          dark: '#B8962E',         // ذهبي داكن
          rose: '#E8B86D',         // ذهبي وردي
          champagne: '#F7E7CE',    // شامبين راقي
          bronze: '#CD7F32',       // برونزي فاخر
        },
        // Luxury Black Palette - سواد فاخر
        black: {
          primary: '#000000',      // أسود نقي
          rich: '#0A0A0A',         // أسود غني
          soft: '#1A1A1A',         // أسود ناعم
          medium: '#2D2D2D',       // أسود متوسط
          light: '#404040',        // أسود فاتح
          charcoal: '#36454F',     // فحمي راقي
        },
        // Luxury Accent Colors - ألوان فاخرة مميزة
        luxury: {
          pearl: '#F8F6F0',        // لؤلؤي
          cream: '#FFFDD0',        // كريمي فاخر
          silver: '#C0C0C0',       // فضي
          platinum: '#E5E4E2',     // بلاتيني
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      backgroundImage: {
        // Premium Gradients - تدرجات فاخرة
        'gradient-luxury': 'linear-gradient(135deg, #D4AF37 0%, #E8B86D 50%, #F4E4C1 100%)',
        'gradient-gold-shine': 'linear-gradient(90deg, #B8962E 0%, #D4AF37 25%, #F4E4C1 50%, #D4AF37 75%, #B8962E 100%)',
        'gradient-dark': 'linear-gradient(180deg, #000000 0%, #0A0A0A 50%, #1A1A1A 100%)',
        'gradient-dark-elegant': 'radial-gradient(ellipse at top, #1A1A1A 0%, #0A0A0A 50%, #000000 100%)',
        'gradient-hero': 'linear-gradient(135deg, rgba(0, 0, 0, 0.95) 0%, rgba(212, 175, 55, 0.15) 50%, rgba(0, 0, 0, 0.95) 100%)',
        'gradient-hero-premium': 'radial-gradient(circle at 50% 50%, rgba(212, 175, 55, 0.1) 0%, rgba(0, 0, 0, 0.9) 50%, rgba(0, 0, 0, 1) 100%)',
        'gradient-card': 'linear-gradient(145deg, rgba(26, 26, 26, 0.8) 0%, rgba(10, 10, 10, 0.95) 100%)',
        'gradient-card-hover': 'linear-gradient(145deg, rgba(212, 175, 55, 0.1) 0%, rgba(26, 26, 26, 0.9) 100%)',
        'gradient-overlay': 'linear-gradient(to bottom, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.8) 100%)',
        'gradient-shimmer': 'linear-gradient(90deg, transparent 0%, rgba(212, 175, 55, 0.3) 50%, transparent 100%)',
      },
      fontFamily: {
        arabic: ['var(--font-tajawal)', 'var(--font-cairo)', 'sans-serif'],
        english: ['var(--font-inter)', 'sans-serif'],
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        fadeInUp: {
          from: { opacity: '0', transform: 'translateY(40px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          from: { opacity: '0' },
          to: { opacity: '1' },
        },
        goldShine: {
          '0%': { backgroundPosition: '-200% center' },
          '100%': { backgroundPosition: '200% center' },
        },
        shimmer: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(100%)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        glow: {
          '0%, 100%': { boxShadow: '0 0 20px rgba(212, 175, 55, 0.3)' },
          '50%': { boxShadow: '0 0 40px rgba(212, 175, 55, 0.6), 0 0 60px rgba(212, 175, 55, 0.4)' },
        },
        pulse: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.7' },
        },
        slideInLeft: {
          from: { opacity: '0', transform: 'translateX(-50px)' },
          to: { opacity: '1', transform: 'translateX(0)' },
        },
        slideInRight: {
          from: { opacity: '0', transform: 'translateX(50px)' },
          to: { opacity: '1', transform: 'translateX(0)' },
        },
        scaleIn: {
          from: { opacity: '0', transform: 'scale(0.9)' },
          to: { opacity: '1', transform: 'scale(1)' },
        },
        blob: {
          '0%, 100%': { transform: 'translate(0, 0) scale(1)' },
          '25%': { transform: 'translate(20px, -20px) scale(1.1)' },
          '50%': { transform: 'translate(-20px, 20px) scale(0.9)' },
          '75%': { transform: 'translate(10px, 10px) scale(1.05)' },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        fadeInUp: "fadeInUp 0.6s ease-out",
        fadeIn: "fadeIn 0.5s ease-out",
        goldShine: "goldShine 3s linear infinite",
        shimmer: "shimmer 2s linear infinite",
        float: "float 3s ease-in-out infinite",
        glow: "glow 2s ease-in-out infinite",
        pulse: "pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        slideInLeft: "slideInLeft 0.6s ease-out",
        slideInRight: "slideInRight 0.6s ease-out",
        scaleIn: "scaleIn 0.5s ease-out",
        blob: "blob 7s ease-in-out infinite",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};

export default config;
