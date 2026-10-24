import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useDesign, SketchData } from '../context/DesignContext';
import { sketches } from '../data/designer';
import { ROUTES } from '../constants';
import { StepCard, PrimaryButton } from '../components';

export const SketchSelection = () => {
  const { design, updateDesign } = useDesign();
  const navigate = useNavigate();

  const handleSelectSketch = (sketch: SketchData) => {
    updateDesign('selectedSketch', sketch);
    updateDesign('selectedReference', null);
    navigate(`${ROUTES.REFERENCE}?sketchId=${sketch.id}`);
  };

  const handleBack = () => {
    navigate(ROUTES.CATEGORY);
  };

  const filteredSketches = sketches.filter(
    (sketch) => sketch.categoryId === design.selectedCategory?.id
  );

  return (
    <div className="flex flex-col gap-8 animate-fade-in" id="sketch-step-container">
      {/* Title block */}
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 pb-6 border-b border-brand-border-pink">
        <div>
          <span className="text-[10px] font-mono font-bold tracking-[0.25em] text-brand-pink uppercase">
            Step 02 of 04
          </span>
          <h1 className="text-2xl sm:text-3xl font-bold text-brand-deep tracking-tight mt-1.5">
            Choose {design.gender || 'Female'} Silhouette Sketch
          </h1>
          <p className="text-xs text-brand-deep/60 mt-1 font-sans font-medium">
            Select a tailored draping concept that defines how your fabric falls.
          </p>
        </div>

        {/* Action Controls */}
        <div className="flex items-center gap-3 w-full md:w-auto self-stretch md:self-auto shrink-0">
          <PrimaryButton
            onClick={handleBack}
            variant="outline"
            iconName="arrow-left"
            iconPosition="left"
            className="w-full md:w-auto"
            id="sketch-back-btn"
          >
            Back
          </PrimaryButton>
        </div>
      </div>



      {/* Sketches Grid - Compact & Elegant */}
      <div 
        className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 md:gap-6"
        id="sketch-selection-grid"
      >
        {filteredSketches.map((sketch, index) => {
          const isSelected = design.selectedSketch?.id === sketch.id;
          
          // Show the entire outfit beautifully by aligning from the top with minimal/no cropping zoom
          let customObjectFit = 'object-cover object-[center_top] scale-[1.0]';
          const femaleCategories = ['maxi-dresses', 'short-dresses', 'coord-sets', 'jumpsuits', 'skirts', 'tops', 'pants', 'shorts'];
          if (sketch.categoryId && femaleCategories.includes(sketch.categoryId)) {
            // All female categories now have their full hand-drawn sketches visible without arbitrary zooms cutting them off
            customObjectFit = 'object-cover object-[center_3%] scale-[1.0] transition-all duration-700 hover:scale-[1.04]';
          }

          return (
            <StepCard
              key={sketch.id}
              id={sketch.id}
              title={sketch.title}
              image={sketch.image}
              subtitle={sketch.description}
              isSelected={isSelected}
              onClick={() => handleSelectSketch(sketch)}
              aspectRatio="aspect-[3/4]"
              objectFit={customObjectFit}
              hideDetails={true}
            />
          );
        })}
      </div>



      {/* Bottom navigation bar */}
      <div className="flex items-center justify-between pt-8 border-t border-brand-border-pink mt-6">
        <PrimaryButton
          onClick={handleBack}
          variant="outline"
          iconName="arrow-left"
          iconPosition="left"
          id="sketch-back-bottom-btn"
        >
          Back
        </PrimaryButton>
        
        <span className="text-sm text-brand-deep/60 font-sans font-semibold">
          {design.selectedSketch ? (
            <span>Selected Sketch: <strong className="text-brand-burgundy font-bold">{design.selectedSketch.title}</strong></span>
          ) : "Select a silhouette style."}
        </span>
      </div>
    </div>
  );
};
