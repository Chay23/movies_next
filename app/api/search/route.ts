import type { api } from '@/typings/api';
import { Production } from '@/typings/common';
import { type NextRequest } from 'next/server';

import { getData } from '@/services/api';
import { DEFAULT_BLANK_VALUE, SERVER_ERROR_OBJECT } from '@/utils/constants';

export async function GET(req: NextRequest) {
  try {
    const searchParams = req.nextUrl.searchParams;

    const queryParams = {
      query: searchParams.get('query') || DEFAULT_BLANK_VALUE,
    };

    const response = await getData<api.PaginatedResponse<Production>>(
      '/search/multi',
      queryParams
    );

    if (response.error) {
      return Response.json(response.info);
    }

    return Response.json(response.data);
  } catch (e) {
    console.error(e);
    return Response.json(SERVER_ERROR_OBJECT.info);
  }
}
