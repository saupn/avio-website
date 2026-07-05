import { getTranslations } from "next-intl/server";
import { Reveal } from "@/components/motion/Reveal";
import { Container } from "@/components/ui/Container";

/** Home thesis block: the advisory gap Avio Group exists to close. */
export async function TheGap() {
  const t = await getTranslations("Home.theGap");

  return (
    <section className="py-20 md:py-28 lg:py-32">
      <Container>
        <Reveal className="max-w-3xl">
          <p className="font-sans text-sm font-medium tracking-tight text-accent md:text-base">
            {t("kicker")}
          </p>
          <h2 className="font-heading mt-5 text-3xl font-semibold leading-[1.12] tracking-tight text-balance text-foreground md:text-4xl">
            {t("heading")}
          </h2>
          <div className="mt-8 space-y-5 text-base leading-relaxed text-neutral-700 md:text-lg dark:text-neutral-300">
            <p>{t("p1")}</p>
            <p>{t("p2")}</p>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
