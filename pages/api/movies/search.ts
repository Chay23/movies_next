import type { api } from '@/typings/api';
import type { movie } from '@/typings/movie/movie';

import { getData } from '@/services/api';

import {
  DEFAULT_PAGE_VALUE,
  DEFAULT_BLANK_VALUE,
  SERVER_ERROR_OBJECT,
} from '@/utils/constants';

import type { NextApiRequest, NextApiResponse } from 'next';

type HandlerResponse = api.PaginatedResponse<movie.Movie> | api.ErrorInfo;

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<HandlerResponse>
) {
  if (req.method === 'GET') {
    try {
      const { search, page } = req.query as Record<string, string | undefined>;

      const response = await getData<api.PaginatedResponse<movie.Movie>>(
        '/search/movie',
        {
          query: search || DEFAULT_BLANK_VALUE,
          page: page || DEFAULT_PAGE_VALUE,
        }
      );

      if (response.error) {
        return res.status(response.status).json(response.info);
      }

      res.status(200).json(response.data);
    } catch (e) {
      console.error(e);
      return res.status(500).json(SERVER_ERROR_OBJECT.info);
    }
  }
}
