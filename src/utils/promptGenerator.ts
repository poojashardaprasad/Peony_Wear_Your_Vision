import { DesignState } from "../context/DesignContext";

interface PromptOptions {
  embroideryType?: string;
  embroideryColor?: string;
  customNotes?: string;
}

/**
 * Dynamically synthesizes a high-fidelity, couture-focused prompt for fashion illustrations.
 */
export function generateFashionPrompt(design: DesignState, options: PromptOptions = {}): string {
  const gender = design.gender || "Female";
  const category = design.selectedCategory?.name || "bespoke couture garment";
  const silhouette = design.selectedSketch?.title || "fluid tailoring drape";
  const fabricName = design.selectedFabric?.name || "premium heritage cloth";
  const fabricCategory = design.selectedFabricCategory?.name || "luxury boutique weave";
  const embroidery = options.embroideryType && options.embroideryType !== "none"
    ? `adorned with delicate handcrafted ${options.embroideryType} embellishments in premium ${options.embroideryColor || 'gold'} threadwork`
    : "with sleek, clean structural seam lines and minimalist stitching";

  const tailorNotes = options.customNotes 
    ? `, styled with tailored specifications: ${options.customNotes}`
    : "";

  return `Create a premium, realistic fashion illustration of a luxury bespoke ${gender.toLowerCase()} ${category} (${silhouette}). The outfit is expertly tailored from premium ${fabricName} (${fabricCategory}) and is ${embroidery}${tailorNotes}. Draped elegantly on an anonymous, headless mannequin form to highlight the craftsmanship and silhouette. Captured on a solid, pristine warm-white studio backdrop. Ambient, soft-light photography with high-end, realistic textile folds, satin sheen highlights, structural creases, and precise stitching border highlights. High-fashion couture catalog styling, ultra-high detail, 8k resolution.`;
}
