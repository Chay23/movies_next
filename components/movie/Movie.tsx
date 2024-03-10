import type { movie } from '@/typings/movie/movie';
import type { api } from '@/typings/api';

import MovieDescription from './MovieDescription';
import MovieImage from '../common/image/MovieImage';
import MovieCast from './cast/MovieCast';

type MovieProps = {
  movie: movie.Movie;
  credits: api.MovieCreditsResponse;
};

const Movie = ({ movie, credits }: MovieProps) => {
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
            serverWidth={500}
            fill
            alt='Movie poster'
            priority
          />
        </div>
        <MovieDescription movie={movie} />
      </div>
      <MovieCast cast={credits.cast} />
    </article>
  );
};

export default Movie;
