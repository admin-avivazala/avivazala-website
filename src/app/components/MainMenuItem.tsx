'use client';

import { Link } from '@lib/i18n';
import { ReactNode, MouseEvent } from 'react';

export type MainMenuItemProps = {
  id: string;
  label: string;
  linkTo: string;
  submenu?: MainMenuItemProps[];
  isDesktop?: boolean;
};

const MobileItem = ({ label, linkTo, submenu }: MainMenuItemProps) => {
  const closeMenu = (event: MouseEvent<HTMLAnchorElement>) => {
    event.currentTarget.blur();
  };

  return (
    <>
      <Link href={linkTo} title={label} onClick={closeMenu}>
        {label}
      </Link>
      {submenu && submenu.length && (
        <ul className="p-2" style={{ marginTop: '4px' }}>
          {submenu.map((subMenuItem) => (
            <MainMenuItem
              id={subMenuItem.id}
              label={subMenuItem.label}
              linkTo={subMenuItem.linkTo}
              key={subMenuItem.id}
            />
          ))}
        </ul>
      )}
    </>
  );
};
const DesktopItem = ({ label, linkTo, submenu }: MainMenuItemProps) => {
  const closeMenu = () => {
    const items = Array.from(document.getElementsByTagName('details'));

    items.forEach((item) => {
      if (item.hasAttribute('open')) {
        item.removeAttribute('open');
      }
    });
  };

  return submenu?.length ? (
    <details>
      <summary>{label}</summary>
      {submenu && submenu.length && (
        <ul className="p-2" style={{ marginTop: '4px' }}>
          {submenu.map((subMenuItem) => (
            <MainMenuItem
              id={subMenuItem.id}
              label={subMenuItem.label}
              linkTo={subMenuItem.linkTo}
              isDesktop
              key={subMenuItem.id}
            />
          ))}
        </ul>
      )}
    </details>
  ) : (
    <Link href={linkTo} title={label} onClick={closeMenu}>
      {label}
    </Link>
  );
};

export default function MainMenuItem(props: MainMenuItemProps): ReactNode {
  return (
    <li>
      {props.isDesktop ? <DesktopItem {...props} /> : <MobileItem {...props} />}
    </li>
  );
}
