import React from "react";
import { useSelector } from "react-redux";
import MovieInfo from "./MovieInfo";
import VideoBackground from "./VideoBackground";

const Hero = () => {
  const movies = useSelector((store) => store.movies?.nowPlayingMovies);
  if (!movies) return;
  const mainMovie = movies[0];
  const { title, id, overview } = mainMovie;
  return (
    <section className="relative">
      <div className="">
        <MovieInfo title={title} overview={overview} />
        <VideoBackground movieId={id} />
      </div>
    </section>
  );
};

export default Hero;
