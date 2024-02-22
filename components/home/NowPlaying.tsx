import type { api } from '@/typings/api';
import type { movie } from '@/typings/movie/movie';

import MovieCarousel from '@/components/common/home/MovieCarousel';

type NowPlayingMoviesProps = {
  moviesRes: api.PaginatedResponse<movie.Movie>;
};

const NowPlaying = ({ moviesRes }: NowPlayingMoviesProps) => {
  return (
    <section>
      <h1 className='my-8'>Now Playing</h1>
      <MovieCarousel movies={moviesRes.results} />
    </section>
  );
};

export default NowPlaying;
