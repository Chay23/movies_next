'use client';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import type { api } from '@/typings/api';
import type { Production } from '@/typings/common';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import Item from './Item';

type Props = {
  items: api.PaginatedResponse<Production>;
  isMovies?: boolean;
};

export default function Trending({ items, isMovies = false }: Props) {
  return (
    <article>
      <Swiper
        style={{
          '--swiper-navigation-color': '#fff',
        }}
        navigation
        loop
        modules={[Navigation]}>
        {items.results.map(item => (
          <SwiperSlide key={item.id} style={{ height: 'auto' }}>
            <Item item={item} isMovies={isMovies} />
          </SwiperSlide>
        ))}
      </Swiper>
    </article>
  );
}
