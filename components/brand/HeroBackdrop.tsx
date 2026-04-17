export function HeroBackdrop() {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
      <div
        className="absolute inset-0 opacity-60"
        style={{
          background:
            "radial-gradient(1200px 600px at 20% 10%, rgba(91,142,240,0.25), transparent 60%), radial-gradient(900px 500px at 85% 20%, rgba(243,127,106,0.18), transparent 60%), radial-gradient(800px 500px at 60% 80%, rgba(143,184,255,0.12), transparent 60%)",
        }}
      />
      <div className="absolute inset-0 bg-grid mask-radial-fade opacity-70" />
      <svg
        className="absolute inset-x-0 bottom-0 h-[280px] w-full opacity-30"
        viewBox="0 0 1440 280"
        preserveAspectRatio="none"
      >
        <defs>
          <linearGradient id="hero-line" x1="0" y1="0" x2="1440" y2="0" gradientUnits="userSpaceOnUse">
            <stop stopColor="#5B8EF0" stopOpacity="0" />
            <stop offset="0.3" stopColor="#5B8EF0" />
            <stop offset="0.7" stopColor="#B9D0FF" />
            <stop offset="1" stopColor="#B9D0FF" stopOpacity="0" />
          </linearGradient>
        </defs>
        <path
          d="M0 200 C 200 120, 320 240, 520 160 S 900 60, 1080 120 S 1320 240, 1440 180"
          stroke="url(#hero-line)"
          strokeWidth="1.5"
          fill="none"
        />
        <path
          d="M0 220 C 180 180, 360 260, 560 200 S 920 120, 1120 160 S 1340 260, 1440 220"
          stroke="url(#hero-line)"
          strokeWidth="1"
          fill="none"
          opacity="0.5"
        />
      </svg>
    </div>
  );
}
