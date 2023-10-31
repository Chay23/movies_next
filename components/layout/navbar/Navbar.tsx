import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

import type { NextFont } from 'next/dist/compiled/@next/font';
import type { ChangeEvent, FormEvent } from 'react';

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
    router.push(`/movies/search?value=${searchValue}&page=1`);
  };

  return (
    <nav
      className={`flex items-center justify-between h-20 px-16 bg-gray-800 text-slate-100 ${font.className}`}>
      <Link href={'/'}>
        <h1>Movies</h1>
      </Link>
      <div className='flex items-center gap-4'>
        <form onSubmit={handleSearchSubmit}>
          <input
            placeholder='Search'
            value={searchValue}
            onChange={handleSearchValueChange}
            className='rounded-lg p-1 text-black'
          />
        </form>
        <Link href={'/movies'} className='hover:underline'>
          All Movies
        </Link>
        <Link href={'/movies'} className='hover:underline'>
          Popular
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
