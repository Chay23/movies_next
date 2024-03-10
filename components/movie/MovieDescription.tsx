import type { movie } from '@/typings/movie/movie';

import { getMovieDescription } from './utils';

type MovieDescriptionProps = {
  movie: movie.Movie;
};

const MovieDescription = ({ movie }: MovieDescriptionProps) => {
  const movieDesc = getMovieDescription(movie);

  return (
    <div className='flex flex-col gap-5'>
      <i>{movie.tagline}</i>
      {movieDesc.map(item => (
        <div key={item.title}>
          <p className='text-lg font-semibold'>{item.title}</p>
          <p>{item.value}</p>
        </div>
      ))}
    </div>
  );
};

export default MovieDescription;
