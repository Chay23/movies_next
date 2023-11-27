import Link from 'next/link';

import MovieImage from '../image/MovieImage';

type Props = {
  movie: movie.Movie;
};

const Movie = ({ movie }: Props) => {
  return (
    <Link
      href={{
        pathname: '/movies/[id]',
        query: { id: movie.id },
      }}>
      <article className='relative flex flex-col rounded-xl overflow-hidden hover:scale-125 transition-all'>
        <MovieImage
          imageSrc={movie.poster_path}
          serverWidth={400}
          width={200}
          height={400}
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

export default Movie;
