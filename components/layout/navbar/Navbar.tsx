import type { NextFont } from '@next/font';
import Link from 'next/link';

type NavbarProps = {
  font: NextFont;
};

const Navbar = ({ font }: NavbarProps) => {
  return (
    <nav
      className={`flex items-center justify-between h-20 px-16 bg-gray-800 text-slate-100 ${font.className}`}>
      <Link href={'/'}>
        <h1>Movies</h1>
      </Link>
      <div className='flex gap-4'>
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
