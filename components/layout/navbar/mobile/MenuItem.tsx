import type { navbar } from '@/typings/navbar';

import { useRouter } from 'next/router';
import Link from 'next/link';

import Collapsible from './collapsible/Collapsible';

type Props = {
  item: navbar.MenuItem;
  menuOpen: boolean;
};

const MenuItem = ({ item, menuOpen }: Props) => {
  const { pathname } = useRouter();

  if (item.submenu) {
    return <Collapsible item={item} menuOpen={menuOpen} />;
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
