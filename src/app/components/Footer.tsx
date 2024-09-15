import { Link, Locale } from '@lib/i18n';
import { loadFooterMenu } from '@sanityConf/lib/fetchers';
import { SanityMenuBuilder } from 'helpers/SanityMenuBuilder';
import { getTranslations, unstable_setRequestLocale } from 'next-intl/server';

export default async function Footer({ locale }: { locale: Locale }) {
  const currentDate = new Date();
  const currentYear = currentDate.getFullYear();
  unstable_setRequestLocale(locale);

  const t = await getTranslations('Global');

  const menuBuilder = new SanityMenuBuilder({
    locale,
    loadMenu: loadFooterMenu
  });

  const menu = await menuBuilder.getMenuData();

  return (
    <footer className="bg-base-200 text-base-content p-4">
      <div className="container mx-auto text-center flex flex-col lg:flex-row lg:justify-between">
        <div>
          {t('all-rights-reserved')} {currentYear}.
        </div>
        <div className="flex flex-col lg:flex-row space-x-4 mt-2">
          {menu.items.map((menuItem) => {
            return (
              <Link id={menuItem.id} href={menuItem.linkTo} key={menuItem.id}>
                {menuItem.label}
              </Link>
            );
          })}
        </div>
      </div>
    </footer>
  );
}
