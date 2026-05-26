import FeaturedMovieCard from "./FeaturedMovieCard";

// MOCK DATA
const suggestedMovies = [
  {
    id: 1,
    title: "Blade Runner 2049",
    year: "2017",
    genre: "Sci-Fi",
    rating: 8.4,
    image: "/movies/bladerunner.jpg",
  },

  {
    id: 2,
    title: "The Batman",
    year: "2022",
    genre: "Noir",
    rating: 7.9,
    image: "/movies/batman.jpg",
  },
];

function SuggestedSection() {
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
          Sugerencias para ti
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

      {/* HORIZONTAL LIST */}
      <div
        className="
          flex
          gap-5
          overflow-x-auto
          scrollbar-hide
          pb-2
        "
      >
        {suggestedMovies.map((movie) => (
          <FeaturedMovieCard
            key={movie.id}
            movie={movie}
          />
        ))}
      </div>

    </section>
  );
}

export default SuggestedSection;