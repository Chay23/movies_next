import type { Genre } from '../common';

export namespace tv {
  export type Creator = {
    id: number;
    credit_id: string;
    name: string;
  };

  export type Season = {
    air_date: string | null;
    episode_count: number;
    id: number;
    name: string;
    overview: string;
    poster_path: string | null;
    season_number: number;
  };

  export type Show = {
    id: number;
    name: string;
    original_name: string;
    overview: string;
    poster_path: string;
    first_air_date: string;
  };

  export type ShowExtended = Show & {
    last_air_date: string;
    episode_run_type: number[];
    number_of_episodes: number;
    number_of_seasons: number;
    seasons: Season[];
    status: string;
    tagline: string;
    genres: Genre[];
    created_by: Creator[];
  };
}
