import type { ReactNode } from 'react';

import { useQueryParams } from '@/hooks/app/useQueryParams';
import { searchParams } from '@/typings/tv/searchParams/tvDiscover';

import { DEFAULT_PAGE_VALUE, DEFAULT_SORT_VALUE } from '@/utils/constants';

type Props = {
  children: ReactNode;
  genresError: boolean;
  handleToggleFilters: () => void;
};

export default function DrawerContent({
  children,
  genresError,
  handleToggleFilters,
}: Props) {
  const { queryParams, replaceQueryParams } =
    useQueryParams<searchParams.TvDiscover>();

  const showClearFilters = Boolean(
    queryParams.with_genres || queryParams.sort_by !== DEFAULT_SORT_VALUE
  );

  const clearFilters = () => {
    replaceQueryParams({
      sort_by: DEFAULT_SORT_VALUE,
      page: DEFAULT_PAGE_VALUE,
    });
  };

  if (genresError) {
    return children;
  }

  return (
    <>
      <button
        className={`${
          showClearFilters ? '' : 'invisible'
        } py-2 px-2 bg-green-400 border-gray-300 rounded-md transition-all`}
        onClick={clearFilters}>
        Reset Filters
      </button>
      {children}
      <hr className='my-4' />
      <button
        className='py-2 px-2 bg-blue-400 rounded-md'
        onClick={handleToggleFilters}>
        Show Results
      </button>
    </>
  );
}
