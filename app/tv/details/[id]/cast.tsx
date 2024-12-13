'use client';

import type { tv } from '@/typings/tv/tv';

import Cast from '@/app/components/tv/details/cast/Cast';

type Props = {
  cast: tv.Cast[];
};

export default function CastPage({ cast }: Props) {
  return <Cast cast={cast} />;
}
