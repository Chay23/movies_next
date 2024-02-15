import type { ChangeEvent, FormEvent } from 'react';

import useSWR from 'swr';
import { useState } from 'react';
import { useRouter } from 'next/router';
import { useQueryParams } from '@/hooks/useQueryParams';

import MovieList from '../common/movies/MovieList';
import MovieListContainer from '../common/movies/MovieListContainer';

import SearchForm from './SearchForm';

import { DEFAULT_BLANK_VALUE, DEFAULT_PAGE_VALUE } from '@/utils/constants';

type Props = {
  moviesRes: movie.MovieList;
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
    isLoading,
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
        <div className='flex justify-between gap-2 mb-12'>
          <h1>{`Search Results for "${searchValueQuery}"`}</h1>
          <SearchForm
            searchValue={searchValue}
            handleSearchValueChange={handleSearchValueChange}
            handleSearchSubmit={handleSearchSubmit}
          />
        </div>
        <MovieListContainer isLoading={isLoading} error={error}>
          <MovieList
            movies={movies.results}
            page={parseInt(pageQuery)}
            pages={movies.total_pages}
            handlePageChange={handlePageChange}
          />
        </MovieListContainer>
      </section>
    );
  }
};

export default SearchResults;
