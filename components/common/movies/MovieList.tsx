import type { ChangeEvent } from 'react';
import type { movie } from '@/typings/movie/movie';

import { memo } from 'react';
import { Pagination } from '@mui/material';

import Movie from './Movie';
import NoResultsFound from './NoResultsFound';

type Props = {
  movies: movie.Movie[];
  page: number;
  pages: number;
  handlePageChange: (event: ChangeEvent<unknown>, value: number) => void;
};

const ExtendedMovieList = ({
  movies,
  page,
  pages,
  handlePageChange,
}: Props) => {
  if (movies.length) {
    return (
      <article>
        <div className='grid grid-cols-5 gap-10'>
          {movies.map(movie => (
            <Movie key={movie.id} movie={movie} />
          ))}
        </div>
        <div className='flex items-center justify-center pt-20'>
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

export default memo(ExtendedMovieList);
