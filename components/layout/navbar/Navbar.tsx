import type { NextFont } from 'next/dist/compiled/@next/font';
import type { ChangeEvent, FormEvent } from 'react';

import { useState } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';

import MenuItems from './MenuItems';

import { menuItems } from './constants';

type NavbarProps = {
  font: NextFont;
};

const Navbar = ({ font }: NavbarProps) => {
  const [searchValue, setSearchValue] = useState('');
  const router = useRouter();

  const handleSearchValueChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
  };

  const handleSearchSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSearchValue('');
    router.push(`/movies/search?search=${searchValue}&page=1`);
  };

  return (
    <nav
      className={`fixed w-full z-50 flex items-center justify-between h-16 px-16 bg-gray-800 text-slate-100 ${font.className}`}>
      <Link href={'/'}>
        <h2>Movies</h2>
      </Link>

      <MenuItems items={menuItems}>
        <form onSubmit={handleSearchSubmit} className='self-center'>
          <input
            placeholder='Search'
            value={searchValue}
            onChange={handleSearchValueChange}
            className='rounded-lg p-1 text-black'
          />
        </form>
      </MenuItems>
    </nav>
  );
};

export default Navbar;
