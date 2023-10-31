import { useState } from 'react';

import ExtendedMovieList from '../common/movies/ExtendedMovieList';

type Props = {
  moviesRes: movie.MovieList;
  searchedValue: string;
};

const SearchResults = ({ moviesRes, searchedValue }: Props) => {
  // implement seaching and pagination
  const [searchValue, setSearchValue] = useState('');

  const handleSearchValueChange = () => {};

  const handleSearchSubmit = () => {};

  return (
    <section>
      <div className='flex justify-between gap-2 mb-12'>
        <h1>{`Results for: ${searchedValue}`}</h1>
        <form onSubmit={handleSearchSubmit}>
          <input
            placeholder='Search'
            value={searchValue}
            onChange={handleSearchValueChange}
            className='rounded-lg p-1 text-black border border-black'
          />
        </form>
      </div>
      <ExtendedMovieList movies={moviesRes.results} />
    </section>
  );
};

export default SearchResults;
