import React from "react";
import { getGarmentSilhouette } from "../../utils/maskLoader";

interface ShadowLayerProps {
  categoryId: string;
  foldIntensity?: number;
}

/**
 * Modular component to inspect or overlay fold shadow vectors.
 */
export const ShadowLayer: React.FC<ShadowLayerProps> = ({
  categoryId,
  foldIntensity = 1.0,
}) => {
  const garment = getGarmentSilhouette(categoryId);

  return (
    <div className="flex flex-col gap-1 text-left p-4 bg-brand-soft-pink/10 rounded-2xl border border-brand-border-pink/40">
      <span className="text-[10px] font-mono font-bold text-brand-pink uppercase tracking-widest">
        Crease Shadow Map
      </span>
      <span className="text-xs text-brand-deep/80 font-medium">
        Detected {garment.shadows.length} deep folds & drape creases on {garment.name}.
      </span>
      <div className="flex items-center gap-2 mt-2">
        <span className="text-[9px] bg-brand-burgundy/10 text-brand-burgundy px-2 py-0.5 rounded-md font-mono">
          Composition: Multiply
        </span>
        <span className="text-[9px] bg-brand-pink/10 text-brand-pink px-2 py-0.5 rounded-md font-mono">
          Blur: {(8 * foldIntensity).toFixed(1)}px
        </span>
      </div>
    </div>
  );
};

export default ShadowLayer;
