import type { filters } from '@/typings/filters';

import GenresListItem from './GenreListItem';

type Props = {
  genres: filters.GenreOptions;
  handleMouseEvent: (genreId: string, remove: boolean | undefined) => void;
};

export default function GenreList({ genres, handleMouseEvent }: Props) {
  return (
    <ul className='flex flex-wrap gap-3'>
      {genres.map(genre => (
        <GenresListItem
          key={genre.id}
          genre={genre}
          handleMouseEvent={handleMouseEvent}
        />
      ))}
    </ul>
  );
}
