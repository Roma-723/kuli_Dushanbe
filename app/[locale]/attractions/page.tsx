"use client";

import { useTranslations } from "next-intl";
import Image from "next/image";

export default function Attractions() {
  const t = useTranslations("attractions");

  const images = ["img5.png", "img6.png", "img7.png", "img8.png", "img9.png"];
  const slides = ["slide1", "slide2", "slide3", "slide4", "slide5"];

  return (
    <div className="bg-slate-50/50 min-h-screen pb-20">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-[#0f172a] via-[#1e2d4a] to-[#0f172a] py-20 text-center overflow-hidden">
        {/* Элементҳои ороишии замина (Об ё мавҷ) */}
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div className="absolute -top-12 -left-12 w-64 h-64 rounded-full bg-cyan-400 blur-3xl"></div>
          <div className="absolute -bottom-12 -right-12 w-64 h-64 rounded-full bg-blue-500 blur-3xl"></div>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 space-y-3">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight drop-shadow-sm animate-fade-in">
            {t("title")}
          </h1>
          <p className="text-slate-300 max-w-2xl mx-auto text-base sm:text-lg font-medium leading-relaxed">
            {t("subtitle")}
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto rounded-full mt-4" />
        </div>
      </section>

      {/* Attractions Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
          {slides.map((slideKey, index) => (
            <div
              key={slideKey}
              style={{ animationDelay: `${index * 150}ms` }}
              className="group flex flex-col rounded-2xl overflow-hidden bg-white border border-slate-100 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 opacity-0 animate-[fadeInUp_0.6s_ease-out_forwards]"
            >
              <div className="relative h-60 w-full overflow-hidden bg-slate-100">
                <Image
                  src={`/images/${images[index]}`}
                  alt={t(`items.${slideKey}.name`)}
                  fill
                  sizes="(max-w-7xl) 33vw"
                  className="object-cover group-hover:scale-110 transition-transform duration-500 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                <span className="absolute top-4 left-4 bg-white/80 backdrop-blur-md text-[#1e2d4a] text-xs font-bold px-3 py-1.5 rounded-lg shadow-xs tracking-wide">
                  Кӯли Душанбе
                </span>
              </div>

              {/* Қисми матнӣ */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-xl font-bold text-[#1e2d4a] group-hover:text-blue-600 transition-colors duration-200 mb-2.5 line-clamp-1">
                    {t(`items.${slideKey}.name`)}
                  </h3>
                  <p className="text-slate-500 text-sm leading-relaxed line-clamp-3 group-hover:text-slate-600 transition-colors">
                    {t(`items.${slideKey}.desc`)}
                  </p>
                </div>
                
                <div className="mt-5 pt-4 border-t border-slate-50 flex items-center text-sm font-bold text-blue-600 group-hover:text-blue-500 transition-colors">
                  <span>{t("more") || "Муфассал"}</span>
                  <svg className="w-4 h-4 ml-1.5 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>

            </div>
          ))}
        </div>
      </section>

      <style jsx global>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1; 
            transform: translateY(0);}
        }
        @keyframes fadeIn {
            from { opacity: 0; }
          to { opacity: 1; }
        }
        .animate-fade-in {
          animation: fadeIn 0.8s ease-out forwards;
        }
      `}</style>
    </div>
  );
}