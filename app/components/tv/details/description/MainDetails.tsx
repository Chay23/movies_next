import type { tv } from '@/typings/tv/tv';

import Image from '@/components/common/image/MovieImage';
import DetailsItem from './DetailsItem';

import { getSeriesDetails } from '../utils';

type Props = {
  series: tv.ShowExtended;
};

export default function MainDetails({ series }: Props) {
  return (
    <article className='flex flex-col md:flex-row items-center md:items-start flex-1 gap-y-10 md:gap-x-10 mb-10 p-3 md:p-10 bg-slate-200 shadow-md rounded-2xl'>
      <div className='relative aspect-2/3 w-full min-w-max max-w-xs rounded-lg overflow-hidden'>
        <Image
          imageSrc={series.poster_path}
          serverWidth={400}
          alt='Series poster'
          fill
          priority
        />
      </div>
      <div className='flex flex-col gap-5'>
        <h2>{series.name}</h2>
        {getSeriesDetails(series).map(item => (
          <DetailsItem item={item} key={item.key} />
        ))}
      </div>
    </article>
  );
}
