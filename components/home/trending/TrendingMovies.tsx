import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import type { api } from '@/typings/api';
import type { movie } from '@/typings/movie/movie';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';

import TrendingMovie from './TrendingMovie';

type Props = {
  moviesRes: api.PaginatedResponse<movie.Movie>;
};

const TrendingMovies = ({ moviesRes }: Props) => {
  return (
    <Swiper
      style={{
        '--swiper-navigation-color': '#fff',
      }}
      navigation
      loop
      modules={[Navigation]}>
      {moviesRes.results.map(movie => (
        <SwiperSlide key={movie.id} style={{ height: 'auto' }}>
          <TrendingMovie movie={movie} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default TrendingMovies;
