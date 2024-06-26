import type { TCast, Genre } from './common';
export namespace api {
  export type PaginatedResponse<T> = {
    page: number;
    results: T[];
    total_pages: number;
  };

  export type CreditsResponse = {
    cast: TCast[];
  };

  export type FetchError = Error & {
    info: Record<string, string | number | boolean>;
    status: number;
  };

  export type ErrorInfo =
    | {
        success?: false;
        status_code?: number;
        status_message?: string;
      }
    | Record<string, string | number | boolean>;

  export type ErrorResponse = {
    error: true;
    status: number;
    info: ErrorInfo;
  };

  export type SuccessResponse<T> = {
    error: false;
    data: Awaited<T>;
  };

  export type FetcherResponse<T> = SuccessResponse<T> | ErrorResponse;

  export type GenreResponse = {
    genres: Genre[];
  };
}
