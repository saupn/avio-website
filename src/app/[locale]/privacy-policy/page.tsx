import { getTranslations, setRequestLocale } from "next-intl/server";
import { Container } from "@/components/ui/Container";
import { createLocalizedMetadata } from "@/lib/seo";

type LegalProps = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: LegalProps) {
  const { locale } = await params;
  return createLocalizedMetadata({ locale, page: "privacy" });
}

const sections = [
  "intro",
  "collect",
  "use",
  "share",
  "security",
  "retention",
  "rights",
  "children",
  "transfers",
  "cookies",
  "changes",
  "contact",
] as const;

export default async function PrivacyPolicyPage({ params }: LegalProps) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("PrivacyPage");

  return (
    <article className="py-20 md:py-28 lg:py-32">
      <Container className="max-w-3xl">
        <header className="space-y-3">
          <p className="text-sm text-neutral-500">
            {t("updatedLabel")}: {t("updatedDate")}
          </p>
          <h1 className="text-4xl font-bold text-neutral-900 md:text-5xl">
            {t("title")}
          </h1>
        </header>

        <div className="mt-12 space-y-12">
          {sections.map((section) => (
            <section className="space-y-4" key={section}>
              <h2 className="text-2xl font-semibold text-neutral-900">
                {t(`${section}.title`)}
              </h2>
              <p className="text-base leading-relaxed text-neutral-600">
                {t(`${section}.p1`)}
              </p>
              <p className="text-base leading-relaxed text-neutral-600">
                {t(`${section}.p2`)}
              </p>
              <p className="text-base leading-relaxed text-neutral-600">
                {t(`${section}.p3`)}
              </p>
            </section>
          ))}
        </div>
      </Container>
    </article>
  );
}
