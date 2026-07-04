"use client";

import { useTranslations } from "next-intl";
import { useActionState } from "react";
import { submitContact } from "@/app/actions";
import { Button } from "@/components/ui/Button";
import type { FormResult } from "@/lib/forms/types";

const roleOptions = [
  "internationalFirm",
  "airportInvestor",
  "authority",
  "financialInstitution",
  "other",
] as const;

const initialState: FormResult = { code: "idle" };
const inputClass =
  "mt-2 w-full rounded-md border border-neutral-300 bg-background px-3 py-2 text-sm text-foreground shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent dark:border-white/20";

/** Contact form with the `role` field, honeypot, and bilingual result states. */
export function ContactForm() {
  const t = useTranslations("ContactPage.form");
  const [state, formAction, pending] = useActionState(submitContact, initialState);

  if (state.code === "success") {
    return (
      <p
        className="rounded-md border border-accent/40 bg-accent/5 p-4 text-sm font-medium text-foreground"
        role="status"
      >
        {t("success")}
      </p>
    );
  }

  const errorMessage =
    state.code === "invalid"
      ? t("invalid")
      : state.code === "rate_limited"
        ? t("rateLimited")
        : state.code === "error"
          ? t("error")
          : null;

  return (
    <form action={formAction} className="space-y-5" noValidate>
      {/* Honeypot — visually hidden, off-screen; bots that fill it are dropped. */}
      <div
        aria-hidden
        style={{ position: "absolute", left: "-9999px", width: 1, height: 1, overflow: "hidden" }}
      >
        <label htmlFor="company_website">Company website</label>
        <input autoComplete="off" id="company_website" name="company_website" tabIndex={-1} />
      </div>

      <div>
        <label className="block text-sm font-semibold text-foreground" htmlFor="name">
          {t("name")} *
        </label>
        <input autoComplete="name" className={inputClass} id="name" name="name" required type="text" />
      </div>
      <div>
        <label className="block text-sm font-semibold text-foreground" htmlFor="organisation">
          {t("organisation")}
        </label>
        <input autoComplete="organization" className={inputClass} id="organisation" name="organisation" type="text" />
      </div>
      <div>
        <label className="block text-sm font-semibold text-foreground" htmlFor="role">
          {t("role")}
        </label>
        <select className={inputClass} defaultValue="internationalFirm" id="role" name="role">
          {roleOptions.map((option) => (
            <option key={option} value={option}>
              {t(`roleOptions.${option}`)}
            </option>
          ))}
        </select>
      </div>
      <div>
        <label className="block text-sm font-semibold text-foreground" htmlFor="email">
          {t("email")} *
        </label>
        <input autoComplete="email" className={inputClass} id="email" name="email" required type="email" />
      </div>
      <div>
        <label className="block text-sm font-semibold text-foreground" htmlFor="message">
          {t("message")} *
        </label>
        <textarea className={`${inputClass} min-h-[140px]`} id="message" name="message" required />
      </div>

      {errorMessage ? (
        <p className="text-sm font-medium text-red-600 dark:text-red-400" role="alert">
          {errorMessage}
        </p>
      ) : null}

      <Button className={`w-full sm:w-auto ${pending ? "opacity-70" : ""}`} disabled={pending} type="submit">
        {pending ? t("sending") : t("submit")}
      </Button>
    </form>
  );
}
