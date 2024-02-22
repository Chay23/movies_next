import type { navbar } from '@/typings/navbar';

import { useEffect, useState } from 'react';

import CollapsibleTitle from './CollapsibleTitle';
import CollapsibleMenu from './CollapsibleMenu';

type Props = {
  item: navbar.MenuItem;
  menuOpen: boolean;
};

const Collapsible = ({ item, menuOpen }: Props) => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!menuOpen) {
      setOpen(false);
    }
  }, [menuOpen]);

  const handleToggleOpen = () => {
    setOpen(prevState => !prevState);
  };

  return (
    <li>
      <CollapsibleTitle
        open={open}
        item={item}
        handleToggleOpen={handleToggleOpen}
      />
      <CollapsibleMenu
        open={open}
        item={item}
        handleToggleOpen={handleToggleOpen}
      />
    </li>
  );
};

export default Collapsible;
