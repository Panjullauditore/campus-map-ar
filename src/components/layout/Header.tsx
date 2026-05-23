"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Map, Menu, Scan, X } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { campusInfo } from "@/data/campus";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/map", label: "Campus Map" },
  { href: "/locations", label: "Locations" },
  { href: "/ar", label: "AR Preview" },
];

export function Header() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-800/80 bg-slate-950/80 backdrop-blur-xl">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-4 sm:px-6">
        <Link href="/" className="flex items-center gap-3 group">
          <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-500/15 text-emerald-400 ring-1 ring-emerald-500/30 transition group-hover:bg-emerald-500/25">
            <Map className="h-5 w-5" aria-hidden />
          </span>
          <div className="leading-tight">
            <p className="text-sm font-semibold text-white">Campus Map AR</p>
            <p className="text-xs text-slate-400">{campusInfo.name}</p>
          </div>
        </Link>

        <nav className="hidden items-center gap-1 md:flex" aria-label="Main">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "rounded-lg px-3 py-2 text-sm font-medium transition",
                pathname === link.href
                  ? "bg-slate-800 text-white"
                  : "text-slate-400 hover:bg-slate-800/60 hover:text-white"
              )}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <Link
          href="/ar"
          className="hidden items-center gap-2 rounded-xl bg-emerald-500/15 px-4 py-2 text-sm font-semibold text-emerald-300 ring-1 ring-emerald-500/30 transition hover:bg-emerald-500/25 sm:inline-flex"
        >
          <Scan className="h-4 w-4" aria-hidden />
          AR Soon
        </Link>

        <button
          type="button"
          className="inline-flex rounded-lg p-2 text-slate-400 hover:bg-slate-800 hover:text-white md:hidden"
          onClick={() => setMobileOpen((o) => !o)}
          aria-expanded={mobileOpen}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {mobileOpen && (
        <nav
          className="border-t border-slate-800 px-4 py-3 md:hidden"
          aria-label="Mobile"
        >
          <ul className="flex flex-col gap-1">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className={cn(
                    "block rounded-lg px-3 py-2.5 text-sm font-medium",
                    pathname === link.href
                      ? "bg-slate-800 text-white"
                      : "text-slate-400 hover:bg-slate-800/60"
                  )}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
}
