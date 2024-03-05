import { Roboto } from 'next/font/google';

import Link from 'next/link';

import DesktopMenu from './desktop/DesktopMenu';
import MobileMenu from './mobile/MobileMenu';

const roboto = Roboto({ subsets: ['latin'], weight: ['400'] });

const Navbar = () => {
  return (
    <nav
      className={`sticky top-0 left-0 w-full z-50 flex items-center justify-between h-16 px-12 xl:px-16 bg-gray-800 text-slate-100 ${roboto.className}`}>
      <Link href={'/'}>
        <h2>Movies</h2>
      </Link>
      <DesktopMenu />
      <MobileMenu />
    </nav>
  );
};

export default Navbar;
