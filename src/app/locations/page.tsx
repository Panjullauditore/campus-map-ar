import { LocationsPageClient } from "@/components/locations/LocationsPageClient";

export const metadata = {
  title: "Locations",
  description: "Browse all campus buildings and services",
};

export default function LocationsPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6">
      <header className="mb-8">
        <h1 className="text-3xl font-bold tracking-tight text-white">Locations</h1>
        <p className="mt-2 text-slate-400">
          Search and filter every place on campus. Each entry includes an AR anchor ID
          for future integration.
        </p>
      </header>
      <LocationsPageClient />
    </div>
  );
}
