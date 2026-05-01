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
  const common = await getTranslations("Common");

  const rows = [
    { label: t("info.general"), value: common("CONTACT_EMAIL") },
    { label: t("info.privacy"), value: common("PRIVACY_EMAIL") },
    { label: t("info.press"), value: common("PRESS_EMAIL") },
    { label: t("info.support"), value: common("SUPPORT_EMAIL") },
    { label: t("info.country"), value: t("info.countryValue") },
    { label: t("info.duns"), value: "626314981" },
  ] as const;

  return (
    <section className="py-20 md:py-28 lg:py-32">
      <Container>
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="space-y-6">
            <h1 className="text-4xl font-bold text-neutral-900 md:text-5xl lg:text-6xl">
              {t("title")}
            </h1>
            <p className="text-lg leading-relaxed text-neutral-600 md:text-xl">
              {t("lead")}
            </p>
            <div className="overflow-hidden rounded-lg border border-neutral-200 shadow-sm">
              <table className="w-full border-collapse text-left text-sm">
                <tbody className="divide-y divide-neutral-200">
                  {rows.map((row) => (
                    <tr className="bg-white" key={row.label}>
                      <th className="px-4 py-3 text-xs font-semibold uppercase tracking-wide text-neutral-500 md:px-6">
                        {row.label}
                      </th>
                      <td className="px-4 py-3 text-neutral-800 md:px-6">
                        {row.value.includes("@") ? (
                          <a
                            className="font-medium text-primary transition-colors hover:text-primary-dark"
                            href={`mailto:${row.value}`}
                          >
                            {row.value}
                          </a>
                        ) : (
                          row.value
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-sm leading-relaxed text-neutral-600">{t("responseNote")}</p>
          </div>
          <ContactForm />
        </div>
      </Container>
    </section>
  );
}
