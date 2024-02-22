import { Router } from 'next/router';
import { useEffect, useState } from 'react';

export const useLoadingSpinner = () => {
  const [isLoading, setLoading] = useState(false);

  const handleLoading = (value: boolean) => {
    return (_: any, { shallow }: { shallow: boolean }) => {
      if (!shallow) {
        setLoading(value);
      }
    };
  };

  useEffect(() => {
    Router.events.on('routeChangeStart', handleLoading(true));
    Router.events.on('routeChangeComplete', handleLoading(false));
    Router.events.on('routeChangeError', handleLoading(false));
    return () => {
      Router.events.off('routeChangeStart', handleLoading(true));
      Router.events.off('routeChangeComplete', handleLoading(false));
      Router.events.off('routeChangeError', handleLoading(false));
    };
  });

  return { isLoading };
};
