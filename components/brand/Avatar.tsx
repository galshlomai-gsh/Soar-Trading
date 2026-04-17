import { cn } from "@/lib/cn";

function hash(str: string) {
  let h = 0;
  for (let i = 0; i < str.length; i++) h = (h * 31 + str.charCodeAt(i)) | 0;
  return Math.abs(h);
}

const palettes = [
  ["#5B8EF0", "#B9D0FF"],
  ["#6FE3A5", "#2A8F6E"],
  ["#F37F6A", "#F3C78E"],
  ["#A78BFA", "#5B8EF0"],
  ["#F59EC0", "#A78BFA"],
];

export function Avatar({
  name,
  size = 40,
  className,
}: {
  name: string;
  size?: number;
  className?: string;
}) {
  const initials = name
    .split(" ")
    .map((p) => p[0])
    .slice(0, 2)
    .join("")
    .toUpperCase();
  const palette = palettes[hash(name) % palettes.length];
  const id = `avt-${hash(name)}`;
  return (
    <span
      className={cn(
        "relative inline-flex shrink-0 items-center justify-center overflow-hidden rounded-full ring-1 ring-white/15",
        className,
      )}
      style={{ width: size, height: size }}
      aria-hidden
    >
      <svg width={size} height={size} viewBox="0 0 40 40">
        <defs>
          <linearGradient id={id} x1="0" y1="0" x2="40" y2="40" gradientUnits="userSpaceOnUse">
            <stop stopColor={palette[0]} />
            <stop offset="1" stopColor={palette[1]} />
          </linearGradient>
        </defs>
        <rect width="40" height="40" fill={`url(#${id})`} />
        <text
          x="20"
          y="24"
          textAnchor="middle"
          fontSize="15"
          fontWeight="700"
          fill="#0B1220"
          fontFamily="system-ui"
        >
          {initials}
        </text>
      </svg>
    </span>
  );
}
