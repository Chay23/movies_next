import type { tv } from '@/typings/tv/tv';
import type { HTMLAttributes } from 'react';

import TVShow from './TVShow';

type Props = {
  tvShows: tv.Show[];
  listClasses?: HTMLAttributes<HTMLDivElement>['className'];
};

export default function TVShows({ tvShows, listClasses }: Props) {
  return (
    <div
      className={`grid grid-cols-2 sm:grid-cols-4 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-5 gap-4 md:gap-5 xl:gap-7 ${listClasses}`}>
      {tvShows.map(tvShow => (
        <TVShow key={tvShow.id} tvShow={tvShow} />
      ))}
    </div>
  );
}
