import { useRef } from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Grid, Navigation } from 'swiper/modules';

import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

import MovieCarouselItem from './MovieCarouselItem';

import 'swiper/css';
import 'swiper/css/grid';
import 'swiper/css/pagination';

type Props = {
  movies: movie.Movie[];
};

const MovieCarousel = ({ movies }: Props) => {
  const swiperRef = useRef<any>();

  return (
    <div className='relative'>
      <Swiper
        slidesPerView={2}
        grid={{
          rows: 1,
        }}
        breakpoints={{
          100: {
            slidesPerView: 2,
            spaceBetween: 10,
          },
          450: {
            slidesPerView: 3,
            spaceBetween: 10,
          },
          640: {
            slidesPerView: 4,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 5,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 8,
            spaceBetween: 20,
          },
          1440: {
            slidesPerView: 10,
            spaceBetween: 20,
          },
        }}
        spaceBetween={10}
        navigation={{
          prevEl: '.swiper-arrow-prev',
          nextEl: 'swiper-arrow-next',
        }}
        modules={[Grid, Navigation]}
        loop
        onSwiper={it => (swiperRef.current = it)}>
        {movies.map(movie => (
          <SwiperSlide key={movie.id}>
            <MovieCarouselItem movie={movie} />
          </SwiperSlide>
        ))}
      </Swiper>
      <ArrowBackIosIcon
        className='swiper-arrow-prev absolute top-1/4 -left-6 cursor-pointer scale-125'
        onClick={() => swiperRef.current?.slidePrev()}
      />
      <ArrowForwardIosIcon
        className='swiper-arrow-next absolute top-1/4 -right-8 cursor-pointer scale-125'
        onClick={() => swiperRef.current?.slideNext()}
      />
    </div>
  );
};

export default MovieCarousel;
