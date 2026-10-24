import React, { useState } from 'react';
import { Outlet, useNavigate, useLocation, Link } from 'react-router-dom';
import { useDesign } from '../../context/DesignContext';
import { ROUTES } from '../../constants';
import { IconRenderer } from '../common/IconRenderer';
import { getCategoryImage } from '../../utils/imageHelper';

interface StepInfo {
  number: number;
  label: string;
  route: string;
  subRoutes: string[];
  icon: string;
}

export const DesignerLayout = () => {
  const { design, updateDesign } = useDesign();
  const navigate = useNavigate();
  const location = useLocation();
  const [showSummaryDrawer, setShowSummaryDrawer] = useState(false);

  // 4 curated steps:
  // Step 1: Outfit Type
  // Step 2: Sketch & Reference (combines Silhouette Sketch & Design References)
  // Step 3: Fabric & Swatch (combines Fabric Type & Fabric Swatch / Fit)
  // Step 4: Custom Preview (final preview & quote)
  const steps: StepInfo[] = [
    { number: 1, label: "Outfit Type", route: ROUTES.CATEGORY, subRoutes: [ROUTES.CATEGORY], icon: "compass" },
    { number: 2, label: "Sketch & Reference", route: ROUTES.SKETCH, subRoutes: [ROUTES.SKETCH, ROUTES.REFERENCE], icon: "pen-tool" },
    { number: 3, label: "Fabric & Swatch", route: ROUTES.FABRIC_CATEGORY, subRoutes: [ROUTES.FABRIC_CATEGORY, ROUTES.FABRIC], icon: "scissors" },
    { number: 4, label: "Custom Preview", route: ROUTES.PREVIEW, subRoutes: [ROUTES.PREVIEW, ROUTES.QUOTE], icon: "sparkles" },
  ];

  // Determine current active step (1 to 4)
  const currentStep = steps.find(step => 
    step.route === location.pathname || (step.subRoutes && step.subRoutes.includes(location.pathname))
  );
  const currentStepNumber = currentStep ? currentStep.number : 1;
  const progressPercent = (currentStepNumber / steps.length) * 100;

  const handleStepClick = (stepRoute: string, stepNum: number) => {
    // If navigating to step 2, intelligently land on sketch or reference based on user state
    let targetRoute = stepRoute;
    if (stepNum === 2) {
      targetRoute = (location.pathname === ROUTES.REFERENCE || (design.selectedSketch && !design.selectedReference)) 
        ? ROUTES.SKETCH 
        : ROUTES.SKETCH;
    } else if (stepNum === 3) {
      targetRoute = (location.pathname === ROUTES.FABRIC || (design.selectedFabricCategory && !design.selectedFabric))
        ? ROUTES.FABRIC_CATEGORY 
        : ROUTES.FABRIC_CATEGORY;
    }

    const canNavigate = stepNum <= currentStepNumber || 
      (stepNum === 2 && design.selectedCategory) ||
      (stepNum === 3 && (design.selectedSketch || design.selectedReference)) ||
      (stepNum === 4 && (design.selectedFabricCategory || design.selectedFabric));

    if (canNavigate) {
      navigate(targetRoute);
    }
  };

  return (
    <div className="bg-brand-cream min-h-[calc(100vh-80px)] flex flex-col">
      {/* Dynamic Stepper Bar */}
      <div className="bg-brand-cream border-b border-brand-border-pink shadow-xs sticky top-20 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5">
          {/* Progress Percent Bar */}
          <div className="w-full bg-brand-border-pink/30 h-1 rounded-full mb-6 overflow-hidden">
            <div 
              className="bg-gradient-to-r from-brand-pink to-brand-burgundy h-full rounded-full transition-all duration-500 ease-out"
              style={{ width: `${progressPercent}%` }}
            />
          </div>

          {/* Stepper Steps Row */}
          <div className="flex items-center justify-between overflow-x-auto scrollbar-none pb-1 md:pb-0 gap-6">
            {steps.map((step) => {
              const isCompleted = step.number < currentStepNumber;
              const isActive = step.number === currentStepNumber;
              
              return (
                <button
                  key={step.number}
                  type="button"
                  onClick={() => handleStepClick(step.route, step.number)}
                  className={`flex items-center gap-3 whitespace-nowrap transition-all duration-300 focus:outline-none ${
                    isActive 
                      ? 'text-brand-burgundy font-bold scale-102' 
                      : isCompleted 
                        ? 'text-brand-pink hover:text-brand-burgundy font-semibold' 
                        : 'text-brand-deep/30 cursor-not-allowed'
                  }`}
                  disabled={step.number > currentStepNumber && 
                    !(step.number === 2 && design.selectedCategory) &&
                    !(step.number === 3 && (design.selectedSketch || design.selectedReference)) &&
                    !(step.number === 4 && (design.selectedFabricCategory || design.selectedFabric))
                  }
                >
                  <span className={`w-8 h-8 rounded-full flex items-center justify-center text-xs border font-bold transition-all ${
                    isActive 
                      ? 'bg-brand-burgundy text-white border-brand-burgundy shadow-sm ring-4 ring-brand-soft-pink' 
                      : isCompleted 
                        ? 'bg-brand-soft-pink text-brand-pink border-brand-border-pink' 
                        : 'bg-white/80 text-brand-deep/30 border-brand-border-pink'
                  }`}>
                    {isCompleted ? <IconRenderer name="check" size={14} /> : step.number}
                  </span>
                  
                  <div className="flex flex-col items-start">
                    <span className="text-[10px] uppercase tracking-widest text-brand-deep/40 font-bold">Step 0{step.number}</span>
                    <span className="text-xs tracking-wide font-medium">{step.label}</span>
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Main Panel Layout */}
      <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-8 flex-grow flex flex-col lg:flex-row gap-8">
        {/* Left Side Column: Steps content */}
        <div className="flex-grow w-full lg:w-3/4">
          <Outlet />
        </div>

        {/* Right Side Column: Design Recipe Live Summary Desk */}
        <div className="hidden lg:block lg:w-1/4">
          <div className="sticky top-44 bg-white border border-brand-border-pink rounded-3xl p-6 shadow-sm flex flex-col gap-6">
            <div className="flex items-center justify-between pb-4 border-b border-brand-border-pink">
              <h3 className="font-sans font-bold text-xs tracking-widest uppercase text-brand-deep">
                Design Recipe
              </h3>
              <span className="text-[9px] font-mono font-bold bg-brand-soft-pink text-brand-burgundy px-2 py-0.5 rounded-full uppercase">
                Active
              </span>
            </div>

            {/* Selected recipe details in 4 steps */}
            <div className="space-y-5">
              {/* Step 1: Outfit Type */}
              <div className="flex items-start gap-3">
                <span className="w-5 h-5 rounded-full bg-brand-soft-pink text-brand-burgundy flex items-center justify-center text-[10px] font-bold font-mono mt-0.5">1</span>
                <div>
                  <h4 className="text-[9px] uppercase tracking-wider text-brand-deep/40 font-bold">Outfit Type</h4>
                  <p className="text-xs font-semibold text-brand-deep mt-0.5">
                    {design.selectedCategory?.name || "Not selected yet"}
                  </p>
                </div>
              </div>

              {/* Step 2: Sketch & Reference */}
              <div className="flex items-start gap-3">
                <span className="w-5 h-5 rounded-full bg-brand-soft-pink text-brand-burgundy flex items-center justify-center text-[10px] font-bold font-mono mt-0.5">2</span>
                <div>
                  <h4 className="text-[9px] uppercase tracking-wider text-brand-deep/40 font-bold">Sketch & Reference</h4>
                  <p className="text-xs font-semibold text-brand-deep mt-0.5">
                    {design.selectedSketch?.title || (design.selectedReference?.isCustom ? "Custom Reference" : "Not selected yet")}
                  </p>
                  {design.selectedReference && (
                    <p className="text-[10px] text-brand-deep/50 mt-0.5">
                      {design.selectedReference.isCustom ? "• Custom Reference Uploaded" : "• Moodboard Reference Selected"}
                    </p>
                  )}
                </div>
              </div>

              {/* Step 3: Fabric & Swatch */}
              <div className="flex items-start gap-3">
                <span className="w-5 h-5 rounded-full bg-brand-soft-pink text-brand-burgundy flex items-center justify-center text-[10px] font-bold font-mono mt-0.5">3</span>
                <div>
                  <h4 className="text-[9px] uppercase tracking-wider text-brand-deep/40 font-bold">Fabric & Swatch</h4>
                  <p className="text-xs font-semibold text-brand-deep mt-0.5">
                    {design.selectedFabric ? (
                      <span>
                        {design.selectedFabric.name} 
                        <span className="text-brand-deep/50 font-normal"> ({design.selectedFabricCategory?.name})</span>
                      </span>
                    ) : design.selectedFabricCategory ? (
                      <span>Class: {design.selectedFabricCategory.name}</span>
                    ) : "Not selected yet"}
                  </p>
                  {design.measurements.size && (
                    <p className="text-[10px] text-brand-deep/50 mt-0.5">
                      • Fit: Size {design.measurements.size}
                    </p>
                  )}
                </div>
              </div>

              {/* Step 4: Custom Preview */}
              <div className="flex items-start gap-3">
                <span className="w-5 h-5 rounded-full bg-brand-soft-pink text-brand-burgundy flex items-center justify-center text-[10px] font-bold font-mono mt-0.5">4</span>
                <div>
                  <h4 className="text-[9px] uppercase tracking-wider text-brand-deep/40 font-bold">Custom Preview</h4>
                  <p className="text-xs font-semibold text-brand-deep mt-0.5">
                    {design.previewData?.outfitImage ? "AI Drape Ready" : "Pending Preview"}
                  </p>
                </div>
              </div>
            </div>

            {/* Small active preview card if categories exist */}
            {design.selectedCategory && (
              <div className="mt-2 border border-brand-border-pink p-2.5 rounded-2xl bg-brand-soft-pink/30 flex items-center gap-3">
                <img 
                  src={design.selectedReference?.isCustom ? design.selectedReference.image : getCategoryImage(design.selectedCategory)} 
                  alt={design.selectedCategory.name} 
                  className="w-12 h-12 rounded-xl object-cover object-center border border-brand-border-pink"
                  referrerPolicy="no-referrer"
                />
                <div>
                  <h5 className="text-[11px] font-bold text-brand-deep leading-tight">Your Canvas</h5>
                  <span className="text-[9px] text-brand-pink uppercase tracking-widest font-bold">{design.selectedCategory.name}</span>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Floating Elements in the Bottom-Right Corner */}
      <div className="fixed bottom-6 right-6 md:bottom-8 md:right-8 z-50 flex items-center">
        {/* Floating Summary Drawer Toggle (i) for Mobile screens */}
        <button
          type="button"
          onClick={() => setShowSummaryDrawer(!showSummaryDrawer)}
          className="lg:hidden flex items-center justify-center w-12 h-12 bg-gradient-to-r from-brand-pink to-brand-burgundy hover:from-brand-burgundy hover:to-brand-deep text-white rounded-full shadow-2xl hover:shadow-xl hover:scale-105 active:scale-95 focus:outline-none relative z-20"
          aria-label="View Recipe Summary"
          id="mobile-recipe-drawer-toggle"
        >
          <IconRenderer name={showSummaryDrawer ? "x" : "info"} size={20} />
        </button>

        {showSummaryDrawer && (
          <div className="fixed inset-0 bg-black/40 backdrop-blur-xs flex items-end justify-center z-40 p-4" onClick={() => setShowSummaryDrawer(false)}>
            <div 
              className="bg-brand-cream border border-brand-border-pink rounded-3xl p-6 w-full max-w-sm shadow-2xl flex flex-col gap-5 animate-slide-up"
              onClick={e => e.stopPropagation()}
            >
              <div className="flex items-center justify-between pb-3 border-b border-brand-border-pink">
                <h3 className="font-sans font-bold text-xs tracking-widest uppercase text-brand-deep">
                  Your Recipe Recipe
                </h3>
                <button type="button" onClick={() => setShowSummaryDrawer(false)} className="text-brand-burgundy hover:text-brand-pink">
                  <IconRenderer name="x" size={16} />
                </button>
              </div>

              <div className="space-y-4 max-h-[60vh] overflow-y-auto pr-1">
                <div className="flex justify-between items-center text-xs">
                  <span className="text-brand-deep/50 font-semibold">1. Outfit Type:</span>
                  <span className="font-bold text-brand-deep">{design.selectedCategory?.name || "Not selected"}</span>
                </div>
                <div className="flex justify-between items-center text-xs">
                  <span className="text-brand-deep/50 font-semibold">2. Sketch & Ref:</span>
                  <span className="font-bold text-brand-deep">
                    {design.selectedSketch?.title || (design.selectedReference ? "Reference Selected" : "Not selected")}
                  </span>
                </div>
                <div className="flex justify-between items-center text-xs">
                  <span className="text-brand-deep/50 font-semibold">3. Fabric & Fit:</span>
                  <span className="font-bold text-brand-deep">
                    {design.selectedFabric ? `${design.selectedFabric.name} (Size ${design.measurements.size})` : "Not selected"}
                  </span>
                </div>
                <div className="flex justify-between items-center text-xs">
                  <span className="text-brand-deep/50 font-semibold">4. Custom Preview:</span>
                  <span className="font-bold text-brand-deep">
                    {design.previewData?.outfitImage ? "Drape Ready" : "Pending Preview"}
                  </span>
                </div>
              </div>

              <button
                type="button"
                onClick={() => setShowSummaryDrawer(false)}
                className="w-full py-2.5 text-xs font-bold uppercase tracking-widest bg-brand-burgundy hover:bg-brand-deep text-white rounded-xl text-center transition-colors"
              >
                Close Summary
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
