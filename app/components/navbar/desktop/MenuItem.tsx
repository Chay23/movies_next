import type { navbar } from '@/typings/navbar';

import { usePathname } from 'next/navigation';
import { useBoolean } from '@/hooks/useBoolean';

import Link from 'next/link';

import Dropdown from './Dropdown';

type Props = {
  item: navbar.MenuItem;
};

const MenuItem = ({ item }: Props) => {
  const {
    value: showDropdown,
    setTrue: handleShowDropdown,
    setFalse: handleCloseDropdown,
  } = useBoolean(false);
  const pathname = usePathname() as string;

  const activeLink = pathname.match(item.url);

  if (item.submenu) {
    return (
      <li className='relative text-slate-100'>
        <button
          className={`h-full nav-link-styling ${
            activeLink ? 'after:h-1' : 'after:h-0'
          }`}
          onMouseEnter={handleShowDropdown}
          onMouseLeave={handleCloseDropdown}>
          {item.title}
        </button>
        <Dropdown
          item={item}
          showDropdown={showDropdown}
          handleShowDropdown={handleShowDropdown}
          handleCloseDropdown={handleCloseDropdown}
        />
      </li>
    );
  }

  return (
    <li className='h-full relative text-slate-100'>
      <Link
        href={item.url}
        className={`flex items-center h-full nav-link-styling hover:after:h-1 ${
          activeLink ? 'after:h-1' : 'after:h-0'
        }`}>
        {item.title}
      </Link>
    </li>
  );
};

export default MenuItem;
