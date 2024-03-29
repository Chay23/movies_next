import type { GetServerSideProps } from 'next';
import type { api } from '@/typings/api';
import type { movie } from '@/typings/movie/movie';
import type { Genre } from '@/typings/common';

import { getData } from '@/services/api';

import Head from 'next/head';
import Discover from '@/components/discover/Discover';

import {
  DEFAULT_PAGE_VALUE,
  DEFAULT_SORT_VALUE,
  SERVER_ERROR_OBJECT,
} from '@/utils/constants';

export const getServerSideProps = (async context => {
  try {
    const { query } = context;
    const { page, sort_by, with_genres } = query as Record<
      string,
      string | undefined
    >;

    const queryParams = {
      page: page || DEFAULT_PAGE_VALUE,
      sort_by: sort_by || DEFAULT_SORT_VALUE,
      ...(with_genres && { with_genres }),
    };

    const moviesRes = await getData<api.PaginatedResponse<movie.Movie>>(
      '/discover/movie',
      queryParams
    );

    const movieGenresRes = await getData<api.GenreResponse>(
      '/genre/movie/list'
    );

    if (moviesRes.error) {
      return {
        props: moviesRes,
      };
    }

    if (movieGenresRes.error) {
      return {
        props: movieGenresRes,
      };
    }

    return {
      props: {
        moviesRes: moviesRes.data,
        movieGenres: movieGenresRes.data.genres,
      },
    };
  } catch (e) {
    console.error(e);
    return {
      props: SERVER_ERROR_OBJECT,
    };
  }
}) satisfies GetServerSideProps;

type Props = {
  moviesRes: api.PaginatedResponse<movie.Movie>;
  movieGenres: Genre[];
};

const DiscoverPage = ({ moviesRes, movieGenres }: Props) => {
  return (
    <>
      <Head>
        <title>Discover</title>
      </Head>
      <Discover moviesRes={moviesRes} movieGenres={movieGenres} />
    </>
  );
};

export default DiscoverPage;
