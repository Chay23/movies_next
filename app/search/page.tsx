import type { api } from '@/typings/api';
import type { Production } from '@/typings/common';

import Search from '@/components/search/Search';

import { DEFAULT_BLANK_VALUE, DEFAULT_PAGE_VALUE } from '@/utils/constants';
import { getData } from '@/services/api';

type Props = {
  searchParams: Promise<{ [key: string]: string | undefined }>;
};

export default async function SearchPage({ searchParams }: Props) {
  const { type, query, page } = await searchParams;

  const movieQueryParams = {
    query: query || DEFAULT_BLANK_VALUE,
    page: type !== 'movie' ? DEFAULT_PAGE_VALUE : page || DEFAULT_PAGE_VALUE,
  };

  const tvQueryParams = {
    query: query || DEFAULT_BLANK_VALUE,
    page: type !== 'tv' ? DEFAULT_PAGE_VALUE : page || DEFAULT_PAGE_VALUE,
  };

  const endpoints = [
    { resource: '/search/movie', queryParams: movieQueryParams },
    { resource: '/search/tv', queryParams: tvQueryParams },
  ];

  const [movies, tvs] = await Promise.all(
    endpoints.map(endpoint =>
      getData<api.PaginatedResponse<Production>>(
        endpoint.resource,
        endpoint.queryParams
      )
    )
  );

  if (movies.error || tvs.error) {
    return <div>Error</div>;
  }

  return <Search movies={movies.data} tvs={tvs.data} />;
}
