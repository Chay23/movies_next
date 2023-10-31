import Movie from './SimpleMovie';

type Props = {
  movies: movie.Movie[];
};

const MovieList = ({ movies }: Props) => {
  // implement carousel
  return (
    <div className='grid grid-cols-10 gap-5'>
      {movies.map(movie => (
        <Movie key={movie.id} movie={movie} />
      ))}
    </div>
  );
};

export default MovieList;
