import React from "react";
import MovieCard from "./MovieCard";

const MovieList = ({ movieList, title }) => {
  return (
    movieList && (
      <section className="py-6">
        <div className="container mx-auto px-12">
          <h2 className="text-xl font-medium text-white">{title}</h2>
          <div className="flex overflow-x-auto no-scrollbar space-x-6 mt-3">
            {movieList.map((movie) => (
              <MovieCard key={movie.id} movie={movie} />
            ))}
          </div>
        </div>
      </section>
    )
  );
};

export default MovieList;
