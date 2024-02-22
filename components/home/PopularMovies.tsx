import type { api } from '@/typings/api';
import type { movie } from '@/typings/movie/movie';

import MovieCarousel from '@/components/common/home/MovieCarousel';

type PopularMoviesProps = {
  moviesRes: api.PaginatedResponse<movie.Movie>;
};

const PopularMovies = ({ moviesRes }: PopularMoviesProps) => {
  return (
    <section>
      <h1 className='my-8'>Popular</h1>
      <MovieCarousel movies={moviesRes.results} />
    </section>
  );
};

export default PopularMovies;
