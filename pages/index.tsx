import type { GetStaticProps } from 'next';
import type { ReactElement } from 'react';

import { getData } from '@/services/api';

import Head from 'next/head';
import TrendingMovies from '@/components/home/trending/TrendingMovies';
import PopularMovies from '@/components/home/PopularMovies';
import NowPlaying from '@/components/home/NowPlaying';
import Layout from '@/components/layout/Layout';

import { DEFAULT_PAGE_VALUE, SERVER_ERROR_OBJECT } from '@/utils/constants';

export const getStaticProps = (async () => {
  const endpoints = [
    { recource: '/movie/popular', options: { page: DEFAULT_PAGE_VALUE } },
    { recource: '/movie/now_playing', options: { page: DEFAULT_PAGE_VALUE } },
    {
      recource: '/trending/movie/week',
      options: { page: DEFAULT_PAGE_VALUE },
    },
  ];

  try {
    const [popularMoviesRes, nowPlayingMoviesRes, trendingMoviesRes] =
      await Promise.all(
        endpoints.map(async endpoint => {
          return await getData<movie.MovieList>(
            endpoint.recource,
            endpoint.options
          );
        })
      );

    if (popularMoviesRes.error) {
      return {
        props: {
          ...popularMoviesRes,
        },
      };
    }

    if (nowPlayingMoviesRes.error) {
      return {
        props: {
          ...nowPlayingMoviesRes,
        },
      };
    }

    if (trendingMoviesRes.error) {
      return {
        props: {
          ...trendingMoviesRes,
        },
      };
    }

    return {
      props: {
        popularMoviesRes: popularMoviesRes.data,
        nowPlayingMoviesRes: nowPlayingMoviesRes.data,
        trendingMoviesRes: nowPlayingMoviesRes.data,
      },
      revalidate: 3600,
    };
  } catch (e) {
    console.error(e);
    return {
      props: SERVER_ERROR_OBJECT,
    };
  }
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
