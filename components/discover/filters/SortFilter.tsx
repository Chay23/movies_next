import type { filters } from '@/typings/movie/movieFilters';

import { useId } from 'react';
import { useDiscoveryQueryParams } from '@/hooks/useDiscoveryQueryParams';

import Select from 'react-select';
import FilterContainer from './FilterContainer';

import { sortOptions } from '../constants';

import { getSelectedSortOption } from '../utils';

const SortFilter = () => {
  const id = useId();
  const { queryPage, querySortOption, queryGenres, updateQueryParams } =
    useDiscoveryQueryParams();

  const sortOption = getSelectedSortOption(querySortOption);

  const handleSortOptionChange = (option: filters.SortOption | null) => {
    if (option) {
      const queryParams = {
        sort_by: option.value,
        page: queryPage,
        ...(queryGenres && { with_genres: queryGenres }),
      };

      updateQueryParams(queryParams);
    }
  };

  return (
    <FilterContainer title='Sort By'>
      <Select
        id={id}
        options={sortOptions}
        defaultValue={sortOptions[1]}
        value={sortOption}
        onChange={handleSortOptionChange}
      />
    </FilterContainer>
  );
};

export default SortFilter;
