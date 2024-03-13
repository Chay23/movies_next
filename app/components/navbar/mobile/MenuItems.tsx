import MenuItem from './MenuItem';
import SearchForm from '../SearchForm';
import Drawer from '@/components/common/drawer/Drawer';

import { menuItems } from '../constants';

type Props = {
  menuOpen: boolean;
  closeMenu: () => void;
};

const MenuItems = ({ menuOpen, closeMenu }: Props) => {
  return (
    <Drawer
      show={menuOpen}
      className='top-[63px] bg-gradient-to-b from-gray-700 to-gray-600 pt-20'>
      <ul>
        <SearchForm formClasses='px-8 mb-2' inputClasses='w-full px-3 py-2' />
        {menuItems.map(item => (
          <MenuItem key={item.url} item={item} menuOpen={menuOpen} closeMenu={closeMenu} />
        ))}
      </ul>
    </Drawer>
  );
};

export default MenuItems;
