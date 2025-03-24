import { ChangeEvent, FormEvent } from 'react';

type Props = {
  searchValue: string;
  handleSearchValueChange: (e: ChangeEvent<HTMLInputElement>) => void;
  handleSearchSubmit: (e: FormEvent<HTMLFormElement>) => void;
};

const SearchForm = ({
  searchValue,
  handleSearchValueChange,
  handleSearchSubmit,
}: Props) => {
  const isButtonDisabled = !Boolean(searchValue.trim());

  return (
    <form onSubmit={handleSearchSubmit}>
      <input
        placeholder='Search'
        name='search'
        value={searchValue}
        onChange={handleSearchValueChange}
        className='rounded-lg p-1 text-black border border-gray-700'
      />
      <button
        className={`ml-3 border border-gray-700 rounded-lg px-2 py-1 ${
          isButtonDisabled
            ? ''
            : 'hover:bg-blue-600 hover:text-gray-50 hover:border-gray-50'
        }`}
        disabled={isButtonDisabled}>
        Search
      </button>
    </form>
  );
};

export default SearchForm;
