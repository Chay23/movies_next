import { useId, useState } from 'react';
import Select from 'react-select';

import FilterItem from './FilterItem';

import { sortOptions } from './constants';

type Props = {
  movieGenres: movie.GenreList;
};

const Filters = ({ movieGenres }: Props) => {
  const id = useId();
  const [sortOption, setSortOption] = useState<filters.SortOption>(
    sortOptions[0]
  );

  const handleSortOptionChange = (option: filters.SortOption | null) => {
    if (option) {
      setSortOption(option);
    }
  };

  return (
    <aside className='p-5 border border-gray-200 shadow-xl rounded-2xl h-fit'>
      <h3>Filters</h3>
      <FilterItem title='Sort By'>
        <Select
          id={id}
          options={sortOptions}
          defaultValue={sortOptions[0]}
          value={sortOption}
          onChange={handleSortOptionChange}
        />
      </FilterItem>
      <FilterItem title='Genre'>
        <ul className='flex flex-wrap gap-3'>
          {movieGenres.genres.map(genre => (
            <li key={genre.id}>
              <button className='py-1 px-2 border border-gray-300 rounded-lg'>
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
