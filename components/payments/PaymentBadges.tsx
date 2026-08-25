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
    <div className={`inline-flex items-center justify-center rounded bg-black border border-white/20 px-2 py-0.5 text-white shadow-sm ${className}`}>
      <span className="font-semibold text-xs leading-none">Pay</span>
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
