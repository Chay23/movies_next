import type { tv } from '@/typings/tv/tv';

import Image from '@/components/common/image/MovieImage';
import Link from 'next/link';

type Props = {
  tvShow: tv.Show;
};

export default function TVShow({ tvShow }: Props) {
  const date = new Date(tvShow.first_air_date);
  const dateIU = date.toLocaleDateString('en-US', {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
  });

  return (
    <article>
      <div className='relative w-full max-w-xl mb-2 aspect-5/7 rounded-xl overflow-hidden'>
        <Image
          imageSrc={tvShow.poster_path}
          serverWidth={300}
          fill
          alt='TV Show Poster'
          style={{ objectFit: 'cover' }}
        />
      </div>
      <Link
        href={`/tv/details/${tvShow.id}`}
        className='text-xl hover:font-medium'>
        {tvShow.name}
      </Link>
      <p className='mt-2'>{dateIU}</p>
    </article>
  );
}
