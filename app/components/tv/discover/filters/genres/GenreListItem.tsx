import type { Genre } from '@/typings/common';

type Props = {
  genre: Genre;
  handleMouseEvent: (genreId: string, remove: boolean | undefined) => void;
};

export default function GenresListItem({ genre, handleMouseEvent }: Props) {
  return (
    <li className='flex-auto'>
      <button
        className={`w-full py-2 md:py-1 px-3 md:border border-slate-blue-100 rounded-lg transition-all duration-200 ${
          genre.selected
            ? 'bg-slate-blue-100 hover:bg-bg-light'
            : 'hover:bg-slate-blue-100 bg-bg-light hover:text-text-hover'
        }`}
        onClick={() => handleMouseEvent(genre.id.toString(), genre.selected)}>
        {genre.name}
      </button>
    </li>
  );
}
