import { getTranslations } from "next-intl/server";
import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";

const principleKeys = [
  "rhythm",
  "root",
  "mechanism",
  "substance",
  "privacy",
] as const;

/** Philosophy teaser with the five core product principles. */
export async function PhilosophySection() {
  const t = await getTranslations("Home.philosophy");

  return (
    <section className="bg-white py-20 md:py-28 lg:py-32">
      <Container>
        <SectionHeader
          eyebrow={t("eyebrow")}
          title={t("title")}
          titleAs="h2"
        />
        <p className="mt-6 max-w-3xl text-lg leading-relaxed text-neutral-600 md:text-xl">
          {t("intro")}
        </p>

        <div className="mt-14 space-y-8 lg:mt-16">
          {principleKeys.map((key, index) => (
            <div
              className="grid gap-4 rounded-lg border border-neutral-200 bg-neutral-50 p-6 md:grid-cols-[80px_1fr] md:items-start md:gap-8 animate-in-section"
              key={key}
            >
              <span className="text-sm font-semibold text-primary">
                {String(index + 1).padStart(2, "0")}
              </span>
              <div>
                <h3 className="font-heading text-xl font-semibold text-neutral-900 md:text-2xl">
                  {t(`principles.${key}.title`)}
                </h3>
                <p className="mt-3 text-base leading-relaxed text-neutral-600">
                  {t(`principles.${key}.description`)}
                </p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
