import { memo } from 'react';

import ExtendedMovie from './ExtendedMovie';

type Props = {
  movies: movie.Movie[];
};

const ExtendedMovieList = ({ movies }: Props) => {
  return (
    <div className='grid grid-cols-5 gap-10'>
      {movies.map(movie => (
        <ExtendedMovie key={movie.id} movie={movie} />
      ))}
    </div>
  );
};

export default memo(ExtendedMovieList);
