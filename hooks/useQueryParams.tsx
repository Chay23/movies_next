import { useRouter } from 'next/router';

export const useQueryParams = (initialQueryParams: Record<string, string>) => {
  const router = useRouter();

  const constructQueryParams = (queryParamsObj: Record<string, string>) => {
    return new URLSearchParams(queryParamsObj).toString();
  };

  const queryParams = constructQueryParams(initialQueryParams);

  const updateQueryParams = (queryParamsObj: Record<string, string>) => {
    const queryParams = constructQueryParams(queryParamsObj);

    router.replace({ query: queryParams }, undefined, {
      shallow: true,
    });
  };

  return { queryParams, updateQueryParams };
};
