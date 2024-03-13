import type { ReactNode } from 'react';

import Navbar from '../navbar/Navbar';

type LayoutProps = {
  children: ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <Navbar />
      {children}
      <footer></footer>
    </>
  );
};

export default Layout;
