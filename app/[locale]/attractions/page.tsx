"use client";

import { useTranslations } from "next-intl";
import Image from "next/image";

export default function Attractions() {
  const t = useTranslations("attractions");

  const images = ["img5.png", "img6.png", "img7.png", "img8.png", "img9.png"];
  const slides = ["slide1", "slide2", "slide3", "slide4", "slide5"];

  return (
    <>
      {/* Hero Section */}
      <section className="bg-[#1e2d4a] py-16 text-center">
        <h1 className="text-4xl font-bold text-white">{t("title")}</h1>
        <p className="text-gray-300 mt-3 text-lg">{t("subtitle")}</p>
      </section>

      {/* Attractions Grid */}
      <section className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {slides.map((slideKey, index) => (
            <div
              key={slideKey}
              className="rounded-2xl overflow-hidden shadow-md bg-white hover:shadow-lg transition-shadow"
            >
              <Image
                src={`/images/${images[index]}`}
                alt={t(`items.${slideKey}.name`)}
                width={600}
                height={400}
                className="w-full h-56 object-cover"
              />
              <div className="p-5">
                <h3 className="text-xl font-bold text-[#1e2d4a] mb-2">
                  {t(`items.${slideKey}.name`)}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed">
                  {t(`items.${slideKey}.desc`)}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
