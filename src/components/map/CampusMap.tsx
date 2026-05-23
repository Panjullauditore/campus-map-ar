import dynamic from "next/dynamic";
import type { CampusLocation } from "@/types/campus";

const CampusMapInner = dynamic(() => import("./CampusMapInner"), {
  ssr: false,
  loading: () => (
    <div className="flex aspect-[5/4] w-full animate-pulse items-center justify-center rounded-2xl bg-slate-800/50">
      <span className="text-sm text-slate-500">Memuat Peta...</span>
    </div>
  ),
});

interface CampusMapProps {
  locations: CampusLocation[];
  selectedId: string | null;
  onSelect: (id: string) => void;
}

export function CampusMap(props: CampusMapProps) {
  return <CampusMapInner {...props} />;
}
