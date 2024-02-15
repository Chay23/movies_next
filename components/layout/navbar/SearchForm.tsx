import type { ChangeEvent, FormEvent, HTMLAttributes } from 'react';

import { useRouter } from 'next/router';
import { useState } from 'react';

import { DEFAULT_BLANK_VALUE, DEFAULT_PAGE_VALUE } from '@/utils/constants';

type Props = {
  formClasses?: HTMLAttributes<HTMLFormElement>['className'];
  inputClasses?: HTMLAttributes<HTMLInputElement>['className'];
};

const SearchForm = ({ formClasses = '', inputClasses = '' }: Props) => {
  const [searchValue, setSearchValue] = useState(DEFAULT_BLANK_VALUE);
  const router = useRouter();

  const handleSearchValueChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
  };

  const handleSearchSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSearchValue(DEFAULT_BLANK_VALUE);
    router.push({
      pathname: '/movies/search',
      query: {
        search: searchValue,
        page: DEFAULT_PAGE_VALUE,
      },
    });
  };

  return (
    <form onSubmit={handleSearchSubmit} className={`flex ${formClasses}`}>
      <input
        placeholder='Search'
        value={searchValue}
        onChange={handleSearchValueChange}
        className={`rounded-lg p-1 text-black max-w-sm ${inputClasses}`}
      />
      <button
        className={`md:hidden ml-4 px-4 border-2 border-gray-500 rounded-lg ${
          searchValue ? 'bg-gray-500' : ''
        }`}
        disabled={!Boolean(searchValue)}>
        Search
      </button>
    </form>
  );
};

export default SearchForm;
