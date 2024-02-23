import { useRouter } from 'next/router';
import { useQueryParams } from './useQueryParams';

import { DEFAULT_PAGE_VALUE, DEFAULT_SORT_VALUE } from '@/utils/constants';

export const useDiscoveryQueryParams = () => {
  const { query } = useRouter();

  const {
    page: queryPage = DEFAULT_PAGE_VALUE,
    sort_by: querySortOption = DEFAULT_SORT_VALUE,
    with_genres: queryGenres,
  } = query as Record<string, string>;

  const { queryParams, updateQueryParams } = useQueryParams({
    page: queryPage,
    sort_by: querySortOption,
    ...(queryGenres && { with_genres: queryGenres }),
  });

  return {
    queryParams,
    queryPage,
    queryGenres,
    querySortOption,
    updateQueryParams,
  };
};
