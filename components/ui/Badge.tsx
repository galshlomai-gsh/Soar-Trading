import { cn } from "@/lib/cn";

export function Badge({
  children,
  className,
  tone = "default",
}: {
  children: React.ReactNode;
  className?: string;
  tone?: "default" | "accent" | "ok";
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-2 rounded-full border px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.14em]",
        tone === "default" && "border-white/10 bg-white/5 text-ink-muted",
        tone === "accent" && "border-accent/30 bg-accent/10 text-accent",
        tone === "ok" && "border-ok/30 bg-ok/10 text-ok",
        className,
      )}
    >
      {children}
    </span>
  );
}
