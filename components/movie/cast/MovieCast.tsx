import type { movie } from '@/typings/movie/movie';

import MovieCastCarousel from './CastCarousel';

type Props = {
  cast: movie.Cast[];
};

const MovieCast = ({ cast }: Props) => {
  return (
    <section className='relative pt-10'>
      <h2 className='pb-5'>Movie Cast</h2>
      <MovieCastCarousel cast={cast} />
    </section>
  );
};

export default MovieCast;
