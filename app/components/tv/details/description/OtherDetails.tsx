import type { tv } from '@/typings/tv/tv';

import DetailsItem from './DetailsItem';

import { getOtherDetails } from '../utils';

type Props = {
  series: tv.ShowExtended;
};

export function OtherDetails({ series }: Props) {
  return (
    <section className='shadow-md p-4 md:p-10 rounded-2xl bg-slate-200'>
      <h3 className='mb-4 font-medium'>Other Details</h3>
      <div className='flex flex-col gap-5'>
        {getOtherDetails(series).map(item => (
          <DetailsItem key={item.key} item={item} />
        ))}
      </div>
    </section>
  );
}
