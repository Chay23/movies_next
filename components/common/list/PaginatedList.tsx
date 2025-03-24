import type { ChangeEvent, HTMLAttributes, ReactNode } from 'react';

import List from './List';
import { Pagination } from '@mui/material';

type Props<T> = {
  page: number;
  totalPages: number;
  items: T[];
  listClasses?: HTMLAttributes<HTMLDivElement>['className'];
  paginationClasses?: HTMLAttributes<HTMLDivElement>['className'];
  listItem: (arg: T) => ReactNode;
  onPageChange: (event: ChangeEvent<unknown>, value: number) => void;
};

export default function PaginatedList<T>({
  page,
  totalPages,
  items,
  listClasses,
  paginationClasses,
  listItem,
  onPageChange,
}: Props<T>) {
  return (
    <article>
      <List
        items={items}
        listItem={props => listItem(props)}
        listClasses={listClasses}
      />
      <Pagination
        page={page}
        className={`mt-12 flex justify-center ${paginationClasses}`}
        // API has restriction for requested page to 500 but response can contain more than 500 pages
        count={totalPages >= 500 ? 500 : totalPages}
        onChange={onPageChange}
      />
    </article>
  );
}
