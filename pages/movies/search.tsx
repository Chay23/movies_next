import Head from 'next/head';

import SearchResults from '@/components/search/SearchResults';

import type { GetServerSideProps } from 'next';

export const getServerSideProps = (async context => {
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: `Bearer ${process.env.API_BEARER}`,
    },
  };

  const { search, page } = context.query as Record<string, string | undefined>;

  const queryParams = new URLSearchParams({
    include_adult: 'false',
    language: 'en-US',
    query: search || '',
    page: page || '1',
  });

  const res = await fetch(
    `${process.env.API_URL}/search/movie?${queryParams.toString()}`,
    options
  );

  const moviesRes = await res.json();

  return {
    props: {
      moviesRes,
    },
  };
}) satisfies GetServerSideProps;

type SearchPageProps = {
  moviesRes: movie.MovieList;
};

const SearchPage = ({ moviesRes }: SearchPageProps) => {
  return (
    <>
      <Head>
        <title>Search Results</title>
      </Head>
      <SearchResults moviesRes={moviesRes} />
    </>
  );
};

export default SearchPage;
