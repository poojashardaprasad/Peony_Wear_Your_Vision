import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useDesign, FabricCategoryData } from '../context/DesignContext';
import { fabricCategories } from '../data/designer';
import { ROUTES } from '../constants';
import { StepCard, PrimaryButton } from '../components';

export const FabricCategory = () => {
  const { design, updateDesign } = useDesign();
  const navigate = useNavigate();

  const handleSelectFabricCategory = (category: FabricCategoryData) => {
    updateDesign('selectedFabricCategory', category);
    
    // Auto clear currently selected swatch if it doesn't belong to this newly selected category
    updateDesign('selectedFabric', null);

    // Smoothly auto-navigate to the swatch screen for this category
    navigate(ROUTES.FABRIC);
  };

  const handleBack = () => {
    if (design.selectedReference?.isCustom) {
      navigate(ROUTES.CATEGORY);
    } else {
      navigate(ROUTES.REFERENCE);
    }
  };

  return (
    <div className="flex flex-col gap-8 animate-fade-in" id="fabric-category-step-container">
      {/* Title block */}
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 pb-6 border-b border-brand-border-pink">
        <div>
          <span className="text-[10px] font-mono font-bold tracking-[0.25em] text-brand-pink uppercase">
            Step 03 of 04
          </span>
          <h1 className="text-2xl sm:text-3xl font-bold text-brand-deep tracking-tight mt-1.5">
            Select Fabric Category
          </h1>
          <p className="text-xs text-brand-deep/60 mt-1 font-sans font-medium">
            Choose a luxury organic fabric base class. Selecting a class unlocks premium color and print swatches.
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
            id="fabric-cat-back-btn"
          >
            Back
          </PrimaryButton>
        </div>
      </div>

      {/* Grid of Fabric Categories */}
      <div 
        className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
        id="fabric-category-grid"
      >
        {fabricCategories.map((category) => {
          const isSelected = design.selectedFabricCategory?.id === category.id;
          
          return (
            <StepCard
              key={category.id}
              id={category.id}
              title={category.name}
              image={category.image}
              subtitle={`${category.swatchCount} premium weave swatches`}
              isSelected={isSelected}
              onClick={() => handleSelectFabricCategory(category)}
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
          id="fabric-cat-back-bottom-btn"
        >
          Back
        </PrimaryButton>
        
        <span className="text-sm text-brand-deep/60 font-sans font-semibold">
          {design.selectedFabricCategory ? (
            <span>Selected Fabric Base: <strong className="text-brand-burgundy font-bold">{design.selectedFabricCategory.name}</strong></span>
          ) : "Choose a fabric type above to proceed."}
        </span>
      </div>
    </div>
  );
};
