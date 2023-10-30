import MovieList from '@/components/common/movieList/MovieList';

type PopularMoviesProps = {
  moviesRes: movie.MovieList;
};

const PopularMovies = ({ moviesRes }: PopularMoviesProps) => {
  return (
    <section className=''>
      <h1 className='my-12'>Popular</h1>
      <MovieList movies={moviesRes.results} />
    </section>
  );
};

export default PopularMovies;
