namespace movie {
  type Genre = {
    id: number;
    name: string;
  };

  type GenreList = {
    genres: Genre[];
  };

  type Movie = {
    adult: boolean;
    genres: Genre[];
    id: number;
    original_title: string;
    title: string;
    overview: string;
    tagline: string;
    popularity: number;
    poster_path: string;
    release_date: string;
    status: string;
    vote_average: number;
    vote_count: number;
    backdrop_path: string;
    poster_path: string;
  };

  type MovieResError = {
    success?: boolean;
    status_message: string;
  };

  type MovieList = {
    page: number;
    results: movie.Movie[];
    total_pages: number;
  };
}

namespace navbar {
  type SubMenuItem = {
    key: string;
    title: string;
    href:
      | string
      | {
          pathname: string;
          query: { [key: string]: string };
        };
  };

  type MenuItem = {
    title: string;
    url: string;
    submenu?: SubMenuItem[];
  };
}

namespace filters {
  type SortOption = { value: string | number; label: string };
}
