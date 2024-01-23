import Link from 'next/link';

type Props = {
  movie: movie.Movie;
};

const MovieDetails = ({ movie }: Props) => {
  return (
    <div className='flex flex-col text-slate-200'>
      <h3>{movie.title}</h3>
      <p className='mt-5'>{movie.overview}</p>
      <Link
        href={{
          pathname: '/movies/details/[id]',
          query: { id: movie.id },
        }}
        className="mt-5 text-xl w-fit after:content-[''] after:block after:w-0 after:bg-slate-100 after:h-[2px] after:hover:w-full after:transition-all after:duration-500">
        View
      </Link>
    </div>
  );
};

export default MovieDetails;