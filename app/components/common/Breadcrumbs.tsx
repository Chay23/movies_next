import type { Breadcrumbs } from '@/typings/common';

import Link from 'next/link';
import HomeIcon from '@mui/icons-material/Home';
import LeftArrow from '@mui/icons-material/KeyboardArrowLeft';

type Props = {
  breadcrumbs: Breadcrumbs;
};

export default function Breadcrumbs({ breadcrumbs }: Props) {
  return (
    <div className='flex items-center gap-3 mb-5'>
      <Link href='/'>
        <HomeIcon />
      </Link>
      {breadcrumbs.map((item, idx) => (
        <div key={idx} className='flex items-center gap-3'>
          <LeftArrow />
          {item.href ? (
            <Link href={item.href}>{item.title}</Link>
          ) : (
            <div>{item.title}</div>
          )}
        </div>
      ))}
    </div>
  );
}
