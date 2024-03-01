import type { filters } from '@/typings/movie/movieFilters';

import { useBoolean } from '@/hooks/useBoolean';

import GenresFilter from './GenresFilter';
import SortFilter from './SortFilter';
import Drawer from '@/components/common/drawer/Drawer';

import CloseIcon from '@mui/icons-material/Close';
import FilterIcon from '@mui/icons-material/FilterAlt';

type Props = {
  movieGenres: filters.GenreList;
};

const MobileFilters = ({ movieGenres }: Props) => {
  const { value, toggle } = useBoolean(false);

  const handletoggleFilters = () => {
    toggle();
  };

  return (
    <>
      <button className='md:hidden' onClick={handletoggleFilters}>
        Filters
        <FilterIcon className='text-gray-500' />
      </button>
      <Drawer
        show={value}
        className='p-8 bg-gradient-to-b from-gray-700 to-gray-600'>
        <>
          <span className='flex justify-between'>
            <h3 className='text-gray-200'>Filters</h3>
            <button onClick={handletoggleFilters}>
              <CloseIcon className='text-gray-200' />
            </button>
          </span>

          <SortFilter />
          <GenresFilter movieGenres={movieGenres} />
        </>
      </Drawer>
    </>
  );
};

export default MobileFilters;
