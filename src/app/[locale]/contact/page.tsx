import { getTranslations, setRequestLocale } from "next-intl/server";
import { ContactForm } from "@/components/sections/ContactForm";
import { Container } from "@/components/ui/Container";
import { createLocalizedMetadata } from "@/lib/seo";

type ContactRouteProps = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: ContactRouteProps) {
  const { locale } = await params;
  return createLocalizedMetadata({ locale, page: "contact" });
}

export default async function ContactPage({ params }: ContactRouteProps) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("ContactPage");

  return (
    <section className="py-20 md:py-28 lg:py-32">
      <Container>
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="space-y-6">
            <h1 className="font-heading text-3xl font-bold text-neutral-900 md:text-4xl lg:text-5xl">
              {t("title")}
            </h1>
          </div>
          <ContactForm />
        </div>
      </Container>
    </section>
  );
}
