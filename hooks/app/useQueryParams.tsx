import { ReadonlyURLSearchParams, useRouter } from 'next/navigation';
import { usePathname, useSearchParams } from 'next/navigation';

export const useQueryParams = () => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const queryParams = formQueryParamsObj(searchParams);

  const updateQueryParams = (queryParamsObj: Record<string, string>) => {
    const _queryParams = constructQueryParams({
      ...queryParams,
      ...queryParamsObj,
    });

    router.replace(`${pathname}?${_queryParams}`);
  };

  return { queryParams, updateQueryParams };
};

const constructQueryParams = (queryParamsObj: Record<string, string>) => {
  return new URLSearchParams(queryParamsObj).toString();
};

const formQueryParamsObj = (searchParams: ReadonlyURLSearchParams | null) => {
  const res = {} as Record<string, string>;

  searchParams?.forEach((val, key) => {
    return (res[key] = val);
  });

  return res;
};
