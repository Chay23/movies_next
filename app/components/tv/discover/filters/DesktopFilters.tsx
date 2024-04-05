import type { api } from '@/typings/api';

import GenresFilter from './genres/GenresFilter';
import SortFilter from './SortFilter';
import GenresError from '@/app/components/ui/errors/filters/GenresError';

type Props = {
  genresRes: api.FetcherResponse<api.GenreResponse>;
};

export default function DesktopFilters({ genresRes }: Props) {
  if (genresRes.error) {
    return (
      <GenresError wrapperClasses='hidden md:flex flex-col items-center justify-center bg-gray-300 rounded-xl h-[600px] p-11' />
    );
  }

  return (
    <section className='hidden md:block p-5 border border-gray-200 shadow-xl rounded-2xl h-fit mb-8'>
      <h3>Filters</h3>
      <SortFilter />
      <GenresFilter genres={genresRes.data.genres} />
    </section>
  );
}
