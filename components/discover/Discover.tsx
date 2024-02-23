import type { filters } from '@/typings/movie/movieFilters';
import type { api } from '@/typings/api';
import type { movie } from '@/typings/movie/movie';

import Filters from './Filters';
import Movies from './Movies';

type Props = {
  moviesRes: api.PaginatedResponse<movie.Movie>;
  movieGenres: filters.GenreList;
};

const Discover = ({ moviesRes, movieGenres }: Props) => {
  return (
    <section>
      <h1 className='mb-12'>Discover</h1>
      <div className='grid grid-cols-1/4 gap-7'>
        <Filters movieGenres={movieGenres} />
        <Movies moviesRes={moviesRes} />
      </div>
    </section>
  );
};

export default Discover;
