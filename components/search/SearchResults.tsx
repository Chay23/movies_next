import type { ChangeEvent, FormEvent } from 'react';
import type { api } from '@/typings/api';
import type { movie } from '@/typings/movie/movie';

import useSWR from 'swr';
import { useState } from 'react';
import { useRouter } from 'next/router';
import { useQueryParams } from '@/hooks/useQueryParams';

import MovieListContainer from '../common/movies/MovieListContainer';

import SearchForm from './SearchForm';

import { DEFAULT_BLANK_VALUE, DEFAULT_PAGE_VALUE } from '@/utils/constants';

type Props = {
  moviesRes: api.PaginatedResponse<movie.Movie>;
};

const SearchResults = ({ moviesRes }: Props) => {
  const { query } = useRouter();
  const {
    search: searchValueQuery = DEFAULT_BLANK_VALUE,
    page: pageQuery = DEFAULT_PAGE_VALUE,
  } = query as Record<string, string>;

  const [searchValue, setSearchValue] = useState(DEFAULT_BLANK_VALUE);
  const { queryParams, updateQueryParams } = useQueryParams({
    search: searchValueQuery,
    page: pageQuery,
  });

  const {
    data: movies,
    error,
    isValidating,
  } = useSWR(`/movies/search?${queryParams}`, {
    fallbackData: moviesRes,
  });

  const handleSearchValueChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
  };

  const handleSearchSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const queryParams = {
      search: searchValue.trim(),
      page: DEFAULT_PAGE_VALUE,
    };

    updateQueryParams(queryParams);
    setSearchValue(DEFAULT_BLANK_VALUE);
  };

  const handlePageChange = (_: any, page: number) => {
    const queryParams = {
      search: searchValueQuery,
      page: page.toString(),
    };

    updateQueryParams(queryParams);
    window.scrollTo(0, 0);
  };

  if (movies) {
    return (
      <section>
        <div className='flex flex-col justify-between gap-4 xl:gap-5 mb-12'>
          <h2>{`Results for "${searchValueQuery}"`}</h2>
          <SearchForm
            searchValue={searchValue}
            handleSearchValueChange={handleSearchValueChange}
            handleSearchSubmit={handleSearchSubmit}
          />
        </div>
        <MovieListContainer
          isLoading={isValidating}
          error={error}
          movies={movies.results}
          page={parseInt(pageQuery)}
          pages={movies.total_pages}
          handlePageChange={handlePageChange}
        />
      </section>
    );
  }
};

export default SearchResults;
