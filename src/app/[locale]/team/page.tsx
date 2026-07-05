import { getTranslations, setRequestLocale } from "next-intl/server";
import { Reveal } from "@/components/motion/Reveal";
import { Container } from "@/components/ui/Container";
import { createLocalizedMetadata } from "@/lib/seo";

type TeamRouteProps = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: TeamRouteProps) {
  const { locale } = await params;
  return createLocalizedMetadata({ locale, page: "team" });
}

// Data-driven so named expert profiles can be added under each field later
// without touching the layout.
const expertiseKeys = [
  "regulators",
  "operators",
  "investors",
  "groundServices",
  "constructionQuality",
  "training",
] as const;

export default async function TeamPage({ params }: TeamRouteProps) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("TeamPage");

  return (
    <>
      <section className="border-b border-neutral-200 py-16 md:py-20 dark:border-white/10">
        <Container>
          <Reveal className="max-w-3xl">
            <h1 className="font-heading text-3xl font-semibold tracking-tight text-balance text-foreground md:text-4xl lg:text-5xl">
              {t("intro.heading")}
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-neutral-600 md:text-xl dark:text-neutral-400">
              {t("intro.body")}
            </p>
          </Reveal>
        </Container>
      </section>

      <section className="py-16 md:py-24">
        <Container>
          <Reveal className="mb-12 max-w-3xl border-l-2 border-accent pl-6 md:mb-14">
            <p className="text-base leading-relaxed text-neutral-700 md:text-lg dark:text-neutral-300">
              {t("framing")}
            </p>
          </Reveal>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {expertiseKeys.map((key, index) => (
              <Reveal className="h-full" delay={index * 0.06} key={key}>
                <div className="h-full rounded-lg border border-neutral-200 bg-background p-6 dark:border-white/10">
                  <h2 className="font-heading text-lg font-semibold text-foreground md:text-xl">
                    {t(`expertise.${key}.title`)}
                  </h2>
                  <p className="mt-3 text-sm leading-relaxed text-neutral-600 dark:text-neutral-400">
                    {t(`expertise.${key}.body`)}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <section className="border-t border-neutral-200 py-16 md:py-24 dark:border-white/10">
        <Container>
          <Reveal className="max-w-3xl border-l-2 border-accent pl-6">
            <p className="text-base leading-relaxed text-neutral-700 md:text-lg dark:text-neutral-300">
              {t("regionalPanel")}
            </p>
          </Reveal>
        </Container>
      </section>
    </>
  );
}
