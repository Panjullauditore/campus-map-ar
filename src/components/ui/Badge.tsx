import { cn } from "@/lib/utils";
import type { LocationCategory } from "@/types/campus";

const categoryStyles: Record<LocationCategory, string> = {
  informatika: "bg-emerald-500/15 text-emerald-300 ring-emerald-500/30",
  matematika: "bg-blue-500/15 text-blue-300 ring-blue-500/30",
  fisika: "bg-violet-500/15 text-violet-300 ring-violet-500/30",
  kimia: "bg-yellow-500/15 text-yellow-300 ring-yellow-500/30",
  biologi: "bg-orange-500/15 text-orange-300 ring-orange-500/30",
  umum: "bg-slate-500/15 text-slate-300 ring-slate-500/30",
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
