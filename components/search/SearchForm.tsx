import { ChangeEvent, FormEvent } from 'react';

type Props = {
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  onSubmit: (e: FormEvent<HTMLFormElement>) => void;
  formClasses?: string;
};

export default function SearchForm({
  value,
  onChange,
  onSubmit,
  formClasses = '',
}: Props) {
  const isButtonDisabled = !Boolean(value.trim());

  return (
    <form onSubmit={onSubmit}>
      <input
        placeholder='Search'
        name='search'
        value={value}
        onChange={onChange}
        className='rounded-lg px-3 py-2 border border-border'
      />
      <button
        className={`ml-3 bg-slate-blue-500 rounded-lg px-4 py-2 transition-all duration-300 ${
          isButtonDisabled ? '' : 'hover:bg-slate-blue-100'
        }`}
        disabled={isButtonDisabled}>
        Search
      </button>
    </form>
  );
}
