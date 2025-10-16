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
        // Sage Green Palette - الأخضر الزيتوني
        sage: {
          primary: '#7FA08E',      // أخضر زيتوني رئيسي
          light: '#9FB8A8',        // أخضر فاتح
          medium: '#6B8A7A',       // أخضر متوسط
          dark: '#5A7568',         // أخضر داكن
          soft: '#E8F0ED',         // أخضر ناعم جداً
        },
        // Beige & Brown Palette - البيج والبني
        beige: {
          primary: '#F5F0E8',      // بيج رئيسي
          light: '#FAF7F2',        // بيج فاتح
          medium: '#EBE4D8',       // بيج متوسط
          dark: '#E0D5C7',         // بيج داكن
        },
        brown: {
          primary: '#8B7355',      // بني رئيسي
          light: '#A89179',        // بني فاتح
          medium: '#6B5744',       // بني متوسط
          dark: '#5A4A3A',         // بني داكن
          text: '#4A3F35',         // بني للنصوص
        },
        // Keep old colors for compatibility
        gold: {
          primary: '#7FA08E',
          light: '#9FB8A8',
          medium: '#6B8A7A',
          dark: '#5A7568',
          rose: '#7FA08E',
          champagne: '#E8F0ED',
          bronze: '#5A7568',
        },
        black: {
          primary: '#F5F0E8',
          rich: '#FAF7F2',
          soft: '#EBE4D8',
          medium: '#8B7355',
          light: '#A89179',
          charcoal: '#6B5744',
        },
        luxury: {
          pearl: '#FAF7F2',
          cream: '#F5F0E8',
          silver: '#8B7355',
          platinum: '#EBE4D8',
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
        // Fresh Gradients - تدرجات منعشة
        'gradient-luxury': 'linear-gradient(135deg, #7FA08E 0%, #9FB8A8 50%, #E8F0ED 100%)',
        'gradient-gold-shine': 'linear-gradient(90deg, #5A7568 0%, #7FA08E 25%, #9FB8A8 50%, #7FA08E 75%, #5A7568 100%)',
        'gradient-dark': 'linear-gradient(180deg, #F5F0E8 0%, #FAF7F2 50%, #FFFFFF 100%)',
        'gradient-dark-elegant': 'radial-gradient(ellipse at top, #FAF7F2 0%, #F5F0E8 50%, #EBE4D8 100%)',
        'gradient-hero': 'linear-gradient(135deg, rgba(245, 240, 232, 0.95) 0%, rgba(127, 160, 142, 0.08) 50%, rgba(245, 240, 232, 0.95) 100%)',
        'gradient-hero-premium': 'radial-gradient(circle at 50% 50%, rgba(127, 160, 142, 0.06) 0%, rgba(245, 240, 232, 0.9) 50%, rgba(245, 240, 232, 1) 100%)',
        'gradient-card': 'linear-gradient(145deg, rgba(255, 255, 255, 0.9) 0%, rgba(250, 247, 242, 0.95) 100%)',
        'gradient-card-hover': 'linear-gradient(145deg, rgba(127, 160, 142, 0.04) 0%, rgba(255, 255, 255, 0.9) 100%)',
        'gradient-overlay': 'linear-gradient(to bottom, rgba(245, 240, 232, 0) 0%, rgba(245, 240, 232, 0.9) 100%)',
        'gradient-shimmer': 'linear-gradient(90deg, transparent 0%, rgba(127, 160, 142, 0.15) 50%, transparent 100%)',
      },
      fontFamily: {
        arabic: [
          'var(--font-ibm-plex)', 
          'var(--font-almarai)', 
          'IBM Plex Sans Arabic',
          'Almarai',
          'Tajawal',
          'Cairo',
          '-apple-system',
          'BlinkMacSystemFont',
          'Segoe UI',
          'Arial',
          'sans-serif'
        ],
        english: [
          'var(--font-inter)', 
          'Inter',
          '-apple-system',
          'BlinkMacSystemFont',
          'Segoe UI',
          'Roboto',
          'Arial',
          'sans-serif'
        ],
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
          '0%, 100%': { boxShadow: '0 0 20px rgba(127, 160, 142, 0.25)' },
          '50%': { boxShadow: '0 0 40px rgba(127, 160, 142, 0.5), 0 0 60px rgba(127, 160, 142, 0.35)' },
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
        'gradient-shift': 'gradient-shift 3s ease infinite',
        'float-smooth': 'float-smooth 6s ease-in-out infinite',
        'pulse-glow': 'pulse-glow 2s ease-in-out infinite',
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};

export default config;
