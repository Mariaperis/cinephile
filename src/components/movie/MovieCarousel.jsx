import MovieCard from "./MovieCard";

// TEMPORAL MOCK DATA
const trendingMovies = [
  {
    id: 1,
    title: "Nightfall City",
    genre: "Noir",
    rating: 8.2,
    image: "/posters/trending1.png",
  },

  {
    id: 2,
    title: "Orbit Echo",
    genre: "Sci-Fi",
    rating: 7.9,
    image: "/posters/trending2.png",
  },

  {
    id: 3,
    title: "Silent Protocol",
    genre: "Thriller",
    rating: 8.5,
    image: "/posters/trending3.png",
  },
];

function MovieCarousel() {
  return (
    <div
      className="
        flex
        gap-4
        overflow-x-auto
        scrollbar-hide
        pb-2
      "
    >
      {trendingMovies.map((movie) => (
        <div
          key={movie.id}
          className="
            min-w-[170px]
            max-w-[170px]
            flex-shrink-0
          "
        >
          <MovieCard movie={movie} />
        </div>
      ))}
    </div>
  );
}

export default MovieCarousel;