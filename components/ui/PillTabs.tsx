"use client";

import { cn } from "@/lib/cn";

export interface PillOption<T extends string> {
  value: T;
  label: string;
}

export function PillTabs<T extends string>({
  options,
  value,
  onChange,
  size = "md",
  className,
}: {
  options: PillOption<T>[];
  value: T;
  onChange: (v: T) => void;
  size?: "sm" | "md";
  className?: string;
}) {
  return (
    <div
      role="tablist"
      className={cn(
        "inline-flex w-full items-center gap-1 rounded-full border border-white/10 bg-surface/80 p-1",
        className,
      )}
    >
      {options.map((o) => {
        const active = o.value === value;
        return (
          <button
            key={o.value}
            role="tab"
            aria-selected={active}
            onClick={() => onChange(o.value)}
            className={cn(
              "flex-1 rounded-full font-semibold transition-all",
              size === "sm" ? "h-8 text-xs" : "h-10 text-[13px]",
              active
                ? "bg-accent text-[#0B1220] shadow-[0_6px_20px_-8px_rgba(143,184,255,0.7)]"
                : "text-ink-muted hover:text-ink",
            )}
          >
            {o.label}
          </button>
        );
      })}
    </div>
  );
}
