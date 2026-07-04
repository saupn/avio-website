import { getTranslations } from "next-intl/server";
import { Container } from "@/components/ui/Container";

const statKeys = ["airports", "law", "firms"] as const;

/** Home "market moment": three stat cards on Viet Nam's new-airport wave. */
export async function MarketMoment() {
  const t = await getTranslations("Home.marketMoment.stats");

  return (
    <section className="bg-neutral-50 py-20 md:py-28 lg:py-32">
      <Container>
        <div className="grid gap-10 md:grid-cols-3">
          {statKeys.map((key) => (
            <div className="animate-in-section" key={key}>
              <p className="text-4xl font-bold text-primary md:text-5xl">
                {t(`${key}.value`)}
              </p>
              <p className="mt-3 text-sm font-medium leading-relaxed text-neutral-600">
                {t(`${key}.label`)}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
