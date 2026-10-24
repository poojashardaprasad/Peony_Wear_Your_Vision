import { RefObject, useEffect, useRef } from "react";
import { getGarmentSilhouette } from "../utils/maskLoader";
import { renderGarmentToCanvas, animateFabricTransition, RenderOptions } from "../utils/canvasRenderer";

interface UseFabricRendererProps {
  canvasRef: RefObject<HTMLCanvasElement | null>;
  categoryId: string; // e.g. "maxi-dresses"
  fabricImg: HTMLImageElement | null;
  options: RenderOptions;
}

/**
 * Hook to coordinate the HTML5 Canvas drawing lifecycle and transitions.
 */
export function useFabricRenderer({
  canvasRef,
  categoryId,
  fabricImg,
  options
}: UseFabricRendererProps) {
  const prevFabricImgRef = useRef<HTMLImageElement | null>(null);
  const prevOptionsRef = useRef<RenderOptions>(options);
  const isAnimatingRef = useRef(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const width = canvas.width;
    const height = canvas.height;
    const garment = getGarmentSilhouette(categoryId);

    // If the fabric image has changed and we have a previous fabric image, trigger a cross-fade!
    const fabricChanged = prevFabricImgRef.current && prevFabricImgRef.current !== fabricImg;

    if (fabricChanged && !isAnimatingRef.current && fabricImg && prevFabricImgRef.current) {
      isAnimatingRef.current = true;
      
      animateFabricTransition(
        canvas,
        prevFabricImgRef.current,
        fabricImg,
        garment,
        prevOptionsRef.current,
        options,
        () => {
          isAnimatingRef.current = false;
          prevFabricImgRef.current = fabricImg;
          prevOptionsRef.current = options;
        }
      );
    } else if (!isAnimatingRef.current) {
      // Direct, real-time render for sliders (rotation, scale, offset) which must remain instant
      renderGarmentToCanvas(ctx, width, height, fabricImg, garment, options);
      
      // Update cache references
      if (fabricImg) {
        prevFabricImgRef.current = fabricImg;
      }
      prevOptionsRef.current = options;
    }
  }, [categoryId, fabricImg, options, canvasRef]);
}
