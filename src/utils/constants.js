export const LOGO =
  "https://upload.wikimedia.org/wikipedia/commons/7/7a/Logonetflix.png";

export const USER_AVATAR =
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTb86TjP3oi-ttlu__yMV5xoCjBksfQNIrHqg&usqp=CAU";

export const API_OPTIONS = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: `Bearer ${import.meta.env.VITE_TMDB_API_KEY}`,
  },
};

export const MOVIE_POSTER_CDN = "https://image.tmdb.org/t/p/w500";

// export const GPT_API_KEY =
//   "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";

export const GPT_API_KEY = import.meta.env.VITE_OPENAI_KEY;
