import type { Genre } from "@/typings/common";

export const getGenresString = (genres: Genre[]) => {
    return genres
      .reduce((prevVal, genre) => {
        return prevVal.concat(genre.name, ', ');
      }, '')
      .slice(0, -2);
  };