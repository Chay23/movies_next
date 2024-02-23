import type { api } from '@/typings/api';
import type { movie } from '@/typings/movie/movie';

import useSWR from 'swr';
import { useDiscoveryQueryParams } from '@/hooks/useDiscoveryQueryParams';

import MovieList from '../common/movies/MovieList';
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

  const { data, error, isLoading } = useSWR(`/movies/discover?${queryParams}`, {
    fallbackData: moviesRes,
  });

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
    <MovieListContainer isLoading={isLoading} error={error}>
      <MovieList
        movies={data.results}
        page={parseInt(queryPage)}
        pages={data.total_pages}
        handlePageChange={handlePageChange}
      />
    </MovieListContainer>
  );
};

export default Movies;
