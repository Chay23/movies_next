import MovieImage from '@/components/common/image/MovieImage';
import { MultiProduction } from '@/typings/common';
import Link from 'next/link';

type Props = {
  item: MultiProduction;
};

export default function ResultsItem({ item }: Props) {
  const productionDate = item.release_date || item.first_air_date;
  const date = new Date(productionDate);
  
  return (
    <div className='flex gap-2 p-1 min-h-[84px] rounded-md bg-bg-light-100'>
      <div className='relative min-w-[52px]'>
        <MovieImage
          imageSrc={item.poster_path}
          serverWidth={300}
          style={{ objectFit: item.poster_path ? 'cover' : 'contain' }}
          className={`!rounded-md ${item.poster_path ? '' : '!p-1'}`}
          fill
          alt='Poster'
          sizes='(max-width: 768px) 70vw, (max-width: 1200px) 90vw, 100vw'
        />
      </div>
      <div className='flex flex-col gap-1'>
        <Link
          href={`/${item.media_type === 'movie' ? 'movies/details' : 'tv/details'}/${item.id}`}
          className='font-medium'>
          {item.name || item.title}
        </Link>
        {productionDate && (
          <div className='text-sm text-text-secondary'>
            {date.getFullYear()}
          </div>
        )}
      </div>
    </div>
  );
}
