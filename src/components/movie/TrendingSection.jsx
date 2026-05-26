import MovieCarousel from "./MovieCarousel";

function TrendingSection() {
  return (
    <div>

      {/* HEADER */}
      <div
        className="
          flex
          items-center
          justify-between
          mb-5
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
            text-xs
            font-medium
            uppercase
          "
        >
          View All
        </button>
      </div>

      <MovieCarousel />
    </div>
  );
}

export default TrendingSection;