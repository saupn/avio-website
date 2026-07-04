import "server-only";
import { cert, getApps, initializeApp, type App } from "firebase-admin/app";
import { getFirestore, type Firestore } from "firebase-admin/firestore";

let cached: Firestore | null | undefined;

/**
 * Lazily initialise Firestore via the Admin SDK (server-only). Returns null when
 * the service-account env vars are absent, so the build/deploy never fails on
 * missing config — callers treat null as "backend not configured".
 *
 * Admin writes bypass Firestore security rules by design, so no rule changes are
 * required (and none are made). Required env:
 *   FIREBASE_PROJECT_ID, FIREBASE_CLIENT_EMAIL, FIREBASE_PRIVATE_KEY
 */
export function getDb(): Firestore | null {
  if (cached !== undefined) return cached;

  const projectId = process.env.FIREBASE_PROJECT_ID;
  const clientEmail = process.env.FIREBASE_CLIENT_EMAIL;
  // Private keys are stored with escaped newlines in env; restore them.
  const privateKey = process.env.FIREBASE_PRIVATE_KEY?.replace(/\\n/g, "\n");

  if (!projectId || !clientEmail || !privateKey) {
    cached = null;
    return cached;
  }

  const app: App =
    getApps()[0] ??
    initializeApp({ credential: cert({ projectId, clientEmail, privateKey }) });

  cached = getFirestore(app);
  return cached;
}
