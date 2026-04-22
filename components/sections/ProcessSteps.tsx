import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

const steps = [
  {
    num: "/process/num-01.png",
    title: "Pass the Evaluation",
    body:
      "Demonstrate your trading skills on our evaluation accounts. Follow the rules and hit the profit target.",
  },
  {
    num: "/process/num-02.png",
    title: "Verify Your Results",
    body:
      "Once the target is reached, our team performs a quick risk audit to ensure consistency and rule compliance.",
  },
  {
    num: "/process/num-03.png",
    title: "Trade Institutional Funds",
    body:
      "Receive your master account details and start trading our capital. Scale your account as you withdraw profits.",
  },
];

export function ProcessSteps() {
  return (
    <section className="py-24">
      <Container size="wide">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[1.05fr_1fr] lg:items-center lg:gap-16">
          <ProcessCollage />

          <div>
            <h2 className="text-balance font-display text-4xl font-extrabold leading-[1.05] tracking-[-0.024em] text-ink sm:text-5xl">
              Simple Process,
              <br />
              <span className="text-gradient">Global Capital</span>
            </h2>

            <ol className="mt-10 flex flex-col gap-7">
              {steps.map((s) => (
                <li key={s.title} className="flex items-start gap-5">
                  <Image
                    src={s.num}
                    alt=""
                    width={56}
                    height={56}
                    className="h-12 w-12 shrink-0 sm:h-14 sm:w-14"
                  />
                  <div className="pt-1">
                    <h3 className="text-lg font-bold text-ink">{s.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-ink-muted sm:text-[15px]">
                      {s.body}
                    </p>
                  </div>
                </li>
              ))}
            </ol>

            <div className="mt-10">
              <Button href="/challenges" size="lg">
                Start Your Evaluation
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

function ProcessCollage() {
  return (
    <div className="grid grid-cols-2 gap-4 sm:gap-5">
      <div className="flex flex-col gap-4 sm:gap-5">
        <CollageTile src="/process/step-1-registration.png" ratio="1055 / 558" alt="Step 1 — Registration" />
        <CollageTile src="/process/chart.png" ratio="1055 / 1096" alt="Trading chart" />
      </div>
      <div className="flex flex-col gap-4 sm:gap-5">
        <CollageTile src="/process/desk.png" ratio="1055 / 1096" alt="Trading workspace" />
        <CollageTile src="/process/step-3-get-funded.png" ratio="1055 / 583" alt="Step 3 — Get Funded" />
      </div>
    </div>
  );
}

function CollageTile({
  src,
  ratio,
  alt,
}: {
  src: string;
  ratio: string;
  alt: string;
}) {
  return (
    <div
      className="relative w-full overflow-hidden rounded-2xl"
      style={{ aspectRatio: ratio }}
    >
      <Image
        src={src}
        alt={alt}
        fill
        sizes="(min-width: 1024px) 30vw, 50vw"
        className="object-cover"
      />
    </div>
  );
}
