import Link from "next/link";
import { cn } from "@/lib/cn";

type Variant = "primary" | "ghost" | "outline";
type Size = "sm" | "md" | "lg";

const base =
  "inline-flex items-center justify-center gap-2 font-semibold tracking-wide transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-base disabled:opacity-50 disabled:pointer-events-none select-none";

const variants: Record<Variant, string> = {
  primary:
    "bg-accent-gradient text-[#0B1220] shadow-[0_10px_30px_-10px_rgba(91,142,240,0.8)] hover:brightness-110 active:brightness-95",
  ghost:
    "bg-transparent text-ink hover:bg-white/5 border border-white/10",
  outline:
    "bg-surface/60 text-ink border border-white/10 hover:border-accent/50",
};

const sizes: Record<Size, string> = {
  sm: "h-9 px-4 text-xs rounded-[10px]",
  md: "h-11 px-5 text-sm rounded-[12px]",
  lg: "h-14 px-7 text-[0.95rem] rounded-[14px]",
};

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant;
  size?: Size;
  href?: string;
  fullWidth?: boolean;
}

export function Button({
  variant = "primary",
  size = "md",
  href,
  className,
  fullWidth,
  children,
  ...rest
}: ButtonProps) {
  const classes = cn(
    base,
    variants[variant],
    sizes[size],
    fullWidth && "w-full",
    className,
  );
  if (href) {
    const { onClick } = rest;
    const isExternal = /^https?:\/\//.test(href) || href.startsWith("mailto:");
    const anchorClick = onClick as unknown as React.MouseEventHandler<HTMLAnchorElement>;
    if (isExternal) {
      return (
        <a href={href} className={classes} onClick={anchorClick}>
          {children}
        </a>
      );
    }
    return (
      <Link href={href} className={classes} onClick={anchorClick}>
        {children}
      </Link>
    );
  }
  return (
    <button className={classes} {...rest}>
      {children}
    </button>
  );
}
