export namespace filters {
  export type SortOption = { value: string; label: string };

  export type GenreList = (movie.Genre & {
    selected?: boolean;
  })[];
}
