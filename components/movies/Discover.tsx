import { useRouter } from 'next/router';
import { useState } from 'react';
import useSWR from 'swr';

import ExtendedMovieList from '../common/movies/ExtendedMovieList';
import Spinner from '../common/spinner/Spinner';
import Filters from './Filters';

import { getSelectedSortOption } from './utils';

type Props = {
  movieList: movie.MovieList;
  movieGenres: movie.GenreList;
};

const Discover = ({ movieList, movieGenres }: Props) => {
  const router = useRouter();
  const page = router.query.page;
  const selectedSortOption = getSelectedSortOption(
    router.query.sort_by as string
  );

  const [query, setQuery] = useState<string>(
    `include_adult=false&include_video=false&language=en-US&page=${page}&sort_by=${selectedSortOption.value}`
  );

  const { data, isLoading } = useSWR<movie.MovieList>(
    `${process.env.NEXT_PUBLIC_INTERNAL_API_URL}/movies/discover?${query}`,
    {
      fallbackData: movieList,
    }
  );

  const handleSortOptionChange = (option: filters.SortOption | null) => {
    if (option) {
      setQuery(`sort_by=${option.value}&page=${page}`);
      router.replace(
        `/movies/discover?sort_by=${option.value}&page=${page}`,
        undefined,
        { shallow: true }
      );
    }
  };

  if (data) {
    return (
      <section>
        <h1 className='mb-12'>Discover</h1>
        <div className='grid grid-cols-1/4 gap-7'>
          <Filters
            movieGenres={movieGenres}
            sortOption={selectedSortOption}
            handleSortOptionChange={handleSortOptionChange}
          />
          {isLoading ? (
            <div className='flex justify-center items-center'>
              <Spinner />
            </div>
          ) : (
            <ExtendedMovieList movies={data.results} />
          )}
        </div>
      </section>
    );
  }
};

export default Discover;
