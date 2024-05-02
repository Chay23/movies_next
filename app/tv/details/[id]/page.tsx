import type { tv } from '@/typings/tv/tv';

import SeriesDescription from '@/app/components/tv/details/description/MainDetails';

import { getData } from '@/services/api';
import { OtherDetails } from '@/app/components/tv/details/description/OtherDetails';
import Cast from '@/app/components/tv/details/cast/Cast';

type Props = {
  params: { id: string };
};

export default async function SeriesDetailsPage({ params }: Props) {
  const series = await getData<tv.ShowExtended>(`/tv/${params.id}`);

  if (series.error) {
    return null;
  }

  return (
    <section>
      <SeriesDescription series={series.data} />
      <div className='flex flex-col md:flex-row gap-10'>
        <OtherDetails series={series.data} />
        <Cast />
      </div>
    </section>
  );
}
