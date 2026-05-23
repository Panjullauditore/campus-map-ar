import { MapPin, Scan } from "lucide-react";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { categoryLabels } from "@/data/campus";
import type { CampusLocation } from "@/types/campus";

interface LocationPanelProps {
  location: CampusLocation | null;
}

export function LocationPanel({ location }: LocationPanelProps) {
  if (!location) {
    return (
      <Card className="flex min-h-[200px] flex-col items-center justify-center text-center">
        <MapPin className="h-8 w-8 text-slate-600" aria-hidden />
        <p className="mt-3 text-sm text-slate-400">
          Select a pin on the map or pick a location from the list.
        </p>
      </Card>
    );
  }

  return (
    <Card>
      <div className="flex items-start gap-3">
        <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-emerald-500/15 text-emerald-400">
          <MapPin className="h-5 w-5" aria-hidden />
        </span>
        <div>
          <h2 className="text-lg font-semibold text-white">{location.name}</h2>
          <Badge
            category={location.category}
            label={categoryLabels[location.category]}
            className="mt-2"
          />
        </div>
      </div>
      <p className="mt-4 text-sm leading-relaxed text-slate-400">
        {location.description}
      </p>
      {location.hours && (
        <p className="mt-3 text-xs text-slate-500">{location.hours}</p>
      )}
      {location.arAnchorId && (
        <p className="mt-4 rounded-lg bg-slate-800/60 px-3 py-2 font-mono text-xs text-slate-500">
          AR anchor: {location.arAnchorId}
        </p>
      )}
      <div className="mt-5 flex flex-wrap gap-2">
        <Button href="/ar" variant="outline" className="text-xs">
          <Scan className="h-4 w-4" aria-hidden />
          AR preview
        </Button>
        <Button href="/locations" variant="ghost" className="text-xs">
          All locations
        </Button>
      </div>
    </Card>
  );
}
