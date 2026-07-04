import { getTranslations, setRequestLocale } from "next-intl/server";
import { Container } from "@/components/ui/Container";
import { createLocalizedMetadata } from "@/lib/seo";

type TeamRouteProps = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: TeamRouteProps) {
  const { locale } = await params;
  return createLocalizedMetadata({ locale, page: "team" });
}

const chipKeys = ["regulator", "operator", "investor"] as const;
const boardKeys = [
  "airportOperations",
  "groundServices",
  "civilAviation",
  "constructionQuality",
  "aviationTraining",
] as const;

export default async function TeamPage({ params }: TeamRouteProps) {
  const { locale } = await params;
  setRequestLocale(locale);
  const tFounder = await getTranslations("Home.founder");
  const t = await getTranslations("TeamPage");

  return (
    <>
      <section className="border-b border-neutral-200 py-16 md:py-20">
        <Container>
          <div className="max-w-3xl space-y-6">
            {/* [PLACEHOLDER: founder name, photo, LinkedIn] */}
            {/* NOTE: the ~120-word founder narrative body from 01-content is not yet
                provided as final bilingual copy — only the lead, role chips and closing
                line below are approved. Expand once the prose is delivered. */}
            <p className="text-lg font-normal leading-relaxed text-neutral-800 md:text-xl">
              {tFounder("lead")}
            </p>
            <ul className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              {chipKeys.map((key) => (
                <li
                  className="rounded-full border border-neutral-300 px-4 py-2 text-sm font-medium text-neutral-700"
                  key={key}
                >
                  {tFounder(`chips.${key}`)}
                </li>
              ))}
            </ul>
            <p className="text-base font-medium leading-relaxed text-neutral-900 md:text-lg">
              {t("founder.closing")}
            </p>
          </div>
        </Container>
      </section>

      <section className="py-16 md:py-20">
        <Container>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {boardKeys.map((key) => (
              <div className="rounded-lg border border-neutral-200 p-5" key={key}>
                <p className="text-sm leading-relaxed text-neutral-700">
                  {t(`advisoryBoard.cards.${key}`)}
                </p>
              </div>
            ))}
          </div>
          <p className="mt-6 text-sm text-neutral-500">{t("advisoryBoard.footer")}</p>
        </Container>
      </section>

      <section className="border-t border-neutral-200 py-16 md:py-20">
        <Container>
          <p className="max-w-3xl text-base leading-relaxed text-neutral-700 md:text-lg">
            {t("regionalPanel")}
          </p>
        </Container>
      </section>
    </>
  );
}
