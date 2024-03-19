import type { tv } from '@/typings/tv/tv';

import TVShowsList from '@/app/components/common/tv-shows/TVShows';

type Props = {
  tvShows: tv.Show[];
};

export default async function TVShows({ tvShows }: Props) {
  return <TVShowsList tvShows={tvShows} />;
}
