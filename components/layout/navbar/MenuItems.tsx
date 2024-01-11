import type { ReactNode } from 'react';

import MenuItem from './MenuItem';

type Props = {
  items: navbar.MenuItem[];
  children: ReactNode;
};

const MenuItems = ({ items, children }: Props) => {
  return (
    <div className='flex gap-6 self-stretch'>
      {items.map(item => {
        return <MenuItem key={item.url} item={item} />;
      })}
      {children}
    </div>
  );
};

export default MenuItems;
