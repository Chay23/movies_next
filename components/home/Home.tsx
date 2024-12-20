'use client';

import { api } from '@/typings/api';
import { Production } from '@/typings/common';

import { useBoolean } from '@/hooks/useBoolean';

import TrendingComponent from '../common/home/trending/Trending';
import CarouselSection from '../common/home/CarouselSection';

type Props = {
  trendingMovies: api.PaginatedResponse<Production>;
  popularMovies: api.PaginatedResponse<Production>;
  nowPlayingMovies: api.PaginatedResponse<Production>;
  trendingTV: api.PaginatedResponse<Production>;
  popularTV: api.PaginatedResponse<Production>;
  topRatedTV: api.PaginatedResponse<Production>;
};

export default function Home({ trendingMovies, popularMovies, nowPlayingMovies, trendingTV, popularTV, topRatedTV}: Props) {
  const { value, setTrue, setFalse } = useBoolean(true);
  return (
    <div className='relative overflow-x-hidden'>
      <div className='absolute left-1/2 -translate-x-1/2 top-5 flex cursor-pointer z-40 text-sm md:text-base'>
        <div
          className={`${
            !value ? 'bg-transparent text-blue-300' : 'bg-blue-400 text-white'
          } border px-3 py-1 rounded-l-lg border-blue-300 border-r-0`}
          onClick={setTrue}>
          Movies
        </div>
        <div
          className={`${
            value ? 'bg-transparent text-blue-300' : 'bg-blue-400 text-white'
          } border border-blue-300 px-3 py-1 rounded-r-lg border-l-0`}
          onClick={setFalse}>
          TV
        </div>
      </div>
      <article
        className={`flex transition-transform duration-500 ease-in-out ${
          !value ? '-translate-x-full' : ''
        }`}>
        <div className='min-w-full'>
          <TrendingComponent items={trendingMovies} isMovies />
          <div className='flex flex-col gap-4 md:gap-14 lg:gap-20 px-4 xl:px-64 py-4 lg:py-20 md:p-14'>
            <CarouselSection title='Popular' items={popularMovies.results} isMovies />
            <CarouselSection title='Now Playing' items={nowPlayingMovies.results} isMovies />
          </div>
        </div>
        <div className='min-w-full'>
        <TrendingComponent items={trendingTV} />
          <div className='flex flex-col gap-4 md:gap-14 lg:gap-20 px-4 xl:px-64 py-4 lg:py-20 md:p-14'>
            <CarouselSection title='Popular' items={popularTV.results} />
            <CarouselSection title='Top Rated' items={topRatedTV.results} />
          </div>
        </div>
      </article>
    </div>
  );
}
