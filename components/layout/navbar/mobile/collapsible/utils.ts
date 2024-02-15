import type { NextRouter } from 'next/router';

export const matchesPath = (router: NextRouter, item: navbar.SubMenuItem) => {
  if (item.href instanceof Object) {
    if (router.pathname === item.href.pathname) {
      return router.asPath.includes(item.key);
    }
  }
  return router.pathname.includes(item.key);
};
