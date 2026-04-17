import { Container } from "@/components/ui/Container";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";

export function ComingSoon({ title, subtitle }: { title: string; subtitle: string }) {
  return (
    <section className="flex min-h-[60vh] items-center py-24">
      <Container size="narrow" className="text-center">
        <Badge tone="accent">Coming Soon</Badge>
        <h1 className="mt-6 text-4xl font-extrabold tracking-tight text-ink sm:text-5xl">
          {title}
        </h1>
        <p className="mx-auto mt-4 max-w-lg text-sm leading-relaxed text-ink-muted sm:text-base">
          {subtitle}
        </p>
        <div className="mt-8 flex justify-center gap-3">
          <Button href="/">Back Home</Button>
          <Button href="/challenges" variant="ghost">
            Select a Challenge
          </Button>
        </div>
      </Container>
    </section>
  );
}
