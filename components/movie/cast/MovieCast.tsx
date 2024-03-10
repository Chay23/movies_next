import type { movie } from '@/typings/movie/movie';

import MovieCastCarousel from './CastCarousel';

type Props = {
  cast: movie.MovieCast[];
};

const MovieCast = ({ cast }: Props) => {
  return (
    <section className='relative pt-10'>
      <h3 className='pb-5'>Movie Cast</h3>
      <MovieCastCarousel cast={cast} />
    </section>
  );
};

export default MovieCast;
