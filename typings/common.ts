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

export type Breadcrumb = {
  title: string;
  href?: string;
};

export type Breadcrumbs = Breadcrumb[];

export type Production = {
  id: number;
  name?: string;
  title?: string;
  overview: string;
  backdrop_path: string;
  poster_path: string;
}