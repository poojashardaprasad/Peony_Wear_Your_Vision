import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDesign, FabricSwatchData } from '../context/DesignContext';
import { fabricsByCategoryId, defaultFabrics } from '../data/designer';
import { ROUTES } from '../constants';
import { StepCard, PrimaryButton } from '../components';
import { getCategoryImage } from '../utils/imageHelper';

export const FabricSelection = () => {
  const { design, updateDesign } = useDesign();
  const navigate = useNavigate();

  // Get swatches based on selected fabric category, fallback to default (satin)
  const activeCategoryId = design.selectedFabricCategory?.id || 'satin';
  const swatches = fabricsByCategoryId[activeCategoryId] || defaultFabrics;

  // Auto-select first swatch if none selected
  useEffect(() => {
    if (!design.selectedFabric && swatches.length > 0) {
      updateDesign('selectedFabric', swatches[0]);
    }
  }, [design.selectedFabric, swatches, updateDesign]);

  // Measurement State
  const [size, setSize] = useState(design.measurements.size || 'M');
  const [height, setHeight] = useState(design.measurements.height || '');
  const [bust, setBust] = useState(design.measurements.bust || '');
  const [waist, setWaist] = useState(design.measurements.waist || '');
  const [hips, setHips] = useState(design.measurements.hips || '');
  const [notes, setNotes] = useState(design.measurements.notes || '');

  const handleSelectSwatch = (swatch: FabricSwatchData) => {
    updateDesign('selectedFabric', swatch);
  };

  const handleSizeChange = (selectedSize: string) => {
    setSize(selectedSize);
    updateDesign('measurements', {
      size: selectedSize,
      height,
      bust,
      waist,
      hips,
      notes
    });
  };

  const handleMeasurementFieldChange = (field: string, val: string) => {
    const updatedMeasurements = {
      size,
      height: field === 'height' ? val : height,
      bust: field === 'bust' ? val : bust,
      waist: field === 'waist' ? val : waist,
      hips: field === 'hips' ? val : hips,
      notes: field === 'notes' ? val : notes,
    };

    if (field === 'height') setHeight(val);
    if (field === 'bust') setBust(val);
    if (field === 'waist') setWaist(val);
    if (field === 'hips') setHips(val);
    if (field === 'notes') setNotes(val);

    updateDesign('measurements', updatedMeasurements);
  };

  const handleBack = () => {
    navigate(ROUTES.FABRIC_CATEGORY);
  };

  const handleNext = () => {
    // Clear previous generated image so Preview synthesizes fresh bespoke drape for this selected fabric
    updateDesign('previewData', {
      outfitImage: undefined,
      occasion: design.previewData?.occasion || 'Wedding',
      embellishments: design.previewData?.embellishments || []
    });
    navigate(ROUTES.PREVIEW);
  };

  return (
    <div className="flex flex-col gap-8 animate-fade-in" id="fabric-selection-step-container">
      {/* Title block */}
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 pb-6 border-b border-brand-border-pink">
        <div>
          <span className="text-[10px] font-mono font-bold tracking-[0.25em] text-brand-pink uppercase">
            Step 03 of 04
          </span>
          <h1 className="text-2xl sm:text-3xl font-bold text-brand-deep tracking-tight mt-1.5">
            Select Fabric Swatch & Fit
          </h1>
          <p className="text-xs text-brand-deep/60 mt-1 font-sans font-medium">
            Choose a premium organic color/pattern swatch and specify your custom fit dimensions.
          </p>
        </div>

        {/* Action Controls */}
        <div className="flex items-center gap-3 w-full md:w-auto self-stretch md:self-auto shrink-0">
          <PrimaryButton
            onClick={handleBack}
            variant="outline"
            iconName="arrow-left"
            iconPosition="left"
            className="w-1/2 md:w-auto"
            id="fabric-back-btn"
          >
            Back
          </PrimaryButton>
          <PrimaryButton
            onClick={handleNext}
            iconName="arrow-right"
            className="w-1/2 md:w-auto bg-brand-burgundy text-white hover:bg-brand-deep"
            id="fabric-next-btn"
          >
            Proceed to Preview
          </PrimaryButton>
        </div>
      </div>

      {/* Two-Column Grid: Left side fabric swatches, Right side fit form */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* LEFT COLUMN: Fabric Swatch Grid (7 columns) */}
        <div className="lg:col-span-7 flex flex-col gap-6">
          <div className="bg-white border border-brand-border-pink p-6 rounded-3xl shadow-sm space-y-4">
            <div className="flex items-center justify-between border-b border-brand-border-pink/40 pb-3">
              <span className="text-[10px] font-bold text-brand-pink uppercase tracking-widest">
                {design.selectedFabricCategory?.name || "Satin"} Swatches
              </span>
              <span className="text-[9px] text-brand-deep/50 font-mono">
                Click a swatch to select
              </span>
            </div>

            <div 
              className="grid grid-cols-2 sm:grid-cols-3 gap-4"
              id="fabric-swatches-grid"
            >
              {swatches.map((swatch) => {
                const isSelected = design.selectedFabric?.id === swatch.id;
                return (
                  <StepCard
                    key={swatch.id}
                    id={swatch.id}
                    title={swatch.name}
                    image={swatch.image}
                    isSelected={isSelected}
                    onClick={() => handleSelectSwatch(swatch)}
                  />
                );
              })}
            </div>
          </div>
        </div>

        {/* RIGHT COLUMN: Fitting & Tailor Form (5 columns) */}
        <div className="lg:col-span-5 flex flex-col gap-6">
          <div className="bg-white border border-brand-border-pink p-6 rounded-3xl shadow-sm space-y-4">
            <div className="border-b border-brand-border-pink/40 pb-3">
              <span className="block text-[10px] font-bold text-brand-pink uppercase tracking-widest">
                Standard Fit Dimensions
              </span>
            </div>

            <div className="grid grid-cols-6 gap-2">
              {['XS', 'S', 'M', 'L', 'XL', 'Custom'].map((sizeOption) => (
                <button
                  key={sizeOption}
                  type="button"
                  onClick={() => handleSizeChange(sizeOption)}
                  className={`py-2 rounded-xl text-xs font-bold transition-all border cursor-pointer ${
                    size === sizeOption
                      ? 'bg-brand-burgundy text-white border-brand-burgundy shadow-sm'
                      : 'bg-brand-cream/35 text-brand-deep border-brand-border-pink hover:border-brand-burgundy/40'
                  }`}
                >
                  {sizeOption}
                </button>
              ))}
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-4 border-t border-brand-border-pink/40">
              <div>
                <label className="block text-[9px] text-brand-deep/70 font-bold mb-1">Height (in)</label>
                <input
                  type="text"
                  placeholder="64"
                  value={height}
                  onChange={(e) => handleMeasurementFieldChange('height', e.target.value)}
                  className="w-full bg-brand-cream/20 border border-brand-border-pink rounded-xl px-2 py-1.5 text-xs text-brand-deep focus:outline-none focus:border-brand-pink text-center"
                />
              </div>
              <div>
                <label className="block text-[9px] text-brand-deep/70 font-bold mb-1">Bust (in)</label>
                <input
                  type="text"
                  placeholder="34"
                  value={bust}
                  onChange={(e) => handleMeasurementFieldChange('bust', e.target.value)}
                  className="w-full bg-brand-cream/20 border border-brand-border-pink rounded-xl px-2 py-1.5 text-xs text-brand-deep focus:outline-none focus:border-brand-pink text-center"
                />
              </div>
              <div>
                <label className="block text-[9px] text-brand-deep/70 font-bold mb-1">Waist (in)</label>
                <input
                  type="text"
                  placeholder="28"
                  value={waist}
                  onChange={(e) => handleMeasurementFieldChange('waist', e.target.value)}
                  className="w-full bg-brand-cream/20 border border-brand-border-pink rounded-xl px-2 py-1.5 text-xs text-brand-deep focus:outline-none focus:border-brand-pink text-center"
                />
              </div>
              <div>
                <label className="block text-[9px] text-brand-deep/70 font-bold mb-1">Hips (in)</label>
                <input
                  type="text"
                  placeholder="38"
                  value={hips}
                  onChange={(e) => handleMeasurementFieldChange('hips', e.target.value)}
                  className="w-full bg-brand-cream/20 border border-brand-border-pink rounded-xl px-2 py-1.5 text-xs text-brand-deep focus:outline-none focus:border-brand-pink text-center"
                />
              </div>
            </div>

            <div className="pt-2">
              <label className="block text-[9px] text-brand-deep/70 font-bold mb-1">Tailor Instructions / Notes</label>
              <textarea
                rows={3}
                placeholder="Add length modifications or design customization requirements..."
                value={notes}
                onChange={(e) => handleMeasurementFieldChange('notes', e.target.value)}
                className="w-full bg-brand-cream/20 border border-brand-border-pink rounded-xl px-3 py-2 text-xs text-brand-deep focus:outline-none focus:border-brand-pink resize-none"
              />
            </div>
          </div>
        </div>

      </div>

      {/* Bottom navigation bar */}
      <div className="flex items-center justify-between pt-8 border-t border-brand-border-pink mt-6">
        <PrimaryButton
          onClick={handleBack}
          variant="outline"
          iconName="arrow-left"
          iconPosition="left"
          id="fabric-back-bottom-btn"
        >
          Back
        </PrimaryButton>
        
        <span className="text-xs text-brand-deep/60 font-sans font-medium hidden sm:inline">
          {design.selectedFabric ? (
            <span>Selected swatch: <strong className="text-brand-burgundy font-bold">{design.selectedFabric.name}</strong></span>
          ) : "Select a fabric color/pattern swatch."}
        </span>

        <PrimaryButton
          onClick={handleNext}
          iconName="arrow-right"
          id="fabric-next-bottom-btn"
        >
          Proceed to Preview
        </PrimaryButton>
      </div>
    </div>
  );
};
