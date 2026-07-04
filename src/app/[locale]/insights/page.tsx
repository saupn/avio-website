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
          <InsightsForm />
        </div>
      </Container>
    </section>
  );
}
