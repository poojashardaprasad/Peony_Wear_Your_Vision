import { HOME_IMAGES } from "../../assets/assets";

export interface PolaroidData {
  id: string;
  image: string;
  alt: string;
  date: string; // ISO String
  rotation: -6 | -3 | 3 | 6;
  positionKey: 1 | 2 | 3 | 4;
  zIndex: 10 | 20 | 25 | 30;
  isFeatured?: boolean;
}

export const polaroids: PolaroidData[] = [
  {
    id: "pol-01",
    image: HOME_IMAGES.polaroid1,
    alt: "Custom design preview from July 15",
    date: "2024-07-15T17:26:00",
    rotation: -6,
    positionKey: 1,
    zIndex: 10
  },
  {
    id: "pol-02",
    image: HOME_IMAGES.polaroid2,
    alt: "Custom design preview from July 16 morning",
    date: "2024-07-16T09:37:00",
    rotation: 3,
    positionKey: 2,
    zIndex: 20
  },
  {
    id: "pol-03",
    image: HOME_IMAGES.polaroid3,
    alt: "Main custom design feature",
    date: "2024-07-16T09:37:00",
    rotation: -3,
    positionKey: 3,
    zIndex: 30,
    isFeatured: true
  },
  {
    id: "pol-04",
    image: HOME_IMAGES.polaroid4,
    alt: "Custom design preview from July 15 evening",
    date: "2024-07-15T20:05:00",
    rotation: 6,
    positionKey: 4,
    zIndex: 25
  },
];
