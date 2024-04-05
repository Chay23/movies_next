import type { layout } from '@/typings/layout';

export default function DiscoverLayout({ children }: layout.CommonLayoutProps) {
  return (
    <section>
      <h1 className='mb-3 lg:mb-12'>Discover TV Shows</h1>
      <div className='md:grid md:grid-cols-1/2 xl:grid-cols-1/4 gap-7'>
        {children}
      </div>
    </section>
  );
}
