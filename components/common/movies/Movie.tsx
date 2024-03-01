import type { movie } from '@/typings/movie/movie';

import Link from 'next/link';

import MovieImage from '../image/MovieImage';

import { DEFAULT_BLANK_VALUE } from '@/utils/constants';

type Props = {
  movie: movie.Movie;
};

const Movie = ({ movie }: Props) => {
  const date = new Date(movie.release_date);

  return (
    <article>
      <div className='relative w-full max-w-xl aspect-5/7 mb-5 rounded-xl overflow-hidden'>
        <MovieImage
          imageSrc={movie.poster_path}
          serverWidth={400}
          fill
          alt='Movie poster'
          sizes='(max-width: 768px) 15vw, (max-width: 1200px) 25vw, 30vw'
          style={{ objectFit: 'cover' }}
        />
      </div>
      <Link
        href={{
          pathname: '/movies/details/[id]',
          query: { id: movie.id },
        }}
        className='text-2xl hover:font-semibold'>
        {movie.title}
      </Link>
      <p>{date.getFullYear() || DEFAULT_BLANK_VALUE}</p>
      <p className='truncate mt-2'>{movie.overview}</p>
    </article>
  );
};

export default Movie;
