import { HOME_IMAGES } from "../../assets/assets";

export interface HomeStep {
  id: string;
  title: string;
  description: string;
  image: string;
  alt: string;
  variant: "standard" | "gradient";
}

export const homeSteps: HomeStep[] = [
  {
    id: "01",
    title: "Choose your outfit type",
    description: "Maxi, short dress, co-ord set, jumpsuit, top, pant, skirt and more.",
    image: HOME_IMAGES.step1,
    alt: "Fashion model showcasing various outfit types",
    variant: "standard"
  },
  {
    id: "02",
    title: "Choose sketch and reference",
    description: "Pick a hand-drawn silhouette and pin the references that inspire you.",
    image: HOME_IMAGES.step2,
    alt: "Hand-drawn fashion silhouette sketches",
    variant: "standard"
  },
  {
    id: "03",
    title: "Choose your fabric",
    description: "Organza, satin, georgette, chiffon, linen. Feel it before you commit.",
    image: HOME_IMAGES.step3,
    alt: "Macro shot of luxury fabric textures",
    variant: "standard"
  },
  {
    id: "04",
    title: "Preview garment or try on",
    description: "See the finished look as a magazine-style shot, or try it on your photo.",
    image: HOME_IMAGES.step4,
    alt: "Digital preview of a custom dress on a model",
    variant: "gradient"
  },
];
