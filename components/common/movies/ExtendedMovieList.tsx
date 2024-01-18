import type { ChangeEvent } from 'react';

import { memo } from 'react';
import { Pagination } from '@mui/material';

import MovieCreationIcon from '@mui/icons-material/MovieCreation';
import SearchIcon from '@mui/icons-material/Search';

import ExtendedMovie from './ExtendedMovie';

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
            <ExtendedMovie key={movie.id} movie={movie} />
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

  return (
    <article className='flex flex-col justify-center items-center pt-40'>
      <div className='relative'>
        <MovieCreationIcon
          fontSize='large'
          className='scale-150 absolute -top-7 -left-7 text-gray-700'
        />
        <SearchIcon className='scale-[10] text-gray-700' />
      </div>
      <h3 className='py-24'>No Results Found</h3>
    </article>
  );
};

export default memo(ExtendedMovieList);
