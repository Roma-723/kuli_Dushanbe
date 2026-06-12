"use client";

import { useTranslations } from "next-intl";
import Image from "next/image";

export default function Attractions() {
  const t = useTranslations("attractions");

  const images = ["img5.png", "img6.png", "img7.png", "img8.png", "img9.png"];
  const slides = ["slide1", "slide2", "slide3", "slide4", "slide5"];

  return (
    <div className="bg-slate-50/50 min-h-screen pb-20">
      <section className="relative overflow-hidden min-h-[320px] sm:min-h-[380px] flex flex-col items-center justify-center py-16 px-4">

        {/* Background gradient */}
        <div className="absolute inset-0" style={{background:'linear-gradient(135deg, #0f4c81 0%, #0284c7 45%, #00d2ff 100%)'}} />

        {/* Concentric circles */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          {[400,600,800,1000].map(size => (
            <div key={size} className="absolute rounded-full border border-white/5" style={{width:size,height:size}} />
          ))}
        </div>

        {/* Left water blob */}
        <div className="absolute left-[-80px] top-1/2 -translate-y-1/2 w-64 h-64 rounded-full opacity-20 blur-3xl" style={{background:'#67e8f9'}} />
        {/* Right water blob */}
        <div className="absolute right-[-80px] top-1/2 -translate-y-1/2 w-64 h-64 rounded-full opacity-20 blur-3xl" style={{background:'#0ea5e9'}} />
        {/* Top blob */}
        <div className="absolute top-[-60px] left-1/2 -translate-x-1/2 w-96 h-40 rounded-full opacity-10 blur-2xl" style={{background:'#bae6fd'}} />

        {/* Main content */}
        <div className="relative z-10 text-center mb-10">
          <span className="inline-block text-[11px] font-bold uppercase tracking-[0.2em] text-white/80 px-5 py-2 rounded-full border border-white/20 mb-6" style={{background:'rgba(255,255,255,0.08)',backdropFilter:'blur(12px)'}}>
            Аквапарки Кӯли Душанбе
          </span>
          <h1 className="text-5xl sm:text-6xl font-black text-white mb-3 tracking-tight leading-tight">
            {t('title')}
          </h1>
          <p className="text-blue-100 text-base sm:text-lg max-w-lg mx-auto mb-6">
            {t('subtitle')}
          </p>
          <div className="flex items-center justify-center gap-2">
            <div className="w-8 h-[2px] rounded-full bg-white/30" />
            <div className="w-16 h-[3px] rounded-full" style={{background:'linear-gradient(90deg,#38bdf8,#fff)'}} />
            <div className="w-8 h-[2px] rounded-full bg-white/30" />
          </div>
        </div>

        {/* Timeline icons */}
        <div className="relative z-10 flex flex-wrap items-center justify-center gap-0">
          {[
            { icon: 'M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z', label: 'Слайди Халқавӣ' },
            { icon: 'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 14.5v-9l6 4.5-6 4.5z', label: 'Ҳавзи Мавҷӣ' },
            { icon: 'M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0', label: 'Майдончаи Кӯдакон' },
            { icon: 'M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z', label: 'Слайдҳои Баланд' },
            { icon: 'M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z', label: 'Ҳавзи Оромбахш' },
          ].map((item, i, arr) => (
            <div key={i} className="flex items-center">
              <div className="flex flex-col items-center gap-2 px-4 sm:px-6 group cursor-pointer">
                <div className="w-12 h-12 rounded-full border border-white/30 flex items-center justify-center group-hover:bg-white/20 transition-all duration-300" style={{background:'rgba(255,255,255,0.1)',backdropFilter:'blur(8px)'}}>
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d={item.icon} />
                  </svg>
                </div>
                <span className="text-white/70 text-[10px] font-medium whitespace-nowrap max-w-[80px] text-center leading-tight group-hover:text-white transition-colors">
                  {item.label}
                </span>
              </div>
              {i < arr.length - 1 && (
                <div className="w-8 sm:w-12 h-[1px] bg-white/20 shrink-0" />
              )}
            </div>
          ))}
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
          {slides.map((slideKey, index) => (
            <div
              key={slideKey}
              style={{ animationDelay: `${index * 150}ms` }}
              className="rounded-2xl overflow-hidden shadow-md bg-white hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group flex flex-col opacity-0 animate-[fadeInUp_0.6s_ease-out_forwards]"
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

              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-xl font-bold text-[#1e2d4a] group-hover:text-blue-600 transition-colors duration-200 mb-2.5 line-clamp-1">
                    {t(`items.${slideKey}.name`)}
                  </h3>
                  <p className="text-slate-500 text-sm leading-relaxed line-clamp-3 group-hover:text-slate-600 transition-colors">
                    {t(`items.${slideKey}.desc`)}
                  </p>
                </div>
                <div className="inline-flex items-center gap-1.5 mt-4 text-sm font-semibold text-blue-600 hover:text-blue-800 transition-colors">
                  <span>{t("more") || "Муфассал"}</span>
                  <span>→</span>
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