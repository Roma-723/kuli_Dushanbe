"use client";

import { useTranslations } from "next-intl";

export default function About() {
  const t = useTranslations("about");

  return (
    <>
      {/* Hero Section */}
      <section className="bg-[#1e2d4a] py-20 text-center">
        <h1 className="text-4xl font-bold text-white">{t("title")}</h1>
        <p className="text-gray-300 mt-3 text-lg max-w-2xl mx-auto">
          {t("subtitle")}
        </p>
      </section>

      {/* Stats Bar */}
      <section className="bg-[#2563EB] py-8">
        <div className="grid grid-cols-3 max-w-3xl mx-auto text-center text-white">
          <div>
            <div className="text-3xl font-bold">{t("stat1value")}</div>
            <div className="text-sm text-blue-200 mt-1">{t("stat1")}</div>
          </div>
          <div>
            <div className="text-3xl font-bold">{t("stat2value")}</div>
            <div className="text-sm text-blue-200 mt-1">{t("stat2")}</div>
          </div>
          <div>
            <div className="text-3xl font-bold">{t("stat3value")}</div>
            <div className="text-sm text-blue-200 mt-1">{t("stat3")}</div>
          </div>
        </div>
      </section>

      {/* Content Cards */}
      <section className="max-w-4xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-10">
          {/* Card 1 - Since 2022 */}
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              fill="none"
              viewBox="0 0 24 24"
              stroke="#2563EB"
              strokeWidth="1.5"
            >
              <rect x="3" y="4" width="18" height="18" rx="2" />
              <path d="M16 2v4M8 2v4M3 10h18" />
            </svg>
            <h3 className="text-xl font-bold text-[#1e2d4a] mt-4">
              {t("since")}
            </h3>
            <p className="text-gray-500 text-sm mt-2 leading-relaxed">
              {t("visitorsDesc")}
            </p>
          </div>

          {/* Card 2 - Team */}
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              fill="none"
              viewBox="0 0 24 24"
              stroke="#2563EB"
              strokeWidth="1.5"
            >
              <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
              <circle cx="9" cy="7" r="4" />
              <path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" />
            </svg>
            <h3 className="text-xl font-bold text-[#1e2d4a] mt-4">
              {t("team")}
            </h3>
            <p className="text-gray-500 text-sm mt-2 leading-relaxed">
              {t("teamDesc")}
            </p>
          </div>

          {/* Card 3 - Mission */}
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              fill="none"
              viewBox="0 0 24 24"
              stroke="#2563EB"
              strokeWidth="1.5"
            >
              <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
            </svg>
            <h3 className="text-xl font-bold text-[#1e2d4a] mt-4">
              {t("mission")}
            </h3>
            <p className="text-gray-500 text-sm mt-2 leading-relaxed">
              {t("missionDesc")}
            </p>
          </div>
        </div>
      </section>

      {/* Google Maps Section */}
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
    </>
  );
}
