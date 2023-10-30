import Image from 'next/image';
import Link from 'next/link';

type MovieProps = {
  movie: movie.Movie;
};

const Movie = ({ movie }: MovieProps) => {
  return (
    <article className='relative flex flex-col rounded-xl overflow-hidden hover:scale-125'>
      <Image
        src={`https://image.tmdb.org/t/p/w400/${movie.poster_path}`}
        width={200}
        height={400}
        alt='Movie poster'
      />
      <div className='p-2'>
        <div className='hover:font-semibold'>
          <Link
            href={{
              pathname: '/movies/[id]',
              query: { id: movie.id },
            }}>
            {movie.title}
          </Link>
        </div>
      </div>
    </article>
  );
};

export default Movie;
