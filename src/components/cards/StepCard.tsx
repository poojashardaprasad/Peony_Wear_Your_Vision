import React, { useState, useEffect } from 'react';
import { IconRenderer } from '../common/IconRenderer';

interface StepCardProps {
  id: string;
  title: string;
  image: string;
  subtitle?: string;
  bestseller?: boolean;
  isSelected?: boolean;
  onClick?: () => void;
  className?: string;
  key?: string | number;
  aspectRatio?: string;
  objectFit?: string;
  hideDetails?: boolean;
}

export const StepCard = ({
  id,
  title,
  image,
  subtitle,
  bestseller = false,
  isSelected = false,
  onClick,
  className = '',
  aspectRatio = 'aspect-[4/5]',
  objectFit = 'object-cover object-center',
  hideDetails = false
}: StepCardProps) => {
  const [imgSrc, setImgSrc] = useState(image);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    setImgSrc(image);
    setHasError(false);
  }, [image]);

  return (
    <div
      id={`step-card-${id}`}
      onClick={onClick}
      className={`group relative overflow-hidden rounded-3xl bg-white border cursor-pointer transition-all duration-500 flex flex-col ${
        isSelected
          ? 'border-brand-pink ring-4 ring-brand-soft-pink shadow-md scale-[1.01]'
          : 'border-brand-border-pink hover:border-brand-burgundy/40 hover:shadow-lg hover:scale-[1.01]'
      } ${className}`}
    >
      {/* Selection Indicator Badge */}
      {isSelected && (
        <div className="absolute top-4 right-4 z-20 w-8 h-8 rounded-full bg-brand-pink text-white flex items-center justify-center shadow-lg border border-white">
          <IconRenderer name="check" size={14} />
        </div>
      )}

      {/* Bestseller Ribbon */}
      {bestseller && (
        <div className="absolute top-4 left-4 z-20 bg-brand-burgundy text-white text-[9px] font-bold uppercase tracking-widest px-3 py-1.5 rounded-full shadow-sm">
          Bestseller
        </div>
      )}

      {/* Image Container with Aspect Ratio */}
      <div className={`relative ${aspectRatio} w-full overflow-hidden bg-brand-soft-pink/30 flex items-center justify-center`}>
        {!hasError ? (
          <img
            src={imgSrc}
            alt={title}
            onError={() => setHasError(true)}
            className={`w-full h-full ${objectFit} transition-transform duration-700 ease-out scale-[1.08] group-hover:scale-100`}
            referrerPolicy="no-referrer"
          />
        ) : (
          <div className="flex flex-col items-center justify-center text-brand-burgundy/50 p-6 text-center">
            <IconRenderer name="sparkles" size={32} />
            <span className="text-xs font-semibold mt-2">{title}</span>
          </div>
        )}
        {/* Subtle Dark Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>

      {/* Text Details */}
      {!hideDetails && (
        <div className="p-5 flex flex-col flex-grow">
          <h4 className="text-sm font-bold text-brand-deep tracking-wide">
            {title}
          </h4>
          {subtitle && (
            <p className="text-xs text-brand-deep/50 mt-1.5 leading-relaxed font-sans font-normal">
              {subtitle}
            </p>
          )}
        </div>
      )}
    </div>
  );
};
