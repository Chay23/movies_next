import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import type { movie } from '@/typings/movie/movie';
import type SwiperType from 'swiper';

import { useRef, useState } from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';
import CastCarouselItem from './CastCarouselItem';

import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

type Props = {
  cast: movie.MovieCast[];
};

const MovieCastCarousel = ({ cast }: Props) => {
  const swiperRef = useRef<null | SwiperType>(null);
  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);

  return (
    <>
      <Swiper
        slidesPerView={2}
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
            slidesPerView: 6,
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
        spaceBetween={20}
        onSwiper={it => (swiperRef.current = it)}
        onSlideChange={e => {
          setIsBeginning(e.isBeginning);
          setIsEnd(e.isEnd);
        }}>
        {cast.map(castMember => {
          return (
            <SwiperSlide key={castMember.id}>
              <CastCarouselItem item={castMember} />
            </SwiperSlide>
          );
        })}
      </Swiper>
      <ArrowBackIosIcon
        className={` ${
          isBeginning ? 'hidden ' : ''
        }absolute top-[45%] -left-5 md:-left-6 cursor-pointer scale-125`}
        onClick={() => swiperRef.current?.slidePrev()}
      />
      <ArrowForwardIosIcon
        className={`${
          isEnd ? 'hidden ' : ''
        }absolute top-[45%] -right-7 md:-right-8 cursor-pointer scale-125`}
        onClick={() => swiperRef.current?.slideNext()}
      />
    </>
  );
};

export default MovieCastCarousel;
