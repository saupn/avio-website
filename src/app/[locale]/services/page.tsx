import { getTranslations, setRequestLocale } from "next-intl/server";
import { Container } from "@/components/ui/Container";
import { createLocalizedMetadata } from "@/lib/seo";

type ServicesRouteProps = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: ServicesRouteProps) {
  const { locale } = await params;
  return createLocalizedMetadata({ locale, page: "services" });
}

const layerKeys = ["regulatory", "operational", "workforce"] as const;
const engagementKeys = ["teaming", "directAdvisory", "lenderAdvisor"] as const;

export default async function ServicesPage({ params }: ServicesRouteProps) {
  const { locale } = await params;
  setRequestLocale(locale);
  const tSummary = await getTranslations("Home.services");
  const t = await getTranslations("ServicesPage");

  return (
    <>
      <section className="border-b border-neutral-200 py-16 md:py-20">
        {layerKeys.map((key) => {
          const deliverables = t.raw(`layers.${key}.deliverables`) as string[];
          return (
            <Container className="mb-16 last:mb-0" key={key}>
              <div className="max-w-3xl">
                <h2 className="font-heading text-2xl font-bold text-neutral-900 md:text-3xl">
                  {tSummary(`${key}.title`)}
                </h2>
                <p className="mt-4 text-base leading-relaxed text-neutral-600 md:text-lg">
                  {tSummary(`${key}.summary`)}
                </p>
                <ul className="mt-6 list-disc space-y-2 pl-5 text-base text-neutral-700">
                  {deliverables.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
                <p className="mt-6 text-sm font-medium text-neutral-500">
                  {t(`layers.${key}.whoFor`)}
                </p>
              </div>
            </Container>
          );
        })}
      </section>

      <section className="py-16 md:py-20">
        <Container>
          <div className="grid gap-8 md:grid-cols-3">
            {engagementKeys.map((key) => (
              <div className="rounded-lg border border-neutral-200 p-6" key={key}>
                <h3 className="font-heading text-lg font-semibold text-neutral-900 md:text-xl">
                  {t(`engagementModels.${key}.title`)}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-neutral-600">
                  {t(`engagementModels.${key}.body`)}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
