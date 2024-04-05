import type { HTMLAttributes, ReactNode } from 'react';

import { useBoolean } from '@/hooks/useBoolean';

import Drawer from '@/components/common/drawer/Drawer';
import DrawerHeader from './DrawerHeader';
import DrawerContent from './DrawerContent';

import FilterIcon from '@mui/icons-material/FilterAlt';

type Props = {
  drawerWrapperClasses?: HTMLAttributes<HTMLDivElement>['className'];
  genresError?: boolean;
  children: ReactNode;
};

export default function FiltersDrawer({
  drawerWrapperClasses,
  genresError = false,
  children,
}: Props) {
  const { value, toggle } = useBoolean(false);

  const handleToggleFilters = () => {
    toggle();
  };

  return (
    <>
      <button className='md:hidden mb-5' onClick={handleToggleFilters}>
        Filters
        <FilterIcon className='text-gray-500' />
      </button>
      <Drawer
        show={value}
        className={`flex flex-col p-8 bg-gradient-to-b from-gray-700 to-gray-600 ${
          drawerWrapperClasses ?? ''
        } z-50`}>
        <DrawerHeader handleToggleFilters={handleToggleFilters} />
        <DrawerContent
          genresError={genresError}
          handleToggleFilters={handleToggleFilters}>
          {children}
        </DrawerContent>
      </Drawer>
    </>
  );
}
