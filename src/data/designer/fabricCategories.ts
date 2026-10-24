import { FABRIC_CATEGORIES_IMAGES } from "../../assets/assets";
import { FabricCategoryData } from "../../context/DesignContext";

export const fabricCategories: FabricCategoryData[] = [
  { id: "cotton", name: "Cotton", image: FABRIC_CATEGORIES_IMAGES.cotton, swatchCount: 6 },
  { id: "satin", name: "Satin", image: FABRIC_CATEGORIES_IMAGES.satin, swatchCount: 15 },
  { id: "silk", name: "Silk", image: FABRIC_CATEGORIES_IMAGES.silk, swatchCount: 18 },
  { id: "linen", name: "Linen", image: FABRIC_CATEGORIES_IMAGES.linen, swatchCount: 8 },
  { id: "organza", name: "Organza", image: FABRIC_CATEGORIES_IMAGES.organza, swatchCount: 10 },
  { id: "georgette", name: "Georgette", image: FABRIC_CATEGORIES_IMAGES.georgette, swatchCount: 14 },
  { id: "crepe", name: "Crepe", image: FABRIC_CATEGORIES_IMAGES.crepe, swatchCount: 9 },
  { id: "printed", name: "Printed", image: FABRIC_CATEGORIES_IMAGES.printed, swatchCount: 16 },
  { id: "floral", name: "Floral", image: FABRIC_CATEGORIES_IMAGES.floral, swatchCount: 22 },
  { id: "checks", name: "Checks", image: FABRIC_CATEGORIES_IMAGES.checks, swatchCount: 7 }
];
