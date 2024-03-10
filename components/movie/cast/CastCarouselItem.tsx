import type { movie } from '@/typings/movie/movie';

import MovieImage from '@/components/common/image/MovieImage';

type Props = {
  item: movie.MovieCast;
};

const CastCarouselItem = ({ item }: Props) => {
  return (
    <article className='rounded-lg overflow-hidden'>
      <div className='w-full relative aspect-2/3'>
        <MovieImage
          imageSrc={item.profile_path}
          serverWidth={200}
          fill
          alt={item.name}
        />
      </div>
      <div className='pt-3'>
        <p className='font-semibold'>{item.name}</p>
        <p>{item.character}</p>
      </div>
    </article>
  );
};

export default CastCarouselItem;
