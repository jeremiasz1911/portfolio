import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";

import { LanguageProvider } from "@/i18n/language-provider";
import { en } from "@/i18n/locales/en";
import { pl } from "@/i18n/locales/pl";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: pl.meta.title,
  description: pl.meta.description,
  keywords: [
    "React",
    "React Native",
    "Next.js",
    "TypeScript",
    "Expo",
    "Firebase",
    "Cloud Functions",
    "Google Cloud",
    "API",
    "automatyzacja",
    "aplikacje mobilne",
    "aplikacje webowe",
  ],
  openGraph: {
    title: pl.meta.title,
    description: pl.meta.description,
    locale: "pl_PL",
    alternateLocale: ["en_US"],
    type: "website",
  },
  alternates: {
    languages: {
      pl: "/",
      en: "/?lang=en",
    },
  },
  other: {
    "description:en": en.meta.description,
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="pl"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col">
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
