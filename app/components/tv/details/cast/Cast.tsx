import type SwiperType from 'swiper';
import type { tv } from '@/typings/tv/tv';

import { useEffect, useRef, useState } from 'react';

import Arrow from './Arrow';
import CastCarousel from './CastCarousel';

type Props = {
  cast: tv.Cast[];
};

export default function Cast({ cast }: Props) {
  const swiperRef = useRef<null | SwiperType>(null);
  const [mounted, setMounted] = useState(false);
  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <section className='relative shadow-md p-9 rounded-2xl animate-pulse bg-gray-300 min-w-0 w-full h-[450px]'></section>
    );
  }

  const handleSwiper = (s: any) => {
    swiperRef.current = s;
  }

  const handleSlideChange = (s: any) => {
    setIsBeginning(s.isBeginning);
    setIsEnd(s.isEnd);
  }

  return (
    <section className='relative shadow-md p-9 rounded-2xl bg-slate-blue min-w-0 w-full'>
      <div className='flex items-center mb-4 gap-4'>
        <h3 className=''>Cast</h3>
        <div className='flex gap-3'>
          <Arrow
            disabled={isBeginning}
            onClick={() => swiperRef.current?.slidePrev()}
          />
          <Arrow
            disabled={isEnd}
            className='rotate-180'
            onClick={() => swiperRef.current?.slideNext()}
          />
        </div>
      </div>
      <CastCarousel cast={cast} onSwiper={handleSwiper} onSlideChange={handleSlideChange} />
    </section>
  );
}
