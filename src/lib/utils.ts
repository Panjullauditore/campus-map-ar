import { clsx, type ClassValue } from "clsx";
import type { CampusLocation } from "@/types/campus";

export function cn(...inputs: ClassValue[]) {
  return clsx(inputs);
}

export function filterLocations(locations: CampusLocation[], query: string) {
  const q = query.trim().toLowerCase();
  if (!q) return locations;
  return locations.filter(
    (loc) =>
      loc.name.toLowerCase().includes(q) ||
      loc.shortName.toLowerCase().includes(q) ||
      loc.description.toLowerCase().includes(q) ||
      loc.category.toLowerCase().includes(q)
  );
}
