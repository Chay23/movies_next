import type { HTMLAttributes } from 'react';

export type SeriesDescription = {
  key: string | number;
  title?: string;
  titleClasses?: HTMLAttributes<HTMLElement>['className'];
  value?: string | number;
  containerClasses?: HTMLAttributes<HTMLElement>['className'];
  valueClasses?: HTMLAttributes<HTMLElement>['className'];
  row?: Omit<SeriesDescription, 'row'>[];
};
