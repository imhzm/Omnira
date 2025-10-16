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
        // 🎨 Modern Sage Palette - مستوحى من الطبيعة السعودية
        sage: {
          50: '#F5F9F7',           // أفتح درجة - للخلفيات الناعمة
          100: '#E8F0ED',          // ناعم جداً
          200: '#C8DDD3',          // فاتح مع حيوية
          300: '#A8CBB9',          // متوسط فاتح
          400: '#9FB8A8',          // فاتح
          500: '#7FA08E',          // رئيسي - اللون الأساسي
          600: '#6B8A7A',          // متوسط
          700: '#5A7568',          // داكن
          800: '#496056',          // داكن جداً
          900: '#384B44',          // أغمق درجة
          primary: '#7FA08E',      
          light: '#9FB8A8',        
          medium: '#6B8A7A',       
          dark: '#5A7568',         
          soft: '#E8F0ED',         
        },
        
        // 🏜️ Desert Sand Palette - ألوان الصحراء العربية
        sand: {
          50: '#FDFBF7',           // أبيض رملي
          100: '#FAF7F2',          // بيج فاتح جداً
          200: '#F5F0E8',          // بيج رئيسي
          300: '#EBE4D8',          // بيج متوسط
          400: '#E0D5C7',          // بيج داكن
          500: '#D4C4B0',          // رملي
          600: '#C4B09A',          // رملي داكن
          700: '#B09A84',          // بني رملي
          800: '#9A846E',          // بني صحراوي
          900: '#846E58',          // بني داكن
        },
        
        // Beige & Brown Palette - المحدثة
        beige: {
          primary: '#F5F0E8',      
          light: '#FAF7F2',        
          medium: '#EBE4D8',       
          dark: '#E0D5C7',         
        },
        brown: {
          primary: '#8B7355',      
          light: '#A89179',        
          medium: '#6B5744',       
          dark: '#3D2F24',         
          text: '#2C1F17',         
        },
        
        // ✨ Accent Colors - ألوان مميزة للتفاعل
        accents: {
          emerald: '#10B981',      // زمردي حيوي
          amber: '#F59E0B',        // كهرماني دافئ
          rose: '#F43F5E',         // وردي أنيق
          sky: '#0EA5E9',          // سماوي منعش
          violet: '#8B5CF6',       // بنفسجي فاخر
          coral: '#FF6B6B',        // مرجاني
          mint: '#4ECDC4',         // نعناعي
          honey: '#FFB84D',        // عسلي
        },
        
        // 🌅 Sunset Gradient Palette - ألوان الغروب
        sunset: {
          dawn: '#FFE5B4',         // فجر
          morning: '#FFD4A3',      // صباح
          noon: '#FFC078',         // ظهيرة
          golden: '#FFB347',       // ذهبي
          amber: '#FF9F45',        // كهرماني
          dusk: '#FF8C42',         // غسق
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
        // 🌟 Premium Luxury Gradients
        'gradient-luxury': 'linear-gradient(135deg, #7FA08E 0%, #9FB8A8 50%, #E8F0ED 100%)',
        'gradient-luxury-reverse': 'linear-gradient(135deg, #E8F0ED 0%, #9FB8A8 50%, #7FA08E 100%)',
        'gradient-gold-shine': 'linear-gradient(90deg, #5A7568 0%, #7FA08E 25%, #9FB8A8 50%, #7FA08E 75%, #5A7568 100%)',
        
        // 🎭 Sophisticated Backgrounds
        'gradient-dark': 'linear-gradient(180deg, #F5F0E8 0%, #FAF7F2 50%, #FFFFFF 100%)',
        'gradient-dark-elegant': 'radial-gradient(ellipse at top, #FAF7F2 0%, #F5F0E8 50%, #EBE4D8 100%)',
        'gradient-soft': 'linear-gradient(135deg, #FDFBF7 0%, #FAF7F2 50%, #F5F0E8 100%)',
        
        // 🌅 Sunset & Nature Inspired
        'gradient-sunset': 'linear-gradient(135deg, #FFE5B4 0%, #FFD4A3 25%, #FFC078 50%, #FFB347 75%, #FF9F45 100%)',
        'gradient-forest': 'linear-gradient(135deg, #384B44 0%, #5A7568 25%, #7FA08E 50%, #9FB8A8 75%, #E8F0ED 100%)',
        'gradient-oasis': 'linear-gradient(135deg, #0EA5E9 0%, #4ECDC4 50%, #10B981 100%)',
        
        // 🏜️ Desert Dreams
        'gradient-desert': 'linear-gradient(135deg, #FFB84D 0%, #FF9F45 25%, #D4C4B0 50%, #F5F0E8 100%)',
        'gradient-sand': 'linear-gradient(180deg, #FDFBF7 0%, #F5F0E8 50%, #EBE4D8 100%)',
        
        // ✨ Hero & Premium Sections
        'gradient-hero': 'linear-gradient(135deg, rgba(245, 240, 232, 0.95) 0%, rgba(127, 160, 142, 0.08) 50%, rgba(245, 240, 232, 0.95) 100%)',
        'gradient-hero-premium': 'radial-gradient(circle at 50% 50%, rgba(127, 160, 142, 0.06) 0%, rgba(245, 240, 232, 0.9) 50%, rgba(245, 240, 232, 1) 100%)',
        'gradient-hero-modern': 'linear-gradient(135deg, #7FA08E 0%, rgba(127, 160, 142, 0.8) 50%, #E8F0ED 100%)',
        
        // 🎨 Interactive Cards
        'gradient-card': 'linear-gradient(145deg, rgba(255, 255, 255, 0.9) 0%, rgba(250, 247, 242, 0.95) 100%)',
        'gradient-card-hover': 'linear-gradient(145deg, rgba(127, 160, 142, 0.04) 0%, rgba(255, 255, 255, 0.9) 100%)',
        'gradient-card-premium': 'linear-gradient(145deg, #FDFBF7 0%, #FAF7F2 50%, #F5F0E8 100%)',
        'gradient-card-accent': 'linear-gradient(135deg, rgba(255, 184, 77, 0.1) 0%, rgba(127, 160, 142, 0.1) 100%)',
        
        // 🌈 Overlay & Effects
        'gradient-overlay': 'linear-gradient(to bottom, rgba(245, 240, 232, 0) 0%, rgba(245, 240, 232, 0.9) 100%)',
        'gradient-overlay-dark': 'linear-gradient(to bottom, rgba(61, 47, 36, 0) 0%, rgba(61, 47, 36, 0.8) 100%)',
        'gradient-shimmer': 'linear-gradient(90deg, transparent 0%, rgba(127, 160, 142, 0.15) 50%, transparent 100%)',
        'gradient-shimmer-gold': 'linear-gradient(90deg, transparent 0%, rgba(255, 184, 77, 0.2) 50%, transparent 100%)',
        
        // 🔥 Animated Gradients
        'gradient-radial': 'radial-gradient(circle, var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'gradient-mesh': 'radial-gradient(at 40% 20%, #7FA08E 0%, transparent 50%), radial-gradient(at 80% 80%, #FFB347 0%, transparent 50%), radial-gradient(at 0% 50%, #4ECDC4 0%, transparent 50%)',
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
        // ✨ Enhanced Core Animations
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        
        // 🎬 Entrance Animations
        fadeInUp: {
          from: { opacity: '0', transform: 'translateY(40px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        fadeInDown: {
          from: { opacity: '0', transform: 'translateY(-40px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          from: { opacity: '0' },
          to: { opacity: '1' },
        },
        zoomIn: {
          from: { opacity: '0', transform: 'scale(0.5)' },
          to: { opacity: '1', transform: 'scale(1)' },
        },
        
        // ✨ Shine & Glow Effects
        goldShine: {
          '0%': { backgroundPosition: '-200% center' },
          '100%': { backgroundPosition: '200% center' },
        },
        shimmer: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(100%)' },
        },
        shimmerRotate: {
          '0%': { transform: 'translateX(-100%) rotate(0deg)' },
          '100%': { transform: 'translateX(100%) rotate(360deg)' },
        },
        glow: {
          '0%, 100%': { boxShadow: '0 0 20px rgba(127, 160, 142, 0.3)' },
          '50%': { boxShadow: '0 0 40px rgba(127, 160, 142, 0.6), 0 0 60px rgba(127, 160, 142, 0.4)' },
        },
        glowPulse: {
          '0%, 100%': { 
            boxShadow: '0 0 20px rgba(127, 160, 142, 0.3)',
            transform: 'scale(1)'
          },
          '50%': { 
            boxShadow: '0 0 50px rgba(127, 160, 142, 0.8), 0 0 80px rgba(127, 160, 142, 0.5)',
            transform: 'scale(1.05)'
          },
        },
        
        // 🌊 Float & Movement
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        floatSlow: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        floatHorizontal: {
          '0%, 100%': { transform: 'translateX(0px)' },
          '50%': { transform: 'translateX(20px)' },
        },
        
        // 💫 Pulse Variations
        pulse: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.7' },
        },
        pulseSoft: {
          '0%, 100%': { opacity: '1', transform: 'scale(1)' },
          '50%': { opacity: '0.8', transform: 'scale(1.05)' },
        },
        
        // 🎯 Slide Animations
        slideInLeft: {
          from: { opacity: '0', transform: 'translateX(-50px)' },
          to: { opacity: '1', transform: 'translateX(0)' },
        },
        slideInRight: {
          from: { opacity: '0', transform: 'translateX(50px)' },
          to: { opacity: '1', transform: 'translateX(0)' },
        },
        slideInTop: {
          from: { opacity: '0', transform: 'translateY(-50px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        slideInBottom: {
          from: { opacity: '0', transform: 'translateY(50px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        
        // 📏 Scale Animations
        scaleIn: {
          from: { opacity: '0', transform: 'scale(0.9)' },
          to: { opacity: '1', transform: 'scale(1)' },
        },
        scaleUp: {
          from: { transform: 'scale(1)' },
          to: { transform: 'scale(1.1)' },
        },
        
        // 🌀 Rotation & Spin
        spin: {
          from: { transform: 'rotate(0deg)' },
          to: { transform: 'rotate(360deg)' },
        },
        spinSlow: {
          from: { transform: 'rotate(0deg)' },
          to: { transform: 'rotate(360deg)' },
        },
        
        // 🎨 Creative Effects
        blob: {
          '0%, 100%': { transform: 'translate(0, 0) scale(1)' },
          '25%': { transform: 'translate(20px, -20px) scale(1.1)' },
          '50%': { transform: 'translate(-20px, 20px) scale(0.9)' },
          '75%': { transform: 'translate(10px, 10px) scale(1.05)' },
        },
        wave: {
          '0%, 100%': { transform: 'rotate(0deg)' },
          '25%': { transform: 'rotate(5deg)' },
          '75%': { transform: 'rotate(-5deg)' },
        },
        bounce: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-25px)' },
        },
        wiggle: {
          '0%, 100%': { transform: 'rotate(0deg)' },
          '25%': { transform: 'rotate(-3deg)' },
          '75%': { transform: 'rotate(3deg)' },
        },
        
        // 🌈 Gradient Animations
        gradientShift: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        rainbowGlow: {
          '0%': { filter: 'hue-rotate(0deg)' },
          '100%': { filter: 'hue-rotate(360deg)' },
        },
      },
      animation: {
        // Core
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        
        // Entrance
        fadeIn: "fadeIn 0.5s ease-out",
        fadeInUp: "fadeInUp 0.6s ease-out",
        fadeInDown: "fadeInDown 0.6s ease-out",
        zoomIn: "zoomIn 0.5s ease-out",
        
        // Shine & Glow
        goldShine: "goldShine 3s linear infinite",
        shimmer: "shimmer 2s linear infinite",
        shimmerRotate: "shimmerRotate 3s linear infinite",
        glow: "glow 2s ease-in-out infinite",
        glowPulse: "glowPulse 3s ease-in-out infinite",
        
        // Float & Movement
        float: "float 3s ease-in-out infinite",
        floatSlow: "floatSlow 6s ease-in-out infinite",
        floatHorizontal: "floatHorizontal 4s ease-in-out infinite",
        
        // Pulse
        pulse: "pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        pulseSoft: "pulseSoft 2s ease-in-out infinite",
        
        // Slide
        slideInLeft: "slideInLeft 0.6s ease-out",
        slideInRight: "slideInRight 0.6s ease-out",
        slideInTop: "slideInTop 0.6s ease-out",
        slideInBottom: "slideInBottom 0.6s ease-out",
        
        // Scale
        scaleIn: "scaleIn 0.5s ease-out",
        scaleUp: "scaleUp 0.3s ease-out",
        
        // Rotation
        spin: "spin 1s linear infinite",
        spinSlow: "spinSlow 3s linear infinite",
        
        // Creative
        blob: "blob 7s ease-in-out infinite",
        wave: "wave 2s ease-in-out infinite",
        bounce: "bounce 1s ease-in-out infinite",
        wiggle: "wiggle 0.5s ease-in-out infinite",
        
        // Gradient
        gradientShift: "gradientShift 3s ease infinite",
        rainbowGlow: "rainbowGlow 3s linear infinite",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};

export default config;
