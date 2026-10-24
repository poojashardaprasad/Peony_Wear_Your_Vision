import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDesign } from '../context/DesignContext';
import { ROUTES } from '../constants';
import { PrimaryButton, IconRenderer } from '../components';
import { motion } from 'motion/react';

export const Profile = () => {
  const { design, updateDesign } = useDesign();
  const navigate = useNavigate();

  // Keep local state or sync to context directly
  const [selectedGender, setSelectedGender] = useState<'Female' | 'Male' | null>(design.gender);
  const [selectedSize, setSelectedSize] = useState<string>(design.measurements.size || 'M');

  const genders = [
    {
      id: 'Female' as const,
      label: 'Female',
      icon: 'user', // standard lucide user icon
      description: 'Dresses, blouses, skirts, and custom feminine tailoring.'
    },
    {
      id: 'Male' as const,
      label: 'Male',
      icon: 'user',
      description: 'Shirts, suits, trousers, and custom masculine tailoring.'
    }
  ];

  const sizes = [
    { id: 'XS', name: 'Extra Small' },
    { id: 'S', name: 'Small' },
    { id: 'M', name: 'Medium (Standard)' },
    { id: 'L', name: 'Large' },
    { id: 'XL', name: 'Extra Large' },
    { id: 'XXL', name: 'Double Extra Large' }
  ];

  const handleNext = () => {
    if (selectedGender) {
      if (design.gender !== selectedGender) {
        updateDesign('gender', selectedGender);
        updateDesign('selectedCategory', null);
        updateDesign('selectedSketch', null);
        updateDesign('selectedReference', null);
      }
      updateDesign('measurements', {
        ...design.measurements,
        size: selectedSize
      });
      navigate(ROUTES.CATEGORY);
    }
  };

  return (
    <div className="max-w-3xl mx-auto px-4 py-8 sm:py-16 animate-fade-in" id="profile-step-container">
      {/* Title block */}
      <div className="text-center pb-8 border-b border-brand-border-pink mb-10">
        <span className="text-[10px] font-mono font-bold tracking-[0.25em] text-brand-pink uppercase bg-brand-soft-pink/50 border border-brand-border-pink rounded-full px-4 py-1.5 shadow-xs">
          Initial Fit Blueprint
        </span>
        <h1 className="text-3xl sm:text-4xl font-bold text-brand-deep tracking-tight mt-4 font-sans">
          Let's Set Your Canvas
        </h1>
        <p className="text-xs sm:text-sm text-brand-deep/60 mt-2 max-w-md mx-auto font-sans font-medium">
          Select your profile preferences below to personalize the tailoring sketches and standard size blueprints.
        </p>
      </div>

      <div className="space-y-12">
        {/* Section 1: Gender selection */}
        <div className="space-y-4">
          <div className="flex items-center gap-2">
            <span className="w-6 h-6 rounded-full bg-brand-soft-pink text-brand-burgundy flex items-center justify-center text-xs font-bold font-mono">1</span>
            <h3 className="text-sm font-bold uppercase tracking-wider text-brand-deep">Select Gender</h3>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
            {genders.map((g) => {
              const isSelected = selectedGender === g.id;
              return (
                <button
                  key={g.id}
                  type="button"
                  onClick={() => setSelectedGender(g.id)}
                  className={`relative p-6 rounded-3xl border text-left cursor-pointer transition-all duration-300 focus:outline-none flex flex-col justify-between h-40 ${
                    isSelected
                      ? 'bg-brand-soft-pink border-brand-pink shadow-lg scale-102 ring-1 ring-brand-pink'
                      : 'bg-white hover:bg-brand-soft-pink/20 border-brand-border-pink hover:border-brand-pink/40 shadow-xs'
                  }`}
                  id={`gender-option-${g.id}`}
                >
                  <div className="flex items-center justify-between w-full">
                    <span className={`w-10 h-10 rounded-2xl flex items-center justify-center transition-all ${
                      isSelected ? 'bg-brand-burgundy text-white' : 'bg-brand-soft-pink text-brand-pink border border-brand-border-pink'
                    }`}>
                      <IconRenderer name={g.id === 'Female' ? 'heart' : 'user'} size={18} />
                    </span>
                    {isSelected && (
                      <span className="w-5 h-5 rounded-full bg-brand-pink text-white flex items-center justify-center text-[10px] font-bold">
                        ✓
                      </span>
                    )}
                  </div>
                  
                  <div>
                    <h4 className="text-sm font-bold text-brand-deep">{g.label}</h4>
                    <p className="text-[11px] text-brand-deep/60 mt-1 font-sans leading-relaxed font-medium">
                      {g.description}
                    </p>
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Section 2: Size selection */}
        <div className="space-y-4">
          <div className="flex items-center gap-2">
            <span className="w-6 h-6 rounded-full bg-brand-soft-pink text-brand-burgundy flex items-center justify-center text-xs font-bold font-mono">2</span>
            <h3 className="text-sm font-bold uppercase tracking-wider text-brand-deep">Choose Standard Size</h3>
          </div>
          
          <div className="bg-white border border-brand-border-pink rounded-3xl p-6 sm:p-8 shadow-xs space-y-6">
            <div className="grid grid-cols-3 sm:grid-cols-6 gap-3 sm:gap-4">
              {sizes.map((sz) => {
                const isSelected = selectedSize === sz.id;
                return (
                  <button
                    key={sz.id}
                    type="button"
                    onClick={() => setSelectedSize(sz.id)}
                    className={`h-14 rounded-2xl border flex flex-col items-center justify-center cursor-pointer transition-all duration-200 select-none focus:outline-none ${
                      isSelected
                        ? 'bg-brand-burgundy text-white border-brand-burgundy shadow-md scale-105'
                        : 'bg-brand-cream/40 hover:bg-brand-soft-pink text-brand-deep border-brand-border-pink hover:border-brand-pink/30'
                    }`}
                    id={`size-option-${sz.id}`}
                  >
                    <span className="text-xs font-bold">{sz.id}</span>
                    <span className={`text-[8px] font-medium tracking-wide mt-0.5 uppercase ${isSelected ? 'text-white/80' : 'text-brand-deep/40'}`}>
                      {sz.id === 'M' ? 'Standard' : sz.id}
                    </span>
                  </button>
                );
              })}
            </div>

            {/* Selected Size Helper Text */}
            <div className="bg-brand-soft-pink/35 border border-brand-border-pink rounded-2xl p-4 flex items-center gap-3.5">
              <span className="w-8 h-8 rounded-full bg-brand-soft-pink text-brand-pink flex items-center justify-center text-xs">
                <IconRenderer name="info" size={14} />
              </span>
              <div>
                <h5 className="text-[11px] font-bold text-brand-deep uppercase tracking-wider">
                  Selected Size Profile: {selectedSize} ({sizes.find(s => s.id === selectedSize)?.name})
                </h5>
                <p className="text-[10px] text-brand-deep/60 mt-0.5 font-sans font-medium">
                  Standard factory silhouettes are automatically optimized for {selectedSize}. You will also be able to fine-tune detailed custom waist/height measures at the preview checkout screen.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Action button */}
        <div className="flex flex-col items-center gap-3 pt-6">
          <PrimaryButton
            onClick={handleNext}
            disabled={!selectedGender}
            iconName="arrow-right"
            className="w-full sm:w-auto px-12"
            id="profile-continue-btn"
          >
            Continue to Design Studio
          </PrimaryButton>
          {!selectedGender && (
            <p className="text-[10px] text-brand-pink font-bold uppercase tracking-wider animate-pulse">
              * Please select a gender to continue
            </p>
          )}
        </div>
      </div>
    </div>
  );
};
