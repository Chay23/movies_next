import type { ChangeEvent, FormEvent } from 'react';

import useSWR from 'swr';
import { useState } from 'react';
import { useRouter } from 'next/router';
import { useQueryParams } from '@/hooks/useSearchParams';

import Spinner from '../common/spinner/Spinner';
import ExtendedMovieList from '../common/movies/ExtendedMovieList';
import SearchForm from './SearchForm';

type Props = {
  moviesRes: movie.MovieList;
};

const SearchResults = ({ moviesRes }: Props) => {
  const { query } = useRouter();
  const { search: searchValueQuery = '', page: pageQuery = '1' } =
    query as Record<string, string>;

  const [searchValue, setSearchValue] = useState('');
  const { queryParams, updateQueryParams } = useQueryParams({
    search: searchValueQuery,
    page: pageQuery,
  });

  const { data: movies, isLoading } = useSWR(`/movies/search?${queryParams}`, {
    fallbackData: moviesRes,
  });

  const handleSearchValueChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
  };

  const handleSearchSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const queryParams = {
      search: searchValue.trim(),
      page: '1',
    };

    updateQueryParams(queryParams);
    setSearchValue('');
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
        {isLoading ? (
          <div className='aspect-3/1 flex justify-center items-center'>
            <Spinner />
          </div>
        ) : (
          <ExtendedMovieList
            movies={movies.results}
            page={parseInt(pageQuery)}
            pages={movies.total_pages}
            handlePageChange={handlePageChange}
          />
        )}
      </section>
    );
  }
};

export default SearchResults;
