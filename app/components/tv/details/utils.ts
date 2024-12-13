import type { tv } from '@/typings/tv/tv';
import type { SeriesDescription } from '@/typings/components/tv/details/types';
import type { Genre } from '@/typings/common';

import { statusBackgroungs } from './constants';

const getRepresentativeDate = (date: Date) => {
  return date.toLocaleDateString('en-US', {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
  });
};

const getCreators = (creators: tv.Creator[]): SeriesDescription['row'] =>
  creators.map(creator => ({
    key: creator.id.toString(),
    title: 'Creator',
    value: creator.name,
  }));

const getStatusBackground = (status: string) => {
  return statusBackgroungs[status.toLocaleLowerCase()];
};

const getGenres = (
  genres: Genre[]
): Exclude<SeriesDescription['row'], undefined> =>
  genres.map(genre => ({
    key: genre.id.toString(),
    containerClasses: 'px-5 py-1 bg-slate-400 rounded-lg',
    value: genre.name,
  }));

export const getSeriesDetails = (
  series: tv.ShowExtended
): SeriesDescription[] => {
  const firstAirYear = new Date(series.first_air_date).getFullYear();

  return [
    {
      key: 'year_genres',
      containerClasses: 'gap-3 flex-wrap',
      row: [
        {
          key: 'year',
          containerClasses: 'px-5 py-1 bg-blue-500 text-white rounded-lg',
          value: firstAirYear,
        },
        {
          key: 'status',
          valueClasses: `px-5 py-1 rounded-lg ${getStatusBackground(
            series.status
          )}`,
          value: series.status,
        },
        ...getGenres(series.genres),
      ],
    },
    {
      key: 'creators',
      containerClasses: 'gap-x-4',
      row: getCreators(series.created_by),
    },
    {
      key: 'overview',
      title: 'Overview',
      titleClasses: 'my-2',
      value: series.overview,
    },
    {
      key: 'first_last_on_air',
      containerClasses:
        'gap-5 items-center flex-wrap basis-full',
      row: [
        {
          key: 'first_on_air',
          title: 'First On Air',
          value: getRepresentativeDate(new Date(series.first_air_date)),
        },
        {
          key: 'last_on_air',
          title: 'Last On Air',
          value: getRepresentativeDate(new Date(series.last_air_date)),
        },
      ],
    },
    {
      key: 'seasons',
      title: 'Seasons',
      value: series.number_of_seasons,
    },
    { key: 'tagline', value: series.tagline, valueClasses: 'italic' },
  ];
};

