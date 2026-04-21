import { Flame, Gauge, ShieldCheck } from "lucide-react";
import { type RiskTier, tierLabel } from "@/components/data/challenges";
import { cn } from "@/lib/cn";

const tierConfig: Record<
  RiskTier,
  { icon: React.ComponentType<{ className?: string; strokeWidth?: number }>; className: string }
> = {
  conservative: {
    icon: ShieldCheck,
    className: "border-ok/40 bg-ok/10 text-ok",
  },
  moderate: {
    icon: Gauge,
    className: "border-accent/40 bg-accent/10 text-accent",
  },
  aggressive: {
    icon: Flame,
    className: "border-warn/40 bg-warn/10 text-warn",
  },
};

export function TierChip({
  tier,
  className,
}: {
  tier: RiskTier;
  className?: string;
}) {
  const { icon: Icon, className: tierClassName } = tierConfig[tier];
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full border px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.14em]",
        tierClassName,
        className,
      )}
    >
      <Icon className="h-3 w-3" strokeWidth={2.5} />
      {tierLabel[tier]}
    </span>
  );
}
