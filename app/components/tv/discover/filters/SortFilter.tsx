import type { filters } from '@/typings/filters';
import type { searchParams } from '@/typings/tv/searchParams/tvDiscover';

import { useId } from 'react';
import { useQueryParams } from '@/hooks/app/useQueryParams';

import Select from 'react-select';
import FilterContainer from './FilterContainer';

import { sortOptions } from '@/utils/app/constants';
import { DEFAULT_PAGE_VALUE } from '@/utils/constants';

import { getSelectedSortOption } from '@/utils/app/utils';

const SortFilter = () => {
  const id = useId();
  const { queryParams, updateQueryParams } =
    useQueryParams<searchParams.TvDiscover>();

  const sortOption = getSelectedSortOption(queryParams.sort_by);

  const handleSortOptionChange = (option: filters.SortOption | null) => {
    if (option) {
      updateQueryParams({ sort_by: option.value, page: DEFAULT_PAGE_VALUE });
    }
  };

  return (
    <FilterContainer title='Sort By'>
      <Select
        instanceId={id}
        options={sortOptions}
        defaultValue={sortOptions[1]}
        value={sortOption}
        onChange={handleSortOptionChange}
      />
    </FilterContainer>
  );
};

export default SortFilter;
