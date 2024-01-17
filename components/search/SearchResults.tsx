import type { ChangeEvent, FormEvent } from 'react';

import { useState } from 'react';
import { useRouter } from 'next/router';
import useSWR from 'swr';
import { useQueryParams } from '@/hooks/useSearchParams';

import Spinner from '../common/spinner/Spinner';
import ExtendedMovieList from '../common/movies/ExtendedMovieList';

type Props = {
  moviesRes: movie.MovieList;
};

const SearchResults = ({ moviesRes }: Props) => {
  const { query } = useRouter();
  const { search: searchValueQuery, page: pageQuery } = query as Record<
    string,
    string
  >;

  const [searchValue, setSearchValue] = useState('');
  const { queryParams, updateQueryParams } = useQueryParams({
    search: searchValueQuery,
    page: pageQuery,
  });

  const { data: movies, isLoading } = useSWR(
    `${process.env.NEXT_PUBLIC_INTERNAL_API_URL}/movies/search?${queryParams}`,
    {
      fallbackData: moviesRes,
    }
  );

  const isButtonDisabled = !Boolean(searchValue.trim());

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

  return (
    <section>
      <div className='flex justify-between gap-2 mb-12'>
        <h1>{`Results for: ${searchValueQuery}`}</h1>
        <form onSubmit={handleSearchSubmit}>
          <input
            placeholder='Search'
            name='search'
            value={searchValue}
            onChange={handleSearchValueChange}
            className='rounded-lg p-1 text-black border border-gray-700'
          />
          <button
            className={`ml-3 border border-gray-700 rounded-lg px-2 py-1 ${
              isButtonDisabled
                ? ''
                : 'hover:bg-blue-600 hover:text-gray-50 hover:border-gray-50'
            }`}
            disabled={isButtonDisabled}>
            Search
          </button>
        </form>
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
};

export default SearchResults;
