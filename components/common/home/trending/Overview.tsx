import type { Production } from '@/typings/common';

import Link from 'next/link';

type Props = {
  item: Production;
  isMovies: boolean;
};

export default function Overview({ item, isMovies }: Props) {
  return (
    <div className='text-slate-200 pb-12 basis-1/2'>
      <h3>{isMovies ? item.title : item.name}</h3>
      <p className='my-5'>{item.overview}</p>
      <Link
        href={`/${isMovies ? 'movies' : 'tv'}/details/${item.id}`}
        className='block mt-5 text-xl w-fit after:block after:w-0 after:bg-slate-100 after:h-[2px] after:hover:w-full after:transition-all after:duration-500'>
        View
      </Link>
    </div>
  );
}
