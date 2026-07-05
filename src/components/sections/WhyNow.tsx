import { getTranslations } from "next-intl/server";
import { Reveal } from "@/components/motion/Reveal";
import { Container } from "@/components/ui/Container";

/** Home "why now": the regulatory reset and private-airport pipeline, in prose. */
export async function WhyNow() {
  const t = await getTranslations("Home.whyNow");

  return (
    <section className="py-20 md:py-28 lg:py-32">
      <Container>
        <Reveal className="max-w-3xl">
          <h2 className="font-heading text-2xl font-semibold tracking-tight text-balance text-foreground md:text-3xl">
            {t("heading")}
          </h2>
          <p className="mt-6 text-base leading-relaxed text-neutral-700 md:text-lg dark:text-neutral-300">
            {t("body")}
          </p>
        </Reveal>
      </Container>
    </section>
  );
}
