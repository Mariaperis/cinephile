export const mapMovie = (movie) => ({
  id: movie.id,

  title:
    movie.title ||
    movie.name ||
    "Untitled",

  overview:
    movie.overview || "",

  posterPath:
    movie.poster_path || null,

  releaseDate:
    movie.release_date || "",

  rating:
    movie.vote_average || 0,

  mediaType:
    movie.media_type || "movie",
});