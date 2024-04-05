import CloseIcon from '@mui/icons-material/Close';

type Props = {
  handleToggleFilters: () => void;
};

export default function DrawerHeader({ handleToggleFilters }: Props) {
  return (
    <span className='flex justify-between pb-20'>
      <h3 className='text-gray-200'>Filters</h3>
      <button onClick={handleToggleFilters}>
        <CloseIcon className='text-gray-200' />
      </button>
    </span>
  );
}
