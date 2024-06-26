import type { movie } from '@/typings/movie/movie';

import { getGenresString } from '@/utils/genres/utils';

export const getMovieReleaseDate = (date: string) => {
  const dateObj = new Date(date);
  const dateString = dateObj.toLocaleDateString('en-US', {
    month: '2-digit',
    day: '2-digit',
    year: 'numeric',
  });
  const parts = dateString.split('/');

  return `${parts[0]}-${parts[1]}-${parts[2]}`;
};

export const getMovieDescription = (movie: movie.Movie) => {
  return [
    {
      title: 'Original name',
      value: movie.original_title,
    },
    {
      title: 'Status',
      value: movie.status,
    },
    {
      title: 'Release date',
      value: getMovieReleaseDate(movie.release_date),
    },
    {
      title: 'Genres',
      value: getGenresString(movie.genres),
    },
    {
      title: 'Overview',
      value: movie.overview,
    },
  ];
};
