import { ARComingSoon } from "@/components/ar/ARComingSoon";

export const metadata = {
  title: "AR Preview",
  description: "Preview of upcoming augmented reality campus navigation",
};

export default function ARPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6">
      <header className="mb-8">
        <h1 className="text-3xl font-bold tracking-tight text-white">AR Preview</h1>
        <p className="mt-2 max-w-2xl text-slate-400">
          The augmented reality experience is not live yet. This page shows what is
          planned and a simple 3D placeholder built with React Three Fiber.
        </p>
      </header>
      <ARComingSoon />
    </div>
  );
}
