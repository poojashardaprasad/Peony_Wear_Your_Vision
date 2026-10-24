import React, { useRef } from "react";
import { useCanvasPattern } from "../../hooks/useCanvasPattern";
import { useFabricRenderer } from "../../hooks/useFabricRenderer";
import { RenderOptions } from "../../utils/canvasRenderer";
import { IconRenderer } from "../index";

interface FabricCanvasProps {
  categoryId: string; // e.g. "maxi-dresses"
  fabricUrl: string | undefined;
  scale: number;
  rotation: number;
  offsetX: number;
  offsetY: number;
  colorOverlay?: string;
  embroideryColor?: string;
  foldIntensity?: number;
}

export const FabricCanvas: React.FC<FabricCanvasProps> = ({
  categoryId,
  fabricUrl,
  scale,
  rotation,
  offsetX,
  offsetY,
  colorOverlay,
  embroideryColor,
  foldIntensity = 1.0,
}) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  // Safely load and cache the active fabric image
  const { loadedImage, isLoading, error } = useCanvasPattern(fabricUrl);

  // Options object containing state variables for rendering
  const renderOptions: RenderOptions = React.useMemo(() => ({
    scale,
    rotation,
    offsetX,
    offsetY,
    colorOverlay,
    embroideryColor,
    foldIntensity,
    opacity: 1.0,
  }), [scale, rotation, offsetX, offsetY, colorOverlay, embroideryColor, foldIntensity]);

  // Hook to handle canvas redraws and animated cross-fade transitions
  useFabricRenderer({
    canvasRef,
    categoryId,
    fabricImg: loadedImage,
    options: renderOptions,
  });

  return (
    <div 
      className="relative w-full max-w-[460px] mx-auto bg-white rounded-[32px] border border-brand-border-pink/40 shadow-xl p-8 overflow-hidden transition-all duration-300"
      id="fabric-canvas-container-root"
    >
      {/* Editorial Watermark Label */}
      <div className="absolute top-5 left-5 z-10 flex flex-col pointer-events-none">
        <span className="text-[9px] font-mono uppercase tracking-[0.2em] text-brand-pink font-bold">
          Peony Couture
        </span>
        <span className="text-[11px] font-serif italic text-brand-burgundy">
          Interactive Moodboard
        </span>
      </div>

      {/* 3D Render Status */}
      <div className="absolute top-5 right-5 z-10 pointer-events-none">
        {isLoading ? (
          <div className="flex items-center gap-1.5 px-3 py-1 bg-brand-cream/90 backdrop-blur-xs rounded-full border border-brand-border-pink/50 shadow-xs">
            <span className="w-2 h-2 rounded-full bg-brand-pink animate-ping" />
            <span className="text-[9px] font-mono text-brand-burgundy/80 font-bold uppercase tracking-wider">Loading weave...</span>
          </div>
        ) : (
          <div className="flex items-center gap-1.5 px-3 py-1 bg-emerald-50/90 backdrop-blur-xs rounded-full border border-emerald-100 shadow-xs">
            <span className="w-2 h-2 rounded-full bg-emerald-500" />
            <span className="text-[9px] font-mono text-emerald-700 font-bold uppercase tracking-wider">GPU Drape Active</span>
          </div>
        )}
      </div>

      {/* Main Canvas Container on clean white boutique background */}
      <div className="relative aspect-[3/4] w-full bg-white rounded-2xl flex items-center justify-center overflow-hidden">
        
        {/* Flat-lay accessories placed elegantly around the mannequin garment */}
        
        {/* Luxury Watch (Top-Left Accent) */}
        <div 
          className="absolute top-6 left-2 flex flex-col items-center gap-0.5 opacity-80 hover:opacity-100 transition-opacity pointer-events-none"
          title="Chopard Classic Watch Accent"
        >
          <div className="p-2 bg-[#FAF8F5] border border-brand-border-pink/40 rounded-full shadow-xs text-brand-burgundy/70">
            <IconRenderer name="watch" size={16} />
          </div>
          <span className="text-[8px] font-mono text-brand-pink/60 uppercase scale-90">CHOPARD</span>
        </div>

        {/* Designer Sunglasses (Bottom-Left Accent) */}
        <div 
          className="absolute bottom-6 left-2 flex flex-col items-center gap-0.5 opacity-80 hover:opacity-100 transition-opacity pointer-events-none"
          title="Gucci Sunglasses Accent"
        >
          <div className="p-2 bg-[#FAF8F5] border border-brand-border-pink/40 rounded-xl shadow-xs text-brand-burgundy/70">
            <IconRenderer name="glasses" size={16} />
          </div>
          <span className="text-[8px] font-mono text-brand-pink/60 uppercase scale-90">GUCCI</span>
        </div>

        {/* Niche Perfume Bottle (Top-Right Accent) */}
        <div 
          className="absolute top-10 right-2 flex flex-col items-center gap-0.5 opacity-80 hover:opacity-100 transition-opacity pointer-events-none"
          title="Chanel N°5 Perfume Accent"
        >
          <div className="p-2 bg-[#FAF8F5] border border-brand-border-pink/40 rounded-xl shadow-xs text-brand-burgundy/70">
            <IconRenderer name="flask-conical" size={16} />
          </div>
          <span className="text-[8px] font-mono text-brand-pink/60 uppercase scale-90">CHANEL</span>
        </div>

        {/* Summer Federo Hat (Bottom-Right Accent) */}
        <div 
          className="absolute bottom-10 right-2 flex flex-col items-center gap-0.5 opacity-80 hover:opacity-100 transition-opacity pointer-events-none"
          title="Classic Sun Hat Accent"
        >
          <div className="p-2 bg-[#FAF8F5] border border-brand-border-pink/40 rounded-full shadow-xs text-brand-burgundy/70">
            <IconRenderer name="crown" size={16} />
          </div>
          <span className="text-[8px] font-mono text-brand-pink/60 uppercase scale-90">FEDORA</span>
        </div>

        {/* Dynamic HTML5 Rendering Canvas */}
        <canvas
          ref={canvasRef}
          width={400}
          height={500}
          className="w-full h-full object-contain pointer-events-none z-5"
          id="peony-interactive-rendering-canvas"
        />

        {error && (
          <div className="absolute inset-0 bg-red-50/90 flex flex-col items-center justify-center p-6 text-center z-20">
            <IconRenderer name="alert-circle" size={32} className="text-red-500 mb-2" />
            <h4 className="text-sm font-bold text-red-800">Texture Load Error</h4>
            <p className="text-xs text-red-600/80 mt-1">{error}</p>
          </div>
        )}
      </div>

      {/* Decorative Atelier Scale Tape Measure Line at Bottom */}
      <div className="mt-4 flex items-center justify-between border-t border-dashed border-brand-pink/30 pt-4 px-2 select-none pointer-events-none">
        <span className="text-[8px] font-mono text-brand-pink/60">0cm</span>
        <div className="flex-1 mx-4 flex justify-between text-[7px] font-mono text-brand-pink/30 tracking-tighter">
          <span>|</span><span>|</span><span>|</span><span>|</span><span>5</span>
          <span>|</span><span>|</span><span>|</span><span>|</span><span>10</span>
          <span>|</span><span>|</span><span>|</span><span>|</span><span>15</span>
          <span>|</span><span>|</span><span>|</span><span>|</span><span>20</span>
          <span>|</span><span>|</span><span>|</span><span>|</span><span>25</span>
        </div>
        <span className="text-[8px] font-mono text-brand-pink/60">30cm</span>
      </div>
    </div>
  );
};
