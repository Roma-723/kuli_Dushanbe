"use client";

import { useTranslations } from "next-intl";
import { Clock, Users, Baby, Heart } from "lucide-react";

export default function PricingSection() {
  const t = useTranslations("pricing");

  return (
    <section className="relative w-full bg-linaer-to-b from-[#f4f9ff] to-[#e6f2ff] py-20 px-4 overflow-hidden">
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-200/30 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-emerald-100/30 rounded-full blur-3xl -z-10" />

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-14">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1e2d4a] tracking-tight mb-3">
            {t("title")}
          </h2>
          <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm border border-blue-100/50 px-4 py-2 rounded-full text-gray-600 text-sm shadow-sm font-medium">
            <Clock size={16} className="text-blue-500" />
            <span>{t("hours")}</span>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto items-stretch">
          <div className="group bg-white rounded-3xl p-8 text-center flex flex-col justify-between shadow-sm hover:shadow-[0_20px_40px_rgba(37,99,235,0.12)] hover:scale-[1.03] transition-all duration-300 ease-in-out cursor-pointer relative overflow-hidden border border-gray-100/50 hover:border-blue-200/50">
            <div className="absolute top-0 left-0 w-full h-1.5 bg-[#2563EB]" />
            <div className="my-auto">
              <div className="w-16 h-16 bg-blue-50/80 rounded-2xl flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300">
                <Users size={32} className="text-[#2563EB]" />
              </div>
              <h3 className="text-lg font-semibold text-[#1e2d4a] mt-6">
                {t("adult")}
              </h3>
              <div className="flex items-baseline justify-center gap-1 mt-5">
                <span className="text-5xl font-bold text-[#2563EB] tracking-tight">
                  {t("adultPrice")}
                </span>
                <span className="text-base font-medium text-gray-400 ml-1">
                  {t("currency")}
                </span>
              </div>
            </div>
          </div>

          <div className="group bg-white rounded-3xl p-8 text-center flex flex-col justify-between shadow-sm hover:shadow-[0_20px_40px_rgba(245,158,11,0.12)] hover:scale-[1.03] transition-all duration-300 ease-in-out cursor-pointer relative overflow-hidden border border-gray-100/50 hover:border-amber-200/50">
            <div className="absolute top-0 left-0 w-full h-1.5 bg-[#F59E0B]" />

            <div className="my-auto">
              <div className="w-16 h-16 bg-amber-50/80 rounded-2xl flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300">
                <Baby size={32} className="text-[#F59E0B]" />
              </div>

              <h3 className="text-lg font-semibold text-[#1e2d4a] mt-6">
                {t("child")}
              </h3>

              <div className="flex items-baseline justify-center gap-1 mt-5">
                <span className="text-5xl font-bold text-[#F59E0B] tracking-tight">
                  {t("childPrice")}
                </span>
                <span className="text-base font-medium text-gray-400 ml-1">
                  {t("currency")}
                </span>
              </div>
            </div>
          </div>

          <div className="group bg-white rounded-3xl p-8 text-center flex flex-col justify-between shadow-sm hover:shadow-[0_20px_40px_rgba(16,185,129,0.12)] hover:scale-[1.03] transition-all duration-300 ease-in-out cursor-pointer relative overflow-hidden border border-emerald-100/50 hover:border-emerald-200/50 bg-gradient-to-b from-white to-emerald-50/10">
            <div className="absolute top-0 left-0 w-full h-1.5 bg-[#10B981]" />

            <div className="my-auto">
              <div className="w-16 h-16 bg-emerald-50/80 rounded-2xl flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300">
                <Heart size={32} className="text-[#10B981]" />
              </div>

              <h3 className="text-lg font-semibold text-[#1e2d4a] mt-6">
                {t("infant") || "То 3-сола"}
              </h3>
              <div className="mt-5">
                <span className="inline-block text-4xl font-bold text-[#10B981] bg-emerald-50/60 px-4 py-1.5 rounded-2xl tracking-tight">
                  {t("free") || "Бепул"}
                </span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}