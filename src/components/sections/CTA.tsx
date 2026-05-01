import { getTranslations } from "next-intl/server";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";

/** Closing call-to-action on the homepage. */
export async function CTASection() {
  const t = await getTranslations("Home.cta");

  return (
    <section className="bg-primary py-20 md:py-28 lg:py-32">
      <Container>
        <div className="max-w-3xl space-y-6 text-white animate-in-section">
          <h2 className="font-heading text-2xl font-bold md:text-3xl lg:text-4xl">
            {t("title")}
          </h2>
          <p className="text-lg leading-relaxed text-white/90 md:text-xl">
            {t("subtitle")}
          </p>
          <div className="flex flex-col gap-4 pt-4 sm:flex-row">
            <Button className="min-w-[180px]" href="/products" variant="inverse">
              {t("primaryCta")}
            </Button>
            <Button className="min-w-[180px]" href="/contact" variant="inverse">
              {t("secondaryCta")}
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
