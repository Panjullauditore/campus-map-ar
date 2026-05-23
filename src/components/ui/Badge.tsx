import { cn } from "@/lib/utils";
import type { LocationCategory } from "@/types/campus";

const categoryStyles: Record<LocationCategory, string> = {
  academic: "bg-sky-500/15 text-sky-300 ring-sky-500/30",
  dining: "bg-amber-500/15 text-amber-300 ring-amber-500/30",
  residence: "bg-violet-500/15 text-violet-300 ring-violet-500/30",
  recreation: "bg-emerald-500/15 text-emerald-300 ring-emerald-500/30",
  services: "bg-rose-500/15 text-rose-300 ring-rose-500/30",
  parking: "bg-slate-500/15 text-slate-300 ring-slate-500/30",
};

interface BadgeProps {
  category: LocationCategory;
  label: string;
  className?: string;
}

export function Badge({ category, label, className }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ring-1 ring-inset",
        categoryStyles[category],
        className
      )}
    >
      {label}
    </span>
  );
}
