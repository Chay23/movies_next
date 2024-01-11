import Link from 'next/link';

type Props = {
  item: navbar.MenuItem;
  showDropdown: boolean;
  handleShowDropdown: () => void;
  handleCloseDropdown: () => void;
};

const Dropdown = ({
  item,
  showDropdown,
  handleShowDropdown,
  handleCloseDropdown,
}: Props) => {
  return (
    <div
      className={`absolute bg-slate-100 shadow-md border border-slate-200 whitespace-nowrap transition-all rounded-md -z-50 ${
        showDropdown ? 'top-full opacity-100' : 'top-0 opacity-0'
      }`}
      onMouseEnter={handleShowDropdown}
      onMouseLeave={handleCloseDropdown}>
      <ul className='flex flex-col flex-wrap py-1 text-blue-charcoal'>
        {item.submenu!.map(submenuItem => {
          return (
            <Link
              href={{
                pathname: '/movies/[list]',
                query: { list: submenuItem.query },
              }}
              key={submenuItem.query}
              className='px-6 py-2 hover:bg-slate-300/30'>
              {submenuItem.title}
            </Link>
          );
        })}
      </ul>
    </div>
  );
};

export default Dropdown;
