import MovieGrid from "./MovieGrid";

import Loader from "../ui/Loader";

import ErrorState from "../ui/ErrorState";

import EmptyState from "../ui/EmptyState";

function TrendingSection({
  movies,
  loading = false,
  error = null,
  searchQuery,
  selectedGenre,
  lastMovieElementRef,
}) {
  // LOADING
  if (loading) {
    return <Loader />;
  }

  // ERROR
  if (error) {
    return <ErrorState message={error}  onRetry={() => window.location.reload()} />;
  }

  // EMPTY STATE
  if (!movies.length) {
    return (
      <EmptyState
        title="No movies found"
        description="
          Try adjusting your search or filters.
        "
      />
    );
  }

  return (
    <section>
      {/* HEADER */}
      <div
        className="
          flex
          items-center
          justify-between
          mb-6
        "
      >
        <div>
          <span
            className="
              text-lime-400
              uppercase
              tracking-[0.3em]
              text-xs
            "
          >
            Discover
          </span>

          <h2
            className="
              text-white
              text-4xl
              font-bold
              mt-3
            "
          >
            Trending Movies
          </h2>
        </div>
      </div>

      {/* MOVIE GRID */}
      <MovieGrid 
      movies={movies} 
      lastMovieElementRef={lastMovieElementRef} 
      />

    </section>
  );
}

export default TrendingSection;
