import { getTranslations } from "next-intl/server";
import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";

const statKeys = ["principles", "foundation", "mechanisms", "encryption"] as const;

/** Trust-building stats row for the homepage. */
export async function StatsSection() {
  const t = await getTranslations("Home.stats");

  return (
    <section className="bg-neutral-50 py-20 md:py-28 lg:py-32">
      <Container>
        <SectionHeader
          eyebrow={t("eyebrow")}
          title={t("title")}
          titleAs="h2"
        />
        <div className="mt-14 grid gap-10 md:grid-cols-2 lg:mt-16 lg:grid-cols-4">
          {statKeys.map((key) => (
            <div className="animate-in-section" key={key}>
              <p className="text-4xl font-bold text-primary md:text-5xl">
                {t(`${key}.value`)}
              </p>
              <p className="mt-3 text-sm font-medium leading-relaxed text-neutral-600">
                {t(`${key}.label`)}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
