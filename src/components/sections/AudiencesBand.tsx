import { getTranslations } from "next-intl/server";
import { Reveal } from "@/components/motion/Reveal";
import { Container } from "@/components/ui/Container";

const audienceKeys = [
  "internationalOperators",
  "investors",
  "financial",
] as const;

/** Home audiences band: the three kinds of partner Avio Group is built for. */
export async function AudiencesBand() {
  const t = await getTranslations("Home.audiences");

  return (
    <section className="bg-surface py-20 md:py-28 lg:py-32">
      <Container>
        <Reveal>
          <h2 className="font-heading max-w-3xl text-2xl font-semibold tracking-tight text-balance text-foreground md:text-3xl">
            {t("heading")}
          </h2>
        </Reveal>
        <div className="mt-12 grid gap-8 md:mt-14 md:grid-cols-3 md:gap-10">
          {audienceKeys.map((key, index) => (
            <Reveal className="h-full" delay={index * 0.08} key={key}>
              <div className="h-full border-t-2 border-accent pt-5">
                <h3 className="font-heading text-lg font-semibold text-foreground md:text-xl">
                  {t(`${key}.title`)}
                </h3>
                <p className="mt-3 text-base leading-relaxed text-neutral-700 dark:text-neutral-300">
                  {t(`${key}.body`)}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
