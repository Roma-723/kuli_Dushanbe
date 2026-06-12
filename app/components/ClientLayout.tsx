"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import { useLocale, useTranslations } from "next-intl";

type Locale = "tj" | "ru" | "en";

const locales: Locale[] = ["tj", "ru", "en"];
const localeLabels: Record<Locale, string> = {
  tj: "TJ",
  ru: "RU",
  en: "EN",
}

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isOpen, setIsOpen] = useState(false);
  const locale = useLocale() as Locale;
  const router = useRouter();
  const pathname = usePathname();
  const t = useTranslations("nav");

  const navLinks = [
    { href: "/", label: t("home") },
    { href: "/about", label: t("about") },
    { href: "/attractions", label: t("attractions") },
    { href: "/contact", label: t("contact") },
  ];

  const closeModal = () => setIsOpen(false);

  const switchLocale = (newLocale: Locale) => {
    const segments = pathname.split("/");
    segments[1] = newLocale;
    const newPath = segments.join("/") || "/";
    router.push(newPath);
  };

  const isPathActive = (href: string) => {
    const segments = pathname.split("/");
    const pathWithoutLocale = segments.slice(2).join("/") || "/";
    return pathWithoutLocale === href || (href === "/" && pathWithoutLocale === "");
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-50/50">
      <header className="flex items-center justify-between px-8 py-3 bg-white border-b border-gray-100">
        <Link href="/" className="flex items-center hover:opacity-90 transition-opacity">
          <div className="relative w-17 h-17 flex items-center justify-center">
            <Image
              src="/image.png"
              alt="Logo"
              width={68}
              height={68}
              className="object-contain drop-shadow-lg"
            />
          </div>
        </Link>

          <nav className="hidden sm:flex items-center gap-10 font-medium text-[15px] text-[#1e2d4a] tracking-wide">
            {navLinks.map((link) => {
              const isActive = isPathActive(link.href);
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className="relative hover:text-blue-600 transition-colors duration-200 after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[2px] after:bg-blue-600 after:transition-all after:duration-300 hover:after:w-full"
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          <div className="hidden md:flex items-center gap-1">
            {locales.map((loc) => (
              <button
                key={loc}
                onClick={() => switchLocale(loc)}
                className={locale === loc ? "px-2.5 py-1 rounded-lg bg-[#2563EB] text-white text-xs font-bold" : "px-2.5 py-1 text-gray-400 hover:text-[#2563EB] text-xs font-semibold transition-colors"}
              >
                {localeLabels[loc]}
              </button>
            ))}
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden flex flex-col justify-center items-center w-10 h-10 rounded-xl hover:bg-gray-100 text-[#0f2942] transition-all"
            aria-label="Toggle menu"
          >
            <div className="space-y-1.5">
              <span
                className={`w-6 h-0.5 bg-current block rounded transition-transform duration-300 ${
                  isOpen ? "rotate-45 translate-y-2" : ""
                }`}
              />
              <span
                className={`w-6 h-0.5 bg-current block rounded transition-opacity duration-300 ${
                  isOpen ? "opacity-0" : ""
                }`}
              />
              <span
                className={`w-6 h-0.5 bg-current block rounded transition-transform duration-300 ${
                  isOpen ? "-rotate-45 -translate-y-2" : ""
                }`}
              />
            </div>
          </button>
      </header>
      {isOpen && (
        <>
          <div
            className="fixed inset-0 bg-black/30 backdrop-blur-sm z-40 transition-opacity duration-300"
            onClick={closeModal}
          />

          <div className="fixed top-0 right-0 h-full w-72 bg-white shadow-2xl z-50 flex flex-col animate-in slide-in-from-right duration-300">
            <div className="flex items-center justify-between p-5 border-b border-gray-50">
              <div className="flex items-center gap-1">
                {locales.map((loc) => (
                  <button
                    key={loc}
                    onClick={() => {
                      switchLocale(loc);
                      closeModal();
                    }}
                    className={locale === loc ? "px-2.5 py-1 rounded-lg bg-[#2563EB] text-white text-xs font-bold" : "px-2.5 py-1 text-gray-400 hover:text-[#2563EB] text-xs font-semibold transition-colors"}
                  >
                    {localeLabels[loc]}
                  </button>
                ))}
              </div>

              <button
                onClick={closeModal}
                className="p-2 hover:bg-gray-100 rounded-xl text-[#0f2942] transition-colors"
                aria-label="Close menu"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>

            <nav className="flex flex-col gap-1 p-4">
              {navLinks.map((link) => {
                const isActive = isPathActive(link.href);
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={closeModal}
                    className={`flex items-center px-4 py-3.5 text-base font-medium rounded-xl transition-all duration-200 ${
                      isActive
                        ? "bg-blue-50 text-blue-600 font-semibold"
                        : "text-gray-600 hover:bg-gray-50 hover:text-[#0f2942]"
                    }`}
                  >
                    {link.label}
                  </Link>
                );
              })}
            </nav>
          </div>
        </>
      )}

      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {children}
      </main>
    </div>
  );
}