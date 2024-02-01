export namespace api {
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

  export type GenreResponse = {
    genres: movie.Genre[];
  };
}