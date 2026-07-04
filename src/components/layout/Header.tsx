"use client";

import Image from "next/image";
import { Menu, X } from "lucide-react";
import { useTranslations } from "next-intl";
import { useState } from "react";
import { Link, usePathname } from "@/i18n/routing";
import { LanguageSwitcher } from "@/components/layout/LanguageSwitcher";
import { ThemeToggle } from "@/components/theme/ThemeToggle";

const navKeys = ["home", "services", "team", "insights", "contact"] as const;

type NavKey = (typeof navKeys)[number];

const hrefByKey: Record<NavKey, string> = {
  home: "/",
  services: "/services",
  team: "/team",
  insights: "/insights",
  contact: "/contact",
};

/** Sticky site header with responsive navigation drawer. */
export function Header() {
  const t = useTranslations("Nav");
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <header className="sticky top-0 z-50 border-b border-neutral-200 bg-background/90 backdrop-blur dark:border-white/10">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 md:px-8 lg:px-12">
        <Link className="flex items-center gap-3" href="/">
          <Image
            alt={t("logoAlt")}
            className="h-9 w-auto dark:hidden"
            height={36}
            priority
            src="/images/logo/avio-logo.svg"
            style={{ width: "auto", height: "auto" }}
            width={120}
          />
          <Image
            alt={t("logoAlt")}
            className="hidden h-9 w-auto dark:block"
            height={36}
            priority
            src="/images/logo/avio-logo-white.svg"
            style={{ width: "auto", height: "auto" }}
            width={120}
          />
          <span className="font-heading text-base font-bold text-foreground">
            {t("brand")}
          </span>
        </Link>

        <nav aria-label="Primary" className="hidden items-center gap-8 md:flex">
          {navKeys.map((key) => {
            const href = hrefByKey[key];
            const active = isActive(href);
            return (
              <Link
                aria-current={active ? "page" : undefined}
                className={`font-sans text-sm font-medium transition-colors duration-200 ${
                  active
                    ? "text-foreground underline decoration-accent decoration-2 underline-offset-[10px]"
                    : "text-neutral-600 hover:text-foreground dark:text-neutral-400 dark:hover:text-foreground"
                }`}
                href={href}
                key={key}
              >
                {t(key)}
              </Link>
            );
          })}
        </nav>

        <div className="hidden items-center gap-4 md:flex">
          <LanguageSwitcher />
          <ThemeToggle />
        </div>

        <div className="flex items-center gap-2 md:hidden">
          <ThemeToggle />
          <button
            aria-controls="mobile-nav"
            aria-expanded={open}
            aria-label={open ? t("closeMenu") : t("openMenu")}
            className="inline-flex rounded-md p-2 text-neutral-700 transition-colors hover:bg-neutral-100 dark:text-neutral-300 dark:hover:bg-white/10"
            onClick={() => setOpen((v) => !v)}
            type="button"
          >
            {open ? <X className="size-6" /> : <Menu className="size-6" />}
          </button>
        </div>
      </div>

      {open ? (
        <div
          className="border-t border-neutral-200 bg-background md:hidden dark:border-white/10"
          id="mobile-nav"
        >
          <div className="flex flex-col gap-3 px-6 py-4">
            {navKeys.map((key) => {
              const href = hrefByKey[key];
              const active = isActive(href);
              return (
                <Link
                  aria-current={active ? "page" : undefined}
                  className={`font-sans py-2 text-base font-medium ${
                    active
                      ? "text-foreground underline decoration-accent decoration-2 underline-offset-[6px]"
                      : "text-neutral-700 dark:text-neutral-300"
                  }`}
                  href={href}
                  key={key}
                  onClick={() => setOpen(false)}
                >
                  {t(key)}
                </Link>
              );
            })}
            <LanguageSwitcher className="pt-2" />
          </div>
        </div>
      ) : null}
    </header>
  );
}
