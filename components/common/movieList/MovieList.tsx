import Movie from './Movie';

type MovieListProps = {
  movies: movie.Movie[];
};

const MovieList = ({ movies }: MovieListProps) => {
  return (
    <div className='grid grid-cols-10 gap-5'>
      {movies.map(movie => (
        <Movie key={movie.id} movie={movie} />
      ))}
    </div>
  );
};

export default MovieList;
