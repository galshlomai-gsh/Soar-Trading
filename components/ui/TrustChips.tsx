import { Ban, RefreshCw, ShieldCheck } from "lucide-react";
import { externalLinks } from "@/components/data/company";
import { cn } from "@/lib/cn";

type Alignment = "left" | "center";
type Tone = "dark" | "light";

interface Chip {
  icon: React.ComponentType<{ className?: string; strokeWidth?: number }>;
  label: string;
  href?: string;
  external?: boolean;
}

const chips: Chip[] = [
  {
    icon: RefreshCw,
    label: "Refundable on first payout",
  },
  {
    icon: Ban,
    label: "Simulated only · No deposits",
  },
  {
    icon: ShieldCheck,
    label: "Listed on TTP",
    href: externalLinks.ttp,
    external: true,
  },
];

export function TrustChips({
  align = "center",
  tone = "dark",
  className,
}: {
  align?: Alignment;
  tone?: Tone;
  className?: string;
}) {
  return (
    <ul
      className={cn(
        "flex flex-wrap items-center gap-2",
        align === "center" && "justify-center",
        className,
      )}
    >
      {chips.map((c) => (
        <li key={c.label}>
          <ChipInner chip={c} tone={tone} />
        </li>
      ))}
    </ul>
  );
}

function ChipInner({ chip, tone }: { chip: Chip; tone: Tone }) {
  const Icon = chip.icon;
  const className = cn(
    "inline-flex items-center gap-1.5 rounded-full border px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.12em] transition-colors",
    tone === "dark"
      ? "border-white/10 bg-surface/60 text-ink-muted hover:text-ink"
      : "border-sectionLightInk/15 bg-white/80 text-sectionLightInk/70 hover:text-sectionLightInk",
  );
  const inner = (
    <>
      <Icon className="h-3 w-3 text-accent" strokeWidth={2.5} />
      <span>{chip.label}</span>
    </>
  );
  if (chip.href) {
    return (
      <a
        href={chip.href}
        target={chip.external ? "_blank" : undefined}
        rel={chip.external ? "noreferrer" : undefined}
        className={className}
      >
        {inner}
      </a>
    );
  }
  return <span className={className}>{inner}</span>;
}
