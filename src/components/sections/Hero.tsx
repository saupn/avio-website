import { getTranslations } from "next-intl/server";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";

/** Home hero: airport operations advisory positioning + primary CTAs. */
export async function Hero() {
  const t = await getTranslations("Home.hero");

  return (
    <section className="border-b border-neutral-200 py-20 md:py-28 lg:py-32">
      <Container>
        <div className="max-w-3xl animate-in-section">
          <h1 className="font-heading text-4xl font-bold tracking-tight text-neutral-900 md:text-5xl lg:text-6xl">
            {t("title")}
          </h1>
          <p className="mt-6 max-w-2xl text-lg font-normal leading-relaxed text-neutral-600 md:text-xl">
            {t("subtitle")}
          </p>
          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <Button className="min-w-[180px]" href="/contact">
              {t("primaryCta")}
            </Button>
            <Button className="min-w-[180px]" href="/services" variant="secondary">
              {t("secondaryCta")}
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
