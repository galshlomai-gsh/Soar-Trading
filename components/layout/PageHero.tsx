import { Container } from "@/components/ui/Container";
import { Badge } from "@/components/ui/Badge";

export function PageHero({
  eyebrow,
  title,
  subtitle,
  children,
}: {
  eyebrow?: string;
  title: React.ReactNode;
  subtitle?: React.ReactNode;
  children?: React.ReactNode;
}) {
  return (
    <section className="relative overflow-hidden border-b border-white/5">
      <div
        aria-hidden
        className="absolute inset-0 opacity-80"
        style={{
          background:
            "radial-gradient(600px 320px at 20% 0%, rgba(125,191,255,0.14), transparent 60%), radial-gradient(520px 320px at 90% 100%, rgba(91,142,240,0.12), transparent 60%)",
        }}
      />
      <div
        aria-hidden
        className="absolute inset-0 bg-grid mask-radial-fade opacity-20"
      />
      <Container size="narrow" className="relative pt-20 pb-14 md:pt-24 md:pb-20">
        <div className="text-center">
          {eyebrow && (
            <div className="flex justify-center">
              <Badge tone="accent">{eyebrow}</Badge>
            </div>
          )}
          <h1 className="mt-5 text-4xl font-extrabold tracking-tight text-ink sm:text-5xl md:text-[56px] md:leading-[1.05]">
            {title}
          </h1>
          {subtitle && (
            <p className="mx-auto mt-5 max-w-xl text-sm leading-relaxed text-ink-muted sm:text-[1rem]">
              {subtitle}
            </p>
          )}
          {children && (
            <div className="mt-6 flex flex-wrap justify-center gap-3">
              {children}
            </div>
          )}
        </div>
      </Container>
    </section>
  );
}
