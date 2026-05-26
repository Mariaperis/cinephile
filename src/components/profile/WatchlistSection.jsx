import MovieGrid from "../movie/MovieGrid";

// MOCK DATA
const watchlist = [
  {
    id: 1,
    title: "Dune Part Two",
    genre: "Sci-Fi",
    rating: 9.0,
    image: "/movies/dune.jpg",
  },

  {
    id: 2,
    title: "The Creator",
    genre: "Sci-Fi",
    rating: 7.8,
    image: "/movies/creator.jpg",
  },

  {
    id: 3,
    title: "Poor Things",
    genre: "Drama",
    rating: 8.4,
    image: "/movies/poor-things.jpg",
  },

  {
    id: 4,
    title: "Saltburn",
    genre: "Thriller",
    rating: 7.5,
    image: "/movies/saltburn.jpg",
  },
];

function WatchlistSection() {

  // EMPTY STATE
  if (!watchlist.length) {
    return null;
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
          Watchlist
        </h2>

        <button
          className="
            text-lime-400
            text-sm
            hover:text-lime-300
            transition-colors
          "
        >
          View All
        </button>

      </div>

      {/* GRID */}
      <MovieGrid
        movies={watchlist}
      />

    </section>
  );
}

export default WatchlistSection;