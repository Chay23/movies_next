import '@/styles/globals.css';

import type { Metadata } from 'next';

import { Roboto } from 'next/font/google';

import LayoutComponent from './layoutComponent';

const roboto = Roboto({ subsets: ['latin'], weight: ['400', '500', '700'] });

export const metadata: Metadata = {
  title: 'Movies',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en' className={roboto.className}>
      <body>
        <LayoutComponent>{children}</LayoutComponent>
      </body>
    </html>
  );
}
