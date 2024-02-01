import Movie from '@/components/movie/Movie';

import { getData } from '@/services/api';

import { SERVER_ERROR_OBJECT } from '@/utils/constants';

import type { GetServerSideProps } from 'next';

export const getServerSideProps = (async context => {
  try {
    const res = await getData(`/movie/${context.params!.id}`);
    if (res.error) {
      return {
        props: {
          res,
        },
      };
    }

    return {
      props: {
        movie: res.data,
      },
    };
  } catch (e) {
    console.error(e);
    return {
      props: SERVER_ERROR_OBJECT,
    };
  }
}) satisfies GetServerSideProps;

type MoviePageProps = {
  movie: movie.Movie;
};

const MoviePage = ({ movie }: MoviePageProps) => {
  return <Movie movie={movie} />;
};

export default MoviePage;
