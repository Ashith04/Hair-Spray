import React from 'react';
import officialLogoImg from '../assets/images/hairlogo.jpeg';

interface SalonLogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl' | '2xl';
  showText?: boolean;
  theme?: 'light' | 'dark' | 'auto';
}

/**
 * Authentic Hair Spray Unisex Salon Logo
 * Faithfully renders the exact official hairlogo.jpeg provided by the salon.
 */
export const SalonLogo: React.FC<SalonLogoProps> = ({
  className = '',
  size = 'md',
  showText = false,
}) => {
  const sizeMap = {
    sm: { icon: 'w-8 h-8 rounded-full', text: 'text-base', sub: 'text-[9px]' },
    md: { icon: 'w-10 h-10 sm:w-11 sm:h-11 rounded-full', text: 'text-lg', sub: 'text-[10px]' },
    lg: { icon: 'w-14 h-14 sm:w-16 sm:h-16 rounded-full', text: 'text-2xl', sub: 'text-xs' },
    xl: { icon: 'w-24 h-24 sm:w-28 sm:h-28 rounded-full', text: 'text-3xl', sub: 'text-sm' },
    '2xl': { icon: 'w-32 h-32 rounded-full', text: 'text-4xl', sub: 'text-base' },
  };

  const currentSize = sizeMap[size] || sizeMap.md;

  return (
    <div className={`inline-flex items-center gap-3 ${className}`}>
      {/* Official Hair Spray Circular Logo Container */}
      <div
        className={`relative ${currentSize.icon} overflow-hidden shrink-0 flex items-center justify-center bg-black border border-zinc-200/40 shadow-xs transition-transform duration-300 hover:scale-105`}
        title="Hair Spray Unisex Salon Official Logo"
      >
        <img
          src={officialLogoImg}
          alt="Hair Spray Unisex Salon Official Logo"
          className="w-full h-full object-cover object-center select-none"
          loading="eager"
        />
      </div>

      {showText && (
        <div className="flex flex-col text-left">
          <div className="flex items-center gap-2">
            <span className={`font-serif font-bold tracking-tight text-zinc-950 ${currentSize.text}`}>
              Hair Spray
            </span>
            <span className="text-[10px] font-sans font-semibold uppercase tracking-widest px-2 py-0.5 rounded-full bg-stone-100 border border-stone-200 text-stone-700">
              Unisex
            </span>
          </div>
          <span className={`font-sans font-medium uppercase tracking-wider text-stone-500 ${currentSize.sub}`}>
            Salon · Kavoor, Mangalore
          </span>
        </div>
      )}
    </div>
  );
};

export default SalonLogo;
