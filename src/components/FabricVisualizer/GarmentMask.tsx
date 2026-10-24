import React from "react";
import { getGarmentSilhouette } from "../../utils/maskLoader";

interface GarmentMaskProps {
  categoryId: string;
  width?: number;
  height?: number;
  className?: string;
}

/**
 * Modular component to render the raw vector SVG silhouette representation.
 * Can be used for loading indications or inline thumbnail overlays.
 */
export const GarmentMask: React.FC<GarmentMaskProps> = ({
  categoryId,
  width = 400,
  height = 500,
  className = "",
}) => {
  const garment = getGarmentSilhouette(categoryId);

  return (
    <svg
      viewBox={`0 0 ${width} ${height}`}
      className={`w-full h-full text-brand-burgundy/10 fill-current ${className}`}
      xmlns="http://www.w3.org/2000/svg"
      id={`garment-vector-mask-${categoryId}`}
    >
      {/* Outer Silhouette Clip Path */}
      <path d={garment.path} />
      
      {/* Structural Seam Lines */}
      {garment.stitching.map((pathStr, idx) => (
        <path
          key={`stitch-${idx}`}
          d={pathStr}
          stroke="rgba(0,0,0,0.15)"
          strokeDasharray="2, 4"
          strokeWidth="1.2"
          fill="none"
        />
      ))}
      
      {/* Collar Lapel Details */}
      {garment.collar && (
        <path
          d={garment.collar}
          stroke="rgba(0,0,0,0.25)"
          strokeWidth="1"
          fill="none"
        />
      )}
    </svg>
  );
};

export default GarmentMask;
