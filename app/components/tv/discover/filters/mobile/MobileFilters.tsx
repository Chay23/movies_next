import type { api } from '@/typings/api';

import GenresFilter from '../genres/GenresFilter';
import SortFilter from '../SortFilter';
import FiltersDrawer from './FiltersDrawer';
import GenresError from '@/app/components/ui/errors/filters/GenresError';

type Props = {
  genresRes: api.FetcherResponse<api.GenreResponse>;
};

export default function MobileFilters({ genresRes }: Props) {
  if (genresRes.error) {
    return (
      <FiltersDrawer genresError>
        <GenresError wrapperClasses='flex flex-col items-center mt-20 w-full h-full text-white' />
      </FiltersDrawer>
    );
  }

  return (
    <FiltersDrawer>
      <>
        <SortFilter />
        <GenresFilter genres={genresRes.data.genres} />
      </>
    </FiltersDrawer>
  );
}
