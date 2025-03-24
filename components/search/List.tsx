import type { Production } from '@/typings/common';
import type { api } from '@/typings/api';
import type { searchParams } from '@/typings/tv/searchParams/tvDiscover';

import PaginatedList from '@/components/common/list/PaginatedList';
import Item from './Item';

import { useQueryParams } from '@/hooks/app/useQueryParams';

type Props = {
  data: api.PaginatedResponse<Production>;
};

export default function SearchList({ data }: Props) {
  const { queryParams, updateQueryParams } =
    useQueryParams<searchParams.TvDiscover>();

  const items = data.results;

  const handlePageChange = (_: any, page: number) => {
    updateQueryParams({
      page: page.toString(),
    });
  };

  if (items.length === 0) {
    return <article>No Results Found</article>;
  }

  return (
    <PaginatedList
      items={items}
      page={Number(queryParams.page)}
      totalPages={data.total_pages}
      listItem={item => <Item key={item.id} item={item} />}
      onPageChange={handlePageChange}
    />
  );
}
