import { Production } from '@/typings/common';

import Carousel from '@/components/common/home/Carousel';
import { useBoolean } from '@/hooks/useBoolean';
import { useEffect } from 'react';

type Props = {
  title: string;
  items: Production[];
  isMovies?: boolean;
};

export default function CarouselSection({
  title,
  items,
  isMovies = false,
}: Props) {
  const { value: mounted, setTrue: setMounted } = useBoolean(false);

  useEffect(() => {
    setMounted();
  }, [setMounted]);

  if (!mounted) {
    return (
      <section className='bg-gray-400 animate-pulse rounded-xl shadow-light h-[450px]'></section>
    );
  }

  return (
    <section className='relative bg-bg-slate-blue rounded-xl shadow-light p-10'>
      <h3 className='mb-8'>{title}</h3>
      <Carousel items={items} isMovies={isMovies} />
    </section>
  );
}
