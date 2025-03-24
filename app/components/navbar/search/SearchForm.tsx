import type { ChangeEvent, FormEvent, HTMLAttributes } from 'react';

import { usePathname, useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

import SearchIcon from '@mui/icons-material/Search';
import ResultsList from './ResultsList';

import { DEFAULT_BLANK_VALUE, DEFAULT_PAGE_VALUE } from '@/utils/constants';
import { useBoolean } from '@/hooks/useBoolean';

type Props = {
  formClasses?: HTMLAttributes<HTMLFormElement>['className'];
  inputClasses?: HTMLAttributes<HTMLInputElement>['className'];
  closeMenu?: () => void;
};

const SearchForm = ({
  formClasses = '',
  inputClasses = '',
  closeMenu,
}: Props) => {
  const [searchValue, setSearchValue] = useState(DEFAULT_BLANK_VALUE);
  const {
    value: showResults,
    setTrue: onShowResults,
    setFalse: onHideResults,
  } = useBoolean(false);
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    setSearchValue('');
    onHideResults();
  }, [pathname, onHideResults]);

  useEffect(() => {
    document.addEventListener('click', e => {
      const resultsList = document.querySelector('#nav--search-list-dropdown');
      const input = document.querySelector('#nav--search-input');
      const elementsExits = resultsList !== null && input !== null;

      if (
        elementsExits &&
        !e.composedPath().includes(resultsList) &&
        !e.composedPath().includes(input)
      ) {
        onHideResults();
      }
    });
  }, [onHideResults]);

  const handleSearchValueChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearchValue(value);

    if (value) {
      return onShowResults();
    }
    return onHideResults();
  };

  const handleClickInput = () => {
    if (searchValue) {
      onShowResults();
    }
  };

  const handleSearchSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSearchValue(DEFAULT_BLANK_VALUE);
    if (closeMenu) {
      closeMenu();
    }
    router.push(
      `/search?type=movie&query=${searchValue}&page=${DEFAULT_PAGE_VALUE}`
    );
  };

  return (
    <form
      onSubmit={handleSearchSubmit}
      className={`relative flex items-center md:gap-2 ${formClasses}`}>
      <input
        id='nav--search-input'
        placeholder='Search'
        value={searchValue}
        onChange={handleSearchValueChange}
        onClick={handleClickInput}
        className={`rounded-lg rounded-r-none md:rounded-r-lg px-2 py-1 w-full lg:min-w-[350px] focus:outline-hidden ${inputClasses}`}
        autoComplete='off'
      />
      <button
        className={`md:hidden scale-125 bg-white h-[32px] rounded-r-lg ${
          searchValue ? 'text-white' : ''
        }`}
        disabled={!Boolean(searchValue)}>
        <SearchIcon />
      </button>
      <div
        className={`${
          Boolean(searchValue) ? 'block' : 'opacity-0 w-[24px]'
        } hidden md:block`}>
        <button disabled={!Boolean(searchValue)}>
          <SearchIcon className='text-slate-100' />
        </button>
      </div>
      <ResultsList show={showResults} query={searchValue} />
    </form>
  );
};

export default SearchForm;
