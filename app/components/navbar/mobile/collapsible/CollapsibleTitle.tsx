import type { navbar } from '@/typings/navbar';

import { usePathname } from 'next/navigation';

import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

type Props = {
  open: boolean;
  item: navbar.MenuItem;
  toggleCollapsible: () => void;
};

const CollapsibleTitle = ({ open, item, toggleCollapsible }: Props) => {
  const pathname = usePathname() as string;

  const active = pathname.includes(item.url);

  return (
    <span
      className={`text-3xl flex gap-3 justify-between items-center w-full px-8 py-5 ${
        active ? 'font-semibold' : ''
      }`}
      onClick={toggleCollapsible}>
      {item.title}
      {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
    </span>
  );
};

export default CollapsibleTitle;
