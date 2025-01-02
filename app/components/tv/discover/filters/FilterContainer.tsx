import type { HTMLAttributes, ReactNode } from 'react';

type Props = {
  title: string;
  wrapperClasses?: HTMLAttributes<HTMLDivElement>['className'];
  children: ReactNode;
};

const FilterContainer = ({ title, wrapperClasses = '', children }: Props) => {
  return (
    <article className={'border-t border-border mt-4' + wrapperClasses}>
      <h4 className='text-gray-200 md:text-text-secondary my-4'>{title}</h4>
      {children}
    </article>
  );
};

export default FilterContainer;
