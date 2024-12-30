import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';

export default function ThemeToggler() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleThemeChange = () => {
    if (theme === 'light') {
      return setTheme('dark');
    }
    return setTheme('light');
  };

  if (!mounted) {
    return <div className='w-[24px]'></div>;
  }

  return (
    <div
      className='cursor-pointer self-center text-slate-100'
      onClick={handleThemeChange}>
      {theme === 'dark' && <LightModeIcon />}
      {theme === 'light' && <DarkModeIcon />}
    </div>
  );
}
