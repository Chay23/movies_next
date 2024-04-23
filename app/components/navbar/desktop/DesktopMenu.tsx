import MenuItem from './MenuItem';
import SearchForm from '../SearchForm';

import { NAV_LINKS } from '@/utils/navbar/constants';

const DesktopMenu = () => {
  return (
    <ul className='hidden md:flex gap-6 self-stretch'>
      {NAV_LINKS.map(item => {
        return <MenuItem key={item.url} item={item} />;
      })}
      <SearchForm formClasses='self-center' />
    </ul>
  );
};

export default DesktopMenu;
