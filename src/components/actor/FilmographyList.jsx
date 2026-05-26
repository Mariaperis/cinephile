import FilmographyCard from "./FilmographyCard";

function FilmographyList({
  movies = [],
}) {

  if (!movies.length) {
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

        <div>

          <h2
            className="
              text-white
              text-3xl
              font-bold
            "
          >
            Notable Works
          </h2>

          <p
            className="
              text-zinc-500
              mt-2
            "
          >
            A curated selection of career-defining performances
          </p>

        </div>

        <button
          className="
            text-lime-400
            text-sm
          "
        >
          View Full Filmography
        </button>

      </div>

      {/* GRID */}
      <div
        className="
          grid
          grid-cols-2
          gap-5
        "
      >

        {movies.map((movie) => (

          <FilmographyCard
            key={movie.id}
            movie={movie}
          />

        ))}

      </div>

    </section>
  );
}

export default FilmographyList;