import React from "react";

interface AnimationLayerProps {
  isAnimating: boolean;
  activeProvider?: string;
}

/**
 * Component representing the state and options of the visualizer's animation system.
 */
export const AnimationLayer: React.FC<AnimationLayerProps> = ({
  isAnimating,
  activeProvider = "GPU Render",
}) => {
  return (
    <div className="flex items-center justify-between p-4 bg-emerald-50/20 rounded-2xl border border-emerald-100/30">
      <div className="flex flex-col gap-0.5">
        <span className="text-[10px] font-mono font-bold text-emerald-600 uppercase tracking-widest">
          Animation System
        </span>
        <span className="text-xs text-brand-deep/80 font-medium">
          Adaptive Cubic-Easing Crossfade
        </span>
      </div>
      <div className="flex items-center gap-2">
        <span className="text-[10px] font-semibold text-brand-deep/50">
          Engine:
        </span>
        <span className="text-[10px] bg-emerald-100/50 text-emerald-700 px-2 py-0.5 rounded-md font-mono font-bold">
          {isAnimating ? "CROSSFADING" : activeProvider.toUpperCase()}
        </span>
      </div>
    </div>
  );
};

export default AnimationLayer;
