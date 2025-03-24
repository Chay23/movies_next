'use client';

import type { api } from '@/typings/api';
import type { Production } from '@/typings/common';
import type { ChangeEvent, FormEvent } from 'react';

import { useState } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';

import SearchList from './List';
import Tabs from './Tabs';
import SearchForm from './SearchForm';
import { DEFAULT_BLANK_VALUE, DEFAULT_PAGE_VALUE } from '@/utils/constants';

type Props = {
  movies: api.PaginatedResponse<Production>;
  tvs: api.PaginatedResponse<Production>;
};

export default function Search({ movies, tvs }: Props) {
  const [searchValue, setSearchValue] = useState('');
  const router = useRouter();
  const searchParams = useSearchParams();
  const type = searchParams?.get('type');
  const query = searchParams?.get('query');

  const handleSearchValueChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
  };

  const handleSearchSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSearchValue(DEFAULT_BLANK_VALUE);
    router.push(
      `/search?type=movie&query=${searchValue}&page=${DEFAULT_PAGE_VALUE}`
    );
  };

  return (
    <>
      <div className='flex flex-col md:flex-row justify-between md:items-center bg-slate-blue h-fit p-5 rounded-xl mb-5 shadow-md'>
        <h2 className='font-medium'>Search &quot;{query}&quot;</h2>
        <SearchForm
          value={searchValue}
          onChange={handleSearchValueChange}
          onSubmit={handleSearchSubmit}
        />
      </div>
      <div className='md:grid md:grid-cols-1/2 xl:grid-cols-1/4 gap-7'>
        <Tabs movies={movies} tvs={tvs} />
        {type === 'movie' ? (
          <SearchList data={movies} />
        ) : (
          <SearchList data={tvs} />
        )}
      </div>
    </>
  );
}
