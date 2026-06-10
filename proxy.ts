import createMiddleware from "next-intl/middleware";

export default createMiddleware({
  locales: ["tj", "ru", "en"],
  defaultLocale: "tj",
  localePrefix: "always",
});

export const config = {
  matcher: ["/((?!_next|.*\\..*).*)"],
};
