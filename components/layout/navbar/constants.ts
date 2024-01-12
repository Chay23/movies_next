export const menuItems: navbar.MenuItem[] = [
  {
    title: 'Movies',
    url: '/movies',
    submenu: [
      {
        key: 'discover',
        title: 'Discover',
        href: '/movies/discover',
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
        href: 'popular',
      },
    ],
  },
  {
    title: 'Actors',
    url: '/actors',
  },
];
