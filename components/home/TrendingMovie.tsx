import Link from 'next/link';

import MovieImage from '../common/image/MovieImage';

type Props = {
  movie: movie.Movie;
};

const TrendingMovie = ({ movie }: Props) => {
  return (
    <article className='flex gap-x-20 px-28 py-48'>
      <div className='absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-gradient-to-b from-slate-950 via-slate-700 to-slate-300 opacity-70 -z-10'></div>
      <MovieImage
        imageSrc={movie.poster_path}
        serverWidth={'original'}
        fill
        style={{
          objectFit: 'cover',
        }}
        className='-z-20'
        alt='Movie poster'
        priority
      />
      <MovieImage
        imageSrc={movie.poster_path}
        serverWidth={500}
        width={350}
        height={400}
        alt='Movie poster'
        priority
      />
      <div className='flex flex-col text-slate-200'>
        <h3>{movie.title}</h3>
        <p className='mt-5'>{movie.overview}</p>
        <Link
          href={{
            pathname: '/movies/[id]',
            query: { id: movie.id },
          }}
          className="mt-5 text-xl w-fit after:content-[''] after:block after:w-0 after:bg-slate-100 after:h-[2px] after:hover:w-full after:transition-all after:duration-500">
          View
        </Link>
      </div>
    </article>
  );
};

export default TrendingMovie;