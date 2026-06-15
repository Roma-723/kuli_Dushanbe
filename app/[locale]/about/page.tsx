"use client";

import { useTranslations } from "next-intl";

export default function About() {
  const t = useTranslations("about");
  const tRules = useTranslations("rules");

  return (
    <div className="min-h-screen pb-20">
      <section className="relative py-24 text-center overflow-hidden" style={{ background: 'linear-gradient(135deg, #0f2942 0%, #1a4a7a 50%, #0ea5e9 100%)' }}>
        <div className="absolute top-[-60px] right-[-60px] w-72 h-72 rounded-full opacity-10" style={{background:'#38bdf8'}} />
        <div className="absolute bottom-[-40px] left-[-40px] w-48 h-48 rounded-full opacity-10" style={{background:'#38bdf8'}} />

        <div className="relative z-10 max-w-3xl mx-auto px-4 space-y-4">
          <h1 className="relative text-5xl font-extrabold text-white mb-3 tracking-tight">
            {t("title")}
          </h1>
          <p className="relative text-blue-200 text-lg max-w-xl mx-auto">
            {t("subtitle")}
          </p>
          <div className="w-16 h-1 bg-[#38bdf8] mx-auto mt-5 rounded-full" />
        </div>
      </section>

      <section className="max-w-5xl mx-auto px-4 -translate-y-10 z-20 relative">
        <div className="relative mx-4 sm:mx-8 lg:mx-16 -mt-8 z-10 rounded-2xl shadow-2xl py-10" style={{ background: 'linear-gradient(135deg, #2563EB, #1d4ed8)', backdropFilter: 'blur(10px)' }}>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-3 sm:gap-4 divide-y sm:divide-y-0 sm:divide-x divide-blue-400/40 text-center text-white">
            <div className="pt-4 sm:pt-0">
              <div className="text-4xl font-black text-white tracking-tight">{t("stat1value")}</div>
              <div className="text-blue-200 text-xs font-semibold uppercase tracking-widest mt-1">{t("stat1")}</div>
            </div>
            <div className="pt-6 sm:pt-0">
              <div className="text-4xl font-black text-white tracking-tight">{t("stat2value")}</div>
              <div className="text-blue-200 text-xs font-semibold uppercase tracking-widest mt-1">{t("stat2")}</div>
            </div>
            <div className="pt-6 sm:pt-0">
              <div className="text-4xl font-black text-white tracking-tight">{t("stat3value")}</div>
              <div className="text-blue-200 text-xs font-semibold uppercase tracking-widest mt-1">{t("stat3")}</div>
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-5xl mx-auto px-4 py-16 grid grid-cols-1 sm:grid-cols-3 gap-6">
        <div
          style={{ animationDelay: "100ms" }}
          className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 hover:shadow-xl hover:border-blue-100 hover:-translate-y-1 transition-all duration-300 cursor-default opacity-0 animate-[fadeInUp_0.5s_ease-out_forwards]"
        >
          <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center text-blue-600">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <rect x="3" y="4" width="18" height="18" rx="2" />
              <path d="M16 2v4M8 2v4M3 10h18" />
            </svg>
          </div>
          <h3 className="text-xl font-bold text-[#0f2942] mt-5 mb-2">
            {t("since")}
          </h3>
          <p className="text-gray-500 text-sm leading-relaxed">
            {t("visitorsDesc")}
          </p>
        </div>
        <div
          style={{ animationDelay: "250ms" }}
          className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 hover:shadow-xl hover:border-blue-100 hover:-translate-y-1 transition-all duration-300 cursor-default opacity-0 animate-[fadeInUp_0.5s_ease-out_forwards]"
        >
          <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center text-blue-600">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
              <circle cx="9" cy="7" r="4" />
              <path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" />
            </svg>
          </div>
          <h3 className="text-xl font-bold text-[#0f2942] mt-5 mb-2">
            {t("team")}
          </h3>
          <p className="text-gray-500 text-sm leading-relaxed">
            {t("teamDesc")}
          </p>
        </div>
        <div
          style={{ animationDelay: "400ms" }}
          className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 hover:shadow-xl hover:border-blue-100 hover:-translate-y-1 transition-all duration-300 cursor-default opacity-0 animate-[fadeInUp_0.5s_ease-out_forwards]"
        >
          <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center text-blue-600">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
            </svg>
          </div>
          <h3 className="text-xl font-bold text-[#0f2942] mt-5 mb-2">
            {t("mission")}
          </h3>
          <p className="text-gray-500 text-sm leading-relaxed">
            {t("missionDesc")}
          </p>
        </div>
      </section>
      <section className="py-16 px-4 mt-0">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-[#1e2d4a] text-center mb-12">
            {tRules("title")}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="rounded-2xl shadow-md overflow-hidden mb-8">
              <div className="bg-[#16a34a] text-white px-6 py-4 rounded-t-2xl">
                <div className="flex items-center justify-center gap-3">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                  </svg>
                  <span className="text-lg font-bold">{tRules("required")}</span>
                </div>
              </div>
              <div className="bg-white border border-green-100 rounded-b-2xl p-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {[
                    { num: 1, icon: <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75"/></svg> },
                    { num: 2, icon: <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M4 12h16M4 12a8 8 0 018-8M4 12v6a2 2 0 002 2h12a2 2 0 002-2v-6"/><path d="M8 18v2M12 18v2M16 18v2"/></svg> },
                    { num: 3, icon: <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><path d="M12 8v8M8 12h8"/></svg> },
                    { num: 4, icon: <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="12" cy="7" r="4"/><path d="M8 11v8a4 4 0 008 0v-8"/></svg> },
                    { num: 5, icon: <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="12" cy="5" r="3"/><path d="M12 8v4M9 21l3-9 3 9"/></svg> },
                    { num: 6, icon: <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 00-3-3.87"/></svg> },
                    { num: 7, icon: <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg> },
                    { num: 8, icon: <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M23 19a2 2 0 01-2 2H3a2 2 0 01-2-2V8a2 2 0 012-2h4l2-3h6l2 3h4a2 2 0 012 2z"/><circle cx="12" cy="13" r="4"/></svg> }
                  ].map((item) => (
                    <div key={item.num} className="flex items-start gap-3">
                      <div className="w-8 h-8 rounded-full bg-green-100 text-green-600 flex items-center justify-center shrink-0">{item.icon}</div>
                      <p className="text-sm text-gray-700 leading-snug">{tRules(`items.req${item.num}`)}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="rounded-2xl shadow-md overflow-hidden mb-8">
              <div className="bg-[#dc2626] text-white px-6 py-4 rounded-t-2xl">
                <div className="flex items-center justify-center gap-3">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"/>
                  </svg>
                  <span className="text-lg font-bold">{tRules("prohibited")}</span>
                </div>
              </div>
              <div className="bg-white border border-red-100 rounded-b-2xl p-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {[
                    { num: 1, icon: <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M18 8h1a4 4 0 010 8h-1M2 8h16v9a4 4 0 01-4 4H6a4 4 0 01-4-4V8zM6 1v3M10 1v3M14 1v3"/></svg> },
                    { num: 2, icon: <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M8 2h8l-1 7H9L8 2zM9 9v13M15 9v13M6 22h12"/></svg> },
                    { num: 3, icon: <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="13" cy="4" r="2"/><path d="M7 22l2-8 3 3 3-6 3 5M7 14l2-4 4 2 2-4"/></svg> },
                    { num: 4, icon: <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M12 2v10M8 8l4 4 4-4M3 18c3-2 6-3 9-3s6 1 9 3"/></svg> },
                    { num: 5, icon: <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="4.5" cy="9.5" r="2.5"/><circle cx="9" cy="5.5" r="2.5"/><circle cx="15" cy="5.5" r="2.5"/><circle cx="19.5" cy="9.5" r="2.5"/><path d="M12 13c-3.866 0-7 1.79-7 4v1h14v-1c0-2.21-3.134-4-7-4z"/></svg> },
                    { num: 6, icon: <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M2 16h14M2 12h14M18 8c0-2 2-2 2-4s-2-2-2-4M22 16h-2M22 12h-2"/></svg> },
                    { num: 7, icon: <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg> },
                    { num: 8, icon: <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M23 19a2 2 0 01-2 2H3a2 2 0 01-2-2V8a2 2 0 012-2h4l2-3h6l2 3h4a2 2 0 012 2z"/><circle cx="12" cy="13" r="4"/><line x1="2" y1="2" x2="22" y2="22"/></svg> }
                  ].map((item) => (
                    <div key={item.num} className="flex items-start gap-3">
                      <div className="w-8 h-8 rounded-full bg-red-100 text-red-600 flex items-center justify-center shrink-0">{item.icon}</div>
                      <p className="text-sm text-gray-700 leading-snug">{tRules(`items.proh${item.num}`)}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="rounded-2xl shadow-md overflow-hidden mb-8">
              <div className="bg-[#d97706] text-white px-6 py-4 rounded-t-2xl">
                <div className="flex items-center justify-center gap-3">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd"/>
                  </svg>
                  <span className="text-lg font-bold">{tRules("responsibility")}</span>
                </div>
              </div>

              
              <div className="bg-white border border-amber-100 rounded-b-2xl p-6">
                <div className="grid grid-cols-1 gap-3">
                  {[
                    { num: 1, icon: <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg> },
                    { num: 2, icon: <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><rect x="2" y="5" width="20" height="14" rx="2"/><path d="M2 10h20"/></svg> },
                    { num: 3, icon: <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4zM3 6h18M16 10a4 4 0 01-8 0"/></svg> },
                    { num: 4, icon: <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M9 21H5a2 2 0 01-2-2V5a2 2 0 012-2h4M16 17l5-5-5-5M21 12H9"/></svg> }
                  ].map((item) => (
                    <div key={item.num} className="flex items-start gap-3">
                      <div className="w-8 h-8 rounded-full bg-amber-100 text-amber-600 flex items-center justify-center shrink-0">{item.icon}</div>
                      <p className="text-sm text-gray-700 leading-snug">{tRules(`items.resp${item.num}`)}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
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