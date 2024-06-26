import type { navbar } from '@/typings/navbar';

import { DEFAULT_PAGE_VALUE, DEFAULT_SORT_VALUE } from '@/utils/constants';

export const NAV_LINKS: navbar.MenuItem[] = [
  {
    title: 'Movies',
    url: '/movies',
    submenu: [
      {
        key: 'discover',
        title: 'Discover',
        href: `/movies/discover?sort_by=${DEFAULT_SORT_VALUE}&page=${DEFAULT_PAGE_VALUE}`,
      },
      {
        key: 'popular',
        title: 'Popular',
        href: `/movies/popular`,
      },
      {
        key: 'now-playing',
        title: 'Now Playing',
        href: '/movies/now-playing',
      },
    ],
  },
  {
    title: 'TV Shows',
    url: '/tv',
    submenu: [
      {
        key: 'discover',
        title: 'Discover',
        href: `/tv/discover?sort_by=${DEFAULT_SORT_VALUE}&page=${DEFAULT_PAGE_VALUE}`,
      },
      {
        key: 'popular',
        title: 'Popular',
        href: '/tv/popular',
      },
    ],
  },
  {
    title: 'Actors',
    url: '/actors',
  },
];
