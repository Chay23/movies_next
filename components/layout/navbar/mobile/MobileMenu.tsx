import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { useBoolean } from '@/hooks/useBoolean';

import MenuItems from './MenuItems';

import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

const MobileMenu = () => {
  const { value: menu, setFalse, toggle } = useBoolean(false);
  const router = useRouter();

  useEffect(() => {
    router.events.on('routeChangeStart', () => setFalse());
  }, [router.events, setFalse]);

  return (
    <>
      <div className='md:hidden' onClick={toggle}>
        {menu ? <CloseIcon /> : <MenuIcon />}
      </div>
      <MenuItems menuOpen={menu} />
    </>
  );
};

export default MobileMenu;
