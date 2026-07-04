"use server";

import { FieldValue } from "firebase-admin/firestore";
import { headers } from "next/headers";
import { getDb } from "@/lib/firebase";
import { checkRateLimit } from "@/lib/rate-limit";
import type { FormResult } from "@/lib/forms/types";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const HONEYPOT = "company_website";

async function clientKey(scope: string): Promise<string> {
  const h = await headers();
  const ip =
    h.get("x-forwarded-for")?.split(",")[0]?.trim() ||
    h.get("x-real-ip") ||
    "unknown";
  return `${scope}:${ip}`;
}

/** Contact form → Firestore `contacts` (includes the new `role` field). */
export async function submitContact(
  _prev: FormResult,
  formData: FormData,
): Promise<FormResult> {
  // Honeypot: pretend success so bots don't learn they were caught.
  if (String(formData.get(HONEYPOT) ?? "").trim()) return { code: "success" };

  const name = String(formData.get("name") ?? "").trim();
  const email = String(formData.get("email") ?? "").trim();
  const role = String(formData.get("role") ?? "").trim();
  const organisation = String(formData.get("organisation") ?? "").trim();
  const message = String(formData.get("message") ?? "").trim();

  if (!name || !EMAIL_RE.test(email) || !message) return { code: "invalid" };

  if (!(await checkRateLimit(await clientKey("contact")))) {
    return { code: "rate_limited" };
  }

  const db = getDb();
  if (!db) return { code: "error" };

  try {
    await db.collection("contacts").add({
      name,
      email,
      role,
      organisation,
      message,
      createdAt: FieldValue.serverTimestamp(),
    });
    return { code: "success" };
  } catch {
    return { code: "error" };
  }
}

/** Insights capture → Firestore `report_waitlist` (email only). */
export async function submitReportWaitlist(
  _prev: FormResult,
  formData: FormData,
): Promise<FormResult> {
  if (String(formData.get(HONEYPOT) ?? "").trim()) return { code: "success" };

  const email = String(formData.get("email") ?? "").trim();
  if (!EMAIL_RE.test(email)) return { code: "invalid" };

  if (!(await checkRateLimit(await clientKey("waitlist")))) {
    return { code: "rate_limited" };
  }

  const db = getDb();
  if (!db) return { code: "error" };

  try {
    await db.collection("report_waitlist").add({
      email,
      createdAt: FieldValue.serverTimestamp(),
    });
    return { code: "success" };
  } catch {
    return { code: "error" };
  }
}
