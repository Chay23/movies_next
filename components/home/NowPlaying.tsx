import MovieList from '@/components/common/movieList/MovieList';

type NowPlayingMoviesProps = {
    moviesRes: movie.MovieList;
};

const NowPlaying = ({ moviesRes }: NowPlayingMoviesProps) => {
  return (
    <section className=''>
      <h1 className='mb-12'>Now Playing</h1>
      <MovieList movies={moviesRes.results} />
    </section>
  );
};

export default NowPlaying;
