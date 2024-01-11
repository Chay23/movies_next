export const menuItems: navbar.MenuItem[] = [
  {
    title: 'Movies',
    url: '/movies',
    submenu: [
      {
        title: 'Popular',
        query: 'popular',
      },
      {
        title: 'Now Playing',
        query: 'now-playing',
      },
    ],
  },
  {
    title: 'Series',
    url: '/series',
    submenu: [
      {
        title: 'Popular',
        query: 'popular',
      },
    ],
  },
  {
    title: 'Actors',
    url: '/actors',
  },
];
