import type { Metadata } from "next";
import './globals.css';

import { I18nProvider } from 'next-i18next/client';
import { getResources, getT, initServerI18next } from 'next-i18next/server';
import { Geist, Geist_Mono, Roboto_Flex } from 'next/font/google';
import { headers } from 'next/headers';

import Footer from './_common/components/Footer';
import Navbar from './_common/components/Navbar';
import { i18nConfig, i18nConfigRouter } from './_lib/i18n/i18nConfig';
import Providers from './_lib/react-query/providers';
import { BookmarkStoreProvider } from './_lib/zustand/StoreProvider';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const robotoFlex = Roboto_Flex({
  variable: "--font-roboto-flex",
  subsets: ["latin", "cyrillic", "cyrillic-ext"],
});

export const metadata: Metadata = {
  title: "History App",
  description: "App about Belarusian history",
};

type TRootLayoutProps = {
  children: React.ReactNode;
  params: Promise<{ locale?: string }>;
};

// initServerI18next(i18nConfig);
initServerI18next({
  supportedLngs: i18nConfigRouter.locales,
  fallbackLng: i18nConfigRouter.defaultLocale,
});

export default async function RootLayout({
  children,
  params,
}: TRootLayoutProps) {
  const resolvedParams = await params;
  const locale = resolvedParams.locale || i18nConfigRouter.defaultLocale;

  const { i18n } = await getT(locale);
  const resources = getResources(i18n);

  return (
    <html
      lang={locale}
      className={`${robotoFlex.variable} ${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col items-center">
        <I18nProvider
          language={locale}
          fallbackLng={i18nConfigRouter.defaultLocale}
          resources={resources}
        >
          <BookmarkStoreProvider>
            <Navbar></Navbar>
            <Providers>{children}</Providers>
            <Footer></Footer>
          </BookmarkStoreProvider>
        </I18nProvider>
      </body>
    </html>
  );
}
