import { getTranslations } from "next-intl/server";
import { Reveal } from "@/components/motion/Reveal";
import { Container } from "@/components/ui/Container";

/** Home advisory-bench strip: one understated credibility sentence. */
export async function BenchStrip() {
  const t = await getTranslations("Home.advisoryBench");

  return (
    <section className="py-20 md:py-28 lg:py-32">
      <Container>
        <Reveal className="max-w-3xl border-l-2 border-accent pl-6">
          <p className="text-base leading-relaxed text-neutral-700 md:text-lg dark:text-neutral-300">
            {t("body")}
          </p>
          <p className="mt-4 text-sm text-neutral-500">{t("subline")}</p>
        </Reveal>
      </Container>
    </section>
  );
}
