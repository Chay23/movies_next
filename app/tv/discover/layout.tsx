import type { layout } from '@/typings/layout';

export default function DiscoverLayout({ children }: layout.CommonLayoutProps) {
  return (
    <section>
      <h1 className='mb-5 lg:mb-12'>Discover TV Shows</h1>
      {children}
    </section>
  );
}
