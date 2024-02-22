import type { movie } from '@/typings/movie/movie';

type MovieDescriptionProps = {
  movie: movie.Movie;
};

const MovieDescription = ({ movie }: MovieDescriptionProps) => {
  const getMovieGenres = () => {
    return movie.genres
      .reduce((prevVal, genre) => {
        return prevVal.concat(genre.name, ', ');
      }, '')
      .slice(0, -2);
  };

  return (
    <div className='flex flex-col gap-5'>
      <i>{movie.tagline}</i>
      <div>
        <p className='text-xl font-semibold'>Genres:</p>
        <p>{getMovieGenres()}</p>
      </div>
      <div>
        <p className='text-xl font-semibold'>Overview</p>
        <p>{movie.overview}</p>
      </div>
    </div>
  );
};

export default MovieDescription;
