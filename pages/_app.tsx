import '@/styles/globals.css';

import Layout from '@/components/layout/Layout';

import type { ReactElement, ReactNode } from 'react';
import type { NextPage } from 'next';
import type { AppProps } from 'next/app';
import LoadingPageSpinner from '@/components/common/spinner/LoadingPageSpinner';

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

export default function App({ Component, pageProps }: AppPropsWithLayout) {
  const defaultLayout = (page: ReactElement) => <Layout>{page}</Layout>;

  const getLayout = Component.getLayout ?? defaultLayout;

  return getLayout(
    <>
      <Component {...pageProps} />
      <LoadingPageSpinner />
    </>
  );
}
