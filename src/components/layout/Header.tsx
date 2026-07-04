"use client";

import Image from "next/image";
import { Menu, X } from "lucide-react";
import { useTranslations } from "next-intl";
import { useState } from "react";
import { Link, usePathname } from "@/i18n/routing";
import { LanguageSwitcher } from "@/components/layout/LanguageSwitcher";

const navKeys = ["home", "contact"] as const;

type NavKey = (typeof navKeys)[number];

const hrefByKey: Record<NavKey, string> = {
  home: "/",
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
    <header className="sticky top-0 z-50 border-b border-neutral-200 bg-white/95 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 md:px-8 lg:px-12">
        <Link className="flex items-center gap-3" href="/">
          <Image
            alt={t("logoAlt")}
            className="h-9 w-auto"
            height={36}
            priority
            src="/images/logo/avio-logo.svg"
            style={{ width: "auto", height: "auto" }}
            width={120}
          />
          <span className="font-heading text-base font-bold text-neutral-900">
            {t("brand")}
          </span>
        </Link>

        <nav aria-label="Primary" className="hidden items-center gap-8 md:flex">
          {navKeys.map((key) => {
            const href = hrefByKey[key];
            const active = isActive(href);
            return (
              <Link
                className={`text-sm font-medium transition-colors duration-200 ${
                  active
                    ? "text-primary"
                    : "text-neutral-600 hover:text-neutral-900"
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
        </div>

        <button
          aria-controls="mobile-nav"
          aria-expanded={open}
          aria-label={open ? t("closeMenu") : t("openMenu")}
          className="inline-flex rounded-md p-2 text-neutral-700 transition-colors hover:bg-neutral-100 md:hidden"
          onClick={() => setOpen((v) => !v)}
          type="button"
        >
          {open ? <X className="size-6" /> : <Menu className="size-6" />}
        </button>
      </div>

      {open ? (
        <div
          className="border-t border-neutral-200 bg-white md:hidden"
          id="mobile-nav"
        >
          <div className="flex flex-col gap-3 px-6 py-4">
            {navKeys.map((key) => {
              const href = hrefByKey[key];
              return (
                <Link
                  className="py-2 text-base font-medium text-neutral-800"
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
