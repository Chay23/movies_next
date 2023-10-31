import MovieImage from '../image/MovieImage';

type Props = {
  movie: movie.Movie;
};

const ExtendedMovie = ({ movie }: Props) => {
  const date = new Date(movie.release_date);

  return (
    <article>
      <div className='relative w-full max-w-xl aspect-5/7 mb-5'>
        <MovieImage
          imageSrc={movie.poster_path}
          serverWidth={500}
          fill
          alt='Movie poster'
          style={{ objectFit: 'cover' }}
        />
      </div>
      <h4>{movie.title}</h4>
      <p>{date.getFullYear() || ''}</p>
      <p className='truncate mt-2'>{movie.overview}</p>
    </article>
  );
};

export default ExtendedMovie;
