import Link from 'next/link';

import MovieImage from '../image/MovieImage';

type Props = {
  movie: movie.Movie;
};

const ExtendedMovie = ({ movie }: Props) => {
  const date = new Date(movie.release_date);

  return (
    <article>
      <div className='relative w-full max-w-xl aspect-5/7 mb-5 rounded-xl overflow-hidden'>
        <MovieImage
          imageSrc={movie.poster_path}
          serverWidth={500}
          fill
          alt='Movie poster'
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
      <p>{date.getFullYear() || ''}</p>
      <p className='truncate mt-2'>{movie.overview}</p>
    </article>
  );
};

export default ExtendedMovie;
