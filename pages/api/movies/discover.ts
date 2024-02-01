import type { NextApiRequest, NextApiResponse } from 'next';
import type { api } from '@/typings/api';

import { getData } from '@/services/api';

import {
  DEFAULT_PAGE_VALUE,
  DEFAULT_SORT_VALUE,
  SERVER_ERROR_OBJECT,
} from '@/utils/constants';

type HandlerResponse = movie.MovieList | api.ErrorInfo;

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<HandlerResponse>
) {
  if (req.method === 'GET') {
    try {
      const { sort_by, with_genres, page } = req.query as Record<
        string,
        string | undefined
      >;

      const queryParams = {
        sort_by: sort_by || DEFAULT_SORT_VALUE,
        ...(with_genres && { with_genres }),
        page: page || DEFAULT_PAGE_VALUE,
      };

      const response = await getData<movie.MovieList>(
        '/discover/movie',
        queryParams
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
