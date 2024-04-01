import type { HTMLAttributes, ReactNode } from 'react';

type Props = {
  title: string;
  wrapperClasses?: HTMLAttributes<HTMLDivElement>['className'];
  children: ReactNode;
};

const FilterContainer = ({ title, wrapperClasses, children }: Props) => {
  return (
    <article className={wrapperClasses ?? undefined}>
      <hr className='my-4' />
      <h4 className='text-gray-200 md:text-gray-500 mb-4'>{title}</h4>
      {children}
    </article>
  );
};

export default FilterContainer;
