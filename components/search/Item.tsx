import Image from '@/components/common/image/MovieImage';
import { Production } from '@/typings/common';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';

type Props = {
  item: Production;
};

export default function Item({ item }: Props) {
  const searchParams = useSearchParams();
  const type = searchParams?.get('type');

  return (
    <div>
      <div className='relative aspect-2/3 rounded-lg mb-2 overflow-hidden'>
        <Image
          imageSrc={item.poster_path}
          serverWidth={400}
          fill
          style={{ objectFit: item.poster_path ? 'cover' : 'contain' }}
          alt='Poster'
        />
      </div>
      <Link
        href={`/${type === 'movie' ? 'movies' : 'tv'}/details/${item.id}`}
        className='text-xl hover:font-medium'>
        {item.title ?? item.name}
      </Link>
    </div>
  );
}
