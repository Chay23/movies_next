import type { tv } from '@/typings/tv/tv';
import type { api } from '@/typings/api';

import Description from '@/app/components/tv/details/description/Description';

import { getData } from '@/services/api';
import CastPage from './cast';

type Props = {
  params: { id: string };
};

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

  return (
    <>
      <Description series={series.data} />
      <div className='gap-10'>
        <CastPage cast={cast.data.cast} />
      </div>
    </>
  );
}
