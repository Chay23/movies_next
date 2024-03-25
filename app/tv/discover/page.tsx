import type { searchParams } from '@/typings/tv/searchParams/tvDiscover';
import type { Metadata } from 'next';

import { Suspense } from 'react';

import TVShowList from './_shows/page';
import ListSkeleton from '@/app/components/common/skeletons/list/Skeleton';

export const metadata: Metadata = {
  title: 'Discover TV Shows',
};

type Props = {
  searchParams: searchParams.TvDiscover;
};

export default async function Discover({ searchParams }: Props) {
  return (
    <>
      <Suspense fallback={<ListSkeleton />} key={searchParams.page}>
        <TVShowList searchParams={searchParams} />
      </Suspense>
    </>
  );
}
