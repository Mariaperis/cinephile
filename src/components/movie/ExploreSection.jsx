import MovieGrid from "./MovieGrid";

function ExploreSection({
  movies = [],
}) {

  return (
    <section>

      {/* TITLE */}
      <h2
        className="
          text-white
          text-3xl
          font-bold
          mb-6
        "
      >
      </h2>

      {/* MOVIES */}
      <MovieGrid
        movies={movies}
      />

    </section>
  );
}

console.log("EXPLORE RENDER");

export default ExploreSection;