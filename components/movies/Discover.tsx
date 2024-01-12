import ExtendedMovieList from '../common/movies/ExtendedMovieList';
import Filters from './Filters';

type Props = {
  movieList: movie.MovieList;
  movieGenres: movie.GenreList;
};

const Discover = ({ movieList, movieGenres }: Props) => {
  return (
    <section>
      <h1 className='mb-12'>Discover</h1>
      <div className='grid grid-cols-1/4 gap-7'>
        <Filters movieGenres={movieGenres} />
        <ExtendedMovieList movies={movieList.results} />
      </div>
    </section>
  );
};

export default Discover;
