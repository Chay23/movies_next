import 'swiper/css';
import 'swiper/css/grid';

import type { tv } from '@/typings/tv/tv';

import { Swiper, SwiperSlide } from 'swiper/react';
import CastMember from './CastMember';

type Props = {
  cast: tv.Cast[];
  onSwiper: (s: any) => void;
  onSlideChange: (s: any) => void;
};

export default function CastCarousel({ cast, onSwiper, onSlideChange }: Props) {
  return (
    <Swiper
      slidesPerView={6}
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
          slidesPerView: 6,
          spaceBetween: 10,
        },
      }}
      spaceBetween={20}
      onSwiper={onSwiper}
      onSlideChange={onSlideChange}>
      {cast.slice(0, 20).map(castMember => {
        return (
          <SwiperSlide key={castMember.id}>
            <CastMember castMember={castMember} />
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
}
