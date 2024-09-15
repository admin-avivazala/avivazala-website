import { notFound } from 'next/navigation';
import { getRequestConfig } from 'next-intl/server';
import { createSharedPathnamesNavigation } from 'next-intl/navigation';

export type Locale = (typeof locales)[number];
export const locales = ['hu', 'en'] as const;
export const localeNames: Record<Locale, string> = {
  hu: 'Magyar',
  en: 'English'
};
export const defaultLocale = 'hu';

export const supportedLanguages = [
  { id: 'hu', title: localeNames['hu'], isDefault: true },
  { id: 'en', title: localeNames['en'] }
];

export default getRequestConfig(async ({ locale }) => {
  if (!locales.includes(locale as Locale)) notFound();

  return {
    messages: (await import(`../translations/${locale}.json`)).default
  };
});

export const { Link, usePathname, useRouter } = createSharedPathnamesNavigation(
  { locales }
);
