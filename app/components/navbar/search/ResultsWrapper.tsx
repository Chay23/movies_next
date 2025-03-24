import type { ReactNode } from 'react';

type Props = {
  children: ReactNode;
};

export default function ResultsWrapper({ children }: Props) {
  return (
    <div
      id='nav--search-list-dropdown'
      className='absolute w-[350px] max-h-[286px] overflow-auto left-0 top-full hidden md:flex flex-col gap-2 p-2 bg-slate-blue-500 border border-border rounded-lg shadow-md'>
      {children}
    </div>
  );
}
