import { Genre, TCast } from '../common';

export namespace movie {
  export type Movie = {
    adult: boolean;
    genres: Genre[];
    id: number;
    original_title: string;
    title: string;
    overview: string;
    tagline: string;
    popularity: number;
    release_date: string;
    status: string;
    vote_average: number;
    vote_count: number;
    backdrop_path: string;
    poster_path: string;
  };

  export type Cast = TCast;
}
