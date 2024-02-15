import MovieCarousel from '@/components/common/home/MovieCarousel';

type NowPlayingMoviesProps = {
  moviesRes: movie.MovieList;
};

const NowPlaying = ({ moviesRes }: NowPlayingMoviesProps) => {
  return (
    <section className=''>
      <h1 className='my-8'>Now Playing</h1>
      <MovieCarousel movies={moviesRes.results} />
    </section>
  );
};

export default NowPlaying;
