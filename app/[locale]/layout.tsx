import ClientLayout from "../components/ClientLayout";
import Footer from "../components/Footer";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";

export function generateStaticParams() {
  return [{ locale: "tj" }, { locale: "ru" }, { locale: "en" }];
}

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  const titles: Record<string, string> = {
    tj: 'Аквапарки Кӯли Душанбе',
    ru: 'Аквапарк Кули Душанбе',
    en: 'Aquapark Kuli Dushanbe'
  }
  const descriptions: Record<string, string> = {
    tj: 'Беҳтарин ҷои истироҳат барои тамоми оила дар Душанбе. Аз соли 2022. Зиёда аз 100 000 меҳмон.',
    ru: 'Лучшее место отдыха для всей семьи в Душанбе. Работаем с 2022 года.',
    en: 'Best family recreation destination in Dushanbe. Operating since 2022.'
  }
  const title = titles[locale] || 'Аквапарки Кӯли Душанбе'
  const description = descriptions[locale] || 'Беҳтарин ҷои истироҳат барои тамоми оила дар Душанбе. Аз соли 2022. Зиёда аз 100 000 меҳмон.'

  return {
    title,
    description,
    metadataBase: new URL('https://kuli-dushanbe.vercel.app'),
    openGraph: {
      title,
      description,
      url: 'https://kuli-dushanbe.vercel.app',
      siteName: titles[locale] || titles['tj'],
      images: [
        {
          url: 'https://kuli-dushanbe.vercel.app/images/img1.png',
          width: 1200,
          height: 630,
          alt: title,
        }
      ],
      locale: locale,
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: ['https://kuli-dushanbe.vercel.app/images/img1.png'],
    },
    icons: {
      icon: '/image.png',
      apple: '/image.png',
    }
  }
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
