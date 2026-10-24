import { FABRIC_SWATCHES_IMAGES, FABRIC_CATEGORIES_IMAGES } from "../../assets/assets";
import { FabricSwatchData } from "../../context/DesignContext";

export const fabricsByCategoryId: Record<string, FabricSwatchData[]> = {
  satin: [
    { id: "sat-blush", name: "Rose Blush Satin", image: FABRIC_SWATCHES_IMAGES.satin_blush },
    { id: "sat-emerald", name: "Emerald Forest Satin", image: FABRIC_SWATCHES_IMAGES.satin_emerald },
    { id: "sat-navy", name: "Midnight Navy Satin", image: FABRIC_SWATCHES_IMAGES.satin_navy },
    { id: "sat-burgundy", name: "Deep Burgundy Satin", image: FABRIC_SWATCHES_IMAGES.satin_burgundy },
    { id: "sat-gold", name: "Imperial Gold Satin", image: FABRIC_SWATCHES_IMAGES.satin_gold },
    { id: "sat-champagne", name: "Vintage Champagne Satin", image: FABRIC_SWATCHES_IMAGES.satin_champagne },
  ],
  cotton: [
    { id: "cot-dusty-blue", name: "Dusty Blue Floral Block-Print Cotton", image: FABRIC_SWATCHES_IMAGES.cotton_dusty_blue_floral },
    { id: "cot-indigo-trellis", name: "Indigo Trellis Leaf Buta Cotton", image: FABRIC_SWATCHES_IMAGES.cotton_indigo_trellis },
    { id: "cot-lavender-eyelet", name: "Lavender Rose Eyelet Lace Cotton", image: FABRIC_SWATCHES_IMAGES.cotton_lavender_eyelet },
    { id: "cot-blush-embroidery", name: "Ivory & Blush 3D Embroidered Cotton", image: FABRIC_SWATCHES_IMAGES.cotton_blush_embroidery },
    { id: "cot-ditsy-red", name: "Vintage Ditsy Rosebud Mulmul Cotton", image: FABRIC_SWATCHES_IMAGES.cotton_ditsy_red },
    { id: "cot-marigold-zari", name: "Marigold Yellow Zari Chanderi Cotton", image: FABRIC_SWATCHES_IMAGES.cotton_marigold_zari },
  ],
  silk: [
    { id: "slk-crimson", name: "Crimson Velvet Silk", image: FABRIC_SWATCHES_IMAGES.silk_crimson },
    { id: "slk-teal", name: "Persian Teal Silk", image: FABRIC_SWATCHES_IMAGES.silk_teal },
    { id: "slk-ivory", name: "Royal Ivory Silk", image: FABRIC_SWATCHES_IMAGES.silk_ivory },
    { id: "slk-amber", name: "Amber Ochre Silk", image: FABRIC_CATEGORIES_IMAGES.silk },
  ],
  linen: [
    { id: "lin-natural", name: "Natural Ecru Linen", image: FABRIC_CATEGORIES_IMAGES.linen },
    { id: "lin-sand", name: "Sahara Sand Linen", image: FABRIC_CATEGORIES_IMAGES.cotton },
    { id: "lin-olive", name: "Olive Field Linen", image: FABRIC_CATEGORIES_IMAGES.linen },
  ],
  organza: [
    { id: "org-glass", name: "Glass Sheer Organza", image: FABRIC_CATEGORIES_IMAGES.organza },
    { id: "org-pink", name: "Blossom Pink Organza", image: FABRIC_CATEGORIES_IMAGES.organza },
    { id: "org-silver", name: "Silver Mist Organza", image: FABRIC_CATEGORIES_IMAGES.organza },
  ],
  georgette: [
    { id: "geo-lilac", name: "Whisper Lilac Georgette", image: FABRIC_CATEGORIES_IMAGES.georgette },
    { id: "geo-slate", name: "Slate Grey Georgette", image: FABRIC_CATEGORIES_IMAGES.georgette },
    { id: "geo-mint", name: "Mint Breeze Georgette", image: FABRIC_CATEGORIES_IMAGES.georgette },
  ],
  crepe: [
    { id: "crp-plum", name: "Vintage Plum Crepe", image: FABRIC_CATEGORIES_IMAGES.crepe },
    { id: "crp-onyx", name: "Onyx Black Crepe", image: FABRIC_CATEGORIES_IMAGES.crepe },
    { id: "crp-teal", name: "Deep Sea Crepe", image: FABRIC_CATEGORIES_IMAGES.crepe },
  ],
  printed: [
    { id: "prn-paisley", name: "Kashmiri Paisley Print", image: FABRIC_CATEGORIES_IMAGES.printed },
    { id: "prn-abstract", name: "Mod Abstract Satin Print", image: FABRIC_CATEGORIES_IMAGES.printed },
  ],
  floral: [
    { id: "flo-rose", name: "Victorian Rose Floral", image: FABRIC_CATEGORIES_IMAGES.floral },
    { id: "flo-daisy", name: "Summer Daisy Floral", image: FABRIC_CATEGORIES_IMAGES.floral },
    { id: "flo-sakura", name: "Kyoto Sakura Floral", image: FABRIC_CATEGORIES_IMAGES.floral },
  ],
  checks: [
    { id: "chk-gingham", name: "Rustic Gingham Checks", image: FABRIC_CATEGORIES_IMAGES.checks },
    { id: "chk-tartan", name: "Highland Tartan Checks", image: FABRIC_CATEGORIES_IMAGES.checks },
  ],
};

// Fallback list of swatches if category not matched
export const defaultFabrics: FabricSwatchData[] = fabricsByCategoryId.satin;
