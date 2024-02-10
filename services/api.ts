import type { api } from '@/typings/api';

import { getEnvironmentVariable } from '@/utils/utils';

type FetcherResponse<T> = api.SuccessResponse<T> | api.ErrorResponse;

export const fetcher = async <T>(url: string, ...args: [any]): Promise<T> => {
  const res = await fetch(url, ...args);
  const json = await res.json();

  if (!res.ok) {
    const error = new Error(
      'An error occurred while fetching the data.'
    ) as api.FetchError;
    error.info = json;
    error.status = res.status;
    throw error;
  }
  return json;
};

export const SWRFetcher = async <T>(
  url: string,
  ...args: [any]
): Promise<T> => {
  let response;
  try {
    response = await fetcher<T>(
      `${process.env.NEXT_PUBLIC_INTERNAL_API_URL}${url}`,
      ...args
    );
    return response;
  } catch (e) {
    if (e instanceof Object) {
      if ('info' in e) {
        throw e;
      }
    }
    const error = new Error('No internet connection.') as api.FetchError;
    error.info = {
      status_message: 'Check your internet connection and try again.',
    };
    throw error;
  }
};

export const getData = async <T>(
  apiResource: string,
  queryParams: Record<string, string | number> = {},
  options?: RequestInit
): Promise<FetcherResponse<T>> => {
  const bearer = getEnvironmentVariable('API_BEARER');
  const apiURL = getEnvironmentVariable('API_URL');

  const _options = {
    ...options,
    headers: {
      accept: 'application/json',
      Authorization: `Bearer ${bearer}`,
      ...options?.headers,
    },
  };

  const _queryParams = new URLSearchParams({
    include_adult: 'false',
    language: 'en-US',
    ...queryParams,
  });

  try {
    const res = await fetcher<T>(
      `${apiURL}${apiResource}?${_queryParams.toString()}`,
      _options
    );

    return { error: false, data: res };
  } catch (error) {
    const { info, status } = error as api.FetchError;
    return { error: true, info, status };
  }
};
