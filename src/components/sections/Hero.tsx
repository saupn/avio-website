import { getTranslations } from "next-intl/server";
import { FlightPathMotif } from "@/components/graphics/FlightPathMotif";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";

/**
 * Home hero: left-aligned positioning + inline gold flight-path motif.
 * Rendered statically (no scroll-reveal) to protect LCP — it is above the fold.
 */
export async function Hero() {
  const t = await getTranslations("Home.hero");

  return (
    <section className="border-b border-neutral-200 dark:border-white/10">
      <Container className="grid items-center gap-12 py-20 md:py-28 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16 lg:py-32">
        <div className="max-w-2xl">
          <h1 className="font-heading text-4xl font-semibold leading-[1.08] tracking-tight text-balance text-foreground md:text-5xl lg:text-[3.4rem]">
            {t("title")}
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-neutral-600 md:text-xl dark:text-neutral-300">
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

        <div className="hidden justify-self-end text-accent lg:block">
          <FlightPathMotif className="h-auto w-full max-w-[440px]" />
        </div>
      </Container>
    </section>
  );
}
