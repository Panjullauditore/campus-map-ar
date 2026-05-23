"use client";

import { useMemo } from "react";
import { cn } from "@/lib/utils";
import type { CampusLocation } from "@/types/campus";

interface CampusMapProps {
  locations: CampusLocation[];
  selectedId: string | null;
  onSelect: (id: string) => void;
}

export function CampusMap({ locations, selectedId, onSelect }: CampusMapProps) {
  const pins = useMemo(
    () =>
      locations.map((loc) => ({
        ...loc,
        isSelected: loc.id === selectedId,
      })),
    [locations, selectedId]
  );

  return (
    <div className="relative overflow-hidden rounded-2xl border border-slate-800 bg-slate-900/40 ring-1 ring-slate-800/50">
      {/* Stylized placeholder campus layout */}
      <svg
        viewBox="0 0 100 80"
        className="aspect-[5/4] w-full bg-gradient-to-br from-slate-900 via-slate-900 to-emerald-950/30"
        role="img"
        aria-label="Interactive campus map placeholder"
      >
        <defs>
          <pattern id="grid" width="5" height="5" patternUnits="userSpaceOnUse">
            <path
              d="M 5 0 L 0 0 0 5"
              fill="none"
              stroke="rgb(51 65 85 / 0.25)"
              strokeWidth="0.15"
            />
          </pattern>
        </defs>
        <rect width="100" height="80" fill="url(#grid)" />
        {/* Green spaces */}
        <ellipse cx="50" cy="48" rx="28" ry="14" fill="rgb(16 185 129 / 0.08)" />
        <ellipse cx="18" cy="22" rx="12" ry="8" fill="rgb(16 185 129 / 0.06)" />
        {/* Paths */}
        <path
          d="M 12 72 L 35 55 L 50 50 L 72 52 L 88 68"
          fill="none"
          stroke="rgb(100 116 139 / 0.35)"
          strokeWidth="1.2"
          strokeDasharray="2 1.5"
        />
        <path
          d="M 30 42 L 50 48 L 68 35"
          fill="none"
          stroke="rgb(100 116 139 / 0.25)"
          strokeWidth="0.8"
        />
        {/* Building blocks (decorative) */}
        <rect x="42" y="30" width="14" height="10" rx="1" fill="rgb(51 65 85 / 0.5)" />
        <rect x="62" y="26" width="12" height="12" rx="1" fill="rgb(51 65 85 / 0.45)" />
        <rect x="26" y="36" width="10" height="8" rx="1" fill="rgb(51 65 85 / 0.4)" />
        <rect x="50" y="52" width="16" height="8" rx="1" fill="rgb(51 65 85 / 0.45)" />
        <rect x="74" y="48" width="10" height="10" rx="1" fill="rgb(51 65 85 / 0.4)" />
        <text x="50" y="6" textAnchor="middle" fill="rgb(148 163 184)" fontSize="3" fontFamily="system-ui">
          Campus Map (2D preview)
        </text>
      </svg>

      {/* Interactive pins overlay */}
      <div className="absolute inset-0">
        {pins.map((loc) => (
          <button
            key={loc.id}
            type="button"
            title={loc.name}
            onClick={() => onSelect(loc.id)}
            className={cn(
              "absolute flex -translate-x-1/2 -translate-y-full flex-col items-center transition-transform hover:scale-110 focus-visible:outline focus-visible:outline-2 focus-visible:outline-emerald-400",
              loc.isSelected && "z-10 scale-110"
            )}
            style={{ left: `${loc.mapX}%`, top: `${loc.mapY}%` }}
            aria-label={`${loc.name}${loc.isSelected ? ", selected" : ""}`}
            aria-pressed={loc.isSelected}
          >
            <span
              className={cn(
                "flex h-8 w-8 items-center justify-center rounded-full border-2 shadow-lg transition",
                loc.isSelected
                  ? "border-emerald-300 bg-emerald-500 text-slate-950 shadow-emerald-500/40"
                  : "border-slate-600 bg-slate-800 text-emerald-400 hover:border-emerald-500/60"
              )}
            >
              <span className="text-xs font-bold">{loc.shortName.charAt(0)}</span>
            </span>
            {loc.isSelected && (
              <span className="mt-1 max-w-[90px] truncate rounded-md bg-slate-950/90 px-2 py-0.5 text-[10px] font-medium text-white backdrop-blur-sm">
                {loc.shortName}
              </span>
            )}
          </button>
        ))}
      </div>

      <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between rounded-lg bg-slate-950/80 px-3 py-2 text-xs text-slate-400 backdrop-blur-sm">
        <span>Tap a pin to view details</span>
        <span className="text-emerald-500/80">AR layer: off</span>
      </div>
    </div>
  );
}
