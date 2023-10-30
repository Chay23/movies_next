import Head from 'next/head';

import PopularMovies from '@/components/home/PopularMovies';
import NowPlaying from '@/components/home/NowPlaying';

import type { GetServerSideProps } from 'next';

export const getServerSideProps = (async () => {
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: `Bearer ${process.env.API_BEARER}`,
    },
  };

  const urls = [
    `${process.env.API_URL}/movie/popular?language=en-US&page=1`,
    `${process.env.API_URL}/movie/now_playing?language=en-US&page=1`,
  ];

  const [popularMoviesRes, nowPlayingMoviesRes] =
    await Promise.all<movie.MovieList>(
      urls.map(async url => {
        const res = await fetch(url, options);
        return await res.json();
      })
    );

  return {
    props: {
      popularMoviesRes,
      nowPlayingMoviesRes,
    },
  };
}) satisfies GetServerSideProps;

type HomeProps = {
  popularMoviesRes: movie.MovieList;
  nowPlayingMoviesRes: movie.MovieList;
};

export default function Home({
  popularMoviesRes,
  nowPlayingMoviesRes,
}: HomeProps) {
  return (
    <>
      <Head>
        <title>Home Page</title>
      </Head>
      <NowPlaying moviesRes={nowPlayingMoviesRes} />
      <PopularMovies moviesRes={popularMoviesRes} />
    </>
  );
}
