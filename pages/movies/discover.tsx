import type { GetServerSideProps } from 'next';
import Head from 'next/head';

import Discover from '@/components/movies/Discover';

export const getServerSideProps = (async context => {
  const { query } = context;

  const { page, sort_by, with_genres } = query as Record<string, string>;

  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: `Bearer ${process.env.API_BEARER}`,
    },
  };

  const queryParams = new URLSearchParams({
    include_adult: 'false',
    language: 'en-US',
    page: page || '1',
    sort_by,
    ...(with_genres && { with_genres }),
  });

  const moviewRes = await fetch(
    `${process.env.API_URL}/discover/movie?${queryParams.toString()}`,
    options
  );

  const movieGenresRes = await fetch(
    `${process.env.API_URL}/genre/movie/list`,
    options
  );

  const movieList = await moviewRes.json();
  const movieGenres = await movieGenresRes.json();

  return {
    props: { movieList, movieGenres: movieGenres.genres },
  };
}) satisfies GetServerSideProps;

type Props = {
  movieList: movie.MovieList;
  movieGenres: movie.Genre[];
};

const DiscoverPage = ({ movieList, movieGenres }: Props) => {
  return (
    <>
      <Head>
        <title>Discover</title>
      </Head>
      <Discover movieList={movieList} movieGenres={movieGenres} />
    </>
  );
};

export default DiscoverPage;
