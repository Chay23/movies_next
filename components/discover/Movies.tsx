import type { api } from '@/typings/api';
import type { movie } from '@/typings/movie/movie';

import useSWR from 'swr';
import { useDiscoveryQueryParams } from '@/hooks/useDiscoveryQueryParams';

import MovieListContainer from '../common/movies/MovieListContainer';

type Props = {
  moviesRes: api.PaginatedResponse<movie.Movie>;
};

const Movies = ({ moviesRes }: Props) => {
  const {
    queryParams,
    queryPage,
    queryGenres,
    querySortOption,
    updateQueryParams,
  } = useDiscoveryQueryParams();

  const { data, error, isValidating } = useSWR(
    `/movies/discover?${queryParams}`,
    {
      fallbackData: moviesRes,
    }
  );

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
    <MovieListContainer
      isLoading={isValidating}
      error={error}
      movies={data.results}
      page={parseInt(queryPage)}
      pages={data.total_pages}
      listClasses='md:max-lg:!grid-cols-2'
      handlePageChange={handlePageChange}
    />
  );
};

export default Movies;
