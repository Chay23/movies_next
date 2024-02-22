import type { MouseEvent } from 'react';
import type { filters } from '@/typings/movie/movieFilters';

import { useId } from 'react';
import Select from 'react-select';

import FilterItem from './FilterItem';

import { sortOptions } from './constants';

type Props = {
  movieGenres: filters.GenreList;
  sortOption: filters.SortOption;
  handleSortOptionChange: (option: filters.SortOption | null) => void;
  handleGenreSelect: (
    e: MouseEvent<HTMLButtonElement>,
    remove: boolean
  ) => void;
};

const Filters = ({
  movieGenres,
  sortOption,
  handleSortOptionChange,
  handleGenreSelect,
}: Props) => {
  const id = useId();

  return (
    <aside className='p-5 border border-gray-200 shadow-xl rounded-2xl h-fit'>
      <h3>Filters</h3>
      <FilterItem title='Sort By'>
        <Select
          id={id}
          options={sortOptions}
          defaultValue={sortOptions[1]}
          value={sortOption}
          onChange={handleSortOptionChange}
        />
      </FilterItem>
      <FilterItem title='Genre'>
        <ul className='flex flex-wrap gap-3'>
          {movieGenres.map(genre => (
            <li key={genre.id}>
              <button
                className={`py-1 px-2 border border-gray-300 rounded-lg${
                  genre.selected ? ' bg-blue-600 text-gray-50' : ''
                }`}
                name={genre.id.toString()}
                onClick={e => handleGenreSelect(e, !genre.selected)}>
                {genre.name}
              </button>
            </li>
          ))}
        </ul>
      </FilterItem>
    </aside>
  );
};

export default Filters;
