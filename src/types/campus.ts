export type LocationCategory =
  | "informatika"
  | "matematika"
  | "fisika"
  | "kimia"
  | "biologi"
  | "umum";

export interface CampusLocation {
  id: string;
  name: string;
  shortName: string;
  category: LocationCategory;
  description: string;
  hours?: string;
  /** Latitude for real GPS map */
  lat?: number;
  /** Longitude for real GPS map */
  lng?: number;
  /** Percent position on the placeholder map (0–100) - legacy */
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
