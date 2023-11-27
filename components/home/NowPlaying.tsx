import MovieList from '@/components/common/home/SimpleMovieList';

type NowPlayingMoviesProps = {
  moviesRes: movie.MovieList;
};

const NowPlaying = ({ moviesRes }: NowPlayingMoviesProps) => {
  return (
    <section className=''>
      <h1 className='my-12'>Now Playing</h1>
      <MovieList movies={moviesRes.results} />
    </section>
  );
};

export default NowPlaying;
