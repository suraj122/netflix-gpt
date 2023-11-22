import React from "react";
import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const MovieSuggestions = () => {
  const { movieNames, movieResults } = useSelector((store) => store.search);
  if (!movieResults) <h1>Loading</h1>;
  return (
    <section className="bg-black -mt-80">
      {movieNames.map((name, index) => (
        <MovieList key={name} title={name} movieList={movieResults[index]} />
      ))}
    </section>
  );
};

export default MovieSuggestions;
