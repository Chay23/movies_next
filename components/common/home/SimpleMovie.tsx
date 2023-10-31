import Link from 'next/link';

import MovieImage from '../image/MovieImage';

type Props = {
  movie: movie.Movie;
};

const Movie = ({ movie }: Props) => {
  return (
    <article className='relative flex flex-col rounded-xl overflow-hidden hover:scale-125'>
      <MovieImage
        imageSrc={movie.poster_path}
        serverWidth={400}
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
