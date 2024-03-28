'use client';

import type { filters } from '@/typings/filters';

import DesktopFilters from '@/app/components/tv/discover/filters/DesktopFilters';

type Props = {
  genres: filters.GenreList;
};

export default function Filters({ genres }: Props) {
  return <DesktopFilters genres={genres} />;
}
