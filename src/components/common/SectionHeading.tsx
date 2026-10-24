import React from 'react';

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  number?: string;
  align?: 'left' | 'center' | 'right';
  className?: string;
}

export const SectionHeading = ({
  title,
  subtitle,
  number,
  align = 'center',
  className = ''
}: SectionHeadingProps) => {
  const alignmentClasses = {
    left: 'text-left items-start',
    center: 'text-center items-center',
    right: 'text-right items-end'
  };

  return (
    <div className={`flex flex-col ${alignmentClasses[align]} gap-3 ${className}`}>
      {number && (
        <span className="text-[10px] font-mono font-semibold tracking-[0.3em] uppercase text-neutral-400 bg-neutral-100 px-3 py-1.5 rounded-full mb-1">
          {number}
        </span>
      )}
      
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold tracking-tight text-neutral-900 leading-tight">
        {title}
      </h2>
      
      {subtitle && (
        <p className="text-xs sm:text-sm text-neutral-400 max-w-2xl leading-relaxed mt-1 font-sans font-normal">
          {subtitle}
        </p>
      )}
    </div>
  );
};
