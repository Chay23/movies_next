import type { page } from '@/typings/page';

import Error from '../error/Error';
import LoadingPageSpinner from '../common/spinner/LoadingPageSpinner';

type Props = {
  Component: page.NextPageWithLayout;
  pageProps: any;
};

const ChildComponent = ({ Component, pageProps }: Props) => {
  const error = pageProps.error;

  const child = error ? (
    <Error status={pageProps.status} info={pageProps.info} />
  ) : (
    <>
      <Component {...pageProps} />
      <LoadingPageSpinner />
    </>
  );

  return child;
};

export default ChildComponent;
