import { ReactNode } from 'react';

type DesktopMainNavbarProps = {
  children: ReactNode;
};

export default function DesktopMainNavbar({
  children
}: DesktopMainNavbarProps) {
  return (
    <div className="navbar m-0 p-0 justify-center hidden lg:flex">
      <div className="navbar-center hidden lg:flex">{children}</div>
    </div>
  );
}
