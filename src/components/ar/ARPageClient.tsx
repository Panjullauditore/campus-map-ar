"use client";

import { useSearchParams } from "next/navigation";
import { ARScene } from "@/components/ar/ARScene";
import Link from "next/link";
import { ArrowLeft, Compass, Camera, Construction } from "lucide-react";

export function ARPageClient() {
  const searchParams = useSearchParams();
  const id = searchParams.get("id") || "gedung-e";

  if (id !== "gedung-e") {
    return (
      <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-slate-950 p-6 text-center">
        <div className="absolute top-4 left-4">
          <Link href="/map" className="flex items-center gap-2 rounded-full bg-slate-900/80 px-4 py-2 text-sm font-medium text-white backdrop-blur-md border border-slate-700 hover:bg-slate-800">
            <ArrowLeft className="h-4 w-4" />
            Kembali
          </Link>
        </div>
        
        <div className="rounded-3xl border border-emerald-500/20 bg-slate-900/50 p-8 shadow-2xl backdrop-blur-md max-w-sm">
          <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-emerald-500/10 text-emerald-400">
            <Construction className="h-10 w-10" />
          </div>
          <h2 className="mb-3 text-2xl font-bold text-white">Segera Hadir!</h2>
          <p className="mb-8 text-sm text-slate-400 leading-relaxed">
            Model 3D AR untuk bangunan ini sedang dalam tahap pengembangan. Saat ini, hanya <strong className="text-emerald-400">Gedung E Informatika</strong> yang sudah siap dicoba dalam mode AR.
          </p>
          <Link href="/ar?id=gedung-e" className="inline-flex w-full items-center justify-center rounded-xl bg-emerald-600 px-4 py-3 text-sm font-semibold text-white shadow-lg transition hover:bg-emerald-700">
            Lihat Gedung Informatika
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 z-50 bg-slate-950">
      {/* UI Overlay for WebXR dom-overlay */}
      <div id="ar-overlay" className="pointer-events-none absolute inset-0 z-10 flex flex-col justify-between p-4">
        {/* Top bar */}
        <div className="flex justify-between items-start pointer-events-auto">
          <Link href="/map" className="flex items-center gap-2 rounded-full bg-slate-900/80 px-4 py-2 text-sm font-medium text-white backdrop-blur-md border border-slate-700">
            <ArrowLeft className="h-4 w-4" />
            Kembali
          </Link>
          
          <div className="flex flex-col items-end gap-2">
            <div className="rounded-full bg-slate-900/80 p-3 text-emerald-400 backdrop-blur-md border border-slate-700">
              <Compass className="h-5 w-5" />
            </div>
            <button 
              className="rounded-full bg-slate-900/80 p-3 text-white backdrop-blur-md border border-slate-700 active:bg-slate-800"
              onClick={() => alert("Gunakan tombol 'ENTER AR' di bagian bawah layar untuk membuka kamera.")}
            >
              <Camera className="h-5 w-5" />
            </button>
          </div>
        </div>
        
        {/* Bottom instructions */}
        <div id="ar-instructions" className="flex justify-center pointer-events-auto" style={{ display: 'none' }}>
          <div className="rounded-xl bg-slate-900/80 px-6 py-3 text-center backdrop-blur-md border border-emerald-500/30">
            <p className="text-sm font-bold text-white">Arahkan kamera ke lantai</p>
            <p className="text-xs text-slate-300">Tap layar saat muncul lingkaran hijau</p>
          </div>
        </div>
      </div>
      
      {/* AR Scene Canvas */}
      <div className="absolute inset-0 z-0">
        <ARScene locationId={id} />
      </div>
    </div>
  );
}
