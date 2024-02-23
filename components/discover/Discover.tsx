import type { MouseEvent } from 'react';
import type { filters } from '@/typings/movie/movieFilters';
import type { api } from '@/typings/api';
import type { movie } from '@/typings/movie/movie';

import useSWR from 'swr';
import { useRouter } from 'next/router';
import { useQueryParams } from '@/hooks/useQueryParams';

import MovieList from '../common/movies/MovieList';
import MovieListContainer from '../common/movies/MovieListContainer';

import Filters from './Filters';

import {
  addGenreToQuery,
  removeGenreFromQuery,
  markSelectedGenreOptions,
  getSelectedSortOption,
} from './utils';
import { DEFAULT_PAGE_VALUE, DEFAULT_SORT_VALUE } from '@/utils/constants';

type Props = {
  movieList: api.PaginatedResponse<movie.Movie>;
  movieGenres: filters.GenreList;
};

const Discover = ({ movieList, movieGenres }: Props) => {
  const { query } = useRouter();

  const {
    page: queryPage = DEFAULT_PAGE_VALUE,
    sort_by: querySortOption = DEFAULT_SORT_VALUE,
    with_genres: queryGenres,
  } = query as Record<string, string>;

  const selectedSortOption = getSelectedSortOption(querySortOption);
  const genres = markSelectedGenreOptions(movieGenres, queryGenres);

  const { queryParams, updateQueryParams } = useQueryParams({
    page: queryPage,
    sort_by: querySortOption,
    ...(queryGenres && { with_genres: queryGenres }),
  });

  const { data, error, isLoading } = useSWR(`/movies/discover?${queryParams}`, {
    fallbackData: movieList,
  });

  const handleSortOptionChange = (option: filters.SortOption | null) => {
    if (option) {
      const queryParams = {
        sort_by: option.value,
        ...(queryGenres && { with_genres: queryGenres }),
        page: queryPage,
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
      ...(updatedQueryGenres && { with_genres: updatedQueryGenres }),
      page: DEFAULT_PAGE_VALUE,
    };

    updateQueryParams(queryParams);
  };

  const handlePageChange = (_: any, page: number) => {
    const queryParams = {
      sort_by: querySortOption,
      ...(queryGenres && { with_genres: queryGenres }),
      page: page.toString(),
    };

    updateQueryParams(queryParams);
    window.scrollTo(0, 0);
  };

  return (
    <section>
      <h1 className='mb-12'>Discover</h1>
      <div className='grid grid-cols-1/4 gap-7'>
        <Filters
          movieGenres={genres}
          sortOption={selectedSortOption}
          handleSortOptionChange={handleSortOptionChange}
          handleGenreSelect={handleGenreSelect}
        />
        <MovieListContainer isLoading={isLoading} error={error}>
          <MovieList
            movies={data.results}
            page={parseInt(queryPage)}
            pages={data.total_pages}
            handlePageChange={handlePageChange}
          />
        </MovieListContainer>
      </div>
    </section>
  );
};

export default Discover;
