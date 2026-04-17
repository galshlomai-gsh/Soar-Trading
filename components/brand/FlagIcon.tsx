import { cn } from "@/lib/cn";

type FlagRenderer = () => React.ReactNode;

const flags: Record<string, FlagRenderer> = {
  GB: () => (
    <>
      <rect width="30" height="20" fill="#012169" />
      <path d="M0 0l30 20M30 0L0 20" stroke="#fff" strokeWidth="4" />
      <path d="M0 0l30 20M30 0L0 20" stroke="#C8102E" strokeWidth="2" clipPath="inset(0)" />
      <path d="M15 0v20M0 10h30" stroke="#fff" strokeWidth="6" />
      <path d="M15 0v20M0 10h30" stroke="#C8102E" strokeWidth="3" />
    </>
  ),
  US: () => (
    <>
      <rect width="30" height="20" fill="#fff" />
      {Array.from({ length: 7 }).map((_, i) => (
        <rect key={i} y={i * 3 + (i > 0 ? 0 : 0)} width="30" height="1.5" fill="#B22234" transform={`translate(0 ${i * 3})`} />
      ))}
      <rect width="13" height="10.5" fill="#3C3B6E" />
    </>
  ),
  DE: () => (
    <>
      <rect width="30" height="6.67" fill="#000" />
      <rect y="6.67" width="30" height="6.67" fill="#DD0000" />
      <rect y="13.33" width="30" height="6.67" fill="#FFCE00" />
    </>
  ),
  FR: () => (
    <>
      <rect width="10" height="20" fill="#0055A4" />
      <rect x="10" width="10" height="20" fill="#fff" />
      <rect x="20" width="10" height="20" fill="#EF4135" />
    </>
  ),
  JP: () => (
    <>
      <rect width="30" height="20" fill="#fff" />
      <circle cx="15" cy="10" r="5" fill="#BC002D" />
    </>
  ),
  AU: () => (
    <>
      <rect width="30" height="20" fill="#012169" />
      <rect x="15" y="0" width="15" height="10" fill="#012169" />
      <path d="M0 0l15 10M15 0L0 10" stroke="#fff" strokeWidth="1.5" />
      <path d="M7.5 0v10M0 5h15" stroke="#fff" strokeWidth="2" />
      <path d="M7.5 0v10M0 5h15" stroke="#C8102E" strokeWidth="1" />
      <circle cx="22" cy="15" r="1.1" fill="#fff" />
      <circle cx="18" cy="17" r="0.8" fill="#fff" />
      <circle cx="25" cy="12" r="0.8" fill="#fff" />
    </>
  ),
};

export function FlagIcon({
  code,
  className,
}: {
  code: string;
  className?: string;
}) {
  const key = code.toUpperCase();
  const draw = flags[key] ?? flags.GB;
  return (
    <svg
      viewBox="0 0 30 20"
      className={cn("shrink-0 overflow-hidden", className)}
      aria-label={key}
    >
      {draw()}
    </svg>
  );
}
