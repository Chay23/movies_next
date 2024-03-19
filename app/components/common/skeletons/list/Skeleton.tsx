import type { HTMLAttributes } from 'react';

import SkeletonItem from './SkeletonItem';

type Props = {
  listClasses?: HTMLAttributes<HTMLDivElement>['className'];
};

export default function Skeleton({ listClasses }: Props) {
  return (
    <section
      className={`grid grid-cols-2 sm:grid-cols-4 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-5 gap-4 md:gap-5 xl:gap-7 ${listClasses}`}>
      {[...Array(20)].map((_, idx) => {
        return <SkeletonItem key={idx} />;
      })}
    </section>
  );
}
