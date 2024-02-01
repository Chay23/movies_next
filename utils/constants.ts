// values
export const DEFAULT_PAGE_VALUE = '1';
export const DEFAULT_BLANK_VALUE = '';
export const DEFAULT_SORT_VALUE = 'popularity.desc';

// errors
export const SERVER_ERROR_MESSAGE =
  'Next Server: An error occured on the server';

// statuses
export const STATUS_500 = 500;

export const SERVER_ERROR_OBJECT = {
  error: true,
  status: STATUS_500,
  info: { status_message: SERVER_ERROR_MESSAGE },
};
