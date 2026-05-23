import { cn } from "@/lib/utils";

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
}

export function Card({ children, className, hover }: CardProps) {
  return (
    <div
      className={cn(
        "rounded-2xl border border-slate-800/80 bg-slate-900/60 p-5 backdrop-blur-sm",
        hover && "transition-colors hover:border-slate-700 hover:bg-slate-900/80",
        className
      )}
    >
      {children}
    </div>
  );
}
