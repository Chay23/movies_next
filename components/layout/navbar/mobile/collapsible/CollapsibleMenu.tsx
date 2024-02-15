import Link from 'next/link';
import { useRouter } from 'next/router';

import { matchesPath } from './utils';

type Props = {
  open: boolean;
  item: navbar.MenuItem;
  handleToggleOpen: () => void;
};

const CollapsibleMenu = ({ open, item, handleToggleOpen }: Props) => {
  const router = useRouter();

  return (
    <div
      className={`overflow-hidden ease-linear duration-500 flex flex-col bg-gray-600/50 ${
        open ? 'max-h-[999px]' : 'max-h-0'
      }`}>
      {item.submenu!.map(subItem => {
        const active = matchesPath(router, subItem);
        return (
          <Link
            key={subItem.key}
            href={subItem.href}
            className={`text-2xl px-14 py-5 ${active ? 'font-semibold' : ''}`}
            onClick={handleToggleOpen}>
            {subItem.title}
          </Link>
        );
      })}
    </div>
  );
};

export default CollapsibleMenu;
