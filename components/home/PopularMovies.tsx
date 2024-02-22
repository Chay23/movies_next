import MovieCarousel from '@/components/common/home/MovieCarousel';

type PopularMoviesProps = {
  moviesRes: movie.MovieList;
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
