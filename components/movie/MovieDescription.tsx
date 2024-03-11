import type { movie } from '@/typings/movie/movie';

import MovieImage from '../common/image/MovieImage';

import { getMovieDescription } from './utils';

type MovieDescriptionProps = {
  movie: movie.Movie;
};

const MovieDescription = ({ movie }: MovieDescriptionProps) => {
  const releaseDate = new Date(movie.release_date);
  const movieDesc = getMovieDescription(movie);

  return (
    <div className='flex flex-col md:flex-row items-center md:items-start flex-1 gap-y-10 md:gap-x-10'>
      <div className='relative aspect-2/3 w-full min-w-max max-w-xs'>
        <MovieImage
          imageSrc={movie.poster_path}
          serverWidth={500}
          fill
          alt='Movie poster'
          priority
        />
      </div>
      <div className='flex flex-col gap-5'>
        <h1>{`${movie.title} (${releaseDate.getFullYear()})`}</h1>
        <i>{movie.tagline}</i>
        {movieDesc.map(item => (
          <div key={item.title}>
            <p className='text-lg font-semibold'>{item.title}</p>
            <p>{item.value}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MovieDescription;
