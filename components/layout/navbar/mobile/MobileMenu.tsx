import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

import MenuItems from './MenuItems';

import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

const MobileMenu = () => {
  const [menu, setMenu] = useState(false);
  const router = useRouter();

  useEffect(() => {
    router.events.on('routeChangeStart', () => setMenu(false));
  }, [router.events]);

  const handleToggleNav = () => {
    setMenu(prevVal => !prevVal);
  };

  return (
    <>
      <div className='md:hidden' onClick={handleToggleNav}>
        {menu ? <CloseIcon /> : <MenuIcon />}
      </div>
      <MenuItems menuOpen={menu} />
    </>
  );
};

export default MobileMenu;
