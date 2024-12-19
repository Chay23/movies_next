import type { api } from '@/typings/api';
import type { movie } from '@/typings/movie/movie';

import Home from '@/components/home/Home';

import { getData } from '@/services/api';

export const revalidate = 3600;

export default async function HomePage() {
  const endpoints = [
    {
      resource: '/trending/movie/week',
    },
    { resource: '/movie/popular' },
    { resource: '/movie/now_playing' },
    { resource: '/trending/tv/week' },
    { resource: '/tv/popular' },
    { resource: '/tv/top_rated' },
  ];

  try {
    const [
      trendingMoviesRes,
      popularMoviesRes,
      nowPlayingMoviesRes,
      trendingTVRes,
      popularTVRes,
      topRatedTVRes,
    ] = await Promise.all(
      endpoints.map(async endpoint => {
        return await getData<api.PaginatedResponse<movie.Movie>>(
          endpoint.resource
        );
      })
    );

    if (
      trendingMoviesRes.error ||
      popularMoviesRes.error ||
      nowPlayingMoviesRes.error ||
      trendingTVRes.error ||
      popularTVRes.error ||
      topRatedTVRes.error
    ) {
      throw new Error('Failed to fetch data');
    }

    return (
      <>
        <Home
          trendingMovies={trendingMoviesRes.data}
          popularMovies={popularMoviesRes.data}
          nowPlayingMovies={nowPlayingMoviesRes.data}
          trendingTV={trendingTVRes.data}
          popularTV={popularTVRes.data}
          topRatedTV={topRatedTVRes.data}
        />
      </>
    );
  } catch (e) {
    return (
      <div>Failed to fetch data, please try to reload page or try later</div>
    );
  }
}
