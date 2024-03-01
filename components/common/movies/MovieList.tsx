import type { ChangeEvent, HTMLAttributes } from 'react';
import type { movie } from '@/typings/movie/movie';

import { memo } from 'react';
import { Pagination } from '@mui/material';

import Movie from './Movie';
import NoResultsFound from './NoResultsFound';

type Props = {
  movies: movie.Movie[];
  page: number;
  pages: number;
  listClasses?: HTMLAttributes<HTMLDivElement>['className'];
  handlePageChange: (event: ChangeEvent<unknown>, value: number) => void;
};

const MovieList = ({
  movies,
  page,
  pages,
  listClasses = '',
  handlePageChange,
}: Props) => {
  if (movies.length) {
    return (
      <article>
        <div
          className={`grid grid-cols-2 sm:grid-cols-4 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-4 md:gap-5 xl:gap-7 ${listClasses}`}>
          {movies.map(movie => (
            <Movie key={movie.id} movie={movie} />
          ))}
        </div>
        <div className='flex items-center justify-center pt-10 xl:pt-20'>
          <Pagination
            page={page}
            // API has restriction for requested page to 500 but response can contain more than 500 pages
            count={pages >= 500 ? 500 : pages}
            onChange={handlePageChange}
          />
        </div>
      </article>
    );
  }

  return <NoResultsFound />;
};

export default memo(MovieList);
