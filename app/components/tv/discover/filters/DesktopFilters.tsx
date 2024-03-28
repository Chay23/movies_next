import type { filters } from '@/typings/filters';

import GenresFilter from './GenresFilter';
import SortFilter from './SortFilter';

type Props = {
  genres: filters.GenreList;
};

export default function DesktopFilters({ genres }: Props) {
  return (
    <section className='hidden md:block p-5 border border-gray-200 shadow-xl rounded-2xl h-fit mb-8'>
      <h3>Filters</h3>
      <SortFilter />
      <GenresFilter genres={genres} />
    </section>
  );
}
