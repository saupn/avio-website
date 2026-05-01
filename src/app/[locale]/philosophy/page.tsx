import { getTranslations, setRequestLocale } from "next-intl/server";
import { Container } from "@/components/ui/Container";
import { createLocalizedMetadata } from "@/lib/seo";

type PhilosophyRouteProps = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: PhilosophyRouteProps) {
  const { locale } = await params;
  return createLocalizedMetadata({ locale, page: "philosophy" });
}

const commitmentKeys = ["one", "two", "three", "four", "five"] as const;

export default async function PhilosophyPage({ params }: PhilosophyRouteProps) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("PhilosophyPage");

  return (
    <>
      <section className="border-b border-neutral-200 bg-neutral-50 py-20 md:py-24">
        <Container>
          <div className="max-w-3xl space-y-6">
            <p className="text-xs font-medium uppercase tracking-wider text-primary">
              {t("hero.eyebrow")}
            </p>
            <h1 className="text-5xl font-bold tracking-tight text-neutral-900 md:text-6xl lg:text-7xl">
              {t("hero.title")}
            </h1>
          </div>
        </Container>
      </section>

      <section className="py-20 md:py-28">
        <Container>
          <div className="max-w-3xl space-y-4 text-base leading-relaxed text-neutral-600 md:text-lg">
            <p>{t("bottleneck.p1")}</p>
            <p>{t("bottleneck.p2")}</p>
            <p>{t("bottleneck.p3")}</p>
          </div>
        </Container>
      </section>

      <section className="bg-neutral-50 py-20 md:py-28">
        <Container>
          <div className="max-w-3xl space-y-4 text-base leading-relaxed text-neutral-600 md:text-lg">
            <p>{t("motivation.p1")}</p>
            <p>{t("motivation.p2")}</p>
            <p>{t("motivation.p3")}</p>
          </div>
        </Container>
      </section>

      <section className="py-20 md:py-28 lg:py-32">
        <Container>
          <p className="max-w-3xl text-lg leading-relaxed text-neutral-700 md:text-xl">
            {t("instead.intro")}
          </p>
          <div className="mt-12 space-y-8">
            {commitmentKeys.map((key) => (
              <div className="rounded-lg border border-neutral-200 bg-white p-6 shadow-sm" key={key}>
                <h2 className="text-2xl font-semibold text-neutral-900">
                  {t(`instead.items.${key}.title`)}
                </h2>
                <p className="mt-3 text-base leading-relaxed text-neutral-600">
                  {t(`instead.items.${key}.body`)}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
