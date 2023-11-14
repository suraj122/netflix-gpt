import React from "react";
import MovieList from "./MovieList";
import { useSelector } from "react-redux";

const MovieContainer = () => {
  const movies = useSelector((store) => store.movies);
  const nowPlaying = movies?.nowPlayingMovies;
  const popularMovies = movies?.popularMovies;
  const topRatedMovies = movies?.topRatedMovies;
  const upcomingMovies = movies?.upcomingMovies;
  return (
    <div className="-mt-44 relative z-20 bg-gradient-to-b py-6 bg-black">
      <MovieList movieList={nowPlaying} title="Now Playing" />
      <MovieList movieList={popularMovies} title="Popular" />
      <MovieList movieList={topRatedMovies} title="Top Rated" />
      <MovieList movieList={upcomingMovies} title="Upcoming" />
    </div>
  );
};

export default MovieContainer;
