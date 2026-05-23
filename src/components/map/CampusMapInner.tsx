"use client";

import { useEffect, useMemo } from "react";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import { campusLocations } from "@/data/campus";
import type { CampusLocation } from "@/types/campus";
import { useGeolocation } from "@/lib/gps";
import { Navigation } from "lucide-react";
import Link from "next/link";

// Fix leaflet default icon issue
delete (L.Icon.Default.prototype as any)._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png",
  iconUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png",
  shadowUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png",
});

const getCategoryColor = (category: string) => {
  switch (category) {
    case "informatika":
      return "#10b981"; // Emerald
    case "matematika":
      return "#3b82f6"; // Blue
    case "fisika":
      return "#8b5cf6"; // Violet
    case "kimia":
      return "#eab308"; // Yellow
    case "biologi":
      return "#f97316"; // Orange
    default:
      return "#64748b"; // Slate
  }
};

const createCustomIcon = (loc: CampusLocation, isSelected: boolean) => {
  const isGedungE = loc.id === "gedung-e";
  const color = getCategoryColor(loc.category);
  const glow = isGedungE ? `box-shadow: 0 0 15px ${color}, inset 0 0 10px ${color};` : "";
  const scale = isSelected || isGedungE ? "transform: scale(1.2);" : "";
  const border = isGedungE ? "border: 2px solid white;" : "border: 2px solid rgba(255,255,255,0.5);";

  const html = `
    <div style="
      background-color: ${color};
      width: 24px;
      height: 24px;
      border-radius: 50%;
      ${border}
      ${glow}
      ${scale}
      display: flex;
      align-items: center;
      justify-content: center;
      color: white;
      font-weight: bold;
      font-size: 12px;
      transition: all 0.3s ease;
    ">
      ${loc.shortName.charAt(0)}
    </div>
  `;

  return L.divIcon({
    html,
    className: "custom-leaflet-icon",
    iconSize: [24, 24],
    iconAnchor: [12, 12],
  });
};

function MapController({
  center,
  zoom,
}: {
  center: [number, number];
  zoom: number;
}) {
  const map = useMap();
  useEffect(() => {
    map.setView(center, zoom);
  }, [center, zoom, map]);
  return null;
}

interface CampusMapInnerProps {
  locations: CampusLocation[];
  selectedId: string | null;
  onSelect: (id: string) => void;
}

export default function CampusMapInner({
  locations,
  selectedId,
  onSelect,
}: CampusMapInnerProps) {
  const { coordinates, startWatching, isWatching } = useGeolocation();

  const defaultCenter: [number, number] = [-7.048398, 110.441030]; // Centered precisely at Dekanat FMIPA
  const defaultZoom = 18;

  const center = useMemo(() => {
    if (selectedId) {
      const selected = locations.find((l) => l.id === selectedId);
      if (selected?.lat && selected?.lng) {
        return [selected.lat, selected.lng] as [number, number];
      }
    }
    return defaultCenter;
  }, [selectedId, locations]);

  const mapPins = locations.filter((loc) => loc.lat && loc.lng);

  return (
    <div className="relative h-full min-h-[400px] w-full overflow-hidden rounded-2xl border border-slate-800 bg-slate-900/40 ring-1 ring-slate-800/50">
      <MapContainer
        center={center}
        zoom={defaultZoom}
        style={{ height: "100%", width: "100%", zIndex: 0 }}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.google.com/maps">Google Maps</a>'
          url="https://mt1.google.com/vt/lyrs=m&x={x}&y={y}&z={z}"
        />
        <MapController center={center} zoom={selectedId ? 18 : defaultZoom} />

        {mapPins.map((loc) => (
          <Marker
            key={loc.id}
            position={[loc.lat!, loc.lng!]}
            icon={createCustomIcon(loc, loc.id === selectedId)}
            eventHandlers={{
              click: () => onSelect(loc.id),
            }}
          >
            <Popup className="custom-popup">
              <div className="p-1">
                <h3 className="font-bold text-slate-900">{loc.name}</h3>
                <p className="mb-2 text-xs text-slate-600 line-clamp-2">
                  {loc.description}
                </p>
                <Link
                  href={`/ar?id=${loc.id}`}
                  className="block w-full rounded bg-emerald-600 py-1 text-center text-xs font-semibold text-white transition hover:bg-emerald-700"
                >
                  Lihat di AR
                </Link>
              </div>
            </Popup>
          </Marker>
        ))}

        {coordinates && (
          <Marker
            position={[coordinates.lat, coordinates.lng]}
            icon={L.divIcon({
              html: `<div style="background-color: #3b82f6; width: 16px; height: 16px; border-radius: 50%; border: 2px solid white; box-shadow: 0 0 10px rgba(59, 130, 246, 0.8);"></div>`,
              className: "user-location-icon",
              iconSize: [16, 16],
              iconAnchor: [8, 8],
            })}
          >
            <Popup>Lokasi Anda saat ini</Popup>
          </Marker>
        )}
      </MapContainer>

      <button
        onClick={startWatching}
        className="absolute bottom-4 right-4 z-[1000] flex h-12 w-12 items-center justify-center rounded-full bg-slate-900 border border-slate-700 text-emerald-400 shadow-lg transition hover:scale-105 active:scale-95"
        title="Lokasi Saya"
      >
        <Navigation className={`h-5 w-5 ${isWatching ? 'text-blue-500' : ''}`} />
      </button>

      {/* Legend */}
      <div className="absolute bottom-4 left-4 z-[1000] rounded-xl bg-slate-950/80 p-3 text-xs text-white shadow-lg backdrop-blur-md">
        <h4 className="mb-2 font-semibold">Legenda:</h4>
        <div className="grid grid-cols-2 gap-x-4 gap-y-2">
          {Object.entries({
            "Informatika": "#10b981",
            "Matematika": "#3b82f6",
            "Fisika": "#8b5cf6",
            "Kimia": "#eab308",
            "Biologi": "#f97316",
            "Umum": "#64748b",
          }).map(([name, color]) => (
            <div key={name} className="flex items-center gap-2">
              <span className="block h-3 w-3 rounded-full" style={{ backgroundColor: color }} />
              <span>{name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
