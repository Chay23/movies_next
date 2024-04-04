import type { Genre } from '@/typings/common';

type Props = {
  genre: Genre;
  handleMouseEvent: (genreId: string, remove: boolean | undefined) => void;
};

export default function GenresListItem({ genre, handleMouseEvent }: Props) {
  return (
    <li className='flex-auto'>
      <button
        className={`w-full py-2 md:py-1 px-3 md:border border-gray-300 rounded-lg transition-all ${
          genre.selected
            ? 'bg-blue-600 text-gray-50 hover:bg-blue-700'
            : 'hover:border-blue-600 bg-white'
        }`}
        onClick={() => handleMouseEvent(genre.id.toString(), genre.selected)}>
        {genre.name}
      </button>
    </li>
  );
}
