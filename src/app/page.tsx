import {
  ArrowRight,
  Building2,
  Map,
  Scan,
  Smartphone,
  Navigation,
} from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { campusInfo, campusLocations } from "@/data/campus";
import Image from "next/image";

const highlights = [
  {
    icon: Scan,
    title: "Navigasi WebAR",
    description:
      "Arahkan kamera ke area sekitar untuk memunculkan model 3D Gedung E dan panel informasi interaktif.",
    href: "/ar",
  },
  {
    icon: Map,
    title: "Peta Interaktif & GPS",
    description:
      "Jelajahi denah kampus FSM UNDIP, cari gedung, dan lacak posisi Anda secara real-time.",
    href: "/map",
  },
  {
    icon: Building2,
    title: "Direktori Lokasi",
    description:
      "Temukan fasilitas, laboratorium, dan ruang dosen berdasarkan program studi.",
    href: "/locations",
  },
];

export default function HomePage() {
  // 3 Featured buildings, prioritizing Gedung E
  const featuredIds = ["gedung-e", "perpustakaan-fsm", "masjid-fsm"];
  const featuredLocations = featuredIds
    .map((id) => campusLocations.find((loc) => loc.id === id))
    .filter(Boolean) as typeof campusLocations;

  return (
    <>
      <section className="relative overflow-hidden border-b border-slate-800/80 bg-slate-950">
        <div className="absolute inset-0 z-0 opacity-30">
          {/* Placeholder for FSM UNDIP Campus photo */}
          <Image
            src="https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&q=80&w=2070"
            alt="Kampus FSM UNDIP Placeholder"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/80 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/80 to-transparent" />
        </div>
        
        <div className="relative z-10 mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-32">
          <div className="inline-flex items-center gap-2 rounded-full bg-emerald-500/10 px-3 py-1 text-sm font-medium text-emerald-400 ring-1 ring-inset ring-emerald-500/20 mb-6">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500"></span>
            </span>
            <span>WebAR Ready</span>
          </div>
          
          <h1 className="max-w-3xl text-4xl font-extrabold tracking-tight text-white sm:text-6xl lg:text-7xl">
            Campus Map AR <br />
            <span className="bg-gradient-to-r from-emerald-400 to-sky-400 bg-clip-text text-transparent">
              FSM UNDIP
            </span>
          </h1>
          <p className="mt-6 max-w-xl text-lg text-slate-300">
            Navigasi Interaktif Gedung E Informatika dan Lingkungan Fakultas Sains dan Matematika.
          </p>
          
          <div className="mt-10 flex flex-wrap gap-4">
            <Button href="/ar" className="bg-emerald-600 hover:bg-emerald-700 text-white font-semibold px-8 py-3 h-auto text-base rounded-full shadow-[0_0_20px_rgba(16,185,129,0.3)] transition-all hover:shadow-[0_0_30px_rgba(16,185,129,0.5)]">
              <Scan className="mr-2 h-5 w-5" aria-hidden />
              Mulai AR Navigasi
            </Button>
            <Button href="/map" variant="outline" className="px-8 py-3 h-auto text-base rounded-full border-slate-600 bg-slate-900/50 backdrop-blur-md hover:bg-slate-800">
              <Map className="mr-2 h-5 w-5" aria-hidden />
              Buka Peta 2D
            </Button>
          </div>
          
          <div className="mt-12 flex items-center gap-3 rounded-2xl border border-emerald-500/20 bg-emerald-950/30 px-4 py-3 text-sm text-emerald-200 backdrop-blur-md sm:inline-flex shadow-lg shadow-emerald-900/20">
            <Smartphone className="h-5 w-5 shrink-0 text-emerald-400" aria-hidden />
            <span>
              Untuk pengalaman terbaik, buka website ini melalui smartphone Android yang mendukung WebAR.
            </span>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-white">Fitur Utama</h2>
          <p className="mt-4 text-slate-400 max-w-2xl mx-auto">Pengalaman kampus masa depan di genggaman Anda dengan teknologi Augmented Reality dan Peta Interaktif.</p>
        </div>
        
        <div className="grid gap-8 sm:grid-cols-3">
          {highlights.map((item) => (
            <Card key={item.title} className="flex flex-col relative group overflow-hidden border-slate-800 bg-slate-900/50 backdrop-blur-sm transition-all hover:-translate-y-1 hover:shadow-xl hover:shadow-emerald-900/20 hover:border-emerald-500/50">
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
              <div className="relative z-10 p-6 h-full flex flex-col">
                <div className="mb-6 inline-flex rounded-xl bg-slate-800 p-3 ring-1 ring-slate-700 transition-colors group-hover:bg-emerald-950 group-hover:ring-emerald-500/30">
                  <item.icon className="h-6 w-6 text-emerald-400" aria-hidden />
                </div>
                <h3 className="font-bold text-xl text-white">{item.title}</h3>
                <p className="mt-3 flex-1 text-slate-400 leading-relaxed">{item.description}</p>
                <Button href={item.href} variant="ghost" className="mt-6 w-fit px-0 text-emerald-400 hover:text-emerald-300">
                  Jelajahi Fitur
                  <ArrowRight className="ml-2 h-4 w-4" aria-hidden />
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </section>

      <section className="border-t border-slate-800/80 bg-slate-900/30">
        <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12">
            <div>
              <h2 className="text-3xl font-bold text-white">Gedung Unggulan FSM</h2>
              <p className="mt-2 text-slate-400">
                Pusat kegiatan utama mahasiswa Fakultas Sains dan Matematika UNDIP.
              </p>
            </div>
            <Button href="/locations" variant="outline" className="border-slate-700 rounded-full w-fit">
              Lihat Semua Direktori
            </Button>
          </div>
          
          <div className="grid gap-6 sm:grid-cols-3">
            {featuredLocations.map((loc, idx) => (
              <Card key={loc.id} className={`flex flex-col overflow-hidden transition-all hover:scale-[1.02] ${idx === 0 ? 'ring-2 ring-emerald-500 shadow-lg shadow-emerald-900/30' : 'border-slate-800 bg-slate-900/60'}`}>
                <div className={`h-32 ${idx === 0 ? 'bg-gradient-to-br from-emerald-600 to-slate-900' : 'bg-slate-800'} relative p-6 flex items-end`}>
                  {idx === 0 && (
                    <div className="absolute top-4 right-4 bg-emerald-500 text-slate-950 text-[10px] font-bold px-2 py-1 rounded-md uppercase tracking-wider">
                      Fokus Utama
                    </div>
                  )}
                  <h3 className="text-xl font-bold text-white drop-shadow-md">{loc.shortName}</h3>
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <p className="text-sm font-medium text-emerald-400 mb-2">{loc.name}</p>
                  <p className="text-sm text-slate-400 flex-1">{loc.description}</p>
                  <div className="mt-6 flex gap-2">
                    <Button href={`/ar?id=${loc.id}`} className={`flex-1 ${idx === 0 ? 'bg-emerald-600 hover:bg-emerald-700 text-white' : 'bg-slate-800 hover:bg-slate-700'}`}>
                      Lihat AR
                    </Button>
                    <Button href={`/map?location=${loc.id}`} variant="outline" className="border-slate-700 hover:bg-slate-800 px-3" title="Lihat di Peta">
                      <Map className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
