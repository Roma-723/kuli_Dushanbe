import ClientLayout from "../components/ClientLayout";
import Footer from "../components/Footer";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";

export function generateStaticParams() {
  return [{ locale: "tj" }, { locale: "ru" }, { locale: "en" }];
}

export default async function LocaleLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}>) {
  const { locale } = await params;
  const messages = await getMessages();

  return (
    <>
      <script
        dangerouslySetInnerHTML={{
          __html: `document.documentElement.lang="${locale}";`,
        }}
      />
      <NextIntlClientProvider messages={messages}>
        <ClientLayout>{children}</ClientLayout>
        <Footer />
      </NextIntlClientProvider>
    </>
  );
}
