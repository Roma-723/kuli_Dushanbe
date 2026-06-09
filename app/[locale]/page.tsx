"use client";

import { useTranslations } from "next-intl";
import HeroSwiper from "../components/HeroSwiper";
import PricingSection from "../components/PricingSection";

export default function Home() {
  const t = useTranslations("home");

  return (
    <>
      <HeroSwiper />
      <PricingSection />
      <div className="py-8">
        <h1 className="text-3xl font-bold text-center mb-4">{t("title")}</h1>
        <p className="text-center text-gray-600">{t("welcome")}</p>
      </div>
    </>
  );
}
