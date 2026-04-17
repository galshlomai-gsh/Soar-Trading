import { cn } from "@/lib/cn";

const shell = "text-ink-muted/80 hover:text-ink-muted transition-colors";

export function BrandBloomberg({ className }: { className?: string }) {
  return (
    <div className={cn(shell, className)}>
      <svg width="108" height="20" viewBox="0 0 108 20" fill="none" aria-label="Bloomberg">
        <rect x="0.5" y="0.5" width="19" height="19" rx="3" stroke="currentColor" />
        <text x="10" y="14" textAnchor="middle" fontSize="11" fontWeight="800" fill="currentColor" fontFamily="system-ui">B</text>
        <text x="26" y="14" fontSize="11" fontWeight="700" letterSpacing="0.02em" fill="currentColor" fontFamily="system-ui">Bloomberg</text>
      </svg>
    </div>
  );
}

export function BrandTradingView({ className }: { className?: string }) {
  return (
    <div className={cn(shell, className)}>
      <svg width="128" height="20" viewBox="0 0 128 20" fill="none" aria-label="TradingView">
        <path d="M2 5h10v2.2H8.5V17H6.5V7.2H2V5z" fill="currentColor" />
        <path d="M13 5l3.5 12 3.5-12h2.2l-4.6 14.4h-2.2L7.8 5h2.3z" fill="currentColor" fillOpacity="0.9" transform="translate(4 0)" />
        <text x="30" y="14" fontSize="11" fontWeight="700" letterSpacing="0.02em" fill="currentColor" fontFamily="system-ui">TradingView</text>
      </svg>
    </div>
  );
}

export function BrandMT5({ className }: { className?: string }) {
  return (
    <div className={cn(shell, className)}>
      <svg width="128" height="20" viewBox="0 0 128 20" fill="none" aria-label="MetaTrader 5">
        <circle cx="10" cy="10" r="7.5" stroke="currentColor" />
        <text x="10" y="13.5" textAnchor="middle" fontSize="8.5" fontWeight="800" fill="currentColor" fontFamily="system-ui">M5</text>
        <text x="23" y="14" fontSize="11" fontWeight="700" letterSpacing="0.02em" fill="currentColor" fontFamily="system-ui">MetaTrader 5</text>
      </svg>
    </div>
  );
}

export function BrandReuters({ className }: { className?: string }) {
  return (
    <div className={cn(shell, className)}>
      <svg width="96" height="20" viewBox="0 0 96 20" fill="none" aria-label="Reuters">
        <circle cx="10" cy="10" r="7" fill="currentColor" fillOpacity="0.85" />
        <circle cx="10" cy="10" r="3" fill="#05070D" />
        <text x="23" y="14" fontSize="11" fontWeight="800" letterSpacing="0.18em" fill="currentColor" fontFamily="system-ui">REUTERS</text>
      </svg>
    </div>
  );
}

export function BrandDXTrade({ className, active }: { className?: string; active?: boolean }) {
  return (
    <div className={cn("flex items-center gap-1.5 font-bold", className)}>
      <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden>
        <path
          d="M2 10l3-3 2 2 4-5"
          stroke={active ? "#0B1220" : "currentColor"}
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
      <span>DXTRADE</span>
    </div>
  );
}

export function BrandMatchTrader({ className, active }: { className?: string; active?: boolean }) {
  return (
    <div className={cn("flex items-center gap-1.5 font-bold", className)}>
      <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden>
        <path
          d="M2 10l2-5 3 7 2-4 3 3"
          stroke={active ? "#0B1220" : "currentColor"}
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
      <span>MATCHTRADER</span>
    </div>
  );
}
