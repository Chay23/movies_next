import { Roboto } from 'next/font/google';

import Navbar from './navbar/Navbar';

const roboto = Roboto({ subsets: ['latin'], weight: ['400'] });

type LayoutProps = {
  children: JSX.Element;
  px?: boolean;
  py?: boolean;
};

const Layout = ({ children, px = true, py = true }: LayoutProps) => {
  return (
    <>
      <Navbar />
      <main
        className={`relative ${px ? 'px-40' : ''} ${py ? 'pt-40 pb-12' : ''} ${
          roboto.className
        }`}>
        {children}
      </main>
      <footer></footer>
    </>
  );
};

export default Layout;
