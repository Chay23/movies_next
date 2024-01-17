import type { MouseEvent } from 'react';

import useSWR from 'swr';
import { useRouter } from 'next/router';
import { useQueryParams } from '@/hooks/useSearchParams';

import ExtendedMovieList from '../common/movies/ExtendedMovieList';
import Spinner from '../common/spinner/Spinner';
import Filters from './Filters';

import {
  addGenreToQuery,
  removeGenreFromQuery,
  markSelectedGenreOptions,
  getSelectedSortOption,
} from './utils';

type Props = {
  movieList: movie.MovieList;
  movieGenres: filters.GenreList;
};

const Discover = ({ movieList, movieGenres }: Props) => {
  const { query } = useRouter();

  const {
    page: queryPage,
    sort_by: querySortOption,
    with_genres: queryGenres,
  } = query as Record<string, string>;

  const selectedSortOption = getSelectedSortOption(querySortOption);
  const genres = markSelectedGenreOptions(movieGenres, queryGenres);

  const { queryParams, updateQueryParams } = useQueryParams({
    page: queryPage,
    sort_by: querySortOption,
  });

  const { data, isLoading } = useSWR<movie.MovieList>(
    `${process.env.NEXT_PUBLIC_INTERNAL_API_URL}/movies/discover?${queryParams}`,
    {
      fallbackData: movieList,
    }
  );

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
      page: queryPage,
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

  if (data) {
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
          {isLoading ? (
            <div className='flex justify-center items-center'>
              <Spinner />
            </div>
          ) : (
            <>
              <ExtendedMovieList
                movies={data.results}
                page={parseInt(queryPage)}
                pages={data.total_pages}
                handlePageChange={handlePageChange}
              />
            </>
          )}
        </div>
      </section>
    );
  }
};

export default Discover;
