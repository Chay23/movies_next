import type { api } from '@/typings/api';
import type { MultiProduction } from '@/typings/common';

import ResultsItem from './ResultsItem';

import useDebounceSWR from '@/hooks/useDebounceSWR';
import ResultsWrapper from './ResultsWrapper';

type Props = {
  show: boolean;
  query: string;
};

export default function ResultsList({ show, query }: Props) {
  const { data, error, isLoading, isValidating } = useDebounceSWR<
    api.PaginatedResponse<MultiProduction>
  >(`/search?query=${query}`, 500);

  if (error) {
    return (
      <ResultsWrapper>
        <div>An error occured</div>
      </ResultsWrapper>
    );
  }

  if (show && (isLoading || isValidating)) {
    return (
      <ResultsWrapper>
        {[...Array(4)].map((_, idx) => (
          <div
            key={idx}
            className='flex gap-2 p-1 min-h-[70px] rounded-md bg-bg-light-100 animate-pulse'></div>
        ))}
      </ResultsWrapper>
    );
  }

  if (show && data) {
    return (
      <ResultsWrapper>
        {data?.total_results !== 0 ? (
          data.results.map(item => <ResultsItem key={item.id} item={item} />)
        ) : (
          <div>No Results Found</div>
        )}
      </ResultsWrapper>
    );
  }
}
