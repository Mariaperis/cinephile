import ActivityCard from "./ActivityCard";

// MOCK DATA
const activities = [
  {
    id: 1,
    title: "Nightfall City",
    image: "/movies/nightfall.jpg",
    watchedAt: "2 days ago",
    rating: 4.8,
  },

  {
    id: 2,
    title: "Silent Echoes",
    image: "/movies/silent-echoes.jpg",
    watchedAt: "5 days ago",
    rating: 4.5,
  },

  {
    id: 3,
    title: "Neon Protocol",
    image: "/movies/neon.jpg",
    watchedAt: "1 week ago",
    rating: 4.9,
  },
];

function RecentActivitySection() {

  // EMPTY STATE
  if (!activities.length) {
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
          Recent Activity
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

      {/* ACTIVITY LIST */}
      <div
        className="
          flex
          gap-5
          overflow-x-auto
          scrollbar-hide
          pb-2
        "
      >

        {activities.map((movie) => (

          <ActivityCard
            key={movie.id}
            movie={movie}
          />

        ))}

      </div>

    </section>
  );
}

export default RecentActivitySection;