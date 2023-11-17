import React from "react";
import Header from "./Header";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import Hero from "./Hero";
import MovieContainer from "./MovieContainer";
import usePopularMovies from "../hooks/usePopularMovies";
import useTopRatedMovies from "../hooks/useTopRatedMovies";
import useUpcomingMovies from "../hooks/useUpcomingMovies";
import { useSelector } from "react-redux";
import GptSearch from "./GptSearch";

const Browse = () => {
  useNowPlayingMovies();
  usePopularMovies();
  useTopRatedMovies();
  useUpcomingMovies();
  const search = useSelector((store) => store.search.isSearchVisible);
  return (
    <>
      <Header />
      {search ? (
        <GptSearch />
      ) : (
        <>
          <Hero />
          <MovieContainer />
        </>
      )}
    </>
  );
};

export default Browse;
