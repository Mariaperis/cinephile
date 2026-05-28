import axios from "axios";

const tmdbApi = axios.create({

  baseURL:
    "https://api.themoviedb.org/3",

  headers: {

    Authorization:
      `Bearer ${
        import.meta.env.VITE_TMDB_TOKEN
      }`,

    "Content-Type":
      "application/json",
  },

});
console.log(
  import.meta.env.VITE_TMDB_TOKEN
);

export default tmdbApi;