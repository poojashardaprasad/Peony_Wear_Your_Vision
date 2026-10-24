export { homeSteps } from "./steps";
export type { HomeStep } from "./steps";

export { polaroids } from "./polaroids";
export type { PolaroidData } from "./polaroids";

export { faqs } from "./faqs";
export type { FAQData } from "./faqs";

export { stats } from "./stats";
export type { StatData } from "./stats";

export interface FeatureData {
  icon: string;
  title: string;
  text: string;
}

export const deliveryFeatures: FeatureData[] = [
  {
    icon: "pen-tool",
    title: "Stitched to your measurements",
    text: "The latest designs, fresh off Peony. Drag the prints around, they're yours to shuffle.",
  },
  {
    icon: "scissors",
    title: "Designer-chosen fabrics",
    text: "The latest designs, fresh off Peony. Drag the prints around, they're yours to shuffle.",
  },
  {
    icon: "truck",
    title: "Made and delivered to you",
    text: "The latest designs, fresh off Peony. Drag the prints around, they're yours to shuffle.",
  },
];

export const storyHighlights: FeatureData[] = [
  { 
    icon: "star", 
    title: "Unlimited Customization", 
    text: "Create outfits exactly the way you imagine them." 
  },
  { 
    icon: "check-circle", 
    title: "Skilled Tailor Network", 
    text: "Get your design stitched by experienced professionals." 
  },
];

export const footerLinks = {
  top: [
    { label: "How it works", href: "#" },
    { label: "Style guides", href: "#" },
    { label: "Sizing guide", href: "#" },
  ],
  story: { label: "Our story", href: "#" },
  bottom: [
    "Georgette maxi dresses",
    "Satin co-ord sets",
    "Wedding guest outfits",
    "Festive outfits",
  ],
};
