import Head from 'next/head';

import TrendingMovies from '@/components/home/TrendingMovies';
import PopularMovies from '@/components/home/PopularMovies';
import NowPlaying from '@/components/home/NowPlaying';
import Layout from '@/components/layout/Layout';

import type { GetStaticProps } from 'next';
import type { ReactElement } from 'react';

export const getStaticProps = (async () => {
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
    `${process.env.API_URL}/trending/movie/week?language=en-US&page=1`,
  ];

  const [popularMoviesRes, nowPlayingMoviesRes, trendingMoviesRes] =
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
      trendingMoviesRes,
    },
    revalidate: 3600,
  };
}) satisfies GetStaticProps;

type HomeProps = {
  popularMoviesRes: movie.MovieList;
  nowPlayingMoviesRes: movie.MovieList;
  trendingMoviesRes: movie.MovieList;
};

export default function Home({
  popularMoviesRes,
  nowPlayingMoviesRes,
  trendingMoviesRes,
}: HomeProps) {
  return (
    <>
      <Head>
        <title>Home Page</title>
      </Head>
      <TrendingMovies moviesRes={trendingMoviesRes} />
      <div className='px-40 py-20'>
        <NowPlaying moviesRes={nowPlayingMoviesRes} />
        <PopularMovies moviesRes={popularMoviesRes} />
      </div>
    </>
  );
}

Home.getLayout = function getLayout(page: ReactElement) {
  return (
    <Layout px={false} py={false}>
      {page}
    </Layout>
  );
};
