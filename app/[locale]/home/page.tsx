"use client";

import { useTranslations } from "next-intl";

export default function Home() {
  const t = useTranslations("home");

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 dark:bg-black px-4">
      <div className="max-w-2xl w-full text-center">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">
          {t("welcome")}
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-400 mb-4">
          {t("title")}
        </p>
        <p className="text-lg text-gray-600 dark:text-gray-400">
          Navigate through the site using the links in the navbar above.
        </p>
      </div>
    </div>
  );
}
