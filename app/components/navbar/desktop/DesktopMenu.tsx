'use client';

import { useEffect, useState } from 'react';
import { useTheme } from 'next-themes';

import MenuItem from './MenuItem';
import SearchForm from '../SearchForm';
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';

import { NAV_LINKS } from '@/utils/navbar/constants';

const DesktopMenu = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  const handleThemeChange = () => {
    if (theme === 'light') {
      return setTheme('dark');
    }
    return setTheme('light');
  };

  return (
    <ul className='hidden md:flex gap-6 self-stretch'>
      {NAV_LINKS.map(item => {
        return <MenuItem key={item.url} item={item} />;
      })}
      <SearchForm formClasses='self-center' />
      <div className='cursor-pointer self-center text-slate-100' onClick={handleThemeChange}>
        {theme === 'dark' && <LightModeIcon />}
        {theme === 'light' && <DarkModeIcon />}
      </div>
    </ul>
  );
};

export default DesktopMenu;
