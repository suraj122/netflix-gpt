import React from "react";
import lang from "../utils/langConstatns";
import { useSelector } from "react-redux";

const GptSearch = () => {
  const language = useSelector((store) => store.language.langKey);
  return (
    <section className="bg-netflix-img h-screen pt-44">
      <div className="container mx-auto px-12">
        <form
          className="max-w-lg mx-auto grid grid-cols-4 bg-black p-8"
          action=""
        >
          <input
            className="bg-white rounded px-4 py-2 col-span-3"
            type="text"
            placeholder={lang[language].searchPlaceholder}
          />
          <button className="rounded px-4 py-2 bg-red-600 text-white ml-2">
            {lang[language].search}
          </button>
        </form>
      </div>
    </section>
  );
};

export default GptSearch;
