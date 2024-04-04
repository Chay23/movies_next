import { Genre } from './common';

export namespace filters {
  export type SortOption = { value: string; label: string };

  export type GenreOptions = Genre[];
}
