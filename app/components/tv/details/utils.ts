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
      containerClasses: 'gap-4 flex-wrap',
      row: [
        {
          key: 'year',
          containerClasses: 'px-5 py-1 bg-blue-500 rounded-lg',
          value: firstAirYear,
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
    { key: 'tagline', value: series.tagline, valueClasses: 'italic' },
  ];
};

export const getOtherDetails = (
  series: tv.ShowExtended
): SeriesDescription[] => [
  {
    key: 'original_name',
    title: 'Original Name',
    value: series.original_name,
  },
  {
    key: 'first_last_on_air',
    containerClasses: 'gap-5 items-center flex-wrap',
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
      {
        key: 'status',
        valueClasses: `px-5 py-1 rounded-lg ${getStatusBackground(
          series.status
        )}`,
        value: series.status,
      },
    ],
  },
  {
    key: 'seasons',
    title: 'Seasons',
    value: series.number_of_seasons,
  },
];
