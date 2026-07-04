import Image from "next/image";
import { getTranslations } from "next-intl/server";
import { Link } from "@/i18n/routing";
import { LanguageSwitcher } from "@/components/layout/LanguageSwitcher";

const footerNav = [
  { href: "/", key: "home" as const },
  { href: "/services", key: "services" as const },
  { href: "/team", key: "team" as const },
  { href: "/insights", key: "insights" as const },
  { href: "/contact", key: "contact" as const },
];

/** Site footer with company, legal, and contact columns. */
export async function Footer() {
  const t = await getTranslations("Footer");
  const tNav = await getTranslations("Nav");

  return (
    <footer className="bg-neutral-900 text-neutral-300">
      <div className="mx-auto max-w-7xl px-6 py-16 md:px-8 lg:px-12">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <Image
                alt={tNav("logoAlt")}
                className="h-9 w-auto"
                height={36}
                src="/images/logo/avio-logo-white.svg"
                style={{ width: "auto", height: "auto" }}
                width={120}
              />
            </div>
            <p className="text-sm font-semibold text-white">
              {t("companyName")}
            </p>
            <p className="text-sm text-neutral-400">
              <span className="font-medium text-neutral-200">
                {t("dunsLabel")}
              </span>{" "}
              {t("dunsValue")}
            </p>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-neutral-500">
              {t("navigateHeading")}
            </p>
            <ul className="mt-4 space-y-3 text-sm">
              {footerNav.map((item) => (
                <li key={item.key}>
                  <Link
                    className="transition-colors duration-200 hover:text-white"
                    href={item.href}
                  >
                    {t(`nav.${item.key}`)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-neutral-500">
              {t("legalHeading")}
            </p>
            <ul className="mt-4 space-y-3 text-sm">
              <li>
                <Link
                  className="transition-colors duration-200 hover:text-white"
                  href="/privacy-policy"
                >
                  {t("privacy")}
                </Link>
              </li>
              <li>
                <Link
                  className="transition-colors duration-200 hover:text-white"
                  href="/terms-of-service"
                >
                  {t("terms")}
                </Link>
              </li>
              <li>
                <Link
                  className="transition-colors duration-200 hover:text-white"
                  href="/privacy-policy"
                >
                  {t("dataProtection")}
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <p className="text-xs font-semibold uppercase tracking-wider text-neutral-500">
              {t("touchHeading")}
            </p>
            <a
              className="block text-sm font-medium text-white transition-colors duration-200 hover:text-primary-light"
              href={`mailto:${t("helloEmail")}`}
            >
              {t("helloEmail")}
            </a>
            <p className="text-sm text-neutral-400">{t("country")}</p>
            <LanguageSwitcher className="text-neutral-200" compact />
          </div>
        </div>

        <div className="mt-12 border-t border-neutral-800 pt-8 text-xs text-neutral-500">
          <p>{t("copyrightEn")}</p>
          <p className="mt-2">{t("copyrightVi")}</p>
        </div>
      </div>
    </footer>
  );
}
