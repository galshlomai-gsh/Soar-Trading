import { FlagIcon } from "@/components/brand/FlagIcon";
import { Check } from "lucide-react";

export interface PayoutRecord {
  name: string;
  country: string;
  countryCode: string;
  amount: number;
}

export function PayoutCertificate({ record }: { record: PayoutRecord }) {
  const fmt = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  });
  return (
    <div className="w-[320px] shrink-0 rounded-card border border-white/10 bg-surface/80 p-4">
      <div className="flex items-center gap-3">
        <FlagIcon code={record.countryCode} className="h-5 w-7 rounded-sm" />
        <div className="flex flex-col leading-tight">
          <span className="text-[10px] font-semibold uppercase tracking-[0.18em] text-ink-muted">
            {record.country}
          </span>
          <span className="text-base font-semibold text-ink">
            {record.name}
          </span>
        </div>
        <div className="ml-auto flex h-7 w-7 items-center justify-center rounded-md bg-accent/20 text-accent">
          <Check className="h-3.5 w-3.5" strokeWidth={3} />
        </div>
      </div>
      <div className="mt-4 flex items-end justify-between rounded-lg bg-accent-gradient p-4 text-[#0B1220]">
        <div className="flex flex-col">
          <span className="text-[9px] font-bold uppercase tracking-[0.24em] opacity-80">
            Payout Certificate
          </span>
          <span className="mt-1 text-[11px] font-semibold opacity-70">
            Verified
          </span>
        </div>
        <span className="text-xl font-extrabold tabular-nums">
          {fmt.format(record.amount)}
        </span>
      </div>
    </div>
  );
}
