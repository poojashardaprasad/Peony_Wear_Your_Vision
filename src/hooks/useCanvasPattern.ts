import { useState, useEffect } from "react";
import { fabricCache } from "../utils/fabricCache";

/**
 * Custom React hook to safely and instantly load and cache fabric images.
 * Keeps a reactive loading state to trigger re-draws when the image resolves.
 */
export function useCanvasPattern(imageUrl: string | undefined) {
  const [loadedImage, setLoadedImage] = useState<HTMLImageElement | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!imageUrl) {
      setLoadedImage(null);
      setIsLoading(false);
      return;
    }

    setIsLoading(true);
    setError(null);

    // Sync check first
    const cached = fabricCache.get(imageUrl, (loaded) => {
      setLoadedImage(loaded);
      setIsLoading(false);
    });

    if (cached) {
      setLoadedImage(cached);
      setIsLoading(false);
    }
  }, [imageUrl]);

  return { loadedImage, isLoading, error };
}
