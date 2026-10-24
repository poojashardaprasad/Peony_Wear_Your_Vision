import { ImageProvider, ImageProviderOptions, ImageProviderResult } from "./gemini";

export class StabilityProvider implements ImageProvider {
  public id = "stability";
  public name = "Stability AI (Stable Diffusion 3)";

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
        throw new Error(errText || "Failed to generate design with Stability AI");
      }

      const data = await response.json();
      return {
        success: data.success,
        imageUrl: data.imageUrl,
        providerName: this.name,
        message: data.message
      };
    } catch (error: any) {
      console.info("Stability AI generation note:", error?.message || error);
      throw error;
    }
  }
}
