import type { searchParams } from '@/typings/tv/searchParams/tvDiscover';
import type { Metadata } from 'next';

import { Suspense } from 'react';

import TVShowList from './_shows/page';
import ListSkeleton from '@/app/components/common/skeletons/list/Skeleton';
import Filters from './_filters/page';
import FiltersSkeleton from '@/app/components/common/skeletons/filters/FiltersSkeleton';

export const metadata: Metadata = {
  title: 'Discover TV Shows',
};

type Props = {
  searchParams: searchParams.TvDiscover;
};

export default async function Discover({ searchParams }: Props) {
  return (
    <>
      <Suspense fallback={<FiltersSkeleton />}>
        <Filters />
      </Suspense>
      <Suspense fallback={<ListSkeleton />} key={searchParams.page}>
        <TVShowList searchParams={searchParams} />
      </Suspense>
    </>
  );
}
