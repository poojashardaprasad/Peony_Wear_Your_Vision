import React from "react";
import { getGarmentSilhouette } from "../../utils/maskLoader";

interface HighlightLayerProps {
  categoryId: string;
}

/**
 * Modular component to inspect or overlay luster highlight vectors.
 */
export const HighlightLayer: React.FC<HighlightLayerProps> = ({ categoryId }) => {
  const garment = getGarmentSilhouette(categoryId);

  return (
    <div className="flex flex-col gap-1 text-left p-4 bg-yellow-50/20 rounded-2xl border border-yellow-100/50">
      <span className="text-[10px] font-mono font-bold text-amber-600 uppercase tracking-widest">
        Luster Highlight Map
      </span>
      <span className="text-xs text-brand-deep/80 font-medium">
        Active on {garment.highlights.length} high-tension gloss ridges.
      </span>
      <div className="flex items-center gap-2 mt-2">
        <span className="text-[9px] bg-amber-100/40 text-amber-700 px-2 py-0.5 rounded-md font-mono">
          Composition: Overlay
        </span>
        <span className="text-[9px] bg-amber-100/40 text-amber-700 px-2 py-0.5 rounded-md font-mono">
          Blur: 10px
        </span>
      </div>
    </div>
  );
};

export default HighlightLayer;
