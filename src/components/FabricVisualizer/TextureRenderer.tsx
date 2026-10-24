import React, { useRef, useEffect } from "react";
import { useCanvasPattern } from "../../hooks/useCanvasPattern";

interface TextureRendererProps {
  imageUrl: string | undefined;
  scale?: number;
  rotation?: number;
  className?: string;
}

/**
 * Dedicated tile and weave inspector. Renders a tiled fabric preview inside a swatch circle/box.
 */
export const TextureRenderer: React.FC<TextureRendererProps> = ({
  imageUrl,
  scale = 1.0,
  rotation = 0,
  className = "",
}) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const { loadedImage } = useCanvasPattern(imageUrl);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas || !loadedImage) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const size = canvas.width;
    ctx.clearRect(0, 0, size, size);

    const pattern = ctx.createPattern(loadedImage, "repeat");
    if (pattern) {
      ctx.save();
      const matrix = new DOMMatrix();
      matrix.translateSelf(size / 2, size / 2);
      matrix.rotateSelf(rotation);
      matrix.scaleSelf(scale, scale);
      matrix.translateSelf(-size / 2, -size / 2);
      pattern.setTransform(matrix);
      ctx.fillStyle = pattern;
      ctx.fillRect(0, 0, size, size);
      ctx.restore();
    }
  }, [loadedImage, scale, rotation]);

  return (
    <div 
      className={`relative rounded-2xl overflow-hidden border border-brand-border-pink bg-[#FAF8F5] p-3 flex flex-col items-center gap-2 ${className}`}
      id="texture-swatch-inspector"
    >
      <canvas
        ref={canvasRef}
        width={150}
        height={150}
        className="w-[120px] h-[120px] rounded-full border border-brand-pink/20 shadow-inner"
      />
      <div className="flex flex-col items-center">
        <span className="text-[9px] font-mono uppercase tracking-widest text-brand-pink font-bold">Zoom Swatch</span>
        <span className="text-[10px] text-brand-burgundy/80 font-serif">1:1 Macro Lens</span>
      </div>
    </div>
  );
};

export default TextureRenderer;
