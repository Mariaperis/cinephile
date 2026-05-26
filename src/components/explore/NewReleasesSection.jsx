import ReleaseCard from "./ReleaseCard";

// MOCK DATA
const releases = [
  {
    id: 1,
    title: "Killers of the Flower Moon",
    genre: "Drama",
    duration: "3h 26m",
    year: "2023",
    rating: 8.4,
    image: "/movies/flower-moon.jpg",
  },

  {
    id: 2,
    title: "The Creator",
    genre: "Sci-Fi",
    duration: "2h 13m",
    year: "2023",
    rating: 7.8,
    image: "/movies/creator.jpg",
  },

  {
    id: 3,
    title: "Saltburn",
    genre: "Thriller",
    duration: "2h 07m",
    year: "2023",
    rating: 7.5,
    image: "/movies/saltburn.jpg",
  },
];

function NewReleasesSection() {

  // EMPTY STATE
  if (!releases.length) {
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
          Nuevos estrenos
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

      {/* LIST */}
      <div className="flex flex-col gap-5">

        {releases.map((movie) => (

          <ReleaseCard
            key={movie.id}
            movie={movie}
          />

        ))}

      </div>

    </section>
  );
}

export default NewReleasesSection;