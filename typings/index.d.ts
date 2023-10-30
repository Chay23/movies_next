namespace movie {
  type Genre = {
    id: number;
    name: string;
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

  type MovieList = {
    page: number;
    results: movie.Movie[];
    total_pages: number;
  };
}
