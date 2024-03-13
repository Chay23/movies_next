import type { navbar } from '@/typings/navbar';

import Link from 'next/link';

import { usePathname } from 'next/navigation';

type Props = {
  open: boolean;
  item: navbar.MenuItem;
  toggleCollapsible: () => void;
  closeMenu: () => void;
};

const CollapsibleMenu = ({
  open,
  item,
  toggleCollapsible,
  closeMenu,
}: Props) => {
  const pathname = usePathname() as string;

  return (
    <ul
      className={`overflow-hidden ease-linear duration-500 flex flex-col bg-gray-600/50 ${
        open ? 'max-h-[999px]' : 'max-h-0'
      }`}>
      {item.submenu!.map(subItem => {
        const active = pathname.includes(subItem.href as string);
        return (
          <Link
            key={subItem.key}
            href={subItem.href}
            className={`text-2xl px-14 py-5 ${active ? 'font-semibold' : ''}`}
            onClick={() => {
              toggleCollapsible();
              closeMenu();
            }}>
            {subItem.title}
          </Link>
        );
      })}
    </ul>
  );
};

export default CollapsibleMenu;
