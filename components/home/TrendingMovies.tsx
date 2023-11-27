import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';

import TrendingMovie from './TrendingMovie';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

type Props = {
  moviesRes: movie.MovieList;
};

const TrendingMovies = ({ moviesRes }: Props) => {
  return (
    <section className='relative'>
      <Swiper
        style={{
          '--swiper-navigation-color': '#fff',
        }}
        navigation
        loop
        modules={[Navigation]}>
        {moviesRes.results.map(movie => (
          <SwiperSlide key={movie.id}>
            <TrendingMovie movie={movie} />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default TrendingMovies;
