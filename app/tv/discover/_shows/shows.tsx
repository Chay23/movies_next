'use client';

import type { api } from '@/typings/api';
import type { tv } from '@/typings/tv/tv';

import PaginatedList from '@/app/components/common/list/PaginatedList';
import TVShow from '@/app/components/common/tv-shows/TVShow';
import NoResultsFound from '@/app/components/ui/NoResultsFound';

import { useQueryParams } from '@/hooks/app/useQueryParams';

type Props = {
  tvShowsRes: api.PaginatedResponse<tv.Show>;
};

export default function TvShows({ tvShowsRes }: Props) {
  const { queryParams, updateQueryParams } = useQueryParams();

  const handlePageChange = (_: any, page: number) => {
    updateQueryParams({ page: page.toString() });
  };

  if (!tvShowsRes.results.length) {
    return <NoResultsFound />;
  }

  return (
    <PaginatedList
      page={parseInt(queryParams.page)}
      totalPages={tvShowsRes.total_pages}
      onPageChange={handlePageChange}
      items={tvShowsRes.results}
      listItem={tvShow => <TVShow key={tvShow.id} tvShow={tvShow} />}
    />
  );
}
