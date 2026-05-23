# Campus Map AR — Website

A **Next.js** campus map web application (placeholder) for an AR navigation project. The site lets visitors browse buildings and an interactive 2D map. **AR camera navigation is not implemented yet** — only the web layer and AR-ready dependencies.

## Stack

| Layer | Technology |
|-------|------------|
| Framework | [Next.js 16](https://nextjs.org) (App Router) |
| UI | React 19, TypeScript, Tailwind CSS 4 |
| Icons | lucide-react |
| Future AR / 3D | three, @react-three/fiber, @react-three/drei |

## Getting started

```bash
cd campus-map-web
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Pages

- **/** — Landing page
- **/map** — Interactive 2D campus map with pins
- **/locations** — Searchable location directory
- **/ar** — AR coming-soon preview + simple 3D placeholder scene

## Customize your campus

Edit `src/data/campus.ts`:

- Change `campusInfo` (name, tagline, address)
- Update `campusLocations` (buildings, `mapX` / `mapY` pin positions, `arAnchorId`)

## AR integration (later)

- Config stub: `src/lib/ar-config.ts`
- 3D placeholder: `src/components/ar/ARScenePlaceholder.tsx`
- Add WebXR session + hit-test when ready
- Optional: 8th Wall, AR.js, or native app WebView

## Scripts

```bash
npm run dev    # development server
npm run build  # production build
npm run start  # run production build
npm run lint   # ESLint
```

## Project note

The app lives in `campus-map-web/` because the parent folder name (`Map AR`) does not satisfy npm package naming rules.
