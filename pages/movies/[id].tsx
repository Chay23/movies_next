import Movie from '@/components/movie/Movie';

import type { GetServerSideProps } from 'next';

export const getServerSideProps = (async context => {
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: `Bearer ${process.env.API_BEARER}`,
    },
  };

  const res = await fetch(
    `${process.env.API_URL}/movie/${context.params!.id}?language=en-US`,
    options
  );

  const movie = await res.json();

  return {
    props: {
      movie,
    },
  };
}) satisfies GetServerSideProps;

type MoviePageProps = {
  movie: movie.Movie;
};

const MoviePage = ({ movie }: MoviePageProps) => {
  return <Movie movie={movie} />;
};

export default MoviePage;
