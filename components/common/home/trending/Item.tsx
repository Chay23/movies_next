import MovieImage from '@/components/common/image/MovieImage';
import type { Production } from '@/typings/common';
import Overview from './Overview';

type Props = {
  item: Production;
  isMovies: boolean;
};

export default function Item({ item, isMovies }: Props) {
  return (
    <article className='min-h-[calc(100vh-64px)] flex flex-col lg:flex-row items-center gap-12 lg:gap-x-12 xl:gap-x-20 pt-14 md:pt-20 lg:pt-0 px-12 md:px-16 lg:px-20 xl:px-64'>
      <div className='absolute top-0 left-0 h-full w-full overflow-hidden bg-gradient-to-b from-slate-950 via-slate-700 to-slate-300 opacity-70 -z-10'></div>
      <MovieImage
        imageSrc={item.poster_path}
        serverWidth={400}
        fill
        style={{
          objectFit: 'cover',
          filter: 'blur(10px)',
        }}
        className='-z-20'
        sizes='30vw'
        alt='Movie background poster'
        priority
      />
      <div className='relative aspect-2/3 lg:max-w-sm w-full sm:w-8/12'>
        <MovieImage
          imageSrc={item.poster_path}
          serverWidth={500}
          fill
          sizes='100vw'
          alt='Movie poster'
          priority
        />
      </div>
      <Overview item={item} isMovies={isMovies}/>
    </article>
  );
}
