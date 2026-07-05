import { Check } from "lucide-react";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { InsightsForm } from "@/components/sections/InsightsForm";
import { Container } from "@/components/ui/Container";
import { createLocalizedMetadata } from "@/lib/seo";

type InsightsRouteProps = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: InsightsRouteProps) {
  const { locale } = await params;
  return createLocalizedMetadata({ locale, page: "insights" });
}

export default async function InsightsPage({ params }: InsightsRouteProps) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("InsightsPage");

  return (
    <section className="py-20 md:py-28 lg:py-32">
      <Container>
        <div className="max-w-2xl space-y-8">
          <p className="text-lg font-normal leading-relaxed text-neutral-700 md:text-xl">
            {t("intro")}
          </p>
          <div className="border-l-2 border-accent pl-6">
            <h2 className="font-heading text-sm font-semibold uppercase tracking-wider text-accent">
              {t("reportCovers.heading")}
            </h2>
            <ul className="mt-4 space-y-3">
              {(t.raw("reportCovers.items") as string[]).map((item) => (
                <li
                  className="flex gap-3 text-base leading-relaxed text-neutral-700 dark:text-neutral-300"
                  key={item}
                >
                  <Check aria-hidden className="mt-1.5 size-4 shrink-0 text-accent" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <InsightsForm />
        </div>
      </Container>
    </section>
  );
}
