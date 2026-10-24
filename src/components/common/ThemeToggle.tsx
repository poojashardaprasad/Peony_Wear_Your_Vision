import React from 'react';
import { motion } from 'motion/react';
import { Sun, Moon } from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';

export const ThemeToggle: React.FC<{ layout?: 'header' | 'mobile' }> = ({ layout = 'header' }) => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className={`flex items-center ${layout === 'mobile' ? 'px-4 py-2' : ''}`} id="theme-control-panel">
      <button
        type="button"
        onClick={toggleTheme}
        className={`relative w-[76px] h-9 rounded-full border flex items-center justify-between px-2 cursor-pointer select-none transition-all duration-300 focus:outline-none ${
          theme === 'light'
            ? 'bg-[#F1F5F9] border-[#E2E8F0]'
            : 'bg-brand-soft-pink/85 border-brand-border-pink/40 shadow-inner'
        }`}
        aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} theme`}
        id="custom-theme-pill-switch"
      >
        {/* Spring-animated slide indicator */}
        <motion.div
          layout
          transition={{ type: 'spring', stiffness: 380, damping: 26 }}
          className={`absolute top-1 w-7 h-7 rounded-full shadow-md flex items-center justify-center ${
            theme === 'light' 
              ? 'left-1 bg-white border border-[#E2E8F0]/50' 
              : 'right-1 bg-brand-burgundy text-white'
          }`}
        >
          {theme === 'light' ? (
            <Sun className="w-3.5 h-3.5 text-brand-burgundy animate-spin-slow" />
          ) : (
            <Moon className="w-3.5 h-3.5 text-white" />
          )}
        </motion.div>

        {/* Background icons in fixed position */}
        <Sun 
          className={`w-4 h-4 ml-1.5 transition-opacity duration-300 ${
            theme === 'light' ? 'opacity-0' : 'opacity-40 text-brand-deep'
          }`} 
        />
        <Moon 
          className={`w-4 h-4 mr-1.5 transition-opacity duration-300 ${
            theme === 'light' ? 'opacity-40 text-neutral-400' : 'opacity-0'
          }`} 
        />
      </button>
    </div>
  );
};

