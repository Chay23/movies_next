import { Production } from '@/typings/common';

import Link from 'next/link';

import MovieImage from '../image/MovieImage';

type Props = {
  item: Production;
  isMovies: boolean;
};

const Item = ({ item, isMovies }: Props) => {
  return (
    <Link href={`/${isMovies ? 'movies' : 'tv'}/details/${item.id}`}>
      <article className='relative flex flex-col rounded-xl overflow-hidden'>
        <MovieImage
          imageSrc={item.poster_path}
          serverWidth={200}
          width={200}
          height={400}
          className='hover:opacity-90 transition-all'
          sizes='90vw'
          alt='Movie poster'
          priority
        />
        <div className='p-2 hover:text-slate-500 transition-all hidden lg:block'>
          {isMovies ? item.title : item.name}
        </div>
      </article>
    </Link>
  );
};

export default Item;
