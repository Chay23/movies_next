import type { layout } from '@/typings/layout';

export default function TVShowsLayout({ children }: layout.CommonLayoutProps) {
  return (
    <main className='relative bg-bg-light px-8 md:px-10 lg:px-28 xl:px-64 pt-8 md:pt-12 xl:pt-20 pb-12'>
      {children}
    </main>
  );
}
