import type { filters } from '@/typings/filters';

import { useMemo } from 'react';
import { useQueryParams } from '@/hooks/app/useQueryParams';
import { searchParams } from '@/typings/tv/searchParams/tvDiscover';

import FilterContainer from '../FilterContainer';
import GenreList from './GenreList';

import { DEFAULT_PAGE_VALUE } from '@/utils/constants';

import {
  addGenreToQuery,
  markSelectedGenres,
  removeGenreFromQuery,
} from '@/utils/app/utils';

type Props = {
  genres: filters.GenreOptions;
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
    return handleGenreSelect(genreId);
  };

  const handleGenreSelect = (genreId: string) => {
    const updatedQueryGenres = addGenreToQuery(
      queryParams.with_genres,
      genreId
    );

    updateQueryParams({
      with_genres: updatedQueryGenres,
      page: DEFAULT_PAGE_VALUE,
    });
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
      <GenreList genres={markedGenres} handleMouseEvent={handleMouseEvent} />
    </FilterContainer>
  );
};

export default GenresFilter;
