import type { GetServerSideProps } from 'next';
import Head from 'next/head';

import Discover from '@/components/movies/Discover';

export const getServerSideProps = (async context => {
  const { query } = context;

  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: `Bearer ${process.env.API_BEARER}`,
    },
  };

  const moviewRes = await fetch(
    `${
      process.env.API_URL
    }/discover/movie?include_adult=false&include_video=false&language=en-US&page=${
      query.page || 1
    }&sort_by=${query.sort_by}`,
    options
  );

  const movieGenresRes = await fetch(
    `${process.env.API_URL}/genre/movie/list`,
    options
  );

  const movieList = await moviewRes.json();
  const movieGenres = await movieGenresRes.json();

  return {
    props: { movieList, movieGenres },
  };
}) satisfies GetServerSideProps;

type Props = {
  movieList: movie.MovieList;
  movieGenres: movie.GenreList;
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
