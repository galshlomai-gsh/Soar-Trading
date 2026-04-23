import { cn } from "@/lib/cn";

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "center",
  className,
  emphasize,
  theme = "dark",
}: {
  eyebrow?: string;
  title: React.ReactNode;
  subtitle?: React.ReactNode;
  align?: "left" | "center";
  className?: string;
  emphasize?: string;
  theme?: "dark" | "light";
}) {
  const titleText =
    emphasize && typeof title === "string"
      ? title.split(emphasize).reduce<React.ReactNode[]>((acc, part, i, arr) => {
          acc.push(part);
          if (i < arr.length - 1) {
            acc.push(
              <span key={i} className="text-gradient">
                {emphasize}
              </span>,
            );
          }
          return acc;
        }, [])
      : title;

  return (
    <div
      className={cn(
        align === "center" ? "text-center" : "text-left",
        className,
      )}
    >
      {eyebrow && (
        <div
          className={cn(
            "mb-4 text-[11px] font-semibold uppercase tracking-[0.22em]",
            theme === "dark" ? "text-accent" : "text-accent-deep",
          )}
        >
          {eyebrow}
        </div>
      )}
      <h2
        className={cn(
          "text-balance font-display text-3xl font-extrabold leading-[1.08] tracking-[-0.02em] sm:text-4xl md:text-5xl",
          theme === "dark" ? "text-ink" : "text-sectionLightInk",
        )}
      >
        {titleText}
      </h2>
      {subtitle && (
        <p
          className={cn(
            "mx-auto mt-5 max-w-2xl text-pretty text-sm leading-relaxed sm:text-[1rem]",
            theme === "dark" ? "text-ink-muted" : "text-sectionLightInk/60",
            align === "left" && "mx-0",
          )}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
