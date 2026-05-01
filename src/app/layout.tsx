import type { ReactNode } from "react";
import "./globals.css";

type RootLayoutProps = {
  children: ReactNode;
};

/**
 * Root layout passes children through; `<html>` / `<body>` live in `[locale]/layout.tsx`.
 */
export default function RootLayout({ children }: RootLayoutProps) {
  return children;
}
