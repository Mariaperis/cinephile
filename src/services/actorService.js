import tmdbApi from "../lib/axios";


// ACTOR DETAILS
export const getActorDetails =
  async (id) => {

    const response =
      await tmdbApi.get(
        `/person/${id}`
      );

    return response.data;
};


// ACTOR MOVIES
export const getActorMovies =
  async (id) => {

    const response =
      await tmdbApi.get(
        `/person/${id}/movie_credits`
      );

    return response.data;
};