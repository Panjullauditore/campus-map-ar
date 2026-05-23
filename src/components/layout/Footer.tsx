import { campusInfo } from "@/data/campus";

export function Footer() {
  return (
    <footer className="mt-auto border-t border-slate-800/80 bg-slate-950">
      <div className="mx-auto flex max-w-6xl flex-col gap-2 px-4 py-8 text-center text-sm text-slate-500 sm:px-6 sm:text-left">
        <p>
          <span className="font-medium text-slate-400">{campusInfo.name}</span> — Campus
          Map AR (website preview)
        </p>
        <p className="text-xs">{campusInfo.address}</p>
        <p className="text-xs text-slate-600">
          AR navigation is not enabled yet. This site is a placeholder for the web app
          layer.
        </p>
      </div>
    </footer>
  );
}
