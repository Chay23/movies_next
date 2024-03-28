import { ReadonlyURLSearchParams, useRouter } from 'next/navigation';
import { usePathname, useSearchParams } from 'next/navigation';

export const useQueryParams = <T extends Record<string, string>>() => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const queryParams = formQueryParamsObj(searchParams) as T;

  const updateQueryParams = (queryParamsObj: Record<string, string>) => {
    const updatedQueryParams = constructQueryParams({
      ...queryParams,
      ...queryParamsObj,
    });

    router.replace(`${pathname}?${updatedQueryParams}`);
  };

  const removeQueryParam = (name: string) => {
    delete queryParams[name];
    const updatedQueryGenres = constructQueryParams(queryParams);

    router.replace(`${pathname}?${updatedQueryGenres}`);
  };

  return { queryParams, updateQueryParams, removeQueryParam };
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
