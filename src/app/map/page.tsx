import { Suspense } from "react";
import { MapPageClient } from "@/components/map/MapPageClient";

export const metadata = {
  title: "Campus Map",
  description: "Interactive 2D campus map with building locations",
};

export default function MapPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6">
      <header className="mb-8">
        <h1 className="text-3xl font-bold tracking-tight text-white">Campus Map</h1>
        <p className="mt-2 max-w-2xl text-slate-400">
          Explore buildings and services on the interactive map. AR wayfinding will
          connect to these same location anchors later.
        </p>
      </header>
      <Suspense
        fallback={
          <div className="animate-pulse rounded-2xl bg-slate-800/50 aspect-[5/4] max-w-3xl" />
        }
      >
        <MapPageClient />
      </Suspense>
    </div>
  );
}
