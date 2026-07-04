import { getTranslations } from "next-intl/server";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";

/** Home closing CTA band. */
export async function CtaBand() {
  const t = await getTranslations("Home.ctaBand");

  return (
    <section className="bg-primary py-20 md:py-24">
      <Container>
        <div className="flex max-w-4xl flex-col gap-6 text-white animate-in-section md:flex-row md:items-center md:justify-between">
          <p className="font-heading text-2xl font-bold md:text-3xl">
            {t("text")}
          </p>
          <Button className="min-w-[180px] shrink-0" href="/contact" variant="inverse">
            {t("button")}
          </Button>
        </div>
      </Container>
    </section>
  );
}
