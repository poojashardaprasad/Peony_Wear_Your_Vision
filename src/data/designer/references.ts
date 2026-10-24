import { ReferenceData } from "../../context/DesignContext";
import topRef1Img from "../../assets/images/regenerated_image_1785341909892.jpg";
import topRef2Img from "../../assets/images/regenerated_image_1785341915056.jpg";
import topRef3Img from "../../assets/images/regenerated_image_1785341911568.jpg";
import topRef4Img from "../../assets/images/regenerated_image_1785341916599.jpg";
import topRef5Img from "../../assets/images/regenerated_image_1785341919409.jpg";
import topRef6Img from "../../assets/images/regenerated_image_1785341913478.jpg";
import topRef7Img from "../../assets/images/regenerated_image_1785341918212.jpg";
import topRef8Img from "../../assets/images/regenerated_image_1785341920802.jpg";
import userRef1Img from "../../assets/images/regenerated_image_1789645665987.jpg";
import userRef2Img from "../../assets/images/regenerated_image_1789645667836.jpg";
import userRef3Img from "../../assets/images/regenerated_image_1789645669844.jpg";
import userRef4Img from "../../assets/images/regenerated_image_1789645670975.jpg";
import userRef5Img from "../../assets/images/regenerated_image_1789645672845.jpg";

const WRAP_DRESS_REFERENCES_IMAGES = [
  topRef1Img,
  userRef1Img,
  topRef2Img,
  userRef2Img,
  topRef3Img,
  userRef3Img,
  topRef4Img,
  userRef4Img,
  topRef5Img,
  userRef5Img,
  topRef6Img,
  topRef7Img,
  topRef8Img,
];

const TOP_REFERENCES_IMAGES = WRAP_DRESS_REFERENCES_IMAGES;

// Dedicated 8-image reference photo pools for every single sketch across all 8 female categories + male categories
const SKETCH_SPECIFIC_REFERENCES: Record<string, string[]> = {
  // ==================== MAXI DRESSES (6 sketches) ====================
  "sk-maxi-1": WRAP_DRESS_REFERENCES_IMAGES, // Surplice Wrap & Cascade Ruffle Maxi (8 regenerated wrap dress photos)
  "sk-maxi-2": [ // Empire Grace Wrap
    "https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?w=800&auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1502716119720-b23a93e5fe1b?w=800&auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1566174053879-31528523f8ae?w=800&auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?w=800&auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1496747611176-843222e1e57c?w=800&auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1518895949257-7621c3c786d7?w=800&auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?w=800&auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?w=800&auto=format&fit=crop&q=80"
  ],
  "sk-maxi-3": [ // Off-Shoulder Flounce Maxi
    "https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=800&auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1568252542512-9fe8fe9c87bb?w=800&auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1518895949257-7621c3c786d7?w=800&auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=800&auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?w=800&auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1509631179647-0177331693ae?w=800&auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1618244972963-dbee1a7edc95?w=800&auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?w=800&auto=format&fit=crop&q=80"
  ],
  "sk-maxi-4": [ // Satin Minimalist Slip
    "https://images.unsplash.com/photo-1566174053879-31528523f8ae?w=800&auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?w=800&auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1502716119720-b23a93e5fe1b?w=800&auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?w=800&auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1509631179647-0177331693ae?w=800&auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1518895949257-7621c3c786d7?w=800&auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1539008885128-fcbc62b5d12b?w=800&auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1623600989906-6aae5aa131d4?w=800&auto=format&fit=crop&q=80"
  ],
  "sk-maxi-5": [ // Asymmetrical Grecian Cascade
    "https://images.unsplash.com/photo-1568252542512-9fe8fe9c87bb?w=800&auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1518895949257-7621c3c786d7?w=800&auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=800&auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?w=800&auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=800&auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?w=800&auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?w=800&auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1502716119720-b23a93e5fe1b?w=800&auto=format&fit=crop&q=80"
  ],
  "sk-maxi-6": [ // Structured Halter Neck Maxi
    "https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?w=800&auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1502716119720-b23a93e5fe1b?w=800&auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=800&auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1566174053879-31528523f8ae?w=800&auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?w=800&auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1509631179647-0177331693ae?w=800&auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?w=800&auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1568252542512-9fe8fe9c87bb?w=800&auto=format&fit=crop&q=80"
  ],

  // ==================== SHORT DRESSES (6 sketches) ====================
  "sk-short-1": [ // Puff Sleeve Babydoll
    "https://images.unsplash.com/photo-1623600989906-6aae5aa131d4?w=800&auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=800&auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=800&auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?w=800&auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1618244972963-dbee1a7edc95?w=800&auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1496747611176-843222e1e57c?w=800&auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?w=800&auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1509631179647-0177331693ae?w=800&auto=format&fit=crop&q=80"
  ],
  "sk-short-2": [ // Tailored Blazer Mini
    "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=800&auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1548624149-f1e1f13f1f72?w=800&auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=800&auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1539008885128-fcbc62b5d12b?w=800&auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1609357605129-26f69add5d6e?w=800&auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=800&auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1623600989906-6aae5aa131d4?w=800&auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=800&auto=format&fit=crop&q=80"
  ],
  "sk-short-3": [ // A-Line Skater Mini
    "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=800&auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1496747611176-843222e1e57c?w=800&auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?w=800&auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1623600989906-6aae5aa131d4?w=800&auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1539008885128-fcbc62b5d12b?w=800&auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1509631179647-0177331693ae?w=800&auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1618244972963-dbee1a7edc95?w=800&auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?w=800&auto=format&fit=crop&q=80"
  ],
  "sk-short-4": [ // Ruched Side-Drawstring Bodycon
    "https://images.unsplash.com/photo-1539008885128-fcbc62b5d12b?w=800&auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1609357605129-26f69add5d6e?w=800&auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=800&auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1623600989906-6aae5aa131d4?w=800&auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=800&auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?w=800&auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?w=800&auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1509631179647-0177331693ae?w=800&auto=format&fit=crop&q=80"
  ],
  "sk-short-5": [ // Cottagecore Smocked Ruffled Mini
    "https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?w=800&auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1496747611176-843222e1e57c?w=800&auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1618244972963-dbee1a7edc95?w=800&auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1623600989906-6aae5aa131d4?w=800&auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=800&auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=800&auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1509631179647-0177331693ae?w=800&auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?w=800&auto=format&fit=crop&q=80"
  ],
  "sk-short-6": [ // Chiffon Flutter-Sleeve Wrap
    "https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=800&auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1618244972963-dbee1a7edc95?w=800&auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1496747611176-843222e1e57c?w=800&auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?w=800&auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1623600989906-6aae5aa131d4?w=800&auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=800&auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1539008885128-fcbc62b5d12b?w=800&auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1509631179647-0177331693ae?w=800&auto=format&fit=crop&q=80"
  ],

  // ==================== CO-ORD SETS (6 sketches) ====================
  "sk-coord-1": [ // Cropped Blazer & Pleated Skirt Set
    "https://images.unsplash.com/photo-1621434546033-4400ef93d4ff?w=800&auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1609357605129-26f69add5d6e?w=800&auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1598958424110-38890db7770e?w=800&auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1509631179647-0177331693ae?w=800&auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?w=800&auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1618244972963-dbee1a7edc95?w=800&auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1496747611176-843222e1e57c?w=800&auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?w=800&auto=format&fit=crop&q=80"
  ],
  "sk-coord-2": [ // Linen Shirt & Wide-Leg Pants Set
    "https://images.unsplash.com/photo-1598958424110-38890db7770e?w=800&auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1621434546033-4400ef93d4ff?w=800&auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1509631179647-0177331693ae?w=800&auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=800&auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=800&auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?w=800&auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1609357605129-26f69add5d6e?w=800&auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1496747611176-843222e1e57c?w=800&auto=format&fit=crop&q=80"
  ],
  "sk-coord-3": [ // Satin Camisole & Maxi Skirt Duo
    "https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?w=800&auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1609803366051-a1e9abfcd393?w=800&auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1511130558040-60a0055c7b39?w=800&auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1566174053879-31528523f8ae?w=800&auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1509631179647-0177331693ae?w=800&auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1518895949257-7621c3c786d7?w=800&auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1539008885128-fcbc62b5d12b?w=800&auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1623600989906-6aae5aa131d4?w=800&auto=format&fit=crop&q=80"
  ],
  "sk-coord-4": [ // Knit Crop Top & Shorts Co-ord
    "https://images.unsplash.com/photo-1604176354204-9268737828e4?w=800&auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1519242220831-09410926fbff?w=800&auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=800&auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1496747611176-843222e1e57c?w=800&auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?w=800&auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1621434546033-4400ef93d4ff?w=800&auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1598958424110-38890db7770e?w=800&auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1509631179647-0177331693ae?w=800&auto=format&fit=crop&q=80"
  ],
  "sk-coord-5": [ // Boho Off-Shoulder Top & Palazzo Set
    "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=800&auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1509551388413-e18d0ac5d495?w=800&auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1584273112213-6450ce5a53f4?w=800&auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=800&auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1598958424110-38890db7770e?w=800&auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?w=800&auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1621434546033-4400ef93d4ff?w=800&auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1609357605129-26f69add5d6e?w=800&auto=format&fit=crop&q=80"
  ],
  "sk-coord-6": [ // Minimalist Vest & Tailored Trousers
    "https://images.unsplash.com/photo-1509551388413-e18d0ac5d495?w=800&auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?w=800&auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=800&auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=800&auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=800&auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1621434546033-4400ef93d4ff?w=800&auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1509631179647-0177331693ae?w=800&auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1539008885128-fcbc62b5d12b?w=800&auto=format&fit=crop&q=80"
  ],

  // ==================== JUMPSUITS (6 sketches) ====================
  "sk-jumpsuit-1": [ // Wide-Leg Utility Jumpsuit
    "https://images.unsplash.com/photo-1551488831-00ddcb6c6bd3?w=800&auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1585487000160-6ebcfceb0d03?w=800&auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=800&auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?w=800&auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=800&auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1609357605129-26f69add5d6e?w=800&auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?w=800&auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1496747611176-843222e1e57c?w=800&auto=format&fit=crop&q=80"
  ],
  "sk-jumpsuit-2": [ // Sleek Halter Neck Jumpsuit
    "https://images.unsplash.com/photo-1585487000160-6ebcfceb0d03?w=800&auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1551488831-00ddcb6c6bd3?w=800&auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?w=800&auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=800&auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1509631179647-0177331693ae?w=800&auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?w=800&auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=800&auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1609357605129-26f69add5d6e?w=800&auto=format&fit=crop&q=80"
  ],
  "sk-jumpsuit-3": [ // Wrap Front Belted Crepe Jumpsuit
    "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?w=800&auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1551488831-00ddcb6c6bd3?w=800&auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1585487000160-6ebcfceb0d03?w=800&auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=800&auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?w=800&auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=800&auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1609357605129-26f69add5d6e?w=800&auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1496747611176-843222e1e57c?w=800&auto=format&fit=crop&q=80"
  ],
  "sk-jumpsuit-4": [ // Off-Shoulder Overlay Jumpsuit
    "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=800&auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1551488831-00ddcb6c6bd3?w=800&auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1585487000160-6ebcfceb0d03?w=800&auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?w=800&auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1509631179647-0177331693ae?w=800&auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?w=800&auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=800&auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1609357605129-26f69add5d6e?w=800&auto=format&fit=crop&q=80"
  ],
  "sk-jumpsuit-5": [ // Boho Strapless Sweetheart Jumpsuit
    "https://images.unsplash.com/photo-1585487000160-6ebcfceb0d03?w=800&auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?w=800&auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1551488831-00ddcb6c6bd3?w=800&auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=800&auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=800&auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?w=800&auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1609357605129-26f69add5d6e?w=800&auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1496747611176-843222e1e57c?w=800&auto=format&fit=crop&q=80"
  ],
  "sk-jumpsuit-6": [ // Tailored Tuxedo-Style Jumpsuit
    "https://images.unsplash.com/photo-1551488831-00ddcb6c6bd3?w=800&auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=800&auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1585487000160-6ebcfceb0d03?w=800&auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?w=800&auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1509631179647-0177331693ae?w=800&auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?w=800&auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=800&auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1609357605129-26f69add5d6e?w=800&auto=format&fit=crop&q=80"
  ],

  // ==================== SKIRTS (6 sketches) ====================
  "sk-skirts-1": [ // High-Waisted Pleated Midi Skirt
    "https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?w=800&auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1609803366051-a1e9abfcd393?w=800&auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1511130558040-60a0055c7b39?w=800&auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1577900232427-18219b9166a0?w=800&auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=800&auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1496747611176-843222e1e57c?w=800&auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?w=800&auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?w=800&auto=format&fit=crop&q=80"
  ],
  "sk-skirts-2": [ // Satin Bias Cut Slip Skirt
    "https://images.unsplash.com/photo-1609803366051-a1e9abfcd393?w=800&auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?w=800&auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1511130558040-60a0055c7b39?w=800&auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1577900232427-18219b9166a0?w=800&auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1518895949257-7621c3c786d7?w=800&auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1539008885128-fcbc62b5d12b?w=800&auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1509631179647-0177331693ae?w=800&auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=800&auto=format&fit=crop&q=80"
  ],
  "sk-skirts-3": [ // Tiered Ruffle Bohemian Maxi Skirt
    "https://images.unsplash.com/photo-1511130558040-60a0055c7b39?w=800&auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?w=800&auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1609803366051-a1e9abfcd393?w=800&auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1577900232427-18219b9166a0?w=800&auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1496747611176-843222e1e57c?w=800&auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?w=800&auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=800&auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?w=800&auto=format&fit=crop&q=80"
  ],
  "sk-skirts-4": [ // Asymmetrical Slit Wrap Skirt
    "https://images.unsplash.com/photo-1577900232427-18219b9166a0?w=800&auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?w=800&auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1609803366051-a1e9abfcd393?w=800&auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1511130558040-60a0055c7b39?w=800&auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=800&auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?w=800&auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1509631179647-0177331693ae?w=800&auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1496747611176-843222e1e57c?w=800&auto=format&fit=crop&q=80"
  ],
  "sk-skirts-5": [ // Structured Denim Pencil Skirt
    "https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?w=800&auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1577900232427-18219b9166a0?w=800&auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1609803366051-a1e9abfcd393?w=800&auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1511130558040-60a0055c7b39?w=800&auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=800&auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?w=800&auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1496747611176-843222e1e57c?w=800&auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?w=800&auto=format&fit=crop&q=80"
  ],
  "sk-skirts-6": [ // Flared A-Line Mini Skirt
    "https://images.unsplash.com/photo-1609803366051-a1e9abfcd393?w=800&auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?w=800&auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1511130558040-60a0055c7b39?w=800&auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1577900232427-18219b9166a0?w=800&auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=800&auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1496747611176-843222e1e57c?w=800&auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?w=800&auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1509631179647-0177331693ae?w=800&auto=format&fit=crop&q=80"
  ],

  // ==================== TOPS (6 sketches) ====================
  "sk-tops-1": TOP_REFERENCES_IMAGES, // Front-Tie Knot V-Neck Crop Top
  "sk-tops-2": [ // Puff Sleeve V-Neck Button Blouse
    "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=800&auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1623600989906-6aae5aa131d4?w=800&auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=800&auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?w=800&auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1618244972963-dbee1a7edc95?w=800&auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1496747611176-843222e1e57c?w=800&auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?w=800&auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1509631179647-0177331693ae?w=800&auto=format&fit=crop&q=80"
  ],
  "sk-tops-3": [ // Tailored Belted Strap Vest Top
    "https://images.unsplash.com/photo-1509551388413-e18d0ac5d495?w=800&auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=800&auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=800&auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1539008885128-fcbc62b5d12b?w=800&auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1609357605129-26f69add5d6e?w=800&auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=800&auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?w=800&auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1509631179647-0177331693ae?w=800&auto=format&fit=crop&q=80"
  ],
  "sk-tops-4": [ // Asymmetrical One-Shoulder Peplum Corset
    "https://images.unsplash.com/photo-1568252542512-9fe8fe9c87bb?w=800&auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1518895949257-7621c3c786d7?w=800&auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=800&auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?w=800&auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=800&auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?w=800&auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?w=800&auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1502716119720-b23a93e5fe1b?w=800&auto=format&fit=crop&q=80"
  ],
  "sk-tops-5": [ // Lace-Trimmed Buttoned Corset Top
    "https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?w=800&auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=800&auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=800&auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?w=800&auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1623600989906-6aae5aa131d4?w=800&auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1539008885128-fcbc62b5d12b?w=800&auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1509631179647-0177331693ae?w=800&auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1496747611176-843222e1e57c?w=800&auto=format&fit=crop&q=80"
  ],
  "sk-tops-6": [ // Wide Flounce Ruffled Collar Blouse
    "https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?w=800&auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1496747611176-843222e1e57c?w=800&auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1618244972963-dbee1a7edc95?w=800&auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1623600989906-6aae5aa131d4?w=800&auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=800&auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=800&auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?w=800&auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1509631179647-0177331693ae?w=800&auto=format&fit=crop&q=80"
  ],

  // ==================== PANTS (6 sketches) ====================
  "sk-pants-1": [ // Wide-Leg Tailored Trousers
    "https://images.unsplash.com/photo-1509551388413-e18d0ac5d495?w=800&auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1584273112213-6450ce5a53f4?w=800&auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=800&auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?w=800&auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=800&auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1509631179647-0177331693ae?w=800&auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1621434546033-4400ef93d4ff?w=800&auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1598958424110-38890db7770e?w=800&auto=format&fit=crop&q=80"
  ],
  "sk-pants-2": [ // High-Rise Paperbag Waist Pants
    "https://images.unsplash.com/photo-1584273112213-6450ce5a53f4?w=800&auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1509551388413-e18d0ac5d495?w=800&auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=800&auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?w=800&auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=800&auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1509631179647-0177331693ae?w=800&auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?w=800&auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1621434546033-4400ef93d4ff?w=800&auto=format&fit=crop&q=80"
  ],
  "sk-pants-3": [ // Slim Fit Tapered Chinos
    "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?w=800&auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1509551388413-e18d0ac5d495?w=800&auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1584273112213-6450ce5a53f4?w=800&auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=800&auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=800&auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1509631179647-0177331693ae?w=800&auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1621434546033-4400ef93d4ff?w=800&auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1598958424110-38890db7770e?w=800&auto=format&fit=crop&q=80"
  ],
  "sk-pants-4": [ // Relaxed Linen Cargo Pants
    "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=800&auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1509551388413-e18d0ac5d495?w=800&auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1584273112213-6450ce5a53f4?w=800&auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?w=800&auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=800&auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1509631179647-0177331693ae?w=800&auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1621434546033-4400ef93d4ff?w=800&auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1598958424110-38890db7770e?w=800&auto=format&fit=crop&q=80"
  ],
  "sk-pants-5": [ // Flared Split-Hem Ribbed Pants
    "https://images.unsplash.com/photo-1509551388413-e18d0ac5d495?w=800&auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=800&auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1584273112213-6450ce5a53f4?w=800&auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?w=800&auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=800&auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1509631179647-0177331693ae?w=800&auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1621434546033-4400ef93d4ff?w=800&auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1598958424110-38890db7770e?w=800&auto=format&fit=crop&q=80"
  ],
  "sk-pants-6": [ // Pleated Dad-Fit Trousers
    "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?w=800&auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1509551388413-e18d0ac5d495?w=800&auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1584273112213-6450ce5a53f4?w=800&auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=800&auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=800&auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1509631179647-0177331693ae?w=800&auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1621434546033-4400ef93d4ff?w=800&auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1598958424110-38890db7770e?w=800&auto=format&fit=crop&q=80"
  ],

  // ==================== SHORTS (6 sketches) ====================
  "sk-shorts-1": [ // Tailored High-Waist Pleated Shorts
    "https://images.unsplash.com/photo-1604176354204-9268737828e4?w=800&auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1519242220831-09410926fbff?w=800&auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=800&auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1496747611176-843222e1e57c?w=800&auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?w=800&auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1621434546033-4400ef93d4ff?w=800&auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1598958424110-38890db7770e?w=800&auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1509631179647-0177331693ae?w=800&auto=format&fit=crop&q=80"
  ],
  "sk-shorts-2": [ // Relaxed Drawstring Linen Shorts
    "https://images.unsplash.com/photo-1519242220831-09410926fbff?w=800&auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1604176354204-9268737828e4?w=800&auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=800&auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1496747611176-843222e1e57c?w=800&auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?w=800&auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1621434546033-4400ef93d4ff?w=800&auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1598958424110-38890db7770e?w=800&auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1509631179647-0177331693ae?w=800&auto=format&fit=crop&q=80"
  ],
  "sk-shorts-3": [ // Scallop Hem Paperbag Shorts
    "https://images.unsplash.com/photo-1604176354204-9268737828e4?w=800&auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1519242220831-09410926fbff?w=800&auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=800&auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1496747611176-843222e1e57c?w=800&auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?w=800&auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1621434546033-4400ef93d4ff?w=800&auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1598958424110-38890db7770e?w=800&auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1509631179647-0177331693ae?w=800&auto=format&fit=crop&q=80"
  ],
  "sk-shorts-4": [ // Structured Denim Mom Shorts
    "https://images.unsplash.com/photo-1519242220831-09410926fbff?w=800&auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1604176354204-9268737828e4?w=800&auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=800&auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1496747611176-843222e1e57c?w=800&auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?w=800&auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1621434546033-4400ef93d4ff?w=800&auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1598958424110-38890db7770e?w=800&auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1509631179647-0177331693ae?w=800&auto=format&fit=crop&q=80"
  ],
  "sk-shorts-5": [ // Satin Lounge PJ Shorts
    "https://images.unsplash.com/photo-1604176354204-9268737828e4?w=800&auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1519242220831-09410926fbff?w=800&auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=800&auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1496747611176-843222e1e57c?w=800&auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?w=800&auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1621434546033-4400ef93d4ff?w=800&auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1598958424110-38890db7770e?w=800&auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1509631179647-0177331693ae?w=800&auto=format&fit=crop&q=80"
  ],
  "sk-shorts-6": [ // Utility Cargo Belted Shorts
    "https://images.unsplash.com/photo-1519242220831-09410926fbff?w=800&auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1604176354204-9268737828e4?w=800&auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=800&auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1496747611176-843222e1e57c?w=800&auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?w=800&auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1621434546033-4400ef93d4ff?w=800&auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1598958424110-38890db7770e?w=800&auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1509631179647-0177331693ae?w=800&auto=format&fit=crop&q=80"
  ]
};

// Fallback legacy array to maintain typing compatibility
export const references: ReferenceData[] = WRAP_DRESS_REFERENCES_IMAGES.map((img, i) => ({
  id: `ref-${i + 1}`,
  image: img
}));

/**
 * Returns 8 beautiful reference images uniquely generated or curated
 * for a specific selected Sketch (matching its exact sketch ID).
 */
export function getReferencesForSketch(sketchId: string): ReferenceData[] {
  if (!sketchId) {
    return references;
  }

  // Check if we have an explicit dedicated pool of 8 images for this sketch
  if (SKETCH_SPECIFIC_REFERENCES[sketchId]) {
    return SKETCH_SPECIFIC_REFERENCES[sketchId].map((img, i) => ({
      id: `ref-${sketchId}-${i + 1}`,
      image: img
    }));
  }

  // Fallback: Default to WRAP_DRESS_REFERENCES_IMAGES
  return WRAP_DRESS_REFERENCES_IMAGES.map((img, i) => ({
    id: `ref-${sketchId}-${i + 1}`,
    image: img
  }));
}

