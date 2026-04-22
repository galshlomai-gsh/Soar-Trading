import Image from "next/image";
import { Container } from "@/components/ui/Container";

const features = [
  {
    icon: "/feature-icons/profit-split.png",
    title: "90% Profit Split",
    body:
      "Earn the industry's highest profit share. Scale up to a 90% split as you achieve your growth targets.",
  },
  {
    icon: "/feature-icons/fast-payouts.png",
    title: "Fast Payouts",
    body:
      "Requested. Approved. Sent. Receive your profits in under 24 hours via Crypto or Wire Transfer.",
  },
  {
    icon: "/feature-icons/no-time-limits.png",
    title: "No Time Limits",
    body:
      "Trade at your own pace. There are no minimum or maximum trading days on our evaluations.",
  },
];

const brandBlue = "#3393F2";

export function WhyChooseSoar() {
  return (
    <section className="bg-white">
      <Container size="wide">
        <div className="flex flex-col gap-8 pt-24 pb-12 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <div
              className="text-[11px] font-semibold uppercase tracking-[0.22em]"
              style={{ color: brandBlue }}
            >
              Precision Trading
            </div>
            <h2
              className="mt-4 text-balance font-display text-4xl font-extrabold leading-[1.05] tracking-[-0.024em] sm:text-5xl md:text-6xl"
              style={{ color: brandBlue }}
            >
              The Soar Advantage.
            </h2>
          </div>
          <p className="max-w-md text-[15px] leading-relaxed text-sectionLightInk/70">
            We've eliminated the friction found in traditional prop firms. No
            arbitrary rules. No slow payouts. Just raw performance tools.
          </p>
        </div>
      </Container>
      <div className="relative overflow-hidden bg-[#D9E9FF] pt-12 pb-24">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 opacity-60"
          style={{
            backgroundColor: "#027FDC",
            WebkitMaskImage: "url(/brand/mask-group.png)",
            maskImage: "url(/brand/mask-group.png)",
            WebkitMaskRepeat: "no-repeat",
            maskRepeat: "no-repeat",
            WebkitMaskPosition: "left bottom",
            maskPosition: "left bottom",
            WebkitMaskSize: "min(820px, 70%)",
            maskSize: "min(820px, 70%)",
          }}
        />
        <Container size="wide" className="relative">
          <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
            {features.map((f) => (
              <div
                key={f.title}
                className="rounded-[20px] bg-white p-8 shadow-[0_18px_50px_-28px_rgba(11,18,32,0.25)]"
              >
                <Image
                  src={f.icon}
                  alt=""
                  width={56}
                  height={56}
                  className="h-14 w-14"
                />
                <h3
                  className="mt-6 text-xl font-bold"
                  style={{ color: brandBlue }}
                >
                  {f.title}
                </h3>
                <p className="mt-3 text-[14px] leading-relaxed text-sectionLightInk/70">
                  {f.body}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </div>
    </section>
  );
}
