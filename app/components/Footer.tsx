import { useTranslations } from "next-intl";
import Image from "next/image";

export default function Footer() {
  const t = useTranslations("footer");

  return (
    <footer className="bg-[#1e2d4a] text-white py-10 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mb-8">
          {/* Column 1 - Logo & Brand */}
          <div>
            <Image
              src="/image.png"
              alt="Logo"
              width={50}
              height={50}
              className="rounded-lg"
            />
            <h3 className="text-lg font-bold mt-2">Аквапарк Кӯли Душанбе</h3>
            <p className="text-gray-400 text-sm mt-1">{t("follow")}</p>
          </div>

          {/* Column 2 - Contact */}
          <div>
            <p className="text-sm text-gray-400 mb-2">{t("phone")}</p>
            <a
              href="tel:+992446013030"
              className="flex items-center text-white font-medium hover:text-gray-300 transition-colors mb-3"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.948V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 7V5z"
                />
              </svg>
              <span className="ml-2">+992 44 601 3030</span>
            </a>
            <a
              href="mailto:dushanbelake@gmail.com"
              className="flex items-center text-white font-medium hover:text-gray-300 transition-colors"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
              <span className="ml-2">dushanbelake@gmail.com</span>
            </a>
          </div>

          {/* Column 3 - Social */}
          <div>
            <p className="text-sm text-gray-400 mb-3">{t("follow")}</p>
            <div className="flex gap-4">
              {/* Instagram */}
              <a
                href="https://www.instagram.com/kuli_dushanbe/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white transition-colors"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="1.5"
                >
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <circle cx="12" cy="12" r="4" />
                  <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" />
                </svg>
              </a>

              {/* Facebook */}
              <a
                href="https://www.facebook.com/dushanbelake"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white transition-colors"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 pt-6 text-center text-sm text-gray-400">
          © 2025 Аквапарк Кӯли Душанбе. {t("rights")}
        </div>
      </div>
    </footer>
  );
}
