import type { filters } from '@/typings/movie/movieFilters';

import GenresFilter from './GenresFilter';
import SortFilter from './SortFilter';

type Props = {
  movieGenres: filters.GenreList;
};

const DesktopFilters = ({ movieGenres }: Props) => {
  return (
    <section className='hidden md:block p-5 border border-gray-200 shadow-xl rounded-2xl h-fit mb-8'>
      <h3>Filters</h3>
      <SortFilter />
      <GenresFilter movieGenres={movieGenres} />
    </section>
  );
};

export default DesktopFilters;
