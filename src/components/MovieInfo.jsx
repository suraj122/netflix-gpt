import React from "react";

const MovieInfo = ({ title, overview }) => {
  return (
    <article className="absolute left-0 top-0 w-full aspect-video z-10 text-white bg-gradient-to-tr">
      <div className="max-w-md pt-56 pl-12">
        <h1 className="text-6xl font-bold ">{title}</h1>
        <p className="text-lg mt-8">{overview}</p>
        <div className="mt-8">
          <button className="bg-gray-500 text-white font-medium text-lg rounded-md py-2 px-8">
            Play
          </button>
          <button className="ml-4 bg-gray-500 text-white font-medium text-lg rounded-md py-2 px-8">
            ! Info
          </button>
        </div>
      </div>
    </article>
  );
};

export default MovieInfo;
