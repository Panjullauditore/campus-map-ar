import { Suspense } from "react";
import { ARPageClient } from "@/components/ar/ARPageClient";

export const metadata = {
  title: "AR View - FSM UNDIP",
  description: "WebXR AR Navigation for FSM UNDIP",
};

export default function ARPage() {
  return (
    <Suspense fallback={<div className="flex h-screen w-full items-center justify-center bg-slate-950 text-emerald-500">Memuat AR...</div>}>
      <ARPageClient />
    </Suspense>
  );
}

