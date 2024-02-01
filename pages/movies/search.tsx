import type { GetServerSideProps } from 'next';

import { getData } from '@/services/api';

import Head from 'next/head';
import SearchResults from '@/components/search/SearchResults';

import {
  DEFAULT_PAGE_VALUE,
  DEFAULT_BLANK_VALUE,
  SERVER_ERROR_OBJECT,
} from '@/utils/constants';

export const getServerSideProps = (async context => {
  try {
    const { search, page } = context.query as Record<
      string,
      string | undefined
    >;

    const queryParams = {
      query: search || DEFAULT_BLANK_VALUE,
      page: page || DEFAULT_PAGE_VALUE,
    };

    const res = await getData<movie.MovieList>('/search/movie', queryParams);

    if (res.error) {
      return {
        props: res,
      };
    }

    return {
      props: {
        moviesRes: res.data,
      },
    };
  } catch (e) {
    console.error(e);
    return {
      props: SERVER_ERROR_OBJECT,
    };
  }
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
