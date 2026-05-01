import { redirect } from "next/navigation";

/** Failsafe: bare `/` resolves to English home (middleware also enforces `defaultLocale`). */
export default function RootPage() {
  redirect("/en");
}
