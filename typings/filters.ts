import { Genre } from './common';

export namespace filters {
  export type SortOption = { value: string; label: string };

  export type GenreList = (Genre & {
    selected?: boolean;
  })[];
}
