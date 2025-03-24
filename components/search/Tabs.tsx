'use client';

import { Production } from '@/typings/common';
import { api } from '@/typings/api';

import { useSearchParams, useRouter } from 'next/navigation';
import { useMemo } from 'react';
import { DEFAULT_PAGE_VALUE } from '@/utils/constants';

type Props = {
  movies: api.PaginatedResponse<Production>;
  tvs: api.PaginatedResponse<Production>;
};

export default function Tabs({ movies, tvs }: Props) {
  const searchParams = useSearchParams();
  const router = useRouter();

  const type = searchParams?.get('type');
  const query = searchParams?.get('query');

  const tabs = useMemo(
    () => [
      { title: 'Movies', type: 'movie', total: movies.total_results },
      { title: 'TV', type: 'tv', total: tvs.total_results },
    ],
    [movies, tvs]
  );

  const handleTabChange = (type: string) => {
    router.replace(
      `/search?type=${type}&query=${query}&page=${DEFAULT_PAGE_VALUE}`
    );
  };

  return (
    <article className='flex flex-col gap-3 bg-slate-blue h-fit p-5 rounded-xl shadow-md'>
      <h4 className='mb-2'>Results</h4>
      {tabs.map(tab => (
        <button
          key={tab.type}
          className={`flex justify-between items-center border border-border px-3 py-2 rounded-lg transition-all duration-300 ease-in-out ${
            type === tab.type
              ? 'bg-slate-blue-100 hover:bg-slate-blue-50'
              : 'bg-slate-blue-500 hover:bg-slate-blue-50'
          }`}
          onClick={() => handleTabChange(tab.type)}>
          <span className='text-lg'>{tab.title}</span>
          <span className={`text-sm px-3 py-1 rounded-2xl bg-bg-light-100`}>
            {tab.total}
          </span>
        </button>
      ))}
    </article>
  );
}
