import {
  ArrowRight,
  Building2,
  Map,
  Scan,
  Smartphone,
} from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { campusInfo, campusLocations } from "@/data/campus";

const highlights = [
  {
    icon: Map,
    title: "Interactive campus map",
    description:
      "Tap building pins, search locations, and read hours and descriptions — all in the browser.",
    href: "/map",
  },
  {
    icon: Building2,
    title: "Location directory",
    description:
      "Filter by academic, dining, residence, and more. Data lives in one place for easy updates.",
    href: "/locations",
  },
  {
    icon: Scan,
    title: "AR-ready architecture",
    description:
      "Three.js and React Three Fiber are included. WebXR hooks are stubbed for when you add AR.",
    href: "/ar",
  },
];

export default function HomePage() {
  const previewLocations = campusLocations.slice(0, 4);

  return (
    <>
      <section className="relative overflow-hidden border-b border-slate-800/80">
        <div
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-emerald-900/25 via-slate-950 to-slate-950"
          aria-hidden
        />
        <div className="relative mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-24">
          <p className="text-sm font-medium text-emerald-400">{campusInfo.name}</p>
          <h1 className="mt-3 max-w-2xl text-4xl font-bold tracking-tight text-white sm:text-5xl">
            Find your way around campus
          </h1>
          <p className="mt-4 max-w-xl text-lg text-slate-400">{campusInfo.tagline}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button href="/map">
              Open campus map
              <ArrowRight className="h-4 w-4" aria-hidden />
            </Button>
            <Button href="/ar" variant="outline">
              <Scan className="h-4 w-4" aria-hidden />
              AR preview
            </Button>
          </div>
          <div className="mt-12 flex items-center gap-3 rounded-2xl border border-slate-800/80 bg-slate-900/50 px-4 py-3 text-sm text-slate-400 backdrop-blur-sm sm:inline-flex">
            <Smartphone className="h-5 w-5 shrink-0 text-emerald-400" aria-hidden />
            <span>
              Website placeholder only — camera AR navigation ships in a later phase.
            </span>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <h2 className="text-2xl font-bold text-white">What you can do now</h2>
        <div className="mt-8 grid gap-6 sm:grid-cols-3">
          {highlights.map((item) => (
            <Card key={item.title} hover className="flex flex-col">
              <item.icon className="h-7 w-7 text-emerald-400" aria-hidden />
              <h3 className="mt-4 font-semibold text-white">{item.title}</h3>
              <p className="mt-2 flex-1 text-sm text-slate-400">{item.description}</p>
              <Button href={item.href} variant="ghost" className="mt-4 w-fit px-0">
                Explore
                <ArrowRight className="h-4 w-4" aria-hidden />
              </Button>
            </Card>
          ))}
        </div>
      </section>

      <section className="border-t border-slate-800/80 bg-slate-900/30">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
          <div className="flex items-end justify-between gap-4">
            <div>
              <h2 className="text-2xl font-bold text-white">Popular locations</h2>
              <p className="mt-1 text-sm text-slate-400">
                Sample data — edit <code className="text-emerald-400/90">src/data/campus.ts</code> for your campus.
              </p>
            </div>
            <Button href="/locations" variant="secondary" className="hidden sm:inline-flex">
              View all
            </Button>
          </div>
          <ul className="mt-8 grid gap-3 sm:grid-cols-2">
            {previewLocations.map((loc) => (
              <li key={loc.id}>
                <Card hover>
                  <div className="flex items-center justify-between gap-4">
                    <div>
                      <p className="font-medium text-white">{loc.name}</p>
                      <p className="mt-1 text-sm text-slate-500">{loc.shortName}</p>
                    </div>
                    <Button href={`/map?location=${loc.id}`} variant="ghost" className="shrink-0 text-xs">
                      Map
                    </Button>
                  </div>
                </Card>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}
