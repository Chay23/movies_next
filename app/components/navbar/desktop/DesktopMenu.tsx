import MenuItem from './MenuItem';
import SearchForm from '../SearchForm';

import { menuItems } from '../constants';

const DesktopMenu = () => {
  return (
    <ul className='hidden md:flex gap-6 self-stretch'>
      {menuItems.map(item => {
        return <MenuItem key={item.url} item={item} />;
      })}
      <SearchForm formClasses='self-center' />
    </ul>
  );
};

export default DesktopMenu;
