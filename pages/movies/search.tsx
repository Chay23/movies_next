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

  const searchValue = context.query!.value;

  const res = await fetch(
    `${
      process.env.API_URL
    }/search/movie?query=${searchValue}&include_adult=false&language=en-US&page=${
      context.query!.page
    }`,
    options
  );

  const moviesRes = await res.json();

  return {
    props: {
      moviesRes,
      searchedValue: searchValue,
    },
  };
}) satisfies GetServerSideProps;

type SearchPageProps = {
  moviesRes: movie.MovieList;
  searchedValue: string;
};

const SearchPage = ({ moviesRes, searchedValue }: SearchPageProps) => {
  return <SearchResults moviesRes={moviesRes} searchedValue={searchedValue} />;
};

export default SearchPage;
