import type { movie } from '@/typings/movie/movie';

import Link from 'next/link';

import MovieImage from '../image/MovieImage';

type Props = {
  movie: movie.Movie;
};

const MovieCarouselItem = ({ movie }: Props) => {
  return (
    <Link
      href={{
        pathname: '/movies/details/[id]',
        query: { id: movie.id },
      }}>
      <article className='relative flex flex-col rounded-xl overflow-hidden'>
        <MovieImage
          imageSrc={movie.poster_path}
          serverWidth={400}
          width={200}
          height={400}
          className='hover:opacity-90 transition-all'
          sizes='30vw'
          alt='Movie poster'
        />
        <div className='p-2'>
          <div
            onMouseEnter={() => {}}
            className='hover:text-slate-500 transition-all'>
            {movie.title}
          </div>
        </div>
      </article>
    </Link>
  );
};

export default MovieCarouselItem;
