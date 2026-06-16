import { useTranslations } from "next-intl";
import Image from "next/image";

export default function Footer() {
  const t = useTranslations("footer");

  return (
    <footer className="bg-gradient-to-b from-[#0f172a] to-[#1e293b] text-slate-200 py-12 px-6 border-t border-slate-800">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">

          <div className="flex flex-col items-start space-y-4">
            <div className="bg-white/5 p-2 rounded-xl backdrop-blur-sm border border-white/10 shadow-md">
              <Image
                src="/image.png"
                alt="Logo"
                width={55}
                height={55}
                className="rounded-lg object-contain"
              />
              
            </div>
            <div>
              <h3 className="text-xl font-bold tracking-wide text-white">
                Аквапарк Кӯли Душанбе
              </h3>
              <p className="text-slate-400 text-sm mt-1.5 leading-relaxed">
                {t("description") || "Лаҳзаҳои фаромӯшнашаванда дар маркази дилхушии пойтахт."}
              </p>
            </div>
          </div>

          <div className="flex flex-col space-y-4">
            <h4 className="text-sm font-semibold uppercase tracking-wider text-slate-400">
              {t("contacts") || "Алоқа"}
            </h4>

            <div className="space-y-3">
              <a
                href="tel:+992446013030"
                className="group flex items-center space-x-3 text-slate-300 hover:text-cyan-400 transition-all duration-300"
              >
                <div className="p-2 bg-slate-800 rounded-lg group-hover:bg-cyan-500/10 transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                </div>
                <span className="font-medium text-sm sm:text-base">+992 44 601 3030</span>
              </a>

              <a
                href="mailto:dushanbelake@gmail.com"
                className="group flex items-center space-x-3 text-slate-300 hover:text-cyan-400 transition-all duration-300"
              >
                <div className="p-2 bg-slate-800 rounded-lg group-hover:bg-cyan-500/10 transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
                </div>
                <span className="font-medium text-sm sm:text-base break-all">dushanbelake@gmail.com</span>
              </a>
            </div>
          </div>

          <div className="flex flex-col space-y-4">
            <h4 className="text-sm font-semibold uppercase tracking-wider text-slate-400">
              {t("follow")}
            </h4>
            <div className="flex gap-3">
              <a
                href="https://www.instagram.com/kuli_dushanbe/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-slate-800 text-slate-300 rounded-xl hover:bg-gradient-to-tr hover:from-amber-500 hover:to-purple-600 hover:text-white hover:-translate-y-1 transition-all duration-300 shadow-md"
                aria-label="Instagram"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
              </a>

              <a
                href="https://www.facebook.com/dushanbelake"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-slate-800 text-slate-300 rounded-xl hover:bg-blue-600 hover:text-white hover:-translate-y-1 transition-all duration-300 shadow-md"
                aria-label="Facebook"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
              </a>
            </div>
          </div>

        </div>

        <div className="border-t border-slate-800 pt-6 mt-6 flex flex-col sm:flex-row items-center justify-between text-xs sm:text-sm text-slate-500 space-y-3 sm:space-y-0">
          <div>
            © {new Date().getFullYear()} Аквапарк Кӯли Душанбе. {t("rights")}
          </div>
          <div className="flex space-x-4">
            <span className="hover:text-slate-400 cursor-pointer transition-colors">Политика конфиденциальности</span>
          </div>
        </div>
      </div>
    </footer>
  );
}