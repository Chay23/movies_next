import type { movie } from '@/typings/movie/movie';
import type { api } from '@/typings/api';

import MovieDescription from './MovieDescription';
import MovieCast from './cast/MovieCast';

type MovieProps = {
  movie: movie.Movie;
  credits: api.CreditsResponse;
};

const Movie = ({ movie, credits }: MovieProps) => {
  return (
    <article>
      <MovieDescription movie={movie} />
      <MovieCast cast={credits.cast} />
    </article>
  );
};

export default Movie;
