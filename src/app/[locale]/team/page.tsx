import Image from "next/image";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { Reveal } from "@/components/motion/Reveal";
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
  const tNav = await getTranslations("Nav");
  const tFounder = await getTranslations("Home.founder");
  const t = await getTranslations("TeamPage");

  return (
    <>
      <section className="border-b border-neutral-200 py-16 md:py-20 dark:border-white/10">
        <Container>
          <h1 className="font-heading max-w-3xl text-4xl font-semibold tracking-tight text-foreground md:text-5xl">
            {tNav("team")}
          </h1>
        </Container>
      </section>

      <section className="bg-surface py-16 md:py-24">
        <Container>
          <Reveal className="flex flex-col gap-8 md:flex-row md:items-start md:gap-12">
            {/* [PLACEHOLDER: founder name, photo, LinkedIn] */}
            {/* NOTE: the ~120-word founder narrative from 01-content is not yet provided
                as final bilingual copy — only the lead, chips and closing line are approved. */}
            <div className="flex size-20 shrink-0 items-center justify-center rounded-full border border-neutral-300 bg-background dark:border-white/15">
              <Image
                alt={tNav("logoAlt")}
                className="h-9 w-auto dark:hidden"
                height={36}
                src="/images/logo/avio-logo.svg"
                style={{ width: "auto", height: "auto" }}
                width={40}
              />
              <Image
                alt={tNav("logoAlt")}
                className="hidden h-9 w-auto dark:block"
                height={36}
                src="/images/logo/avio-logo-white.svg"
                style={{ width: "auto", height: "auto" }}
                width={40}
              />
            </div>
            <div className="max-w-2xl">
              <p className="text-lg leading-relaxed text-foreground md:text-xl">
                {tFounder("lead")}
              </p>
              <ul className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                {chipKeys.map((key) => (
                  <li
                    className="rounded-full border border-neutral-300 bg-background px-4 py-2 text-sm font-medium text-neutral-700 dark:border-white/15 dark:text-neutral-300"
                    key={key}
                  >
                    {tFounder(`chips.${key}`)}
                  </li>
                ))}
              </ul>
              <p className="mt-8 border-l-2 border-accent pl-4 text-base font-medium leading-relaxed text-foreground md:text-lg">
                {t("founder.closing")}
              </p>
            </div>
          </Reveal>
        </Container>
      </section>

      <section className="py-16 md:py-24">
        <Container>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {boardKeys.map((key, index) => (
              <Reveal className="h-full" delay={index * 0.06} key={key}>
                <div className="h-full rounded-lg border border-neutral-200 bg-background p-5 dark:border-white/10">
                  <p className="text-sm leading-relaxed text-neutral-700 dark:text-neutral-300">
                    {t(`advisoryBoard.cards.${key}`)}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
          <p className="mt-6 text-sm text-neutral-500">{t("advisoryBoard.footer")}</p>
        </Container>
      </section>

      <section className="border-t border-neutral-200 py-16 md:py-24 dark:border-white/10">
        <Container>
          <Reveal className="max-w-3xl border-l-2 border-accent pl-6">
            <p className="text-base leading-relaxed text-neutral-700 md:text-lg dark:text-neutral-300">
              {t("regionalPanel")}
            </p>
          </Reveal>
        </Container>
      </section>
    </>
  );
}
