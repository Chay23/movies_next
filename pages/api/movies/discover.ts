import type { NextApiRequest, NextApiResponse } from 'next';

type HandlerResponse = movie.MovieList | movie.MovieResError;

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<HandlerResponse>
) {
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: `Bearer ${process.env.API_BEARER}`,
    },
  };

  if (req.method === 'GET') {
    let fetchRes: Response;
    const { sort_by, page } = req.query;

    try {
      fetchRes = await fetch(
        `${
          process.env.API_URL
        }/discover/movie?include_adult=false&include_video=false&language=en-US&page=${
          page || 1
        }&sort_by=${sort_by}`,
        options
      );

      const moviesRes: movie.MovieList | movie.MovieResError =
        await fetchRes.json();

      if (!('results' in moviesRes)) {
        return res
          .status(400)
          .json({ status_message: moviesRes.status_message });
      }

      res.status(200).json(moviesRes);
    } catch (e) {
      console.error(e);
    }
  }
}
