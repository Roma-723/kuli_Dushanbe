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
          <div className="group bg-white rounded-3xl border border-gray-100/80 p-8 text-center flex flex-col justify-between shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1 bg-[#2563EB]" />
            <div className="my-auto">
              <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300">
                <Users size={32} className="text-[#040810]" />
              </div>
              <h3 className="text-xl font-bold text-[#1e2d4a] mt-5">
                {t("adult")}
              </h3>
              <div className="flex items-baseline justify-center gap-1 mt-4">
                <span className="text-5xl font-extrabold text-[#2563EB] tracking-tight">
                  {t("adultPrice")}
                </span>
                <span className="text-lg font-semibold text-gray-500 ml-1">
                  {t("currency")}
                </span>
              </div>
            </div>
          </div>

          <div className="group bg-white rounded-3xl border border-gray-100/80 p-8 text-center flex flex-col justify-between shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1 bg-[#F59E0B]" />
            
            <div className="my-auto">
              <div className="w-16 h-16 bg-amber-50 rounded-2xl flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300">
                <Baby size={32} className="text-[#F59E0B]" />
              </div>
              
              <h3 className="text-xl font-bold text-[#1e2d4a] mt-5">
                {t("child")}
              </h3>
              
              <div className="flex items-baseline justify-center gap-1 mt-4">
                <span className="text-5xl font-extrabold text-[#F59E0B] tracking-tight">
                  {t("childPrice")}
                </span>
                <span className="text-lg font-semibold text-gray-500 ml-1">
                  {t("currency")}
                </span>
              </div>
            </div>
          </div>

          <div className="group bg-white rounded-3xl border border-emerald-100 p-8 text-center flex flex-col justify-between shadow-md hover:shadow-xl hover:-translate-y-2 transition-all duration-300 relative overflow-hidden bg-gradient-to-b from-white to-emerald-50/20">
            <div className="absolute top-0 left-0 w-full h-1 bg-[#10B981]" />
            
            <div className="my-auto">
              <div className="w-16 h-16 bg-emerald-50 rounded-2xl flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300">
                <Heart size={32} className="text-[#10B981]" />
              </div>
              
              <h3 className="text-xl font-bold text-[#1e2d4a] mt-5">
                {t("infant") || "То 3-сола"}
              </h3>
              <div className="mt-4">
                <span className="inline-block text-4xl font-extrabold text-[#10B981] bg-emerald-50 px-4 py-1.5 rounded-2xl tracking-tight">
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