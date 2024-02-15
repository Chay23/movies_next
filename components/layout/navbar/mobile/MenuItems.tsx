import MenuItem from './MenuItem';
import SearchForm from '../SearchForm';

import { menuItems } from '../constants';

type Props = {
  menuOpen: boolean;
};

const MenuItems = ({ menuOpen }: Props) => {
  return (
    <div
      className={`z-50 md:hidden fixed top-16 bg-gradient-to-b from-gray-700 to-gray-600 w-full h-full ease-in-out duration-500 pt-20
    ${menuOpen ? 'left-0' : '-left-full'}`}>
      <ul>
        <SearchForm formClasses='px-8 mb-2' inputClasses='w-full px-3 py-2' />
        {menuItems.map(item => (
          <MenuItem key={item.url} item={item} menuOpen={menuOpen} />
        ))}
      </ul>
    </div>
  );
};

export default MenuItems;
