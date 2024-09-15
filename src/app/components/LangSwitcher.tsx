import { Locale, localeNames, locales } from '@lib/i18n';
import Image from 'next/image';
import Link from 'next/link';

export default function LangSwitcher({
  currentLocale
}: {
  currentLocale: Locale;
}) {
  return (
    <div className="join join-horizontal">
      {locales.map((localeId) => (
        <Link
          key={localeId}
          locale={localeId}
          href={`/${localeId}`}
          title={localeNames[localeId]}
          className="pl-1">
          <Image
            src={`/img/flag-${localeId}.png`}
            width={16}
            height={16}
            alt={localeNames[localeId]}
            className={localeId === currentLocale ? 'opacity-45' : ''}></Image>
        </Link>
      ))}
    </div>
  );
}
