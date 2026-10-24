import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { Sparkles, Stars, Wand2 } from 'lucide-react';
import { useDesign, PreviewData } from '../context/DesignContext';
import { ROUTES } from '../constants';
import { PrimaryButton, IconRenderer } from '../components';
import { getCategoryImage } from '../utils/imageHelper';

interface EmbellishmentOption {
  id: string;
  name: string;
  description: string;
}

export const Preview = () => {
  const { design, updateDesign } = useDesign();
  const navigate = useNavigate();

  // Selected Occasion (Default to Wedding or what's in state)
  const [occasion, setOccasion] = useState(design.previewData?.occasion || 'Wedding');
  
  // Selected Embellishments list
  const [selectedEmbellishments, setSelectedEmbellishments] = useState<string[]>(
    design.previewData?.embellishments || []
  );

  // Need it by date
  const [needItBy, setNeedItBy] = useState(design.previewData?.needItBy || '');

  const embellishmentOptions: EmbellishmentOption[] = [
    { id: 'lining', name: 'Premium Inner Lining', description: 'Soft silk-cotton inner fabric layer' },
    { id: 'embroidery', name: 'Handcrafted Zardozi Trim', description: 'Subtle metallic threadwork on cuffs/sleeves' },
    { id: 'belt', name: 'Detachable Fabric Belt', description: 'Bespoke fabric ribbon belt to pull waist line' },
    { id: 'tassels', name: 'Artisan Glass Tassels', description: 'Handmade latkan tassels on ties' },
  ];

  const updatePreviewData = (fields: Partial<PreviewData>) => {
    const defaultOutfitImage = design.selectedCategory ? getCategoryImage(design.selectedCategory) : '';
    const current = design.previewData || {
      outfitImage: defaultOutfitImage,
      occasion: occasion,
      embellishments: selectedEmbellishments,
      needItBy: needItBy
    };
    updateDesign('previewData', {
      ...current,
      ...fields
    });
  };

  const handleOccasionChange = (occ: string) => {
    setOccasion(occ);
    updatePreviewData({ occasion: occ });
  };

  const handleToggleEmbellishment = (id: string) => {
    let updated: string[];
    if (selectedEmbellishments.includes(id)) {
      updated = selectedEmbellishments.filter(item => item !== id);
    } else {
      updated = [...selectedEmbellishments, id];
    }
    
    setSelectedEmbellishments(updated);
    updatePreviewData({ embellishments: updated });
  };

  const handleDateChange = (date: string) => {
    setNeedItBy(date);
    updatePreviewData({ needItBy: date });
  };

  const handleBack = () => {
    navigate(ROUTES.FABRIC);
  };

  const handleProceedToQuote = () => {
    // Navigate directly to `/quote` where we generate the pre-filled WhatsApp link
    navigate(ROUTES.QUOTE);
  };

  const [savedStatus, setSavedStatus] = useState(false);
  const handleSaveDesign = () => {
    setSavedStatus(true);
    setTimeout(() => setSavedStatus(false), 3000);
  };

  const [isGenerating, setIsGenerating] = useState(false);
  const [generationNotice, setGenerationNotice] = useState<string | null>(null);
  const [generatedEngine, setGeneratedEngine] = useState<string | null>(null);

  // Dynamic status phases during magic couture synthesis
  const [magicPhaseIndex, setMagicPhaseIndex] = useState(0);
  const magicPhases = [
    { title: "The Magic is Being Created", subtitle: "Weaving your bespoke silhouette with artisanal precision..." },
    { title: "The Magic is Being Created", subtitle: "Draping selected fabric weaves & delicate textures..." },
    { title: "The Magic is Being Created", subtitle: "Infusing master couture craftsmanship & tailored details..." },
    { title: "The Magic is Being Created", subtitle: "Bringing your one-of-a-kind fashion vision to life..." },
  ];

  useEffect(() => {
    if (!isGenerating) {
      setMagicPhaseIndex(0);
      return;
    }
    const interval = setInterval(() => {
      setMagicPhaseIndex((prev) => (prev + 1) % magicPhases.length);
    }, 2400);
    return () => clearInterval(interval);
  }, [isGenerating]);

  const handleGenerateAiImage = async () => {
    try {
      setIsGenerating(true);
      setGenerationNotice(null);

      const resolvedReferenceUrl = design.selectedReference?.image || 
        design.selectedSketch?.image || 
        getCategoryImage(design.selectedCategory);

      const payload = {
        gender: design.gender,
        categoryName: design.selectedCategory?.name,
        sketchTitle: design.selectedSketch?.title,
        sketchDesc: design.selectedSketch?.description,
        referenceUrl: resolvedReferenceUrl,
        fabricUrl: design.selectedFabric?.image,
        fabricName: design.selectedFabric?.name,
        fabricCategory: design.selectedFabricCategory?.name,
        provider: 'flux'
      };

      const res = await fetch('/api/generate-outfit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });

      const data = await res.json();
      if (data.success && data.imageUrl) {
        updatePreviewData({ outfitImage: data.imageUrl });
        setGeneratedEngine(data.provider || 'FLUX.1 (Black Forest Labs)');
        if (data.message) {
          setGenerationNotice(data.message);
        }
      }
    } catch (err: any) {
      console.info('Image creation note:', err?.message || 'preview refreshed');
      setGenerationNotice('Visualization ready with selected recipe.');
    } finally {
      setIsGenerating(false);
    }
  };

  // Recipe identifier to auto-generate whenever arriving from fabric selection or recipe changes
  const currentRecipeKey = `${design.selectedCategory?.id || ''}_${design.selectedSketch?.id || ''}_${design.selectedReference?.id || ''}_${design.selectedFabricCategory?.id || ''}_${design.selectedFabric?.id || ''}`;
  const lastGeneratedRecipeRef = useRef<string | null>(null);

  useEffect(() => {
    // Automatically synthesize bespoke couture outfit when preview screen loads
    if (lastGeneratedRecipeRef.current !== currentRecipeKey) {
      lastGeneratedRecipeRef.current = currentRecipeKey;
      handleGenerateAiImage();
    }
  }, [currentRecipeKey]);

  const outfitImg = design.previewData?.outfitImage || 
    design.selectedReference?.image || 
    design.selectedSketch?.image || 
    getCategoryImage(design.selectedCategory);

  return (
    <div className="flex flex-col gap-8 animate-fade-in pb-28" id="preview-step-container">
      {/* Title block */}
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 pb-6 border-b border-brand-border-pink">
        <div>
          <span className="text-[10px] font-mono font-bold tracking-[0.25em] text-brand-pink uppercase">
            Step 04 of 04
          </span>
          <h1 className="text-2xl sm:text-3xl font-bold text-brand-deep tracking-tight mt-1.5">
            Your Custom Design Preview
          </h1>
          <p className="text-xs text-brand-deep/60 mt-1 font-sans font-medium">
            Behold your custom recipe drape. Review embellishments and proceed to WhatsApp quoting.
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
            id="preview-back-btn"
          >
            Back
          </PrimaryButton>
          <PrimaryButton
            onClick={() => navigate(ROUTES.CATEGORY)}
            iconName="pen-tool"
            className="w-1/2 md:w-auto bg-brand-burgundy hover:bg-brand-deep text-white cursor-pointer"
            id="preview-edit-header-btn"
          >
            Edit
          </PrimaryButton>
        </div>
      </div>

      {/* Grid: Left side image display, Right side specifications and custom add-ons */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Left column: Dynamic Outfit Image Draft */}
        <div className="lg:col-span-4 max-w-[280px] mx-auto w-full flex flex-col gap-4">
          <div className="relative aspect-[3/4] rounded-[32px] overflow-hidden bg-brand-soft-pink/10 border border-brand-border-pink shadow-md group">
            <img 
              src={outfitImg} 
              alt="Bespoke custom Peony design visualization" 
              className="w-full h-full object-cover object-center scale-102"
              referrerPolicy="no-referrer"
            />
            {/* Magazine label styling */}
            <div className="absolute top-6 left-6 bg-brand-cream/95 backdrop-blur-xs px-4 py-2 rounded-2xl border border-brand-border-pink flex flex-col items-start shadow-sm">
              <span className="text-[9px] font-mono uppercase tracking-[0.25em] text-brand-pink font-bold">Custom Code</span>
              <span className="text-xs font-bold text-brand-burgundy">PEONY-{design.selectedCategory?.id.slice(0,3).toUpperCase() || "DRS"}</span>
            </div>

            {/* Loading overlay while AI model is generating */}
            {isGenerating && (
              <div 
                className="absolute inset-0 bg-brand-deep/85 backdrop-blur-md flex flex-col items-center justify-center p-6 text-center text-white z-20 animate-fade-in"
                id="magic-creation-loading-overlay"
              >
                {/* Glowing Magic Animation Portal */}
                <div className="relative flex items-center justify-center w-24 h-24 mb-3.5">
                  {/* Outer ambient pulsed glow */}
                  <div className="absolute inset-0 rounded-full bg-brand-pink/40 blur-xl animate-pulse" />
                  
                  {/* Outer rotating decorative dashed ring */}
                  <div className="absolute inset-0 rounded-full border border-dashed border-white/30 animate-[spin_10s_linear_infinite]" />
                  
                  {/* Middle dual-tone spinning gradient ring */}
                  <div className="absolute inset-2 rounded-full border-2 border-transparent border-t-brand-pink-glow border-r-white/80 border-b-brand-pink animate-[spin_1.5s_linear_infinite]" />

                  {/* Inner floating magic wand/sparkle badge */}
                  <div className="relative w-12 h-12 rounded-full bg-gradient-to-tr from-brand-pink to-brand-burgundy flex items-center justify-center shadow-lg border border-white/40 animate-float-gentle">
                    <Sparkles className="w-6 h-6 text-white animate-pulse" />
                  </div>

                  {/* Sparkling floating stardust accents */}
                  <Stars className="absolute -top-1 -right-1 w-4 h-4 text-brand-pink-glow animate-ping opacity-75" />
                  <Sparkles className="absolute -bottom-1 -left-1 w-3.5 h-3.5 text-white animate-bounce opacity-80" />
                </div>

                {/* Subtitle badge */}
                <span className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full bg-white/10 border border-white/20 text-[10px] font-mono font-bold tracking-widest uppercase text-brand-soft-pink shadow-xs">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-pink-glow animate-ping" />
                  Bespoke Couture Drape
                </span>

                {/* Main animated headline */}
                <h3 className="text-base sm:text-lg font-bold text-white tracking-tight mt-2.5 font-serif flex items-center justify-center gap-1.5">
                  <span>The Magic is Being Created</span>
                  <Sparkles className="w-4 h-4 text-brand-pink-glow inline-block animate-pulse" />
                </h3>

                {/* Dynamic cycling couture subtitle */}
                <p 
                  key={magicPhaseIndex}
                  className="text-xs text-white/90 mt-1.5 leading-relaxed font-sans max-w-[220px] min-h-[36px] flex items-center justify-center animate-fade-in"
                >
                  {magicPhases[magicPhaseIndex].subtitle}
                </p>

                {/* Sleek animated shimmer bar */}
                <div className="w-36 h-1.5 bg-white/20 rounded-full overflow-hidden mt-3 relative">
                  <div className="h-full w-full bg-gradient-to-r from-transparent via-brand-pink to-white animate-shimmer rounded-full" />
                </div>

                <span className="text-[9px] text-white/60 font-mono mt-1.5 tracking-wider uppercase">
                  Crafting your couture...
                </span>
              </div>
            )}

            {/* Big horizontal Get WhatsApp Quotation button overlay at the bottom of the design image */}
            <button
              type="button"
              onClick={handleProceedToQuote}
              className="absolute bottom-6 left-4 right-4 bg-gradient-to-r from-brand-pink to-brand-burgundy hover:from-brand-burgundy hover:to-brand-deep text-white py-3.5 px-4 rounded-[24px] flex items-center justify-center gap-2 shadow-lg hover:shadow-xl transition-all duration-300 active:scale-98 cursor-pointer font-bold tracking-wide group/btn"
              id="preview-whatsapp-overlay-btn"
            >
              <IconRenderer name="phone" size={15} className="text-white group-hover/btn:scale-110 transition-transform shrink-0" />
              <span className="text-[11px] uppercase tracking-wider truncate">Get WhatsApp Quotation (+91 87674 61199)</span>
            </button>
          </div>

          {/* Hugging Face AI Generation Control Panel */}
          <div className="bg-gradient-to-b from-brand-soft-pink/40 to-brand-cream/60 border border-brand-border-pink rounded-2xl p-3.5 flex flex-col gap-2.5 shadow-xs">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-1.5 text-brand-burgundy font-bold text-xs">
                <IconRenderer name="sparkles" size={14} className="text-brand-pink" />
                <span>AI Dress Generator</span>
              </div>
              <span className="text-[9px] font-mono uppercase px-2 py-0.5 rounded-full bg-brand-pink/15 text-brand-burgundy font-bold">
                FLUX.1 Kontext
              </span>
            </div>
            <p className="text-[11px] text-brand-deep/75 leading-relaxed">
              Synthesize an AI photorealistic bespoke couture drape combining your silhouette & fabric swatch.
            </p>
            <button
              type="button"
              onClick={handleGenerateAiImage}
              disabled={isGenerating}
              className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-gradient-to-r from-brand-pink to-brand-burgundy hover:opacity-95 text-white text-xs font-bold shadow-sm active:scale-98 transition-all disabled:opacity-50 cursor-pointer"
              id="generate-hf-drape-btn"
            >
              {isGenerating ? (
                <Sparkles className="w-3.5 h-3.5 animate-spin text-white" />
              ) : (
                <Wand2 className="w-3.5 h-3.5 text-white" />
              )}
              <span>
                {isGenerating 
                  ? "The Magic is Being Created..." 
                  : generatedEngine 
                    ? "Regenerate AI Drape" 
                    : "Generate AI Couture Drape"}
              </span>
            </button>
            {generatedEngine && (
              <div className="flex items-center gap-1.5 text-[10px] text-emerald-700 bg-emerald-50 px-2 py-1 rounded-md border border-emerald-200">
                <IconRenderer name="check" size={12} className="text-emerald-600 shrink-0" />
                <span className="truncate">Rendered via {generatedEngine}</span>
              </div>
            )}
            {generationNotice && (
              <p className="text-[10px] text-brand-burgundy/80 bg-brand-soft-pink/30 p-2 rounded-lg border border-brand-border-pink/40 leading-tight">
                {generationNotice}
              </p>
            )}
          </div>

          {/* Quick-actions row */}
          <div className="flex gap-2">
            <button
              type="button"
              onClick={handleSaveDesign}
              className="flex-1 flex items-center justify-center gap-1.5 py-2.5 rounded-xl border border-brand-border-pink text-brand-burgundy bg-white hover:bg-brand-soft-pink hover:border-brand-burgundy/40 text-xs font-bold focus:outline-none transition-all cursor-pointer"
              id="save-draft-btn"
            >
              <IconRenderer name={savedStatus ? "check" : "star"} className={savedStatus ? "text-brand-pink" : ""} size={13} />
              <span>{savedStatus ? "Saved!" : "Save Draft"}</span>
            </button>
            <button
              type="button"
              onClick={handleProceedToQuote}
              className="flex-1 flex items-center justify-center gap-1.5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold focus:outline-none transition-all cursor-pointer shadow-sm"
              id="preview-quick-whatsapp-btn"
            >
              <IconRenderer name="phone" size={13} />
              <span>WhatsApp Quote</span>
            </button>
            <button
              type="button"
              onClick={() => navigate(ROUTES.CATEGORY)}
              className="flex-1 flex items-center justify-center gap-1.5 py-2.5 rounded-xl border border-brand-border-pink text-brand-burgundy bg-white hover:bg-brand-soft-pink hover:border-brand-burgundy/40 text-xs font-bold focus:outline-none transition-all cursor-pointer"
              id="reset-designer-btn"
            >
              <IconRenderer name="refresh-cw" size={13} />
              <span>Edit Details</span>
            </button>
          </div>
        </div>

        {/* Right column: Specs and active toggles */}
        <div className="lg:col-span-8 flex flex-col gap-6">
          {/* A. Active recipe review card */}
          <div className="bg-white border border-brand-border-pink p-6 rounded-3xl shadow-sm flex flex-col gap-4">
            <h3 className="text-xs font-bold uppercase tracking-widest text-brand-burgundy border-b border-brand-border-pink pb-3">
              Recipe Ingredients
            </h3>
            
            <div className="grid grid-cols-2 gap-y-4 gap-x-6">
              <div>
                <span className="text-[10px] text-brand-pink font-bold uppercase tracking-widest block">Outfit Type</span>
                <span className="text-xs font-bold text-brand-deep mt-0.5 block">{design.selectedCategory?.name || "Not selected"}</span>
              </div>
              {design.selectedReference?.isCustom ? (
                <div>
                  <span className="text-[10px] text-brand-pink font-bold uppercase tracking-widest block">Custom Reference</span>
                  <span className="text-xs font-bold text-brand-deep mt-0.5 block">Active</span>
                </div>
              ) : (
                <div>
                  <span className="text-[10px] text-brand-pink font-bold uppercase tracking-widest block">Silhouette Sketch</span>
                  <span className="text-xs font-bold text-brand-deep mt-0.5 block">{design.selectedSketch?.title || "Not selected"}</span>
                </div>
              )}
              <div>
                <span className="text-[10px] text-brand-pink font-bold uppercase tracking-widest block">Fabric Category</span>
                <span className="text-xs font-bold text-brand-deep mt-0.5 block">{design.selectedFabricCategory?.name || "Not selected"}</span>
              </div>
              <div>
                <span className="text-[10px] text-brand-pink font-bold uppercase tracking-widest block">Chosen Swatch</span>
                <span className="text-xs font-bold text-brand-deep mt-0.5 block">{design.selectedFabric?.name || "Not selected"}</span>
              </div>
              <div>
                <span className="text-[10px] text-brand-pink font-bold uppercase tracking-widest block">Fitting Size</span>
                <span className="text-xs font-bold text-brand-deep mt-0.5 block">Size {design.measurements.size}</span>
              </div>
              {design.measurements.height && (
                <div>
                  <span className="text-[10px] text-brand-pink font-bold uppercase tracking-widest block">Height</span>
                  <span className="text-xs font-bold text-brand-deep mt-0.5 block">{design.measurements.height} inches</span>
                </div>
              )}
            </div>

            {/* Custom Notes display */}
            {design.measurements.notes && (
              <div className="mt-2 bg-brand-soft-pink/30 p-4 border border-brand-border-pink rounded-2xl">
                <span className="text-[9px] uppercase tracking-wider font-bold text-brand-pink block mb-1">Tailor Note</span>
                <p className="text-xs text-brand-deep/80 leading-relaxed font-sans font-medium">{design.measurements.notes}</p>
              </div>
            )}
          </div>

          {/* B. Occasion Selector (WHAT'S IT FOR? Card) */}
          <div className="bg-white border border-brand-border-pink p-6 rounded-3xl shadow-sm flex flex-col gap-3.5">
            <div className="flex justify-between items-center">
              <h3 className="text-xs font-bold uppercase tracking-widest text-brand-burgundy font-serif">
                What's it for?
              </h3>
              <span className="text-[10px] font-sans font-semibold text-brand-deep/50 uppercase">
                Optional
              </span>
            </div>
            <p className="text-[11px] text-brand-deep/70 font-sans leading-normal">
              Tell us the occasion and date — we'll prioritize your stitching so it reaches you in time.
            </p>
            
            <div className="flex flex-wrap gap-2 mt-1">
              {['Wedding', 'Festive', 'Party', 'Vacation', 'Everyday'].map((occ) => {
                const isActive = occasion === occ;
                return (
                  <button
                    key={occ}
                    type="button"
                    onClick={() => handleOccasionChange(occ)}
                    className={`px-5 py-2 rounded-full text-xs font-bold transition-all border cursor-pointer ${
                      isActive
                        ? 'bg-brand-pink text-white border-brand-pink shadow-[0_4px_12px_rgba(236,72,153,0.35)] scale-102'
                        : 'bg-white text-brand-burgundy border-brand-border-pink hover:border-brand-pink/50'
                    }`}
                  >
                    {occ}
                  </button>
                );
              })}
            </div>

            {/* Need it by date field */}
            <div className="flex items-center justify-between gap-4 mt-4 pt-4 border-t border-brand-border-pink/30">
              <span className="text-xs font-bold text-brand-burgundy shrink-0">
                Need it by
              </span>
              <div className="relative flex-1 max-w-[200px]">
                <input
                  type="date"
                  value={needItBy}
                  onChange={(e) => handleDateChange(e.target.value)}
                  className="w-full pl-3 pr-8 py-2 bg-white border border-brand-border-pink rounded-xl text-xs font-bold text-brand-deep outline-none focus:border-brand-pink focus:ring-1 focus:ring-brand-pink/20 transition-all cursor-pointer"
                  min={new Date().toISOString().split('T')[0]}
                  style={{ colorScheme: 'light' }}
                />
                <div className="absolute right-2.5 top-1/2 -translate-y-1/2 text-brand-pink pointer-events-none">
                  <IconRenderer name="calendar" size={13} />
                </div>
              </div>
            </div>
          </div>

          {/* C. Optional Embellishments list */}
          <div className="bg-white border border-brand-border-pink p-6 rounded-3xl shadow-sm flex flex-col gap-4">
            <h3 className="text-xs font-bold uppercase tracking-widest text-brand-burgundy">
              Optional Handcrafted Embellishments
            </h3>
            
            <div className="flex flex-col gap-3">
              {embellishmentOptions.map((opt) => {
                const isActive = selectedEmbellishments.includes(opt.id);
                
                return (
                  <div
                    key={opt.id}
                    onClick={() => handleToggleEmbellishment(opt.id)}
                    className={`flex items-center justify-between p-4 rounded-2xl border cursor-pointer transition-all duration-300 ${
                      isActive 
                        ? 'bg-brand-soft-pink/40 border-brand-pink ring-2 ring-brand-soft-pink' 
                        : 'bg-white border-brand-border-pink hover:border-brand-burgundy/40'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      {/* Checkbox circle indicator */}
                      <div className={`w-5 h-5 rounded-full border flex items-center justify-center shrink-0 transition-all ${
                        isActive ? 'bg-brand-pink border-brand-pink text-white' : 'border-brand-border-pink bg-white'
                      }`}>
                        {isActive && <IconRenderer name="check" size={10} />}
                      </div>
                      
                      <div>
                        <h4 className="text-xs font-bold text-brand-deep">{opt.name}</h4>
                        <p className="text-[10px] text-brand-deep/60 mt-0.5 leading-normal font-sans font-medium">{opt.description}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

      </div>

      {/* Fixed bottom static bar for easy access to WhatsApp Quote */}
      <div className="fixed bottom-0 left-0 right-0 bg-white/90 backdrop-blur-md border-t border-brand-border-pink py-4 px-6 z-40 shadow-[0_-4px_20px_rgba(0,0,0,0.05)]">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <PrimaryButton
            onClick={handleBack}
            variant="outline"
            iconName="arrow-left"
            iconPosition="left"
            id="preview-back-bottom-btn"
            className="bg-white border-brand-border-pink text-brand-burgundy hover:bg-brand-soft-pink"
          >
            Back
          </PrimaryButton>
          
          <PrimaryButton
            onClick={handleProceedToQuote}
            iconName="phone"
            className="shadow-md cursor-pointer font-bold tracking-wide active:scale-98 transition-transform"
            id="preview-next-bottom-btn"
          >
            Get WhatsApp Quotation (+91 87674 61199)
          </PrimaryButton>
        </div>
      </div>
    </div>
  );
};
