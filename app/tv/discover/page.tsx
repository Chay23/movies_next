import type { searchParams } from '@/typings/tv/searchParams/tvDiscover';
import type { Metadata } from 'next';

import { Suspense } from 'react';

import TVShowList from './_shows/page';
import ListSkeleton from '@/app/components/common/skeletons/list/ListSkeleton';
import Filters from './_filters/page';
import FiltersSkeleton from '@/app/components/common/skeletons/filters/FiltersSkeleton';

export const metadata: Metadata = {
  title: 'Discover TV Shows',
};

type Props = {
  searchParams: Promise<searchParams.TvDiscover>;
};

export default async function Discover({ searchParams }: Props) {
  const currSearchParams = await searchParams;

  return (
    <>
      <Suspense fallback={<FiltersSkeleton />}>
        <Filters />
      </Suspense>
      <Suspense fallback={<ListSkeleton />} key={JSON.stringify(currSearchParams)}>
        <TVShowList searchParams={currSearchParams} />
      </Suspense>
    </>
  );
}
