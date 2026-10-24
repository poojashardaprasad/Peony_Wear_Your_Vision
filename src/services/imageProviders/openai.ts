import { ImageProvider, ImageProviderOptions, ImageProviderResult } from "./gemini";

export class OpenAIProvider implements ImageProvider {
  public id = "openai";
  public name = "OpenAI DALL-E 3";

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
        throw new Error(errText || "Failed to generate design with OpenAI");
      }

      const data = await response.json();
      return {
        success: data.success,
        imageUrl: data.imageUrl,
        providerName: this.name,
        message: data.message
      };
    } catch (error: any) {
      console.info("OpenAI generation note:", error?.message || error);
      throw error;
    }
  }
}
