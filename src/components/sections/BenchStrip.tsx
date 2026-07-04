import { getTranslations } from "next-intl/server";
import { Container } from "@/components/ui/Container";

/** Home advisory-bench strip: one understated credibility sentence. */
export async function BenchStrip() {
  const t = await getTranslations("Home.advisoryBench");

  return (
    <section className="py-20 md:py-28 lg:py-32">
      <Container>
        <div className="max-w-3xl animate-in-section">
          <p className="text-base font-normal leading-relaxed text-neutral-700 md:text-lg">
            {t("body")}
          </p>
          <p className="mt-4 text-sm text-neutral-500">{t("subline")}</p>
        </div>
      </Container>
    </section>
  );
}
