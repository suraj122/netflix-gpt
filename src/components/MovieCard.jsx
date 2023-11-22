import React from "react";
import { MOVIE_POSTER_CDN } from "../utils/constants";

const MovieCard = ({ movie }) => {
  if (!movie.poster_path) return;
  return (
    <article className="relative min-w-[200px]">
      <figure>
        <img
          className="w-full rounded-lg object-cover"
          src={MOVIE_POSTER_CDN + movie.poster_path}
          alt={movie.title}
        />
      </figure>
    </article>
  );
};

export default MovieCard;
