import type { navbar } from '@/typings/navbar';

import { useEffect } from 'react';
import { useBoolean } from '@/hooks/useBoolean';

import CollapsibleTitle from './CollapsibleTitle';
import CollapsibleMenu from './CollapsibleMenu';

type Props = {
  item: navbar.MenuItem;
  menuOpen: boolean;
};

const Collapsible = ({ item, menuOpen }: Props) => {
  const { value: open, toggle, setFalse } = useBoolean(false);

  useEffect(() => {
    if (!menuOpen) {
      setFalse();
    }
  }, [menuOpen, setFalse]);

  return (
    <li>
      <CollapsibleTitle open={open} item={item} handleToggleOpen={toggle} />
      <CollapsibleMenu open={open} item={item} handleToggleOpen={toggle} />
    </li>
  );
};

export default Collapsible;
