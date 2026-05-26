import {
  FiFilm,
  FiCalendar,
  FiTrendingUp,
  FiAward,
  FiMonitor,
  FiUser,
} from "react-icons/fi";

import CategoryCard from "./CategoryCard";

// MOCK DATA
const categories = [
  {
    id: 1,
    title: "Géneros",
    icon: <FiFilm />,
    route: "/genres",
  },

  {
    id: 2,
    title: "Año",
    icon: <FiCalendar />,
    route: "/years",
  },

  {
    id: 3,
    title: "Popular",
    icon: <FiTrendingUp />,
    route: "/popular",
  },

  {
    id: 4,
    title: "Premios",
    icon: <FiAward />,
    route: "/awards",
  },

  {
    id: 5,
    title: "Streaming",
    icon: <FiMonitor />,
    route: "/streaming",
  },

  {
    id: 6,
    title: "Directores",
    icon: <FiUser />,
    route: "/directors",
  },
];

function CategoriesSection() {
  return (
    <section>

      {/* HEADER */}
      <div className="mb-6">

        <h2
          className="
            text-white
            text-3xl
            font-bold
          "
        >
          Categorías
        </h2>

      </div>

      {/* GRID */}
      <div
        className="
          grid
          grid-cols-2
          gap-4
        "
      >
        {categories.map((category) => (
          <CategoryCard
            key={category.id}
            category={category}
          />
        ))}
      </div>

    </section>
  );
}

export default CategoriesSection;