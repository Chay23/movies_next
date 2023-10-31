import Image from 'next/image';

type Props = {
  movie: movie.Movie;
};

const ExtendedMovie = ({ movie }: Props) => {
  // handle empty movie image
  const date = new Date(movie.release_date);

  return (
    <article>
      <div className='relative w-full max-w-xl aspect-5/7 mb-5'>
        <Image
          src={`${process.env.NEXT_PUBLIC_API_IMAGE_URL}/w500${movie.poster_path}`}
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
