import { cn } from "@/lib/cn";

export function MetricTile({
  label,
  value,
  note,
  tone = "default",
  className,
}: {
  label: string;
  value: React.ReactNode;
  note?: React.ReactNode;
  tone?: "default" | "warn" | "accent";
  className?: string;
}) {
  return (
    <div className={cn("flex flex-col gap-1.5", className)}>
      <span className="text-[10px] font-semibold uppercase tracking-[0.18em] text-ink-muted">
        {label}
      </span>
      <span
        className={cn(
          "text-2xl font-bold tracking-tight tabular-nums",
          tone === "default" && "text-ink",
          tone === "warn" && "text-warn",
          tone === "accent" && "text-accent",
        )}
      >
        {value}
      </span>
      {note && (
        <span className="text-[11px] leading-snug text-ink-muted">
          {note}
        </span>
      )}
    </div>
  );
}
