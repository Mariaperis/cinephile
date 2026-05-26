import MovieGrid from "./MovieGrid";

// MOCK DATA
const trendingMovies = [
  {
    id: 1,
    title: "Dune: Part Two",
    genre: "Sci-Fi",
    rating: 8.8,
    image: "/movies/dune.jpg",
  },

  {
    id: 2,
    title: "The Killer",
    genre: "Thriller",
    rating: 7.7,
    image: "/movies/killer.jpg",
  },

  {
    id: 3,
    title: "Poor Things",
    genre: "Drama",
    rating: 8.1,
    image: "/movies/poor-things.jpg",
  },

  {
    id: 4,
    title: "The Batman",
    genre: "Noir",
    rating: 7.9,
    image: "/movies/batman.jpg",
  },
];

function TrendingSection() {

  // LOADING STATE
  const loading = false;

  // EMPTY STATE
  if (!loading && !trendingMovies.length) {
    return (
      <div className="py-20 text-center">

        <p className="text-zinc-500">
          No hay películas disponibles
        </p>

      </div>
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

        <h2
          className="
            text-white
            text-3xl
            font-bold
          "
        >
          Trending Now
        </h2>

        <button
          className="
            text-lime-400
            text-sm
            hover:text-lime-300
            transition-colors
          "
        >
          Ver todo
        </button>

      </div>

      {/* LOADING */}
      {loading ? (

        <div className="text-zinc-500">
          Loading...
        </div>

      ) : (

        <MovieGrid movies={trendingMovies} />

      )}

    </section>
  );
}

export default TrendingSection;