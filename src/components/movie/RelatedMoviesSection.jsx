import MovieCarousel from "./MovieCarousel";

function RelatedMoviesSection() {
  return (
    <section>

      <div
        className="
          flex
          justify-between
          items-center
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
          Related Movies
        </h2>

        <button
          className="
            text-lime-400
            text-sm
          "
        >
          View All
        </button>

      </div>

      <MovieCarousel />

    </section>
  );
}

export default RelatedMoviesSection;