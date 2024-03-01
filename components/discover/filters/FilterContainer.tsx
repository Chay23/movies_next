import type { ReactElement } from 'react';

type Props = {
  title: string;
  children: ReactElement;
};

const FilterContainer = ({ title, children }: Props) => {
  return (
    <>
      <hr className='my-4' />
      <article>
        <h4 className='text-gray-200 md:text-gray-500 mb-4'>{title}</h4>
        {children}
      </article>
    </>
  );
};

export default FilterContainer;
