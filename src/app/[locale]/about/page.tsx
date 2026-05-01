import { HeartHandshake, Layers, Shield, Compass } from "lucide-react";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { createLocalizedMetadata } from "@/lib/seo";

type AboutProps = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: AboutProps) {
  const { locale } = await params;
  return createLocalizedMetadata({ locale, page: "about" });
}

const valueIcons = [HeartHandshake, Layers, Shield, Compass] as const;
const valueKeys = ["honesty", "depth", "care", "independence"] as const;

export default async function AboutPage({ params }: AboutProps) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("AboutPage");

  return (
    <>
      <section className="border-b border-neutral-200 bg-neutral-50 py-20 md:py-24">
        <Container>
          <div className="max-w-3xl space-y-6 animate-in-section">
            <p className="text-xs font-medium uppercase tracking-wider text-primary">
              {t("hero.eyebrow")}
            </p>
            <h1 className="text-5xl font-bold tracking-tight text-neutral-900 md:text-6xl lg:text-7xl">
              {t("hero.title")}
            </h1>
          </div>
        </Container>
      </section>

      <section className="py-20 md:py-28 lg:py-32">
        <Container>
          <div className="max-w-3xl space-y-6">
            <SectionHeader
              title={t("story.title")}
              titleAs="h2"
            />
            <div className="space-y-4 text-base leading-relaxed text-neutral-600 md:text-lg">
              <p>{t("story.p1")}</p>
              <p>{t("story.p2")}</p>
              <p>{t("story.p3")}</p>
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-primary-pale py-20 md:py-28">
        <Container>
          <div className="max-w-4xl space-y-6">
            <h2 className="text-3xl font-bold text-neutral-900 md:text-4xl">
              {t("mission.title")}
            </h2>
            <p className="text-xl font-semibold leading-relaxed text-primary md:text-2xl">
              {t("mission.quote")}
            </p>
          </div>
        </Container>
      </section>

      <section className="py-20 md:py-28 lg:py-32">
        <Container>
          <h2 className="text-3xl font-bold text-neutral-900 md:text-4xl lg:text-5xl">
            {t("company.title")}
          </h2>
          <div className="mt-10 overflow-hidden rounded-lg border border-neutral-200 shadow-sm">
            <table className="w-full border-collapse text-left text-sm">
              <tbody className="divide-y divide-neutral-200">
                {[ 
                  ["legalName", "legalNameValue"],
                  ["vietnameseName", "vietnameseNameValue"],
                  ["duns", "dunsValue"],
                  ["country", "countryValue"],
                  ["industry", "industryValue"],
                  ["founded", "foundedValue"],
                  ["product", "productValue"],
                  ["website", "websiteValue"],
                  ["verification", "verificationValue"],
                ].map(([label, value]) => (
                  <tr className="bg-white" key={label}>
                    <th className="w-1/3 px-4 py-3 text-xs font-semibold uppercase tracking-wide text-neutral-500 md:px-6">
                      {t(`company.fields.${label}`)}
                    </th>
                    <td className="px-4 py-3 text-neutral-800 md:px-6">
                      {t(`company.fields.${value}`)}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Container>
      </section>

      <section className="bg-neutral-50 py-20 md:py-28 lg:py-32">
        <Container>
          <h2 className="text-3xl font-bold text-neutral-900 md:text-4xl lg:text-5xl">
            {t("values.title")}
          </h2>
          <div className="mt-12 grid gap-8 md:grid-cols-2 lg:gap-12">
            {valueKeys.map((key, index) => {
              const Icon = valueIcons[index];
              return (
                <div className="rounded-lg border border-neutral-200 bg-white p-6 shadow-sm" key={key}>
                  <div className="flex size-11 items-center justify-center rounded-md bg-primary-pale text-primary">
                    <Icon aria-hidden className="size-5" />
                  </div>
                  <h3 className="mt-5 text-xl font-semibold text-neutral-900">
                    {t(`values.${key}.title`)}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-neutral-600">
                    {t(`values.${key}.body`)}
                  </p>
                </div>
              );
            })}
          </div>
        </Container>
      </section>
    </>
  );
}
