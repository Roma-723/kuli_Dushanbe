"use client";

import { useTranslations } from "next-intl";

export default function About() {
  const t = useTranslations("about");

  return (
    <div className="bg-slate-50/30 min-h-screen pb-20">
      <section className="relative bg-gradient-to-b from-[#0f172a] to-[#1e2d4a] py-24 text-center overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 left-1/4 w-72 h-72 bg-blue-500 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-72 h-72 bg-cyan-500 rounded-full blur-3xl" />
        </div>
        
        <div className="relative z-10 max-w-3xl mx-auto px-4 space-y-4">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight drop-shadow-xs">
            {t("title")}
          </h1>
          <p className="text-slate-300 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            {t("subtitle")}
          </p>
          <div className="w-16 h-1 bg-blue-500 mx-auto rounded-full mt-4" />
        </div>
      </section>

      <section className="max-w-5xl mx-auto px-4 -translate-y-10 z-20 relative">
        <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl shadow-xl shadow-blue-600/20 p-8 md:p-10">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-3 sm:gap-4 divide-y sm:divide-y-0 sm:divide-x divide-white/20 text-center text-white">
            <div className="pt-4 sm:pt-0">
              <div className="text-4xl font-extrabold tracking-tight">{t("stat1value")}</div>
              <div className="text-xs sm:text-sm text-blue-100 font-medium uppercase tracking-wider mt-1.5">{t("stat1")}</div>
            </div>
            <div className="pt-6 sm:pt-0">
              <div className="text-4xl font-extrabold tracking-tight">{t("stat2value")}</div>
              <div className="text-xs sm:text-sm text-blue-100 font-medium uppercase tracking-wider mt-1.5">{t("stat2")}</div>
            </div>
            <div className="pt-6 sm:pt-0">
              <div className="text-4xl font-extrabold tracking-tight">{t("stat3value")}</div>
              <div className="text-xs sm:text-sm text-blue-100 font-medium uppercase tracking-wider mt-1.5">{t("stat3")}</div>
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          <div 
            style={{ animationDelay: "100ms" }}
            className="group relative bg-white rounded-2xl p-8 border border-slate-100 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:border-blue-500/50 opacity-0 animate-[fadeInUp_0.5s_ease-out_forwards]"
          >
            <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <rect x="3" y="4" width="18" height="18" rx="2" />
                <path d="M16 2v4M8 2v4M3 10h18" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-[#1e2d4a] mt-6 transition-colors group-hover:text-blue-600">
              {t("since")}
            </h3>
            <p className="text-slate-500 text-sm mt-3 leading-relaxed">
              {t("visitorsDesc")}
            </p>
          </div>

          <div 
            style={{ animationDelay: "250ms" }}
            className="group relative bg-white rounded-2xl p-8 border border-slate-100 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:border-blue-500/50 opacity-0 animate-[fadeInUp_0.5s_ease-out_forwards]"
          >
            <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
                <circle cx="9" cy="7" r="4" />
                <path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-[#1e2d4a] mt-6 transition-colors group-hover:text-blue-600">
              {t("team")}
            </h3>
            <p className="text-slate-500 text-sm mt-3 leading-relaxed">
              {t("teamDesc")}
            </p>
          </div>

          <div 
            style={{ animationDelay: "400ms" }}
            className="group relative bg-white rounded-2xl p-8 border border-slate-100 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:border-blue-500/50 opacity-0 animate-[fadeInUp_0.5s_ease-out_forwards]"
          >
            <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-[#1e2d4a] mt-6 transition-colors group-hover:text-blue-600">
              {t("mission")}
            </h3>
            <p className="text-slate-500 text-sm mt-3 leading-relaxed">
              {t("missionDesc")}
            </p>
          </div>

        </div>
      </section>

      <section className="max-w-6xl mx-auto px-4 mt-12">
        <div className="text-center space-y-2 mb-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#1e2d4a]">
            {t("location")}
          </h2>
          <div className="w-12 h-0.5 bg-blue-500 mx-auto rounded-full" />
        </div>
        <div className="rounded-2xl overflow-hidden border border-slate-100 shadow-xl w-full h-[400px] sm:h-[500px] bg-slate-100">
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

      <style jsx global>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(24px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
}