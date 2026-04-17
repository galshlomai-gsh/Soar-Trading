import { PayoutCertificate } from "@/components/ui/PayoutCertificate";
import { payouts } from "@/components/data/payouts";

export function PayoutMarquee() {
  const row = [...payouts, ...payouts];
  return (
    <section className="relative overflow-hidden border-b border-white/5 py-10">
      <div className="marquee-mask">
        <div className="flex w-max gap-4 animate-marquee">
          {row.map((r, i) => (
            <PayoutCertificate key={`${r.name}-${i}`} record={r} />
          ))}
        </div>
      </div>
    </section>
  );
}
