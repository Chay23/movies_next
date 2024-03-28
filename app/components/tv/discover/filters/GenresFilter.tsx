import type { filters } from '@/typings/filters';

import { useQueryParams } from '@/hooks/app/useQueryParams';
import { searchParams } from '@/typings/tv/searchParams/tvDiscover';

import FilterContainer from './FilterContainer';

import {
  addGenreToQuery,
  markSelectedGenres,
  removeGenreFromQuery,
} from '@/utils/app/utils';
import { useMemo } from 'react';

type Props = {
  genres: filters.GenreList;
};

const GenresFilter = ({ genres }: Props) => {
  const { queryParams, updateQueryParams, removeQueryParam } =
    useQueryParams<searchParams.TvDiscover>();

  const markedGenres = useMemo(() => {
    return markSelectedGenres(genres, queryParams.with_genres);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [queryParams.with_genres]);

  const handleMouseEvent = (genreId: string, remove: boolean | undefined) => {
    if (remove) {
      return handleGenreDeselect(genreId);
    }
    handleGenreSelect(genreId);
  };

  const handleGenreSelect = (genreId: string) => {
    const updatedQueryGenres = addGenreToQuery(
      queryParams.with_genres,
      genreId
    );

    updateQueryParams({ with_genres: updatedQueryGenres });
  };

  const handleGenreDeselect = (genreId: string) => {
    const updatedQueryGenres = removeGenreFromQuery(
      queryParams.with_genres as string,
      genreId
    );

    if (!updatedQueryGenres) {
      removeQueryParam('with_genres');
      return;
    }

    updateQueryParams({ with_genres: updatedQueryGenres });
  };

  return (
    <FilterContainer title='Genre'>
      <ul className='flex flex-wrap gap-3'>
        {markedGenres.map(genre => (
          <li key={genre.id}>
            <button
              className={`py-1 px-2 md:border border-gray-300 rounded-lg transition-all ${
                genre.selected
                  ? 'bg-blue-600 text-gray-50'
                  : 'hover:border-blue-600 bg-white'
              }`}
              onClick={() =>
                handleMouseEvent(genre.id.toString(), genre.selected)
              }>
              {genre.name}
            </button>
          </li>
        ))}
      </ul>
    </FilterContainer>
  );
};

export default GenresFilter;
