import React, { ReactNode } from 'react';
import { IconRenderer } from '../common/IconRenderer';

interface PrimaryButtonProps {
  children: ReactNode;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
  variant?: 'solid' | 'outline' | 'ghost';
  disabled?: boolean;
  className?: string;
  iconName?: string;
  iconPosition?: 'left' | 'right';
  fullWidth?: boolean;
  id?: string;
}

export const PrimaryButton = ({
  children,
  onClick,
  type = 'button',
  variant = 'solid',
  disabled = false,
  className = '',
  iconName,
  iconPosition = 'right',
  fullWidth = false,
  id
}: PrimaryButtonProps) => {
  const baseStyles = "inline-flex items-center justify-center font-sans text-xs font-bold tracking-widest uppercase rounded-full transition-all duration-300 active:scale-98 focus:outline-none focus:ring-2 focus:ring-brand-pink/20";
  
  const variantStyles = {
    solid: "bg-gradient-to-r from-brand-pink to-brand-burgundy hover:from-brand-burgundy hover:to-brand-deep text-white shadow-sm hover:shadow-md disabled:bg-neutral-200 disabled:text-neutral-400 disabled:cursor-not-allowed",
    outline: "bg-transparent border border-brand-border-pink hover:border-brand-burgundy text-brand-deep hover:text-brand-burgundy disabled:border-neutral-200 disabled:text-neutral-300 disabled:cursor-not-allowed",
    ghost: "bg-transparent hover:bg-brand-soft-pink text-brand-burgundy hover:text-brand-deep disabled:text-neutral-300 disabled:cursor-not-allowed"
  };

  const widthStyles = fullWidth ? "w-full" : "px-8 py-3.5";

  return (
    <button
      id={id}
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`${baseStyles} ${variantStyles[variant]} ${widthStyles} ${className}`}
    >
      {iconName && iconPosition === 'left' && (
        <IconRenderer name={iconName} size={14} className="mr-2.5 transition-transform duration-300 group-hover:-translate-x-1" />
      )}
      
      <span>{children}</span>
      
      {iconName && iconPosition === 'right' && (
        <IconRenderer name={iconName} size={14} className="ml-2.5 transition-transform duration-300 group-hover:translate-x-1" />
      )}
    </button>
  );
};
