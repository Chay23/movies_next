import { useState } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';

import Dropdown from './Dropdown';

type Props = {
  item: navbar.MenuItem;
};

const MenuItem = ({ item }: Props) => {
  const [showDropdown, setShowDropdown] = useState(false);
  const router = useRouter();

  const activeLink = router.pathname.match(item.url);

  const handleShowDropdown = () => {
    setShowDropdown(true);
  };

  const handleCloseDropdown = () => {
    setShowDropdown(false);
  };

  if (item.submenu) {
    return (
      <div className='relative'>
        <button
          className={`h-full nav-link-styling ${activeLink ? 'after:h-1' : 'after:h-0'}`}
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
      </div>
    );
  }

  return (
    <div className='h-full relative'>
      <Link
        href={item.url}
        className={`flex items-center h-full nav-link-styling after:hover:h-1 ${activeLink ? 'after:h-1' : 'after:h-0'}`}>
        {item.title}
      </Link>
    </div>
  );
};

export default MenuItem;
