import type { SeriesDescription } from '@/typings/components/tv/details/types';

import SingleDetail from './DetailItem';

type Props = {
  item: SeriesDescription;
};

export default function Details({ item }: Props) {
  if (!item.value && !item.row) {
    return null;
  }

  if (item.row) {
    return (
      <div className={`flex ${item.containerClasses || ''}`}>
        {item.row.map(subItem => (
          <SingleDetail key={subItem.key} item={subItem} />
        ))}
      </div>
    );
  }

  return <SingleDetail item={item} />;
}
