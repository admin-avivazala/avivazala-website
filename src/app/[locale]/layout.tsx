import React, { ReactNode } from 'react';
import { Metadata } from 'next';
import Script from 'next/script';
import { draftMode } from 'next/headers';
import { Ubuntu } from 'next/font/google';
import 'globals.css';
import Header from '@components/Header';
import ContentWrapper from '@components/ContentWrapper';
import { Locale, defaultLocale, locales } from '@lib/i18n';
import LiveVisualEditing from '@components/LiveVisualEditing';
import Footer from '@components/Footer';

export const metadata: Metadata = {
  icons: {
    icon: [
      '/img/favicon.jpg',
      '/img/favicon57.png',
      '/img/favicon72.png',
      '/img/favicon114.png',
      '/img/favicon144.png'
    ]
  }
};

const baseFont = Ubuntu({
  subsets: ['latin'],
  weight: ['300', '400', '500', '700']
});

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default async function RootLayout({
  children,
  params
}: Readonly<{
  children: ReactNode;
  params: { locale: string };
}>) {
  const locale = (params.locale || defaultLocale) as Locale;

  return (
    <html lang={params.locale} data-theme="nord">
      <head>
        {process.env.NODE_ENV === 'production' && (
          <Script
            src={`https://cdn-cookieyes.com/client_data/9c98c86201274d8808750f69/script.js`}
            strategy="beforeInteractive"></Script>
        )}
      </head>
      <body className={baseFont.className}>
        <div className="container mx-auto bg-white flex flex-col min-h-screen">
          <Header locale={locale} />
          <ContentWrapper>{children}</ContentWrapper>
          <Footer locale={locale} />
          {draftMode().isEnabled && <LiveVisualEditing />}
        </div>
      </body>
    </html>
  );
}
