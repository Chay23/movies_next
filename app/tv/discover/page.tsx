import type { api } from '@/typings/api';
import type { tv } from '@/typings/tv/tv';
import type { Metadata } from 'next';

import TVShowList from './shows';
import Error from '@/components/error/Error';

import { getData } from '@/services/api';

export const metadata: Metadata = {
  title: 'Discover TV Shows',
};

export default async function Discover() {
  const [tvShowsRes] = await Promise.all([
    getData<api.PaginatedResponse<tv.Show>>('/discover/tv'),
  ]);

  if (tvShowsRes.error) {
    const { status, info } = tvShowsRes;
    return <Error status={status} info={info} />;
  }

  return (
    <>
      <TVShowList tvShows={tvShowsRes.data.results} />
    </>
  );
}

export const revalidate = 60 * 60 * 2;
