import { Roboto } from 'next/font/google';

import Navbar from './navbar/Navbar';

const roboto = Roboto({ subsets: ['latin'], weight: ['400'] });

type LayoutProps = {
  children: JSX.Element;
};

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <Navbar font={roboto} />
      <main className={`px-40 py-20 ${roboto.className}`}>{children}</main>
      <footer></footer>
    </>
  );
};

export default Layout;
