import { Container } from "@/components/ui/Container";
import { PageHero } from "@/components/layout/PageHero";

export interface LegalSection {
  heading: string;
  body: string | string[];
}

export function LegalPage({
  title,
  subtitle,
  lastUpdated,
  sections,
  note,
}: {
  title: string;
  subtitle?: string;
  lastUpdated?: string;
  sections: LegalSection[];
  note?: string;
}) {
  return (
    <>
      <PageHero
        eyebrow="Legal"
        title={title}
        subtitle={subtitle}
        breadcrumbs={[{ label: "Legal" }, { label: title }]}
      />
      <section className="pt-12 pb-24">
        <Container size="narrow">
          {lastUpdated && (
            <p className="text-center text-xs text-ink-muted">
              Last updated: {lastUpdated}
            </p>
          )}
          <div className="flex flex-col gap-6">
            {sections.map((s) => (
              <section
                key={s.heading}
                className="rounded-card border border-white/10 bg-surface/60 p-7"
              >
                <h2 className="text-lg font-bold text-ink">{s.heading}</h2>
                {Array.isArray(s.body) ? (
                  <ul className="mt-3 flex flex-col gap-2 text-sm leading-relaxed text-ink/90">
                    {s.body.map((item) => (
                      <li
                        key={item}
                        className="before:mr-2 before:text-accent before:content-['•']"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p className="mt-3 whitespace-pre-line text-sm leading-relaxed text-ink/90">
                    {s.body}
                  </p>
                )}
              </section>
            ))}
          </div>
          {note && (
            <p className="mt-10 text-xs leading-relaxed text-ink-muted">
              {note}
            </p>
          )}
        </Container>
      </section>
    </>
  );
}
