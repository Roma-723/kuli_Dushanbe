"use client";

import { useTranslations } from "next-intl";

export default function About() {
  const t = useTranslations("about");

  return (
    <div className="py-8">
      <h1 className="text-4xl font-bold mb-6">{t("title")}</h1>
      <p className="text-lg text-gray-600">{t("description")}</p>

      <section className="mt-16">
        <h2 className="text-2xl font-bold text-[#1e2d4a] mb-6 text-center">
          {t("location")}
        </h2>
        <div className="rounded-2xl overflow-hidden shadow-lg w-full h-[400px] sm:h-[500px]">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d309!2d68.7852797!3d38.6786931!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38b42d94de96ec97:0x6ae35afecba8ed6b!2z0KLQtdC80LDRgtC40YfQtdGB0LrQuNC5INC_0LDRgNC6ICLQmtGD0LvQuCDQlNGD0YjQsNC90LLQtSI!5e1!3m2!1sru!2s!4v1700000000000!5m2!1sru!2s"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </section>
    </div>
  );
}
