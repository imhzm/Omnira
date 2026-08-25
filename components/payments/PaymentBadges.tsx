import React from 'react';

export function MadaLogo({ className = 'h-5' }: { className?: string }) {
  return (
    <div className={`inline-flex items-center justify-center rounded bg-white px-2 py-0.5 shadow-sm ${className}`}>
      <span className="font-bold tracking-tight text-[#005A9C] text-xs">mada</span>
      <span className="mr-1 text-[10px] font-bold text-[#87B827]">مدى</span>
    </div>
  );
}

export function ApplePayLogo({ className = 'h-5' }: { className?: string }) {
  return (
    <div className={`inline-flex items-center gap-1 rounded bg-black border border-white/20 px-2 py-0.5 text-white shadow-sm ${className}`}>
      <svg viewBox="0 0 170 170" className="h-3 w-3 fill-current -mt-0.5" xmlns="http://www.w3.org/2000/svg">
        <path d="M150.37 130.25c-2.45 5.66-5.35 10.87-8.71 15.66-4.58 6.53-8.33 11.05-11.22 13.56-4.48 4.12-9.28 6.23-14.42 6.35-3.69 0-8.14-1.05-13.32-3.18-5.19-2.12-9.97-3.17-14.34-3.17-4.58 0-9.49 1.05-14.75 3.17-5.26 2.13-9.5 3.24-12.74 3.35-4.35.13-9.16-1.9-14.42-6.08-3.69-3.04-7.67-7.86-11.96-14.44-6.42-9.9-11.38-20.9-14.88-32.99-3.5-12.09-5.25-23.23-5.25-33.43 0-14.43 3.65-26.24 10.96-35.43 7.31-9.19 16.27-13.88 26.88-14.07 4.9.11 10.15 1.41 15.75 3.88 5.6 2.47 9.4 3.75 11.4 3.84 1.7-.1 5.75-1.46 12.14-4.08 6.39-2.61 11.96-3.79 16.71-3.52 13.9.77 24.81 5.86 32.74 15.26-12.21 7.42-18.23 17.51-18.06 30.26.17 10.19 4.09 18.66 11.75 25.4 7.66 6.74 16.89 10.49 27.69 11.25-2.58 7.62-5.74 15.34-9.48 23.16zM119.22 33.64c0-7.39 2.67-14.18 8.01-20.36 5.34-6.19 11.9-10.08 19.67-11.69.17 1.09.25 2.05.25 2.87 0 7.4-2.78 14.34-8.34 20.82-5.56 6.48-12.27 10.33-20.14 11.55-.26-1.04-.45-2.1-.45-3.19z"/>
      </svg>
      <span className="font-semibold text-xs leading-none">Pay</span>
    </div>
  );
}

export function VisaLogo({ className = 'h-5' }: { className?: string }) {
  return (
    <div className={`inline-flex items-center justify-center rounded bg-white px-2 py-0.5 shadow-sm ${className}`}>
      <span className="font-black italic tracking-tighter text-[#1A1F71] text-xs">VISA</span>
    </div>
  );
}

export function MastercardLogo({ className = 'h-5' }: { className?: string }) {
  return (
    <div className={`inline-flex items-center justify-center rounded bg-[#1a1a1e] border border-white/10 px-1.5 py-0.5 shadow-sm ${className}`}>
      <div className="flex -space-x-1.5 items-center">
        <div className="h-3 w-3 rounded-full bg-[#EB001B]"></div>
        <div className="h-3 w-3 rounded-full bg-[#F79E1B]/95"></div>
      </div>
      <span className="mr-1 text-[9px] font-semibold text-white/90">Mastercard</span>
    </div>
  );
}

export function PaymentMethodsGrid({ className = '' }: { className?: string }) {
  return (
    <div className={`flex flex-wrap items-center justify-center gap-1.5 ${className}`}>
      <MadaLogo />
      <ApplePayLogo />
      <VisaLogo />
      <MastercardLogo />
    </div>
  );
}
