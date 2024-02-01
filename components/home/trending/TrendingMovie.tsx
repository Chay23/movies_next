import MovieImage from '../../common/image/MovieImage';
import MovieDetails from './MovieDetails';

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
          filter: 'blur(10px)',
        }}
        className='-z-20'
        sizes='30vw'
        alt='Movie background poster'
        priority
      />
      <MovieImage
        imageSrc={movie.poster_path}
        serverWidth={500}
        width={350}
        height={400}
        sizes='50vw'
        alt='Movie poster'
        priority
      />
      <MovieDetails movie={movie} />
    </article>
  );
};

export default TrendingMovie;