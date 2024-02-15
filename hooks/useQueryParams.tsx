import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

export const useQueryParams = (initialQueryParams: Record<string, string>) => {
  const router = useRouter();
  const [queryParams, setQueryParams] = useState(
    new URLSearchParams(initialQueryParams).toString()
  );

  useEffect(() => {
    const queryParams = new URLSearchParams(initialQueryParams);
    setQueryParams(queryParams.toString());
  }, [initialQueryParams]);

  const updateQueryParams = (queryParamsObj: Record<string, string>) => {
    const queryParams = new URLSearchParams(queryParamsObj);

    setQueryParams(queryParams.toString());
    router.replace({ query: queryParams.toString() }, undefined, {
      shallow: true,
    });
  };

  return { queryParams, updateQueryParams };
};
