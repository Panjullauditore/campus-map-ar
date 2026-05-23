"use client";

import { useCallback, useMemo, useState } from "react";
import { useSearchParams } from "next/navigation";
import { CampusMap } from "@/components/map/CampusMap";
import { LocationPanel } from "@/components/map/LocationPanel";
import { LocationCard } from "@/components/locations/LocationCard";
import { SearchBar } from "@/components/locations/SearchBar";
import { campusLocations } from "@/data/campus";
import { filterLocations } from "@/lib/utils";

export function MapPageClient() {
  const searchParams = useSearchParams();
  const initialId = searchParams.get("location");
  const validInitial =
    campusLocations.find((l) => l.id === initialId)?.id ?? campusLocations[0]?.id ?? null;

  const [selectedId, setSelectedId] = useState<string | null>(validInitial);
  const [query, setQuery] = useState("");

  const filtered = useMemo(
    () => filterLocations(campusLocations, query),
    [query]
  );

  const selected = useMemo(
    () => campusLocations.find((l) => l.id === selectedId) ?? null,
    [selectedId]
  );

  const handleSelect = useCallback((id: string) => {
    setSelectedId(id);
  }, []);

  return (
    <div className="grid gap-8 lg:grid-cols-[1fr_340px]">
      <div className="space-y-4">
        <CampusMap
          locations={filtered.length ? filtered : campusLocations}
          selectedId={selectedId}
          onSelect={handleSelect}
        />
        <p className="text-xs text-slate-500">
          This 2D map uses placeholder coordinates. Replace with your real campus
          floor plan or GIS data when ready.
        </p>
      </div>

      <aside className="space-y-4">
        <LocationPanel location={selected} />
        <SearchBar value={query} onChange={setQuery} />
        <div className="max-h-[420px] space-y-2 overflow-y-auto pr-1">
          {filtered.map((loc) => (
            <LocationCard
              key={loc.id}
              location={loc}
              selected={loc.id === selectedId}
              onSelect={handleSelect}
            />
          ))}
          {filtered.length === 0 && (
            <p className="py-8 text-center text-sm text-slate-500">No locations match.</p>
          )}
        </div>
      </aside>
    </div>
  );
}
