import React, { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDesign, CategoryData } from '../context/DesignContext';
import { categories } from '../data/designer';
import { ROUTES } from '../constants';
import { StepCard, PrimaryButton } from '../components';
import { getCategoryImage, getCategoryObjectFit } from '../utils/imageHelper';

export const Category = () => {
  const { design, updateDesign } = useDesign();
  const navigate = useNavigate();
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleSelectCategory = (category: CategoryData) => {
    updateDesign('selectedCategory', category);
    updateDesign('selectedSketch', null);
    updateDesign('selectedReference', null);
    // Initialize previewData outfitImage with the default category thumbnail image
    updateDesign('previewData', {
      outfitImage: getCategoryImage(category),
      occasion: design.previewData?.occasion || 'Wedding',
      embellishments: design.previewData?.embellishments || []
    });
    // Immediately auto-advance to next page (Step 2 - Silhouette Sketch)
    navigate(ROUTES.SKETCH);
  };

  const handleBack = () => {
    navigate(ROUTES.PROFILE);
  };

  const handleTriggerUpload = () => {
    fileInputRef.current?.click();
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      if (file.type.startsWith('image/')) {
        const reader = new FileReader();
        reader.onload = (event) => {
          if (event.target?.result) {
            const customRef = {
              id: `custom-ref-${Date.now()}`,
              image: event.target.result as string,
              isCustom: true
            };
            
            // Set custom reference
            updateDesign('selectedReference', customRef);
            
            // Auto initialize default category if not selected yet
            if (!design.selectedCategory) {
              const defaultCat = categories.find(c => !c.gender || c.gender === (design.gender || 'Female')) || categories[0];
              updateDesign('selectedCategory', defaultCat);
              updateDesign('previewData', {
                outfitImage: getCategoryImage(defaultCat),
                occasion: design.previewData?.occasion || 'Wedding',
                embellishments: design.previewData?.embellishments || []
              });
            }

            // Directly navigate to Step 04 (Fabric Type)
            navigate(ROUTES.FABRIC_CATEGORY);
          }
        };
        reader.readAsDataURL(file);
      }
    }
  };

  const filteredCategories = categories.filter(
    (category) => 
      (!category.gender || category.gender === (design.gender || 'Female')) &&
      category.id !== 'mini-dresses' &&
      category.id !== 'midi-dresses'
  );

  return (
    <div className="flex flex-col gap-8 animate-fade-in" id="category-step-container">
      {/* Title block */}
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 pb-6 border-b border-brand-border-pink">
        <div>
          <span className="text-[10px] font-mono font-bold tracking-[0.25em] text-brand-pink uppercase">
            Step 01 of 04
          </span>
          <h1 className="text-2xl sm:text-3xl font-bold text-brand-deep tracking-tight mt-1.5">
            Select {design.gender || 'Female'} Outfit Type
          </h1>
          <p className="text-xs text-brand-deep/60 mt-1 font-sans font-medium">
            Choose the core silhouette canvas that matches your tailoring vision.
          </p>
        </div>

        {/* Action Controls - Back and Upload Reference */}
        <div className="flex items-center gap-3 w-full md:w-auto self-stretch md:self-auto shrink-0">
          <PrimaryButton
            onClick={handleBack}
            variant="outline"
            iconName="arrow-left"
            iconPosition="left"
            className="w-1/2 md:w-auto"
            id="category-back-btn"
          >
            Back
          </PrimaryButton>
          
          <PrimaryButton
            onClick={handleTriggerUpload}
            iconName="upload"
            className="w-1/2 md:w-auto bg-brand-burgundy hover:bg-brand-deep text-white border-none cursor-pointer"
            id="category-upload-ref-header-btn"
          >
            {design.selectedReference?.isCustom ? "Update Ref" : "Upload Reference"}
          </PrimaryButton>
        </div>
      </div>

      {/* Categories Grid (Responsive) */}
      <div 
         className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
         id="category-selection-grid"
      >
        {filteredCategories.map((category) => {
          const isSelected = design.selectedCategory?.id === category.id;
          
          return (
            <StepCard
              key={category.id}
              id={category.id}
              title={category.name}
              image={getCategoryImage(category)} // Use category-specific image index based on mapping
              subtitle={`${category.images.length} design variations available`}
              bestseller={category.bestseller}
              isSelected={isSelected}
              onClick={() => handleSelectCategory(category)}
              objectFit={getCategoryObjectFit(category)}
            />
          );
        })}
      </div>

      {/* Hidden reference file picker */}
      <input
        ref={fileInputRef}
        type="file"
        accept="image/*"
        onChange={handleFileChange}
        className="hidden"
        id="category-reference-file-picker"
      />

      {/* Bottom navigation bar */}
      <div className="flex items-center justify-between pt-8 border-t border-brand-border-pink mt-6">
        <PrimaryButton
          onClick={handleBack}
          variant="outline"
          iconName="arrow-left"
          iconPosition="left"
          id="category-back-bottom-btn"
        >
          Back
        </PrimaryButton>

        <span className="text-xs text-brand-deep/60 font-sans font-medium hidden sm:inline">
          {design.selectedCategory ? (
            <span>Selected Canvas: <strong className="text-brand-burgundy font-bold">{design.selectedCategory.name}</strong></span>
          ) : "Select an option above to proceed."}
        </span>
        
        <PrimaryButton
          onClick={handleTriggerUpload}
          iconName="upload"
          id="category-upload-bottom-btn"
          className="bg-gradient-to-r from-brand-pink to-brand-burgundy hover:from-brand-burgundy hover:to-brand-deep text-white shadow-md hover:shadow-lg hover:scale-102 active:scale-98 transition-all cursor-pointer"
        >
          {design.selectedReference?.isCustom ? "Update Reference" : "Upload Reference"}
        </PrimaryButton>
      </div>
    </div>
  );
};
