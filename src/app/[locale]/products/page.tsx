import Image from "next/image";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { createLocalizedMetadata } from "@/lib/seo";

type ProductsProps = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: ProductsProps) {
  const { locale } = await params;
  return createLocalizedMetadata({ locale, page: "products" });
}

const stepKeys = ["step1", "step2", "step3", "step4"] as const;
const principleCardKeys = [
  "boundaries",
  "respect",
  "mastery",
  "ownership",
  "clarity",
  "balance",
] as const;

export default async function ProductsPage({ params }: ProductsProps) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("ProductsPage");

  return (
    <>
      <section className="border-b border-neutral-200 bg-white py-16 md:py-20 lg:py-24">
        <Container>
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
            <div className="space-y-6 animate-in-section">
              <p className="text-xs font-medium uppercase tracking-wider text-primary">
                {t("hero.eyebrow")}
              </p>
              <h1 className="text-5xl font-bold tracking-tight text-neutral-900 md:text-6xl lg:text-7xl">
                {t("hero.title")}
              </h1>
              <p className="text-lg leading-relaxed text-neutral-600 md:text-xl">
                {t("hero.subtitle")}
              </p>
            </div>
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-lg shadow-md animate-in-section">
              <Image
                alt={t("hero.imageAlt")}
                className="object-cover"
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
                src="/images/sections/vitaro-product.jpg"
              />
            </div>
          </div>
        </Container>
      </section>

      <section className="py-20 md:py-28 lg:py-32">
        <Container>
          <SectionHeader title={t("howItWorks.title")} titleAs="h2" />
          <ol className="mt-12 space-y-10">
            {stepKeys.map((key, index) => (
              <li className="grid gap-4 md:grid-cols-[80px_1fr] md:items-start" key={key}>
                <span className="text-sm font-semibold text-primary">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <div>
                  <h3 className="text-2xl font-semibold text-neutral-900">
                    {t(`howItWorks.steps.${key}.title`)}
                  </h3>
                  <p className="mt-3 text-base leading-relaxed text-neutral-600">
                    {t(`howItWorks.steps.${key}.body`)}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </Container>
      </section>

      <section className="bg-neutral-50 py-20 md:py-28 lg:py-32">
        <Container>
          <SectionHeader
            description={t("principles.intro")}
            title={t("principles.title")}
            titleAs="h2"
          />
          <div className="mt-14 grid gap-8 md:grid-cols-2 lg:mt-16">
            {principleCardKeys.map((key) => (
              <div className="rounded-lg border border-neutral-200 bg-white p-6 shadow-sm" key={key}>
                <h3 className="text-xl font-semibold text-neutral-900">
                  {t(`principles.cards.${key}.title`)}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-neutral-600">
                  {t(`principles.cards.${key}.body`)}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-20 md:py-28">
        <Container>
          <h2 className="text-3xl font-bold text-neutral-900 md:text-4xl">
            {t("data.title")}
          </h2>
          <div className="mt-6 space-y-4 text-base leading-relaxed text-neutral-600 md:text-lg">
            <p>{t("data.p1")}</p>
            <p>{t("data.p2")}</p>
          </div>
        </Container>
      </section>

      <section className="bg-primary py-20 md:py-24">
        <Container>
          <div className="max-w-3xl space-y-6 text-white">
            <h2 className="text-3xl font-bold md:text-4xl">{t("comingSoon.title")}</h2>
            <p className="text-lg leading-relaxed text-white/90">{t("comingSoon.body")}</p>
            <Button className="mt-4" href="/contact" variant="inverse">
              {t("comingSoon.cta")}
            </Button>
          </div>
        </Container>
      </section>
    </>
  );
}
