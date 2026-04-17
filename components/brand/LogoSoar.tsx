import { cn } from "@/lib/cn";

export function LogoSoar({ className }: { className?: string }) {
  return (
    <div className={cn("flex items-center gap-2.5", className)}>
      <svg
        width="28"
        height="28"
        viewBox="0 0 28 28"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden
      >
        <defs>
          <linearGradient id="soar-logo" x1="0" y1="0" x2="28" y2="28" gradientUnits="userSpaceOnUse">
            <stop stopColor="#B9D0FF" />
            <stop offset="1" stopColor="#5B8EF0" />
          </linearGradient>
        </defs>
        <path
          d="M4 20c3-8 8-12 20-14"
          stroke="url(#soar-logo)"
          strokeWidth="2.4"
          strokeLinecap="round"
        />
        <path
          d="M16 6h8v8"
          stroke="url(#soar-logo)"
          strokeWidth="2.4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <circle cx="5.5" cy="22" r="2" fill="url(#soar-logo)" />
      </svg>
      <span className="text-[15px] font-bold tracking-tight text-ink">
        Soar <span className="text-ink-muted font-semibold">Funding</span>
      </span>
    </div>
  );
}
