import { cn } from "@/lib/cn";

type Tone = "accent" | "warn";

/**
 * Small labelled bar meter. `percent` is the filled portion (0-100).
 * Used to visualise profit targets vs max loss vs daily loss so the
 * challenge rules are instantly comparable.
 */
export function Meter({
  label,
  value,
  percent,
  tone = "accent",
  className,
}: {
  label: string;
  value: string;
  percent: number;
  tone?: Tone;
  className?: string;
}) {
  const clamped = Math.max(0, Math.min(100, percent));
  return (
    <div className={cn("flex flex-col gap-1.5", className)}>
      <div className="flex items-baseline justify-between">
        <span className="text-[10px] font-semibold uppercase tracking-[0.14em] text-ink-muted">
          {label}
        </span>
        <span
          className={cn(
            "text-xs font-bold tabular-nums",
            tone === "warn" ? "text-warn" : "text-accent",
          )}
        >
          {value}
        </span>
      </div>
      <div className="relative h-1.5 w-full overflow-hidden rounded-full bg-white/5">
        <div
          className={cn(
            "absolute inset-y-0 left-0 rounded-full",
            tone === "warn"
              ? "bg-warn/80"
              : "bg-accent-gradient",
          )}
          style={{ width: `${clamped}%` }}
        />
      </div>
    </div>
  );
}
