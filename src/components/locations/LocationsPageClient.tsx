"use client";

import { useMemo, useState } from "react";
import { LocationCard } from "@/components/locations/LocationCard";
import { SearchBar } from "@/components/locations/SearchBar";
import { campusLocations, categoryLabels } from "@/data/campus";
import { filterLocations } from "@/lib/utils";
import type { LocationCategory } from "@/types/campus";
import { cn } from "@/lib/utils";

const categories = Object.keys(categoryLabels) as LocationCategory[];

export function LocationsPageClient() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState<LocationCategory | "all">("all");

  const filtered = useMemo(() => {
    let list = filterLocations(campusLocations, query);
    if (category !== "all") {
      list = list.filter((l) => l.category === category);
    }
    return list;
  }, [query, category]);

  return (
    <div className="space-y-6">
      <SearchBar value={query} onChange={setQuery} />

      <div className="flex flex-wrap gap-2">
        <button
          type="button"
          onClick={() => setCategory("all")}
          className={cn(
            "rounded-full px-3 py-1.5 text-xs font-medium transition",
            category === "all"
              ? "bg-emerald-500/20 text-emerald-300 ring-1 ring-emerald-500/40"
              : "bg-slate-800 text-slate-400 hover:text-white"
          )}
        >
          All
        </button>
        {categories.map((cat) => (
          <button
            key={cat}
            type="button"
            onClick={() => setCategory(cat)}
            className={cn(
              "rounded-full px-3 py-1.5 text-xs font-medium transition",
              category === cat
                ? "bg-emerald-500/20 text-emerald-300 ring-1 ring-emerald-500/40"
                : "bg-slate-800 text-slate-400 hover:text-white"
            )}
          >
            {categoryLabels[cat]}
          </button>
        ))}
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        {filtered.map((loc) => (
          <LocationCard key={loc.id} location={loc} />
        ))}
      </div>

      {filtered.length === 0 && (
        <p className="py-12 text-center text-slate-500">No locations found.</p>
      )}
    </div>
  );
}
