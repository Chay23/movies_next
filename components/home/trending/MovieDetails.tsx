import type { movie } from '@/typings/movie/movie';

import Link from 'next/link';

type Props = {
  movie: movie.Movie;
};

const MovieDetails = ({ movie }: Props) => {
  return (
    <div className='text-slate-200 pb-12 basis-1/2'>
      <h3>{movie.title}</h3>
      <p className='my-5'>{movie.overview}</p>
      <Link
        href={{
          pathname: '/movies/details/[id]',
          query: { id: movie.id },
        }}
        className='block mt-5 text-xl w-fit after:block after:w-0 after:bg-slate-100 after:h-[2px] after:hover:w-full after:transition-all after:duration-500'>
        View
      </Link>
    </div>
  );
};

export default MovieDetails;
