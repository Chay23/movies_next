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

  const { value, page } = context.query;

  const res = await fetch(
    `${process.env.API_URL}/search/movie?query=${value}&include_adult=false&language=en-US&page=${page}`,
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
