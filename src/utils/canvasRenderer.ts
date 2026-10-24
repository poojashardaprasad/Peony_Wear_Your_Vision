import { GarmentPath } from "./maskLoader";

export interface RenderOptions {
  scale: number; // 0.1 to 3
  rotation: number; // in degrees (0 to 360)
  offsetX: number;
  offsetY: number;
  colorOverlay?: string; // Hex color for blending
  opacity?: number; // 0 to 1 for transitions
  embroideryColor?: string; // Golden, silver threads
  foldIntensity?: number; // Adjust wrinkle depth (0.5 to 1.5)
}

/**
 * Main 2D Canvas Drawing function for custom luxury fabrics.
 */
export function renderGarmentToCanvas(
  ctx: CanvasRenderingContext2D,
  width: number,
  height: number,
  fabricImg: HTMLImageElement | null,
  garment: GarmentPath,
  options: RenderOptions
) {
  const {
    scale = 1.0,
    rotation = 0,
    offsetX = 0,
    offsetY = 0,
    colorOverlay,
    opacity = 1.0,
    embroideryColor = "#d4af37", // Default gold zari
    foldIntensity = 1.0,
  } = options;

  // 1. Clear Canvas with a clean transparent or soft warm-white background
  ctx.clearRect(0, 0, width, height);
  
  ctx.save();
  ctx.globalAlpha = opacity;

  // Draw a subtle soft-drop shadow behind the entire garment for realism
  ctx.shadowColor = "rgba(43, 8, 20, 0.08)";
  ctx.shadowBlur = 24;
  ctx.shadowOffsetX = 0;
  ctx.shadowOffsetY = 12;

  // 2. Create the Path2D clip region for the Outer Silhouette
  const clipPath = new Path2D(garment.path);

  // Fill silhouette with soft background first to prevent empty gaps
  ctx.fillStyle = "#f5f2eb";
  ctx.fill(clipPath);
  ctx.shadowColor = "transparent"; // Reset shadow so it doesn't apply to inner layers

  // 3. Render fabric texture clipped to the garment
  ctx.save();
  ctx.clip(clipPath);

  if (fabricImg) {
    // Create tiled repeating fabric pattern
    const pattern = ctx.createPattern(fabricImg, "repeat");
    if (pattern) {
      ctx.save();
      
      // Use modern DOMMatrix to transform the pattern (scale, rotate, translate)
      const matrix = new DOMMatrix();
      
      // Compute center of garment (approx 200, 280) to rotate around
      const centerX = width / 2;
      const centerY = height / 2;
      
      matrix.translateSelf(centerX + offsetX, centerY + offsetY);
      matrix.rotateSelf(rotation);
      matrix.scaleSelf(scale, scale);
      matrix.translateSelf(-centerX, -centerY);
      
      pattern.setTransform(matrix);
      ctx.fillStyle = pattern;
      ctx.fillRect(0, 0, width, height);
      ctx.restore();
    }
  } else {
    // Solid backup color if image is loading
    ctx.fillStyle = colorOverlay || "#e3dac9";
    ctx.fill(clipPath);
  }

  // 4. Solid color tint overlay (if selected, e.g., to adjust fabric shades)
  if (colorOverlay) {
    ctx.save();
    ctx.globalCompositeOperation = "multiply";
    ctx.fillStyle = colorOverlay;
    ctx.globalAlpha = 0.45 * opacity;
    ctx.fill(clipPath);
    ctx.restore();
  }

  // 5. Apply subtle folds wave distortion overlay (simulated by drawing vertical soft lighting bands)
  ctx.save();
  ctx.globalCompositeOperation = "soft-light";
  const waveGradient = ctx.createLinearGradient(0, 0, width, 0);
  waveGradient.addColorStop(0, "rgba(255, 255, 255, 0.2)");
  waveGradient.addColorStop(0.15, "rgba(0, 0, 0, 0.15)");
  waveGradient.addColorStop(0.3, "rgba(255, 255, 255, 0.25)");
  waveGradient.addColorStop(0.45, "rgba(0, 0, 0, 0.2)");
  waveGradient.addColorStop(0.6, "rgba(255, 255, 255, 0.3)");
  waveGradient.addColorStop(0.75, "rgba(0, 0, 0, 0.15)");
  waveGradient.addColorStop(0.9, "rgba(255, 255, 255, 0.2)");
  waveGradient.addColorStop(1, "rgba(0, 0, 0, 0.1)");
  ctx.fillStyle = waveGradient;
  ctx.fillRect(0, 0, width, height);
  ctx.restore();

  // 6. Draw realistic fold / wrinkle shadows (using 'multiply' composition for depth)
  ctx.save();
  ctx.globalCompositeOperation = "multiply";
  ctx.strokeStyle = "rgba(40, 30, 32, 0.35)";
  ctx.lineWidth = 3.5 * foldIntensity;
  ctx.lineCap = "round";
  ctx.shadowColor = "rgba(40, 30, 32, 0.2)";
  ctx.shadowBlur = 8; // Softens the fold shadow lines

  garment.shadows.forEach((shadowPathStr) => {
    const shadowPath = new Path2D(shadowPathStr);
    ctx.stroke(shadowPath);
  });
  ctx.restore();

  // 7. Draw satin sheen and lighting highlights (using 'overlay' or 'screen' composition)
  ctx.save();
  ctx.globalCompositeOperation = "overlay";
  ctx.strokeStyle = "rgba(255, 255, 255, 0.5)";
  ctx.lineWidth = 5;
  ctx.lineCap = "round";
  ctx.shadowColor = "rgba(255, 255, 255, 0.4)";
  ctx.shadowBlur = 10;

  garment.highlights.forEach((highlightPathStr) => {
    const highlightPath = new Path2D(highlightPathStr);
    ctx.stroke(highlightPath);
  });
  ctx.restore();

  // 8. Draw V-neck, collar/lapel overlay if it exists
  if (garment.collar) {
    ctx.save();
    const collarPath = new Path2D(garment.collar);
    
    // Draw collar with slightly offset shaded tone
    ctx.fillStyle = "rgba(255, 255, 255, 0.08)";
    ctx.fill(collarPath);
    
    ctx.strokeStyle = "rgba(43, 8, 20, 0.25)";
    ctx.lineWidth = 1.5;
    ctx.stroke(collarPath);
    ctx.restore();
  }

  // 9. Draw embroidery overlay (if requested, simulating metallic zari threads)
  // Let's create an elegant floral embroidery border at the hems if selected
  if (options.embroideryColor) {
    ctx.save();
    ctx.shadowColor = "rgba(212, 175, 55, 0.3)";
    ctx.shadowBlur = 2;
    ctx.strokeStyle = embroideryColor;
    ctx.lineWidth = 2;
    // Draw decorative gold scallops near hems (stitching lines are beautiful proxies)
    garment.stitching.forEach((stichLine) => {
      const p = new Path2D(stichLine);
      ctx.stroke(p);
    });
    ctx.restore();
  }

  // 10. Draw delicate sewing stitching lines along margins for couture feel
  ctx.save();
  ctx.strokeStyle = "rgba(255, 255, 255, 0.7)";
  ctx.lineWidth = 1.2;
  ctx.setLineDash([3, 4]); // Dashed stitching thread look
  garment.stitching.forEach((stitchPathStr) => {
    const stitchPath = new Path2D(stitchPathStr);
    ctx.stroke(stitchPath);
  });
  ctx.restore();

  ctx.restore(); // end of clip
  ctx.restore(); // end of global opacity
}

/**
 * Utility to run an animated transition between two renders
 */
export function animateFabricTransition(
  canvas: HTMLCanvasElement,
  prevImg: HTMLImageElement | null,
  currImg: HTMLImageElement | null,
  garment: GarmentPath,
  prevOpts: RenderOptions,
  currOpts: RenderOptions,
  onComplete: () => void
) {
  const ctx = canvas.getContext("2d");
  if (!ctx) return;

  const width = canvas.width;
  const height = canvas.height;
  let progress = 0;
  const duration = 250; // ms
  const startTime = performance.now();

  function tick(now: number) {
    const elapsed = now - startTime;
    progress = Math.min(elapsed / duration, 1.0);

    // Easing: cubic ease-in-out
    const ease = progress < 0.5 
      ? 4 * progress * progress * progress 
      : 1 - Math.pow(-2 * progress + 2, 3) / 2;

    ctx!.clearRect(0, 0, width, height);

    // Draw previous image fading out
    if (prevImg && ease < 1.0) {
      renderGarmentToCanvas(ctx!, width, height, prevImg, garment, {
        ...prevOpts,
        opacity: 1.0 - ease
      });
    }

    // Draw current image fading in with a slight scaling zoom
    const animatedScale = currOpts.scale * (0.95 + 0.05 * ease);
    renderGarmentToCanvas(ctx!, width, height, currImg, garment, {
      ...currOpts,
      scale: animatedScale,
      opacity: ease
    });

    if (progress < 1.0) {
      requestAnimationFrame(tick);
    } else {
      // Draw final state cleanly
      renderGarmentToCanvas(ctx!, width, height, currImg, garment, currOpts);
      onComplete();
    }
  }

  requestAnimationFrame(tick);
}
