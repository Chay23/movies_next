import type { MouseEvent } from 'react';
import type { filters } from '@/typings/movie/movieFilters';

import { useId } from 'react';
import { useDiscoveryQueryParams } from '@/hooks/useDiscoveryQueryParams';

import Select from 'react-select';
import FilterItem from './FilterItem';

import { sortOptions } from './constants';
import { DEFAULT_PAGE_VALUE } from '@/utils/constants';

import {
  addGenreToQuery,
  getSelectedSortOption,
  markSelectedGenreOptions,
  removeGenreFromQuery,
} from './utils';

type Props = {
  movieGenres: filters.GenreList;
};

const Filters = ({ movieGenres }: Props) => {
  const id = useId();
  const { queryPage, queryGenres, querySortOption, updateQueryParams } =
    useDiscoveryQueryParams();

  const sortOption = getSelectedSortOption(querySortOption);
  const genres = markSelectedGenreOptions(movieGenres, queryGenres);

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

  const handleGenreSelect = (
    e: MouseEvent<HTMLButtonElement>,
    removeGenre: boolean
  ) => {
    const selectedGenre = e.currentTarget.getAttribute('name') as string;
    const updatedQueryGenres = removeGenre
      ? addGenreToQuery(queryGenres, selectedGenre)
      : removeGenreFromQuery(queryGenres, selectedGenre);

    const queryParams = {
      sort_by: querySortOption,
      page: DEFAULT_PAGE_VALUE,
      ...(updatedQueryGenres && { with_genres: updatedQueryGenres }),
    };

    updateQueryParams(queryParams);
  };

  return (
    <aside className='p-5 border border-gray-200 shadow-xl rounded-2xl h-fit'>
      <h3>Filters</h3>
      <FilterItem title='Sort By'>
        <Select
          id={id}
          options={sortOptions}
          defaultValue={sortOptions[1]}
          value={sortOption}
          onChange={handleSortOptionChange}
        />
      </FilterItem>
      <FilterItem title='Genre'>
        <ul className='flex flex-wrap gap-3'>
          {genres.map(genre => (
            <li key={genre.id}>
              <button
                className={`py-1 px-2 border border-gray-300 rounded-lg${
                  genre.selected ? ' bg-blue-600 text-gray-50' : ''
                }`}
                name={genre.id.toString()}
                onClick={e => handleGenreSelect(e, !genre.selected)}>
                {genre.name}
              </button>
            </li>
          ))}
        </ul>
      </FilterItem>
    </aside>
  );
};

export default Filters;
