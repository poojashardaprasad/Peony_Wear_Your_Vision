import { CATEGORIES_IMAGES } from "../../assets/assets";
import { CategoryData } from "../../context/DesignContext";

export const categories: CategoryData[] = [
  { 
    id: "maxi-dresses", 
    name: "Maxi Dresses", 
    bestseller: true, 
    images: [
      CATEGORIES_IMAGES.maxi1
    ],
    gender: "Female"
  },
  { 
    id: "short-dresses", 
    name: "Short Dresses", 
    images: [CATEGORIES_IMAGES.short1],
    gender: "Female"
  },
  { 
    id: "coord-sets", 
    name: "Co-ord Sets", 
    bestseller: true,
    images: [CATEGORIES_IMAGES.coord1, CATEGORIES_IMAGES.coord2, CATEGORIES_IMAGES.coord3, CATEGORIES_IMAGES.coord4],
    gender: "Female"
  },
  { 
    id: "jumpsuits", 
    name: "Jumpsuits", 
    images: [CATEGORIES_IMAGES.jumpsuit1, CATEGORIES_IMAGES.jumpsuit2, CATEGORIES_IMAGES.jumpsuit3, CATEGORIES_IMAGES.jumpsuit4],
    gender: "Female"
  },
  { 
    id: "skirts", 
    name: "Skirts", 
    images: [
      CATEGORIES_IMAGES.skirt1, 
      CATEGORIES_IMAGES.skirt2, 
      CATEGORIES_IMAGES.skirt3, 
      CATEGORIES_IMAGES.skirt4,
      CATEGORIES_IMAGES.skirt5
    ],
    gender: "Female"
  },
  { 
    id: "tops", 
    name: "Tops", 
    images: [CATEGORIES_IMAGES.tops1, CATEGORIES_IMAGES.tops2, CATEGORIES_IMAGES.tops3, CATEGORIES_IMAGES.tops4],
    gender: "Female"
  },
  { 
    id: "pants", 
    name: "Pants", 
    images: [
      CATEGORIES_IMAGES.pants1, 
      CATEGORIES_IMAGES.pants2, 
      CATEGORIES_IMAGES.pants3, 
      CATEGORIES_IMAGES.pants4,
      CATEGORIES_IMAGES.pants5,
      CATEGORIES_IMAGES.pants6,
      CATEGORIES_IMAGES.pants7
    ],
    gender: "Female"
  },
  { 
    id: "shorts", 
    name: "Shorts", 
    images: [CATEGORIES_IMAGES.shorts1, CATEGORIES_IMAGES.shorts2, CATEGORIES_IMAGES.shorts3, CATEGORIES_IMAGES.shorts4],
    gender: "Female"
  },
  
  // Male Outfit Categories
  {
    id: "male-shirts",
    name: "Casual & Dress Shirts",
    bestseller: true,
    images: [
      "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=500&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1620012253295-c05518e993be?w=500&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1588359348347-9bc6cbaa689f?w=500&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1603252109303-2751441dd157?w=500&auto=format&fit=crop&q=80"
    ],
    gender: "Male"
  },
  {
    id: "male-pants",
    name: "Chinos & Trousers",
    images: [
      "https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?w=500&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?w=500&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=500&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1621434546033-4400ef93d4ff?w=500&auto=format&fit=crop&q=80"
    ],
    gender: "Male"
  },
  {
    id: "male-blazers",
    name: "Blazers & Sport Coats",
    images: [
      "https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=500&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1593030103066-0093718efeb9?w=500&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1617137968427-85924c800a22?w=500&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1598802585573-8f8f29215f13?w=500&auto=format&fit=crop&q=80"
    ],
    gender: "Male"
  },
  {
    id: "male-suits",
    name: "Tailored Suits & Tuxedos",
    bestseller: true,
    images: [
      "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=500&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=500&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1598808503742-dd34ab0ccf4b?w=500&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1618886614638-80e3c103d31a?w=500&auto=format&fit=crop&q=80"
    ],
    gender: "Male"
  },
  {
    id: "male-shorts",
    name: "Tailored Shorts",
    images: [
      "https://images.unsplash.com/photo-1519242220831-09410926fbff?w=500&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1591195853828-11db59a44f6b?w=500&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1604176354204-9268737828e4?w=500&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=500&auto=format&fit=crop&q=80"
    ],
    gender: "Male"
  }
];
