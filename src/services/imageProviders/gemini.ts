export interface ImageProviderOptions {
  aspectRatio?: string;
  width?: number;
  height?: number;
  negativePrompt?: string;
  category?: string;
  fabricName?: string;
  referenceUrl?: string;
}

export interface ImageProviderResult {
  success: boolean;
  imageUrl: string;
  providerName: string;
  message?: string;
}

export interface ImageProvider {
  id: string;
  name: string;
  generateImage(prompt: string, options?: ImageProviderOptions): Promise<ImageProviderResult>;
}

export class GeminiProvider implements ImageProvider {
  public id = "gemini";
  public name = "Gemini 3.1 Image Generator";

  public async generateImage(prompt: string, options?: ImageProviderOptions): Promise<ImageProviderResult> {
    try {
      const response = await fetch("/api/generate-design", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          provider: this.id,
          prompt,
          options
        }),
      });

      if (!response.ok) {
        const errText = await response.text();
        throw new Error(errText || "Failed to generate design");
      }

      const data = await response.json();
      return {
        success: data.success,
        imageUrl: data.imageUrl,
        providerName: this.name,
        message: data.message
      };
    } catch (error: any) {
      console.info("Gemini AI generation note:", error?.message || error);
      throw error;
    }
  }
}
