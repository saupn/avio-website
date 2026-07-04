import { getTranslations } from "next-intl/server";
import { Reveal } from "@/components/motion/Reveal";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";

/** Home closing CTA band: navy field, one line, one gold button. */
export async function CtaBand() {
  const t = await getTranslations("Home.ctaBand");

  return (
    <section className="bg-navy py-16 md:py-20">
      <Container>
        <Reveal className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <p className="font-heading max-w-2xl text-2xl font-semibold leading-snug text-white md:text-3xl">
            {t("text")}
          </p>
          <Button className="min-w-[180px] shrink-0" href="/contact">
            {t("button")}
          </Button>
        </Reveal>
      </Container>
    </section>
  );
}
