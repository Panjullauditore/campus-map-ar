"use client";

import { Search } from "lucide-react";

interface SearchBarProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
}

export function SearchBar({
  value,
  onChange,
  placeholder = "Search buildings, dining, parking…",
}: SearchBarProps) {
  return (
    <label className="relative block">
      <span className="sr-only">Search locations</span>
      <Search
        className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-500"
        aria-hidden
      />
      <input
        type="search"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="w-full rounded-xl border border-slate-700/80 bg-slate-900/80 py-3 pl-11 pr-4 text-sm text-white placeholder:text-slate-500 focus:border-emerald-500/50 focus:outline-none focus:ring-2 focus:ring-emerald-500/20"
      />
    </label>
  );
}
