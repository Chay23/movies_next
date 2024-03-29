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
        className={`relative ${px ? 'px-8 md:px-10 xl:px-40' : ''} ${
          py ? 'pt-8 md:pt-12 xl:pt-20 pb-12' : ''
        } ${roboto.className}`}>
        {children}
      </main>
      <footer></footer>
    </>
  );
};

export default Layout;
