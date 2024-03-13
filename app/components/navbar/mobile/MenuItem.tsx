import type { navbar } from '@/typings/navbar';

import { usePathname } from 'next/navigation';
import Link from 'next/link';

import Collapsible from './collapsible/Collapsible';

type Props = {
  item: navbar.MenuItem;
  menuOpen: boolean;
  closeMenu: () => void;
};

const MenuItem = ({ item, menuOpen, closeMenu }: Props) => {
  const pathname = usePathname() as string;

  if (item.submenu) {
    return (
      <Collapsible item={item} menuOpen={menuOpen} closeMenu={closeMenu} />
    );
  }

  const activeLink = pathname.includes(item.url);

  return (
    <li className='px-8 py-5'>
      <Link
        href={item.url}
        className={`w-full text-3xl ${activeLink ? 'font-semibold' : ''}`}>
        {item.title}
      </Link>
    </li>
  );
};

export default MenuItem;
