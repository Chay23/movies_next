import { useState } from 'react';
import { useRouter } from 'next/router';
import useSWR from 'swr';

import Spinner from '../common/spinner/Spinner';
import ExtendedMovieList from '../common/movies/ExtendedMovieList';

import type { ChangeEvent, FormEvent } from 'react';

type Props = {
  moviesRes: movie.MovieList;
};

const SearchResults = ({ moviesRes }: Props) => {
  // implement pagination
  const [searchValue, setSearchValue] = useState('');
  const [pageIndex, setPageIndex] = useState(1);
  const [query, setQuery] = useState(`value=${searchValue}&page=${pageIndex}`);

  const router = useRouter();
  const searchedValue = router.query!.value;

  const { data: movies, isLoading } = useSWR(
    `${process.env.NEXT_PUBLIC_INTERNAL_API_URL}/movies/search?${query}`,
    {
      fallbackData: moviesRes,
    }
  );

  const handleSearchValueChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
  };

  const handleSearchSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setQuery(`value=${searchValue}&page=${pageIndex}`);
    setSearchValue('');

    router.replace(
      {
        pathname: '/movies/search',
        query: {
          value: searchValue,
          page: pageIndex,
        },
      },
      undefined,
      { shallow: true }
    );
  };

  return (
    <section>
      <div className='flex justify-between gap-2 mb-12'>
        <h1>{`Results for: ${searchedValue}`}</h1>
        <form onSubmit={handleSearchSubmit}>
          <input
            placeholder='Search'
            name='search'
            value={searchValue}
            onChange={handleSearchValueChange}
            className='rounded-lg p-1 text-black border border-black'
          />
        </form>
      </div>
      {isLoading ? (
        <div className='aspect-3/1 flex justify-center items-center'>
          <Spinner />
        </div>
      ) : (
        <ExtendedMovieList movies={movies.results} />
      )}
    </section>
  );
};

export default SearchResults;
