import type { api } from '@/typings/api';
import type { GetServerSideProps } from 'next';
import type { movie } from '@/typings/movie/movie';

import Movie from '@/components/movie/Movie';

import { getData } from '@/services/api';

import { SERVER_ERROR_OBJECT } from '@/utils/constants';

export const getServerSideProps = (async context => {
  try {
    const { params } = context;
    const urls = [`/movie/${params!.id}`, `/movie/${params!.id}/credits`];

    const [movieDetails, movieCredits] = await Promise.all(
      urls.map(async url => {
        return await getData(url);
      })
    );

    if (movieDetails.error) {
      return {
        props: {
          ...movieDetails,
        },
      };
    }

    if (movieCredits.error) {
      return {
        props: {
          ...movieCredits,
        },
      };
    }

    return {
      props: {
        movie: movieDetails.data,
        credits: movieCredits.data,
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
  credits: api.MovieCreditsResponse;
};

const MoviePage = ({ movie, credits }: MoviePageProps) => {
  return <Movie movie={movie} credits={credits} />;
};

export default MoviePage;
