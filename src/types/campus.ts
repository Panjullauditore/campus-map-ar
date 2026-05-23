export type LocationCategory =
  | "academic"
  | "dining"
  | "residence"
  | "recreation"
  | "services"
  | "parking";

export interface CampusLocation {
  id: string;
  name: string;
  shortName: string;
  category: LocationCategory;
  description: string;
  hours?: string;
  /** Percent position on the placeholder map (0–100) */
  mapX: number;
  mapY: number;
  /** For future AR anchoring */
  arAnchorId?: string;
}

export interface CampusInfo {
  name: string;
  tagline: string;
  address: string;
}
