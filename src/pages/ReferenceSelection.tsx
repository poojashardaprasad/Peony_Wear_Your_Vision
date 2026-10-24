import React, { useEffect } from 'react';
import { useNavigate, useSearchParams, useParams } from 'react-router-dom';
import { useDesign, ReferenceData } from '../context/DesignContext';
import { getReferencesForSketch, sketches } from '../data/designer';
import { ROUTES } from '../constants';
import { PrimaryButton, IconRenderer } from '../components';

export const ReferenceSelection = () => {
  const { design, updateDesign } = useDesign();
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const params = useParams<{ sketchId?: string }>();

  // Determine sketch ID from query param (?sketchId=...) or path param (/reference/:sketchId) or context
  const targetSketchId = searchParams.get('sketchId') || params.sketchId || design.selectedSketch?.id || '';

  // Find matching sketch object if targetSketchId is present (default to first sketch sk-maxi-1 if none)
  const resolvedSketch = sketches.find((s) => s.id === targetSketchId) || design.selectedSketch || sketches[0];

  // Sync design context if URL specifies a different sketch or no sketch was set
  useEffect(() => {
    if (resolvedSketch && resolvedSketch.id !== design.selectedSketch?.id) {
      updateDesign('selectedSketch', resolvedSketch);
    }
  }, [resolvedSketch, design.selectedSketch?.id, updateDesign]);

  const effectiveSketchId = resolvedSketch?.id || targetSketchId || 'sk-maxi-1';
  const currentReferences = getReferencesForSketch(effectiveSketchId);

  const handleSelectReference = (refData: ReferenceData) => {
    updateDesign('selectedReference', refData);
    navigate(ROUTES.FABRIC_CATEGORY);
  };

  const handleBack = () => {
    navigate(ROUTES.SKETCH);
  };

  const handleNext = () => {
    navigate(ROUTES.FABRIC_CATEGORY);
  };

  return (
    <div className="flex flex-col gap-8 animate-fade-in" id="reference-step-container">
      {/* Title block */}
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 pb-6 border-b border-brand-border-pink">
        <div>
          <span className="text-[10px] font-mono font-bold tracking-[0.25em] text-brand-pink uppercase">
            Step 02 of 04
          </span>
          <h1 className="text-2xl sm:text-3xl font-bold text-brand-deep tracking-tight mt-1.5">
            Reference Moodboard
          </h1>
          {resolvedSketch ? (
            <p className="text-xs text-brand-burgundy mt-1 font-sans font-semibold flex items-center gap-2">
              <span className="inline-block w-2 h-2 rounded-full bg-brand-pink animate-pulse" />
              <span>Curated Reference Images for Sketch: <strong className="text-brand-deep underline">{resolvedSketch.title}</strong></span>
            </p>
          ) : (
            <p className="text-xs text-brand-deep/60 mt-1 font-sans font-medium">
              Upload your own dress references, or select from our curated Pinterest-style moodboard.
            </p>
          )}
        </div>

        {/* Action Controls */}
        <div className="flex items-center gap-3 w-full md:w-auto self-stretch md:self-auto shrink-0">
          <PrimaryButton
            onClick={handleBack}
            variant="outline"
            iconName="arrow-left"
            iconPosition="left"
            className="w-full md:w-auto"
            id="reference-back-btn"
          >
            Back
          </PrimaryButton>
        </div>
      </div>

      {/* Grid: Left side upload panel (if custom ref active), Right side Curated Pinterest board */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Upload Column (Left - 4 columns) - Only if custom reference is active */}
        {design.selectedReference && design.selectedReference.isCustom && (
          <div className="lg:col-span-4 flex flex-col gap-6">
            <h3 className="text-xs font-bold uppercase tracking-widest text-brand-burgundy">
              Your Uploaded Reference
            </h3>

            <div className="bg-white border border-brand-border-pink rounded-3xl p-6 flex flex-col gap-4 shadow-sm">
              <div className="aspect-[3/4] w-full rounded-2xl overflow-hidden border border-brand-border-pink relative group">
                <img 
                  src={design.selectedReference.image} 
                  alt="Active custom design reference" 
                  className="w-full h-full object-cover object-center group-hover:scale-102 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                  onError={(e) => {
                    e.currentTarget.onerror = null;
                    e.currentTarget.src = "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=600&auto=format&fit=crop&q=80";
                  }}
                />
                <div className="absolute bottom-3 left-3 bg-brand-burgundy/80 backdrop-blur-xs px-3 py-1.5 rounded-xl text-[10px] text-white font-mono font-bold flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  <span>CUSTOM REFERENCE ACTIVE</span>
                </div>
              </div>
              <div>
                <h5 className="text-xs font-bold text-brand-burgundy uppercase tracking-wider">Bespoke Design Pin</h5>
                <p className="text-[11px] text-brand-deep/60 mt-1 leading-relaxed font-sans font-medium">
                  Your uploaded style reference is active and will guide the personalization of your final outfit draping.
                </p>
                <button
                  type="button"
                  onClick={() => updateDesign('selectedReference', null)}
                  className="text-xs text-red-500 hover:text-red-700 font-bold mt-3 focus:outline-none cursor-pointer flex items-center gap-1.5 transition-colors"
                >
                  <IconRenderer name="trash-2" size={12} />
                  <span>Remove Custom Upload</span>
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Pinterest Masonry Gallery Column (Right - 8 columns if custom active, otherwise full 12 columns) */}
        <div className={design.selectedReference && design.selectedReference.isCustom ? "lg:col-span-8 flex flex-col gap-6" : "lg:col-span-12 flex flex-col gap-6"}>
          <h3 className="text-xs font-bold uppercase tracking-widest text-brand-burgundy">
            Curated Inspiration Moodboard
          </h3>

          <div 
            className="columns-2 sm:columns-3 gap-4 space-y-4"
            id="pinterest-reference-masonry"
          >
            {currentReferences.map((ref) => {
              const isSelected = design.selectedReference?.id === ref.id;
              
              return (
                <div
                  key={ref.id}
                  onClick={() => handleSelectReference(ref)}
                  className={`break-inside-avoid relative overflow-hidden rounded-2xl border cursor-pointer group transition-all duration-300 ${
                    isSelected 
                      ? 'border-brand-pink ring-4 ring-brand-soft-pink scale-99' 
                      : 'border-brand-border-pink hover:border-brand-burgundy/40'
                  }`}
                >
                  <img
                    src={ref.image}
                    alt="Pinterest curated visual inspiration reference"
                    className="w-full object-cover rounded-2xl transition-transform duration-500 group-hover:scale-103"
                    referrerPolicy="no-referrer"
                    onError={(e) => {
                      e.currentTarget.onerror = null;
                      e.currentTarget.src = "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=600&auto=format&fit=crop&q=80";
                    }}
                  />
                  {isSelected && (
                    <div className="absolute top-3 right-3 bg-brand-pink text-white w-6 h-6 rounded-full flex items-center justify-center shadow-lg border border-white">
                      <IconRenderer name="check" size={12} />
                    </div>
                  )}
                  {/* Subtle hover gradient */}
                  <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl" />
                </div>
              );
            })}
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
          id="reference-back-bottom-btn"
        >
          Back
        </PrimaryButton>
        
        <span className="text-xs text-brand-deep/60 font-sans font-medium hidden sm:inline">
          {design.selectedReference ? (
            <span>Reference status: <strong className="text-brand-pink font-bold">Active Selection</strong></span>
          ) : "Upload your references or select one above."}
        </span>

        <PrimaryButton
          onClick={handleNext}
          iconName="arrow-right"
          variant={design.selectedReference ? "solid" : "outline"}
          id="reference-next-bottom-btn"
          className={design.selectedReference ? "bg-brand-burgundy hover:bg-brand-deep text-white cursor-pointer" : "text-brand-burgundy border-brand-border-pink hover:border-brand-pink/50 cursor-pointer"}
        >
          {design.selectedReference ? "Proceed to Fabric Selection" : "Skip to Fabric Selection"}
        </PrimaryButton>
      </div>
    </div>
  );
};
