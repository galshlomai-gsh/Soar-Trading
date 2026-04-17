import { cn } from "@/lib/cn";

export function StepNumber({
  n,
  label,
  active,
  className,
}: {
  n: number;
  label?: string;
  active?: boolean;
  className?: string;
}) {
  const padded = String(n).padStart(2, "0");
  return (
    <div className={cn("flex items-center gap-3", className)}>
      <span
        className={cn(
          "flex h-8 w-8 items-center justify-center rounded-lg text-xs font-bold tabular-nums",
          active
            ? "bg-accent text-[#0B1220]"
            : "bg-white/5 text-ink-muted ring-1 ring-white/10",
        )}
      >
        {padded}
      </span>
      {label && (
        <span className="text-[11px] font-semibold uppercase tracking-[0.22em] text-ink-muted">
          {label}
        </span>
      )}
    </div>
  );
}
