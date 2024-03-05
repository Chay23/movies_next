import type { HTMLAttributes } from 'react';

import MovieSkeleton from './MovieSkeleton';

type Props = {
  listClasses: HTMLAttributes<HTMLDivElement>['className'];
};

const MovieListSkeleton = ({ listClasses }: Props) => {
  return (
    <section
      className={`grid grid-cols-2 sm:grid-cols-4 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-5 gap-4 md:gap-5 xl:gap-7 ${listClasses}`}>
      {[...Array(20)].map((_, idx) => {
        return <MovieSkeleton key={idx} />;
      })}
    </section>
  );
};

export default MovieListSkeleton;
