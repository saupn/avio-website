import { getTranslations, setRequestLocale } from "next-intl/server";
import { Container } from "@/components/ui/Container";
import { createLocalizedMetadata } from "@/lib/seo";

type TermsProps = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: TermsProps) {
  const { locale } = await params;
  return createLocalizedMetadata({ locale, page: "terms" });
}

const sections = [
  "acceptance",
  "services",
  "accounts",
  "acceptableUse",
  "ip",
  "noAdvice",
  "liability",
  "termination",
  "changes",
  "law",
  "contact",
] as const;

export default async function TermsOfServicePage({ params }: TermsProps) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("TermsPage");

  return (
    <article className="py-20 md:py-28 lg:py-32">
      <Container className="max-w-3xl">
        <header className="space-y-3">
          <p className="text-sm text-neutral-500">
            {t("updatedLabel")}: {t("updatedDate")}
          </p>
          <h1 className="font-heading text-3xl font-semibold tracking-tight text-foreground md:text-4xl">
            {t("title")}
          </h1>
        </header>

        <div className="mt-12 space-y-12">
          {sections.map((section) => {
            if (section === "noAdvice") {
              return (
                <section className="space-y-4" key={section}>
                  <h2 className="font-heading text-xl font-semibold text-foreground md:text-2xl">
                    {t(`${section}.title`)}
                  </h2>
                  <strong className="block rounded-md border-l-2 border-accent bg-surface p-4 font-semibold leading-relaxed text-foreground">
                    {t(`${section}.disclaimerBold`)}
                  </strong>
                  <p className="text-base leading-relaxed text-neutral-600 dark:text-neutral-400">
                    {t(`${section}.p2`)}
                  </p>
                  <p className="text-base leading-relaxed text-neutral-600 dark:text-neutral-400">
                    {t(`${section}.p3`)}
                  </p>
                </section>
              );
            }

            return (
              <section className="space-y-4" key={section}>
                <h2 className="font-heading text-xl font-semibold text-foreground md:text-2xl">
                  {t(`${section}.title`)}
                </h2>
                <p className="text-base leading-relaxed text-neutral-600 dark:text-neutral-400">
                  {t(`${section}.p1`)}
                </p>
                <p className="text-base leading-relaxed text-neutral-600 dark:text-neutral-400">
                  {t(`${section}.p2`)}
                </p>
                <p className="text-base leading-relaxed text-neutral-600 dark:text-neutral-400">
                  {t(`${section}.p3`)}
                </p>
              </section>
            );
          })}
        </div>
      </Container>
    </article>
  );
}
