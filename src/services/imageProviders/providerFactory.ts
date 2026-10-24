import { ImageProvider } from "./gemini";
import { GeminiProvider } from "./gemini";
import { OpenAIProvider } from "./openai";
import { HuggingFaceProvider } from "./huggingface";
import { CloudflareProvider } from "./cloudflare";
import { ReplicateProvider } from "./replicate";
import { StabilityProvider } from "./stability";

class ProviderFactory {
  private providers: Map<string, ImageProvider> = new Map();
  private defaultProviderId: string = "huggingface";

  constructor() {
    this.registerProvider(new HuggingFaceProvider());
    this.registerProvider(new GeminiProvider());
    this.registerProvider(new OpenAIProvider());
    this.registerProvider(new CloudflareProvider());
    this.registerProvider(new ReplicateProvider());
    this.registerProvider(new StabilityProvider());
  }

  public registerProvider(provider: ImageProvider) {
    this.providers.set(provider.id, provider);
  }

  public getProvider(id: string): ImageProvider {
    const provider = this.providers.get(id);
    if (!provider) {
      console.warn(`Provider ${id} not found. Falling back to Gemini.`);
      return this.providers.get(this.defaultProviderId)!;
    }
    return provider;
  }

  public getAllProviders(): ImageProvider[] {
    return Array.from(this.providers.values());
  }

  public setDefaultProvider(id: string) {
    if (this.providers.has(id)) {
      this.defaultProviderId = id;
    }
  }

  public getDefaultProvider(): ImageProvider {
    return this.getProvider(this.defaultProviderId);
  }
}

export const providerFactory = new ProviderFactory();
