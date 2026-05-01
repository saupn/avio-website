"use client";

import { useTranslations } from "next-intl";
import { type FormEvent, useState } from "react";
import { Button } from "@/components/ui/Button";

/** Static contact UI that confirms submissions while backend integration is pending. */
export function ContactForm() {
  const t = useTranslations("ContactPage.form");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <p className="rounded-md border border-primary-pale bg-primary-pale/60 p-4 text-sm font-medium text-primary-dark">
        {t("thanks")}
      </p>
    );
  }

  return (
    <form className="space-y-5" noValidate onSubmit={handleSubmit}>
      <div>
        <label className="block text-sm font-semibold text-neutral-800" htmlFor="name">
          {t("name")} *
        </label>
        <input
          autoComplete="name"
          className="mt-2 w-full rounded-md border border-neutral-200 px-3 py-2 text-sm shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
          id="name"
          name="name"
          required
          type="text"
        />
      </div>
      <div>
        <label className="block text-sm font-semibold text-neutral-800" htmlFor="email">
          {t("email")} *
        </label>
        <input
          autoComplete="email"
          className="mt-2 w-full rounded-md border border-neutral-200 px-3 py-2 text-sm shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
          id="email"
          name="email"
          required
          type="email"
        />
      </div>
      <div>
        <label className="block text-sm font-semibold text-neutral-800" htmlFor="reason">
          {t("reason")}
        </label>
        <select
          className="mt-2 w-full rounded-md border border-neutral-200 px-3 py-2 text-sm shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
          defaultValue="general"
          id="reason"
          name="reason"
        >
          <option value="general">{t("reasonGeneral")}</option>
          <option value="press">{t("reasonPress")}</option>
          <option value="partnership">{t("reasonPartnership")}</option>
          <option value="support">{t("reasonSupport")}</option>
          <option value="other">{t("reasonOther")}</option>
        </select>
      </div>
      <div>
        <label className="block text-sm font-semibold text-neutral-800" htmlFor="message">
          {t("message")}
        </label>
        <textarea
          className="mt-2 min-h-[140px] w-full rounded-md border border-neutral-200 px-3 py-2 text-sm shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
          id="message"
          name="message"
          required
        />
      </div>
      <Button className="w-full sm:w-auto" type="submit">
        {t("submit")}
      </Button>
    </form>
  );
}
