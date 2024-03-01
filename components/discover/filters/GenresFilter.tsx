import type { MouseEvent } from 'react';
import type { filters } from '@/typings/movie/movieFilters';

import { useDiscoveryQueryParams } from '@/hooks/useDiscoveryQueryParams';

import FilterContainer from './FilterContainer';

import { DEFAULT_PAGE_VALUE } from '@/utils/constants';

import {
  addGenreToQuery,
  markSelectedGenreOptions,
  removeGenreFromQuery,
} from '../utils';

type Props = {
  movieGenres: filters.GenreList;
};

const GenresFilter = ({ movieGenres }: Props) => {
  const { queryGenres, querySortOption, updateQueryParams } =
    useDiscoveryQueryParams();

  const genres = markSelectedGenreOptions(movieGenres, queryGenres);
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
    <FilterContainer title='Genre'>
      <ul className='flex flex-wrap gap-3'>
        {genres.map(genre => (
          <li key={genre.id}>
            <button
              className={`py-1 px-2 md:border border-gray-300 rounded-lg ${
                genre.selected ? 'bg-blue-600 text-gray-50' : 'bg-white'
              }`}
              name={genre.id.toString()}
              onClick={e => handleGenreSelect(e, !genre.selected)}>
              {genre.name}
            </button>
          </li>
        ))}
      </ul>
    </FilterContainer>
  );
};

export default GenresFilter;
