import '@/styles/globals.css';

import type { ReactElement } from 'react';
import type { page } from '@/typings/page';

import Head from 'next/head';

import Layout from '@/components/layout/Layout';
import SWRProvider from '@/components/providers/SWRProvider';
import ChildComponent from '@/components/app/ChildComponent';

export default function App({ Component, pageProps }: page.AppPropsWithLayout) {
  const error = pageProps.error;

  const defaultLayout = (page: ReactElement) => (
    <Layout px={!error} py={!error}>
      {page}
    </Layout>
  );

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
        <ChildComponent Component={Component} pageProps={pageProps} />
      </SWRProvider>
    </>
  );
}
