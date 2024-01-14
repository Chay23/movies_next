import { sortOptions } from './constants';

export const getSelectedSortOption = (value: string): filters.SortOption => {
  return sortOptions.find(
    option => option.value === value
  ) as filters.SortOption;
};
