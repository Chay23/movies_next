import type { SeriesDescription } from '@/typings/components/tv/details/types';

type Props = {
  item: SeriesDescription;
};

export default function SingleDetail({ item }: Props) {
  return (
    <div className={item.containerClasses}>
      {item.title ? (
        <p className={`text-lg font-medium ${item.titleClasses}`}>{item.title}</p>
      ) : undefined}
      <p className={item.valueClasses}>{item.value}</p>
    </div>
  );
}
