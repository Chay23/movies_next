import '@/styles/globals.css';

import type { Metadata } from 'next';
import { Roboto } from 'next/font/google';

import LayoutComponent from './layoutComponent';
import Providers from './providers';

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
    <html lang='en' className={roboto.className} suppressHydrationWarning>
      <body>
        <Providers>
          <LayoutComponent>{children}</LayoutComponent>
        </Providers>
      </body>
    </html>
  );
}
