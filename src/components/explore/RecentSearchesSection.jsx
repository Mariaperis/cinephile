import PersonSearchCard from "./PersonSearchCard";

// MOCK DATA
const recentSearches = [
  {
    id: 1,
    name: "Brad Pitt",
    image: "/actors/brad-pitt.jpg",
  },

  {
    id: 2,
    name: "Greta Gerwig",
    image: "/actors/greta.jpg",
  },

  {
    id: 3,
    name: "Timothée Chalamet",
    image: "/actors/chalamet.jpg",
  },

  {
    id: 4,
    name: "Willem Dafoe",
    image: "/actors/dafoe.jpg",
  },
];

function RecentSearchesSection() {

  // EMPTY STATE
  if (!recentSearches.length) {
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
          Búsquedas recientes
        </h2>

        <button
          className="
            text-zinc-500
            text-sm
            hover:text-lime-400
            transition-colors
          "
        >
          Limpiar
        </button>
      </div>

      {/* LIST */}
      <div
        className="
          flex
          gap-4
          overflow-x-auto
          scrollbar-hide
          pb-2
        "
      >
        {recentSearches.map((person) => (
          <PersonSearchCard
            key={person.id}
            person={person}
          />
        ))}
      </div>

    </section>
  );
}

export default RecentSearchesSection;