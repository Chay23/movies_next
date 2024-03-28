import type { filters } from '@/typings/filters';

import { useId } from 'react';
import { useQueryParams } from '@/hooks/app/useQueryParams';

import Select from 'react-select';
import FilterContainer from './FilterContainer';

import { sortOptions } from '@/utils/app/constants';

import { getSelectedSortOption } from '@/utils/app/utils';
import { searchParams } from '@/typings/tv/searchParams/tvDiscover';

const SortFilter = () => {
  const id = useId();
  const { queryParams, updateQueryParams } =
    useQueryParams<searchParams.TvDiscover>();

  const sortOption = getSelectedSortOption(queryParams.sort_by);

  const handleSortOptionChange = (option: filters.SortOption | null) => {
    if (option) {
      updateQueryParams({ sort_by: option.value });
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
