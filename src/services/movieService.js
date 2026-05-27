import tmdbApi from "../lib/axios";

import { mapMovie } from "../mappers/movieMapper";

/*
-----------------------------------
HELPERS
-----------------------------------
*/
const mapMovieResponse = (data) => ({
  ...data,

  results:
    data.results?.map(mapMovie) || [],
});

/*
-----------------------------------
TRENDING MOVIES
-----------------------------------
*/
export const getTrendingMovies =
  async (page = 1) => {

    try {
      const response =
        await tmdbApi.get(
          "/trending/movie/week",
          {
            params: { page },
          }
        );

      return mapMovieResponse(
        response.data
      );

    } catch (error) {
      throw new Error(
        "Failed to fetch trending movies"
      );
    }
};

/*
-----------------------------------
MOVIE DETAILS
-----------------------------------
*/
export const getMovieDetails =
  async (id) => {

    try {
      const response =
        await tmdbApi.get(
          `/movie/${id}`
        );

      return mapMovie(
        response.data
      );

    } catch (error) {
      throw new Error(
        "Failed to fetch movie details"
      );
    }
};

/*
-----------------------------------
MOVIE CREDITS
-----------------------------------
*/
export const getMovieCredits =
  async (id) => {

    try {
      const response =
        await tmdbApi.get(
          `/movie/${id}/credits`
        );

      return response.data;

    } catch (error) {
      throw new Error(
        "Failed to fetch movie credits"
      );
    }
};

/*
-----------------------------------
RELATED MOVIES
-----------------------------------
*/
export const getRelatedMovies =
  async (id) => {

    try {
      const response =
        await tmdbApi.get(
          `/movie/${id}/similar`
        );

      return mapMovieResponse(
        response.data
      );

    } catch (error) {
      throw new Error(
        "Failed to fetch related movies"
      );
    }
};

/*
-----------------------------------
SEARCH MOVIES
-----------------------------------
*/
export const searchMovies =
  async (
    query,
    page = 1
  ) => {

    try {
      const response =
        await tmdbApi.get(
          "/search/movie",
          {
            params: {
              query,
              page,
            },
          }
        );

      return mapMovieResponse(
        response.data
      );

    } catch (error) {
      throw new Error(
        "Failed to search movies"
      );
    }
};

/*
-----------------------------------
SEARCH MULTI
(MOVIES + PEOPLE)
-----------------------------------
*/
export const searchMulti =
  async (
    query,
    page = 1
  ) => {

    try {
      const response =
        await tmdbApi.get(
          "/search/multi",
          {
            params: {
              query,
              page,
            },
          }
        );

      return mapMovieResponse(
        response.data
      );

    } catch (error) {
      throw new Error(
        "Failed to search content"
      );
    }
};