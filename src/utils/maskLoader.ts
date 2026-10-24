// Procedural vector silhouettes for garment types.
// These paths use SVG path syntax and can be drawn on canvas using new Path2D(pathString).
// Each path is designed to fit elegantly inside a standard 400x500 viewport (centered and scaled).

export interface GarmentPath {
  id: string;
  name: string;
  path: string; // Outer silhouette path for clipping
  shadows: string[]; // Path strings for individual fold/wrinkle crease shadows
  highlights: string[]; // Path strings for satin sheen highlights
  stitching: string[]; // Path strings for decorative dashed seam lines
  collar?: string; // Optional path for collar/lapel overlay
}

export const GARMENT_SILHOUETTES: Record<string, GarmentPath> = {
  "maxi-dresses": {
    id: "maxi-dresses",
    name: "Maxi Dress",
    // Flowing elegant full-length maxi gown with cinched waist
    path: "M 160 80 Q 200 65 240 80 L 255 130 Q 225 155 200 160 Q 175 155 145 130 Z M 145 130 Q 200 150 255 130 L 285 220 L 220 225 L 235 320 L 320 480 L 80 480 L 165 320 L 180 225 L 115 220 Z",
    shadows: [
      "M 145 130 Q 175 145 200 148 Q 225 145 255 130", // waist crease
      "M 165 320 Q 200 350 235 320", // knee fold
      "M 100 480 Q 150 420 180 320", // left skirt flow
      "M 300 480 Q 250 420 220 320", // right skirt flow
      "M 200 160 Q 200 320 200 480"  // center drape fold
    ],
    highlights: [
      "M 160 80 Q 180 110 200 160", // upper left breast sheen
      "M 240 80 Q 220 110 200 160", // upper right breast sheen
      "M 120 450 Q 160 380 180 320", // skirt light gleam
      "M 280 450 Q 240 380 220 320"  // skirt right light gleam
    ],
    stitching: [
      "M 160 80 L 240 80", // V-neckline border
      "M 82 476 L 318 476"  // bottom hemline
    ]
  },
  "short-dresses": {
    id: "short-dresses",
    name: "Short A-Line Dress",
    // Modern elegant knee-length short dress
    path: "M 150 90 L 250 90 L 275 150 L 230 155 L 255 230 L 290 380 L 110 380 L 145 230 L 170 155 L 125 150 Z",
    shadows: [
      "M 170 155 Q 200 165 230 155", // waist seam
      "M 145 230 Q 200 240 255 230", // hip gather
      "M 130 380 Q 170 300 180 230", // drape shadow left
      "M 270 380 Q 230 300 220 230"  // drape shadow right
    ],
    highlights: [
      "M 155 95 L 175 150",
      "M 245 95 L 225 150",
      "M 160 370 Q 200 320 200 230"
    ],
    stitching: [
      "M 150 90 Q 200 110 250 90", // neck detail
      "M 112 376 L 288 376" // bottom hem
    ]
  },
  "coord-sets": {
    id: "coord-sets",
    name: "Co-ord Set",
    // Two piece top and elegant high waist pants matching set
    path: "M 150 80 Q 200 70 250 80 L 265 140 L 215 145 L 225 180 L 175 180 L 185 145 L 135 140 Z M 160 190 H 240 L 255 320 L 270 480 L 215 480 L 200 310 L 185 480 L 130 480 L 145 320 Z",
    shadows: [
      "M 135 140 Q 200 155 265 140", // crop top hem line shadow
      "M 160 190 Q 200 198 240 190", // high waist band crease
      "M 200 310 L 200 480", // crotch line join
      "M 145 320 Q 170 350 170 480", // left pant fold
      "M 255 320 Q 230 350 230 480"  // right pant fold
    ],
    highlights: [
      "M 180 85 L 195 140",
      "M 220 85 L 205 140",
      "M 150 470 L 160 320",
      "M 250 470 L 240 320"
    ],
    stitching: [
      "M 135 140 L 265 140", // crop hem
      "M 160 192 L 240 192", // waist seam
      "M 131 476 L 214 476", // left pant cuffs
      "M 186 476 L 269 476"  // right pant cuffs
    ]
  },
  "jumpsuits": {
    id: "jumpsuits",
    name: "Tailored Jumpsuit",
    // Sleek single-piece pantsuit
    path: "M 165 70 Q 200 60 235 70 L 250 150 L 225 210 L 245 320 L 260 480 L 210 480 L 200 310 L 190 480 L 140 480 L 155 320 L 175 210 L 150 150 Z",
    shadows: [
      "M 175 210 Q 200 220 225 210", // mid waist seam
      "M 200 310 L 200 480", // leg separation
      "M 160 320 Q 180 390 175 480",
      "M 240 320 Q 220 390 225 480"
    ],
    highlights: [
      "M 190 75 L 195 210",
      "M 210 75 L 205 210",
      "M 155 460 Q 170 350 180 230"
    ],
    stitching: [
      "M 165 70 Q 200 85 235 70", // neck collar
      "M 141 476 L 189 476",
      "M 211 476 L 259 476"
    ]
  },
  "skirts": {
    id: "skirts",
    name: "Slit Midi Skirt",
    // High waist midi skirt with side slit
    path: "M 160 160 Q 200 150 240 160 L 260 240 L 275 350 L 285 450 L 210 450 L 205 380 Q 200 350 195 450 L 115 450 L 125 350 L 140 240 Z",
    shadows: [
      "M 160 160 Q 200 172 240 160", // waist band shadow
      "M 140 240 Q 200 250 260 240", // hip gather shadow
      "M 205 380 L 195 450" // slit separation crease
    ],
    highlights: [
      "M 170 170 Q 150 260 135 440",
      "M 230 170 Q 250 260 265 440"
    ],
    stitching: [
      "M 160 162 L 240 162", // top stitch waistband
      "M 116 446 L 194 446", // left hem stitch
      "M 211 446 L 284 446"  // right hem stitch
    ]
  },
  "tops": {
    id: "tops",
    name: "Wrap Top",
    // Elegant cowl/wrap drape sleeveless blouse
    path: "M 150 100 Q 200 85 250 100 L 270 150 L 245 260 Q 200 280 155 260 L 130 150 Z",
    shadows: [
      "M 150 100 Q 200 180 245 260", // cross-over wrap fold shadow
      "M 250 100 Q 200 170 155 260", // reverse fold shadow
      "M 180 150 Q 200 190 220 150"  // neckline crease
    ],
    highlights: [
      "M 160 110 Q 180 150 200 240",
      "M 240 110 Q 220 150 200 240"
    ],
    stitching: [
      "M 150 100 Q 200 115 250 100", // neck cowl lining
      "M 156 258 Q 200 274 244 258"  // bottom wrap stitch
    ]
  },
  "pants": {
    id: "pants",
    name: "Classic Trousers",
    // High waist tailored women pants
    path: "M 160 150 H 240 L 255 260 L 270 480 L 210 480 L 200 310 L 190 480 L 130 480 L 145 260 Z",
    shadows: [
      "M 160 150 Q 200 160 240 150", // waistband fold
      "M 200 310 L 200 480", // pants split
      "M 175 150 L 170 480", // left iron crease line
      "M 225 150 L 230 480"  // right iron crease line
    ],
    highlights: [
      "M 148 260 Q 165 340 160 470",
      "M 252 260 Q 235 340 240 470"
    ],
    stitching: [
      "M 160 152 H 240",
      "M 131 476 H 189",
      "M 191 476 H 269"
    ]
  },
  "shorts": {
    id: "shorts",
    name: "Rolled-Cuff Shorts",
    // Smart high waist casual shorts
    path: "M 160 160 H 240 L 255 230 L 265 320 L 205 320 L 200 250 L 195 320 L 135 320 L 145 230 Z",
    shadows: [
      "M 160 160 Q 200 168 240 160",
      "M 200 250 L 200 320", // split
      "M 145 230 Q 170 240 195 320", // gather shadow left
      "M 255 230 Q 230 240 205 320"  // gather shadow right
    ],
    highlights: [
      "M 170 170 Q 155 230 165 310",
      "M 230 170 Q 245 230 235 310"
    ],
    stitching: [
      "M 160 162 H 240",
      "M 135 315 H 195", // cuff stitch left
      "M 205 315 H 265"  // cuff stitch right
    ]
  },
  "male-shirts": {
    id: "male-shirts",
    name: "Men's Classic Shirt",
    // Standard long sleeve collared button down shirt
    path: "M 150 90 Q 200 70 250 90 L 265 140 L 290 280 L 260 285 L 245 160 L 250 340 Q 200 355 150 340 L 155 160 L 140 285 L 110 280 L 135 140 Z",
    shadows: [
      "M 200 120 L 200 345", // button down center fold line
      "M 155 160 L 135 280", // left arm sleeve fold
      "M 245 160 L 265 280", // right arm sleeve fold
      "M 160 140 Q 180 155 190 180", // armpit shadow
      "M 240 140 Q 220 155 210 180"  // armpit shadow right
    ],
    highlights: [
      "M 170 100 Q 185 180 180 330",
      "M 230 100 Q 215 180 220 330",
      "M 125 150 L 120 270",
      "M 275 150 L 280 270"
    ],
    stitching: [
      "M 197 120 L 197 344", // dual stitch center line
      "M 203 120 L 203 344",
      "M 151 338 Q 200 352 249 338", // bottom hem stitch
      "M 111 278 L 139 283", // cuff left
      "M 289 278 L 261 283"  // cuff right
    ],
    collar: "M 165 90 Q 200 115 235 90 L 220 125 L 200 110 L 180 125 Z" // collared lapel paths
  },
  "male-pants": {
    id: "male-pants",
    name: "Men's Chinos",
    // Tailored classic dress trousers for men
    path: "M 155 130 H 245 L 260 250 L 275 480 L 212 480 L 200 300 L 188 480 L 125 480 L 140 250 Z",
    shadows: [
      "M 155 130 Q 200 140 245 130",
      "M 200 300 L 200 480", // division
      "M 172 130 L 165 480", // sharp crease center left
      "M 228 130 L 235 480",  // sharp crease center right
      "M 140 250 Q 160 270 160 380", // knee crumple shadow
      "M 260 250 Q 240 270 240 380"  // knee crumple shadow right
    ],
    highlights: [
      "M 180 140 Q 190 280 185 470",
      "M 220 140 Q 210 280 215 470"
    ],
    stitching: [
      "M 155 132 H 245", // waistband
      "M 126 476 H 187", // cuff hem
      "M 213 476 H 274"  // cuff hem right
    ]
  }
};

/**
 * Returns the vector mask data based on Category ID or returns a default Maxi Dress mask.
 */
export function getGarmentSilhouette(categoryId: string): GarmentPath {
  return GARMENT_SILHOUETTES[categoryId] || GARMENT_SILHOUETTES["maxi-dresses"];
}
