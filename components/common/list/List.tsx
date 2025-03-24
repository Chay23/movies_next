import type { HTMLAttributes, ReactNode } from 'react';

type Props<T> = {
  items: T[];
  listClasses?: HTMLAttributes<HTMLDivElement>['className'];
  listItem: (arg: T) => ReactNode;
};

export default function List<T>({ items, listClasses, listItem }: Props<T>) {
  return (
    <div
      className={`grid grid-cols-2 sm:grid-cols-4 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-5 gap-4 md:gap-5 xl:gap-7 ${listClasses}`}>
      {items.map(itemData => listItem(itemData))}
    </div>
  );
}
