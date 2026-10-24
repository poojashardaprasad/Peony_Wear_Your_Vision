export interface StatData {
  id: string;
  value: number;
  suffix: string;
  label: string;
}

export const stats: StatData[] = [
  { id: "stat-sketches", value: 193, suffix: "", label: "sketches drawn by hand" },
  { id: "stat-fabrics", value: 89, suffix: "", label: "fabrics all sourced by us" },
  { id: "stat-outfits", value: 1, suffix: "", label: "outfit, exactly yours" },
];
