// In-memory cache for fabric images, masks, and overlay textures to prevent flickering and guarantee <100ms renders.

type ImageLoadCallback = (img: HTMLImageElement) => void;

class ImageCache {
  private cache: Map<string, HTMLImageElement> = new Map();
  private loadingPromises: Map<string, Promise<HTMLImageElement>> = new Map();

  /**
   * Load an image from a URL and cache it.
   * Returns a promise resolving to the HTMLImageElement.
   */
  public loadImage(url: string): Promise<HTMLImageElement> {
    if (this.cache.has(url)) {
      return Promise.resolve(this.cache.get(url)!);
    }

    if (this.loadingPromises.has(url)) {
      return this.loadingPromises.get(url)!;
    }

    const promise = new Promise<HTMLImageElement>((resolve, reject) => {
      const img = new Image();
      img.crossOrigin = "anonymous"; // Enable CORS for canvas manipulation
      
      img.onload = () => {
        this.cache.set(url, img);
        this.loadingPromises.delete(url);
        resolve(img);
      };

      img.onerror = (err) => {
        this.loadingPromises.delete(url);
        reject(new Error(`Failed to load image from URL: ${url}`));
      };

      img.src = url;
    });

    this.loadingPromises.set(url, promise);
    return promise;
  }

  /**
   * Sync get image from cache. If not loaded, returns null but triggers load in background.
   */
  public get(url: string, onLoad?: ImageLoadCallback): HTMLImageElement | null {
    const img = this.cache.get(url);
    if (img) {
      return img;
    }
    
    // Trigger background load
    this.loadImage(url).then((loadedImg) => {
      if (onLoad) onLoad(loadedImg);
    }).catch(err => {
      console.warn("FabricCache silent loading failed:", err);
    });

    return null;
  }

  /**
   * Clear all cached images
   */
  public clear() {
    this.cache.clear();
    this.loadingPromises.clear();
  }
}

export const fabricCache = new ImageCache();
