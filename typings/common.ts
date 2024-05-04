export type Genre = {
  id: number;
  name: string;
  selected?: boolean; // comes from "markSelectedGenres()" function not from API
};

export type TCast = {
  id: number;
  name: string;
  profile_path: string;
  character: string;
};