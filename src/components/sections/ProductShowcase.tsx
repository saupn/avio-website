import {
  Brain,
  CalendarClock,
  Network,
  Route,
} from "lucide-react";
import { getTranslations } from "next-intl/server";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";

const featureIcons = [Brain, Route, CalendarClock, Network] as const;
const featureKeys = ["root", "protocols", "rhythm", "community"] as const;

/** Highlights Vitaro’s flagship capabilities in a scannable grid. */
export async function ProductShowcase() {
  const t = await getTranslations("Home.vitaro");

  return (
    <section className="bg-neutral-50 py-20 md:py-28 lg:py-32">
      <Container>
        <div className="max-w-3xl space-y-4">
          <SectionHeader
            eyebrow={t("eyebrow")}
            title={t("title")}
            titleAs="h2"
          />
          <div className="space-y-4 text-base leading-relaxed text-neutral-600 md:text-lg">
            <p>{t("p1")}</p>
            <p>{t("p2")}</p>
          </div>
        </div>

        <div className="mt-14 grid gap-8 md:grid-cols-2 lg:mt-16 lg:grid-cols-4 lg:gap-12">
          {featureKeys.map((key, index) => {
            const Icon = featureIcons[index];
            return (
              <div
                className="rounded-lg border border-neutral-200 bg-white p-6 shadow-sm animate-in-section"
                key={key}
              >
                <div className="flex size-11 items-center justify-center rounded-md bg-primary-pale text-primary">
                  <Icon aria-hidden className="size-5" />
                </div>
                <h3 className="mt-5 text-xl font-semibold text-neutral-900">
                  {t(`features.${key}.title`)}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-neutral-600">
                  {t(`features.${key}.description`)}
                </p>
              </div>
            );
          })}
        </div>

        <div className="mt-12 flex justify-start lg:mt-16">
          <Button href="/products">{t("cta")}</Button>
        </div>
      </Container>
    </section>
  );
}
