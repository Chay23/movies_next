'use client';

import type { api } from '@/typings/api';

import DesktopFilters from '@/app/components/tv/discover/filters/DesktopFilters';
import MobileFilters from '@/app/components/tv/discover/filters/mobile/MobileFilters';

type Props = {
  genresRes: api.FetcherResponse<api.GenreResponse>;
};

export default function Filters({ genresRes }: Props) {
  return (
    <>
      <DesktopFilters genresRes={genresRes} />
      <MobileFilters genresRes={genresRes} />
    </>
  );
}
