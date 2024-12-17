import type { tv } from '@/typings/tv/tv';
import type { api } from '@/typings/api';
import type { Breadcrumb } from '@/typings/common';

import Description from '@/app/components/tv/details/description/Description';
import CastPage from './cast';
import Breadcrumbs from '@/app/components/common/Breadcrumbs';

import { getData } from '@/services/api';
import { DEFAULT_PAGE_VALUE, DEFAULT_SORT_VALUE } from '@/utils/constants';

type Props = {
  params: { id: string };
};

export async function generateMetadata({ params }: Props) {
  const series = await getData<tv.ShowExtended>(`/tv/${params.id}`);
  if (!series.error) {
    return {
      title: series.data.name,
    };
  }
}

export default async function SeriesDetailsPage({ params }: Props) {
  const series = await getData<tv.ShowExtended>(`/tv/${params.id}`);
  const cast = await getData<api.CreditsResponse>(
    `/tv/${params.id}/aggregate_credits`
  );

  if (series.error) {
    return null;
  }

  if (cast.error) {
    return null;
  }

  const breadcrumbs: Breadcrumb[] = [
    {
      title: 'Discover Series',
      href: `/tv/discover?sort_by=${DEFAULT_SORT_VALUE}&page=${DEFAULT_PAGE_VALUE}`,
    },
    {
      title: series.data.name,
    },
  ];

  return (
    <>
      <Breadcrumbs breadcrumbs={breadcrumbs} />
      <Description series={series.data} />
      <div className='gap-10'>
        <CastPage cast={cast.data.cast} />
      </div>
    </>
  );
}
