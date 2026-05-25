import MovieCard from "./MovieCard";

function MovieGrid({ movies }) {
  return (
    <div
      className="
        grid
        grid-cols-2
        gap-4
      "
    >
      {movies.map((movie) => (
        <MovieCard
          key={movie.id}
          movie={movie}
        />
      ))}
    </div>
  );
}

export default MovieGrid;