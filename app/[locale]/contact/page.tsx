"use client";

import { useTranslations } from "next-intl";

export default function Contact() {
  const t = useTranslations("contact");

  return (
    <div className="py-8">
      <h1 className="text-4xl font-bold mb-6">{t("title")}</h1>
      <p className="text-lg text-gray-600">{t("description")}</p>
    </div>
  );
}
