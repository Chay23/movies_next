import { ReactNode } from 'react';

type Props = {
  children: ReactNode;
};

export default function SeriesLayout({ children }: Props) {
  return (
    <main className='relative px-8 md:px-10 xl:px-40 pt-8 md:pt-12 xl:pt-20 pb-12'>
      {children}
    </main>
  );
}
