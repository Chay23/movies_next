import type { filters } from '@/typings/movie/movieFilters';
import type { api } from '@/typings/api';
import type { movie } from '@/typings/movie/movie';

import Movies from './Movies';
import MobileFilters from './filters/MobileFilters';
import DesktopFilters from './filters/DesktopFilters';

type Props = {
  moviesRes: api.PaginatedResponse<movie.Movie>;
  movieGenres: filters.GenreList;
};

const Discover = ({ moviesRes, movieGenres }: Props) => {
  return (
    <section>
      <div className='flex justify-between items-center lg:block'>
        <h1>Discover</h1>
        <MobileFilters movieGenres={movieGenres} />
      </div>
      <div className='mt-5 lg:mt-12 md:grid md:grid-cols-1/2 xl:grid-cols-1/4 gap-7'>
        <DesktopFilters movieGenres={movieGenres} />
        <Movies moviesRes={moviesRes} />
      </div>
    </section>
  );
};

export default Discover;
