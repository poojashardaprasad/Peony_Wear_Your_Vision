import { ImageProvider, ImageProviderOptions, ImageProviderResult } from "./gemini";

export class CloudflareProvider implements ImageProvider {
  public id = "cloudflare";
  public name = "Cloudflare Workers AI";

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
        throw new Error(errText || "Failed to generate design with Cloudflare");
      }

      const data = await response.json();
      return {
        success: data.success,
        imageUrl: data.imageUrl,
        providerName: this.name,
        message: data.message
      };
    } catch (error: any) {
      console.info("Cloudflare generation note:", error?.message || error);
      throw error;
    }
  }
}
