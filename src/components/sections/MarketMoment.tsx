import { getTranslations } from "next-intl/server";
import { Reveal } from "@/components/motion/Reveal";
import { Container } from "@/components/ui/Container";

const statKeys = ["airports", "law", "firms"] as const;

/** Home "market moment": three gold stat cards on Viet Nam's new-airport wave. */
export async function MarketMoment() {
  const t = await getTranslations("Home.marketMoment.stats");

  return (
    <section className="bg-surface py-20 md:py-28 lg:py-32">
      <Container>
        <div className="-mx-6 flex snap-x snap-mandatory gap-6 overflow-x-auto px-6 pb-2 sm:mx-0 sm:grid sm:grid-cols-3 sm:gap-10 sm:overflow-visible sm:px-0 sm:pb-0">
          {statKeys.map((key, index) => (
            <Reveal
              className="min-w-[78%] shrink-0 snap-start sm:min-w-0 sm:shrink"
              delay={index * 0.08}
              key={key}
            >
              <p className="font-heading text-[3.5rem] font-semibold leading-none tracking-tight text-accent md:text-[4rem]">
                {t(`${key}.value`)}
              </p>
              <p className="mt-4 max-w-xs text-sm leading-relaxed text-neutral-600 dark:text-neutral-400">
                {t(`${key}.label`)}
              </p>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
