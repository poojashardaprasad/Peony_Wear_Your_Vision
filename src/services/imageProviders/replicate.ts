import { ImageProvider, ImageProviderOptions, ImageProviderResult } from "./gemini";

export class ReplicateProvider implements ImageProvider {
  public id = "replicate";
  public name = "Replicate SD/Flux API";

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
        throw new Error(errText || "Failed to generate design with Replicate");
      }

      const data = await response.json();
      return {
        success: data.success,
        imageUrl: data.imageUrl,
        providerName: this.name,
        message: data.message
      };
    } catch (error: any) {
      console.info("Replicate generation note:", error?.message || error);
      throw error;
    }
  }
}
