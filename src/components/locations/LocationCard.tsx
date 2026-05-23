import Link from "next/link";
import { ArrowRight, Clock } from "lucide-react";
import { Badge } from "@/components/ui/Badge";
import { Card } from "@/components/ui/Card";
import { categoryLabels } from "@/data/campus";
import type { CampusLocation } from "@/types/campus";

interface LocationCardProps {
  location: CampusLocation;
  selected?: boolean;
  onSelect?: (id: string) => void;
}

export function LocationCard({ location, selected, onSelect }: LocationCardProps) {
  const content = (
    <>
      <div className="flex items-start justify-between gap-3">
        <div>
          <h3 className="font-semibold text-white">{location.name}</h3>
          <Badge
            category={location.category}
            label={categoryLabels[location.category]}
            className="mt-2"
          />
        </div>
        {selected && (
          <span className="shrink-0 rounded-full bg-emerald-500/20 px-2 py-0.5 text-xs font-medium text-emerald-300">
            On map
          </span>
        )}
      </div>
      <p className="mt-3 text-sm leading-relaxed text-slate-400">
        {location.description}
      </p>
      {location.hours && (
        <p className="mt-3 flex items-center gap-2 text-xs text-slate-500">
          <Clock className="h-3.5 w-3.5 shrink-0" aria-hidden />
          {location.hours}
        </p>
      )}
    </>
  );

  if (onSelect) {
    return (
      <button
        type="button"
        onClick={() => onSelect(location.id)}
        className="w-full text-left"
      >
        <Card hover className={selected ? "ring-2 ring-emerald-500/50" : ""}>
          {content}
        </Card>
      </button>
    );
  }

  return (
    <Link href={`/map?location=${location.id}`}>
      <Card hover className="group">
        {content}
        <span className="mt-4 inline-flex items-center gap-1 text-xs font-medium text-emerald-400 opacity-0 transition group-hover:opacity-100">
          View on map
          <ArrowRight className="h-3.5 w-3.5" aria-hidden />
        </span>
      </Card>
    </Link>
  );
}
