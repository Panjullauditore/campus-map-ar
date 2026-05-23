import Link from "next/link";
import { cn } from "@/lib/utils";

type ButtonVariant = "primary" | "secondary" | "ghost" | "outline";

const variants: Record<ButtonVariant, string> = {
  primary:
    "bg-emerald-500 text-slate-950 hover:bg-emerald-400 shadow-lg shadow-emerald-500/20",
  secondary: "bg-slate-800 text-slate-100 hover:bg-slate-700 border border-slate-700",
  ghost: "text-slate-300 hover:bg-slate-800/80 hover:text-white",
  outline:
    "border border-emerald-500/40 text-emerald-300 hover:bg-emerald-500/10 hover:border-emerald-400/60",
};

interface ButtonProps {
  children: React.ReactNode;
  href?: string;
  variant?: ButtonVariant;
  className?: string;
  onClick?: () => void;
  type?: "button" | "submit";
  disabled?: boolean;
  title?: string;
}

export function Button({
  children,
  href,
  variant = "primary",
  className,
  onClick,
  type = "button",
  disabled,
  title,
}: ButtonProps) {
  const styles = cn(
    "inline-flex items-center justify-center gap-2 rounded-xl px-5 py-2.5 text-sm font-semibold transition-all focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-400 disabled:opacity-50 disabled:pointer-events-none",
    variants[variant],
    className
  );

  if (href) {
    return (
      <Link href={href} className={styles} title={title}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} className={styles} onClick={onClick} disabled={disabled} title={title}>
      {children}
    </button>
  );
}
