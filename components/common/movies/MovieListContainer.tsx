import type { api } from '@/typings/api';
import type { movie } from '@/typings/movie/movie';
import type { ChangeEvent, HTMLAttributes, ReactNode } from 'react';

import Error from '@/components/error/Error';
import MovieList from './MovieList';
import MovieListSkeleton from './skeleton/MovieListSkeleton';

type Props = {
  isLoading: boolean;
  error: api.ErrorResponse;
  movies: movie.Movie[];
  page: number;
  pages: number;
  listClasses?: HTMLAttributes<HTMLDivElement>['className'];
  handlePageChange: (event: ChangeEvent<unknown>, value: number) => void;
};

const MovieListContainer = ({
  isLoading,
  error,
  movies,
  page,
  pages,
  listClasses = '',
  handlePageChange,
}: Props) => {
  if (error) {
    const { status, info } = error;
    return <Error status={status} info={info} />;
  }

  if (isLoading) {
    return <MovieListSkeleton listClasses={listClasses} />;
  }

  return (
    <MovieList
      movies={movies}
      page={page}
      pages={pages}
      listClasses={listClasses}
      handlePageChange={handlePageChange}
    />
  );
};

export default MovieListContainer;
