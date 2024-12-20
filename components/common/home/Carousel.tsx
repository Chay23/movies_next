import 'swiper/css';
import 'swiper/css/grid';
import 'swiper/css/pagination';

import { Production } from '@/typings/common';

import { useRef } from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

import Item from './Item';

type Props = {
  items: Production[];
  isMovies: boolean;
};

const Carousel = ({ items, isMovies = false }: Props) => {
  const swiperRef = useRef<any>();

  return (
    <div className='relative'>
      <Swiper
        slidesPerView={2}
        breakpoints={{
          100: {
            slidesPerView: 2.3,
            spaceBetween: 10,
          },
          450: {
            slidesPerView: 3.3,
            spaceBetween: 10,
          },
          640: {
            slidesPerView: 4.3,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 4,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 6,
            spaceBetween: 20,
          },
          1440: {
            slidesPerView: 8,
            spaceBetween: 20,
          },
        }}
        spaceBetween={10}
        loop
        onSwiper={it => (swiperRef.current = it)}
        >
        {items.map(item => (
          <SwiperSlide key={item.id}>
            <Item item={item} isMovies={isMovies}/>
          </SwiperSlide>
        ))}
      </Swiper>
      <ArrowBackIosIcon
        className='hidden md:block swiper-arrow-prev absolute top-1/2 -translate-y-1/2 -left-6 cursor-pointer scale-125'
        onClick={() => swiperRef.current?.slidePrev()}
      />
      <ArrowForwardIosIcon
        className='hidden md:block swiper-arrow-next absolute top-1/2 -translate-y-1/2 -right-8 cursor-pointer scale-125'
        onClick={() => swiperRef.current?.slideNext()}
      />
    </div>
  );
};

export default Carousel;
