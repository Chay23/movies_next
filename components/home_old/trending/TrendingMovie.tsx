import type { movie } from '@/typings/movie/movie';

import MovieImage from '../../common/image/MovieImage';
import MovieDetails from './MovieDetails';

type Props = {
  movie: movie.Movie;
};

const TrendingMovie = ({ movie }: Props) => {
  return (
    <article className='min-h-screen flex flex-col lg:flex-row items-center gap-12 lg:gap-x-12 xl:gap-x-20 pt-12 lg:pt-0 px-12 md:px-16 lg:px-20 xl:px-28'>
      <div className='absolute top-0 left-0 h-full w-full overflow-hidden bg-gradient-to-b from-slate-950 via-slate-700 to-slate-300 opacity-70 -z-10'></div>
      <MovieImage
        imageSrc={movie.poster_path}
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
      <div className='relative aspect-2/3 lg:basis-1/4 lg:max-w-2xl w-full sm:w-8/12'>
        <MovieImage
          imageSrc={movie.poster_path}
          serverWidth={500}
          fill
          sizes='100vw'
          alt='Movie poster'
          priority
        />
      </div>
      <MovieDetails movie={movie} />
    </article>
  );
};

export default TrendingMovie;
