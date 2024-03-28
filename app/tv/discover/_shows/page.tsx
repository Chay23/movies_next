import type { api } from '@/typings/api';
import type { tv } from '@/typings/tv/tv';
import type { searchParams } from '@/typings/tv/searchParams/tvDiscover';

import Error from '@/components/error/Error';
import TvShows from './shows';

import { getData } from '@/services/api';

type Props = {
  searchParams: searchParams.TvDiscover;
};

export default async function TVShowsPage({ searchParams }: Props) {
  const { page, sort_by, with_genres } = searchParams;
  const queryParams = new URLSearchParams({
    page,
    sort_by,
    ...(with_genres && { with_genres }),
  });

  const tvShowsRes = await getData<api.PaginatedResponse<tv.Show>>(
    `/discover/tv?${queryParams.toString()}`
  );

  if (tvShowsRes.error) {
    const { status, info } = tvShowsRes;
    return <Error status={status} info={info} />;
  }

  return <TvShows tvShowsRes={tvShowsRes.data} searchParams={searchParams} />;
}
