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
    const { value, page } = req.query;

    // handle error for empty search value
    // empty page query param is handled on the API side
    if (!value) {
      res.status(400).json({
        status_message: 'Invalid value: Please provide value query parameter.',
      });
    }

    try {
      fetchRes = await fetch(
        `${process.env.API_URL}/search/movie?query=${value}&include_adult=false&language=en-US&page=${page}`,
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
