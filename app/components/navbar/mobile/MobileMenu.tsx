import { useBoolean } from '@/hooks/useBoolean';

import MenuItems from './MenuItems';

import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

const MobileMenu = () => {
  const { value: menu, setFalse: closeMenu, toggle } = useBoolean(false);

  return (
    <>
      <div className='md:hidden' onClick={toggle}>
        {menu ? <CloseIcon /> : <MenuIcon />}
      </div>
      <MenuItems menuOpen={menu} closeMenu={closeMenu} />
    </>
  );
};

export default MobileMenu;
