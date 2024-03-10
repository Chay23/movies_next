import type { movie } from '@/typings/movie/movie';

import MovieDescription from './MovieDescription';
import MovieImage from '../common/image/MovieImage';

type MovieProps = {
  movie: movie.Movie;
};

const Movie = ({ movie }: MovieProps) => {
  const releaseDate = new Date(movie.release_date);

  return (
    <article>
      <div className='mb-10'>
        <h1>{`${movie.title} (${releaseDate.getFullYear()})`}</h1>
      </div>
      <div className='flex flex-1 gap-x-10'>
        <div className='relative aspect-2/3 w-full max-w-xs'>
          <MovieImage
            imageSrc={movie.poster_path}
            serverWidth={'original'}
            fill
            alt='Movie poster'
            priority
          />
        </div>
        <MovieDescription movie={movie} />
      </div>
    </article>
  );
};

export default Movie;
