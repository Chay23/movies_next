import { HTMLAttributes, ReactNode } from 'react';

type Props = {
  show: boolean;
  children: ReactNode;
  className?: HTMLAttributes<HTMLDivElement>['className'];
};

const Drawer = ({ show, children, className = '' }: Props) => {
  return (
    <section
      className={`z-50 fixed top-0 h-full w-full md:hidden duration-500 ease-in-out ${
        show ? 'left-0' : '-left-full'
      } ${className}`}>
      {children}
    </section>
  );
};

export default Drawer;
