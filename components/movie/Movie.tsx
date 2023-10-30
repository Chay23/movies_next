import Image from 'next/image';
import MovieDescription from './MovieDescription';

type MovieProps = {
  movie: movie.Movie;
};

const Movie = ({ movie }: MovieProps) => {
  return (
    <article>
      <div className='flex items-center gap-3 mb-5'>
        <h1>{movie.title}</h1>
        <h2>({movie.original_title})</h2>
      </div>
      <div className='flex gap-x-10'>
        <Image
          src={`${process.env.NEXT_PUBLIC_API_IMAGE_URL}/original${movie.poster_path}`}
          width={400}
          height={500}
          alt='Movie poster'
        />
        <MovieDescription movie={movie} />
      </div>
    </article>
  );
};

export default Movie;
