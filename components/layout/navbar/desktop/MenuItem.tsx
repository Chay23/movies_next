import type { navbar } from '@/typings/navbar';

import { useRouter } from 'next/router';
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
  const { pathname } = useRouter();

  const activeLink = pathname.match(item.url);

  if (item.submenu) {
    return (
      <li className='relative'>
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
    <li className='h-full relative'>
      <Link
        href={item.url}
        className={`flex items-center h-full nav-link-styling after:hover:h-1 ${
          activeLink ? 'after:h-1' : 'after:h-0'
        }`}>
        {item.title}
      </Link>
    </li>
  );
};

export default MenuItem;
