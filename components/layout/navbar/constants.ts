import type { navbar } from '@/typings/navbar';

import { DEFAULT_PAGE_VALUE, DEFAULT_SORT_VALUE } from '@/utils/constants';

export const menuItems: navbar.MenuItem[] = [
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
        href: {
          pathname: '/movies/[list]',
          query: { list: 'popular' },
        },
      },
      {
        key: 'now-playing',
        title: 'Now Playing',
        href: {
          pathname: '/movies/[list]',
          query: { list: 'now-playing' },
        },
      },
    ],
  },
  {
    title: 'Series',
    url: '/series',
    submenu: [
      {
        key: 'popular',
        title: 'Popular',
        href: {
          pathname: '/series/[list]',
          query: { list: 'popular' },
        },
      },
    ],
  },
  {
    title: 'Actors',
    url: '/actors',
  },
];
