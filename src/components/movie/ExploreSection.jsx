import MovieGrid from "./MovieGrid";

const movies = [
  {
    id: 1,
    title: "The Last Frame",
    genre: "Drama",
    rating: 8.1,
    image: "/posters/poster1.jpg",
  },

  {
    id: 2,
    title: "Neon Pulse",
    genre: "Action",
    rating: 7.5,
    image: "/posters/poster2.jpg",
  },
];

function ExploreSection() {
  return (
    <div>

      <h2
        className="
          text-white
          text-3xl
          font-bold
          mb-6
        "
      >
        Explore
      </h2>

      <MovieGrid movies={movies} />

    </div>
  );
}

export default ExploreSection;