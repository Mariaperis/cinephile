import MovieCard from "./MovieCard";

function MovieGrid({ movies = [], lastMovieElementRef }) {
  return (
    <div
      className="
       grid
       grid-cols-2
       md:grid-cols-3
       lg:grid-cols-4
       xl:grid-cols-5
       gap-5
     "
    >
      {movies.map((movie, index) => {
        const isLastMovie = movies.length === index + 1;

        return (
          <MovieCard
            key={movie.id}
            movie={movie}
            refProp={isLastMovie ? lastMovieElementRef : null}
          />
        );
      })}
    </div>
  );
}

export default MovieGrid;
