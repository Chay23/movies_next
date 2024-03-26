import type { filters } from '@/typings/filters';

import { sortOptions } from './constants';

export const getSelectedSortOption = (value: string): filters.SortOption => {
  return sortOptions.find(
    option => option.value === value
  ) as filters.SortOption;
};

export const markSelectedGenreOptions = (
  genreList: filters.GenreList,
  selectedGenres: string | undefined
) => {
  if (selectedGenres) {
    const selectedGenresArr = selectedGenres.split(',');
    return genreList.map(genre => {
      return selectedGenresArr.indexOf(`${genre.id}`) !== -1
        ? { ...genre, selected: true }
        : genre;
    });
  }
  return genreList;
};

export const addGenreToQuery = (selectedGenreIds = '', id: string) => {
  const valuePresent = selectedGenreIds.match(id);

  if (selectedGenreIds && !valuePresent) {
    return `${selectedGenreIds},${id}`;
  }

  if (valuePresent) {
    return selectedGenreIds;
  }

  return id;
};

export const removeGenreFromQuery = (selectedGenreIds: string, id: string) => {
  const genresArr = selectedGenreIds.split(',');

  if (genresArr.length === 1) {
    return '';
  }

  const updatedArr = genresArr.filter(currId => currId !== id);
  return updatedArr.join(',');
};
