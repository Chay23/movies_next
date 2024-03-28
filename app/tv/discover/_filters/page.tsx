import type { api } from '@/typings/api';

import Filters from './filters';
import FiltersError from './filtersError';

import { getData } from '@/services/api';

export default async function FiltersPage() {
  const tvGenresRes = await getData<api.GenreResponse>('/genre/tv/list');

  if (tvGenresRes.error) {
    return <FiltersError />;
  }

  return <Filters genres={tvGenresRes.data.genres} />;
}
