import { cn } from "@/lib/cn";

/**
 * Stylized Soar Funding mark — a flying dove rendered as layered wing
 * shapes with the brand blue gradient. Keeps the accent gradient token
 * consistent across the site.
 */
export function SoarMark({
  size = 32,
  className,
}: {
  size?: number;
  className?: string;
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
      className={className}
    >
      <defs>
        <linearGradient
          id="soar-mark-grad"
          x1="6"
          y1="8"
          x2="42"
          y2="40"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0%" stopColor="#7DBFFF" />
          <stop offset="55%" stopColor="#3C85E8" />
          <stop offset="100%" stopColor="#1E5DC0" />
        </linearGradient>
        <linearGradient
          id="soar-mark-grad-soft"
          x1="6"
          y1="20"
          x2="42"
          y2="40"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0%" stopColor="#A3D0FF" />
          <stop offset="100%" stopColor="#4F95EC" />
        </linearGradient>
      </defs>

      {/* Upper wing — leading feather */}
      <path
        d="M8 24 C 14 12, 26 6, 42 8 C 38 15, 30 20, 22 22 C 18 23, 14 24, 8 24 Z"
        fill="url(#soar-mark-grad)"
      />
      {/* Secondary wing layer */}
      <path
        d="M10 28 C 16 20, 26 16, 38 18 C 34 24, 26 27, 18 28 C 14 28, 12 28, 10 28 Z"
        fill="url(#soar-mark-grad-soft)"
        opacity="0.9"
      />
      {/* Lower wing sweep */}
      <path
        d="M6 34 C 14 28, 22 26, 32 28 C 26 34, 18 36, 10 36 C 8 36, 7 35, 6 34 Z"
        fill="url(#soar-mark-grad-soft)"
        opacity="0.7"
      />
      {/* Tail feather */}
      <path
        d="M4 38 L 10 32 L 14 40 Z"
        fill="url(#soar-mark-grad)"
        opacity="0.8"
      />
      {/* Head tip */}
      <circle cx="40" cy="10" r="2" fill="#1E5DC0" opacity="0.9" />
    </svg>
  );
}

export function LogoSoar({
  className,
  size = 28,
}: {
  className?: string;
  size?: number;
}) {
  return (
    <div className={cn("inline-flex items-center gap-2.5", className)}>
      <SoarMark size={size} />
      <span className="flex flex-col leading-none">
        <span className="text-[15px] font-extrabold tracking-tight text-ink">
          SOAR
        </span>
        <span className="mt-0.5 text-[10px] font-semibold tracking-[0.22em] text-ink-muted">
          FUNDING
        </span>
      </span>
    </div>
  );
}
