import '@/styles/globals.css';

import type { ReactElement, ReactNode } from 'react';
import type { NextPage } from 'next';
import type { AppProps } from 'next/app';
import Head from 'next/head';

import Layout from '@/components/layout/Layout';
import LoadingPageSpinner from '@/components/common/spinner/LoadingPageSpinner';
import SWRProvider from '@/components/providers/SWRProvider';

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
      <Head>
        <meta
          name='viewport'
          content='width=device-width, initial-scale=1'></meta>
        <title>Movies</title>
      </Head>
      <SWRProvider>
        <>
          <Component {...pageProps} />
          <LoadingPageSpinner />
        </>
      </SWRProvider>
    </>
  );
}
