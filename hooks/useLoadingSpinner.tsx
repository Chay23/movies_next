import { Router } from 'next/router';
import { useEffect, useState } from 'react';

export const useLoadingSpinner = () => {
  const [isLoading, setLoading] = useState(false);

  const handleStartLoading = (_: any, { shallow }: { shallow: boolean }) => {
    if (!shallow) {
      setLoading(true);
    }
  };

  const handleStopLoading = (_: any, { shallow }: { shallow: boolean }) => {
    if (!shallow) {
      setLoading(false);
    }
  };

  useEffect(() => {
    Router.events.on('routeChangeStart', handleStartLoading);
    Router.events.on('routeChangeComplete', handleStopLoading);
    Router.events.on('routeChangeError', handleStopLoading);
    return () => {
      Router.events.off('routeChangeStart', handleStartLoading);
      Router.events.off('routeChangeComplete', handleStopLoading);
      Router.events.off('routeChangeError', handleStopLoading);
    };
  });

  return { isLoading };
};
