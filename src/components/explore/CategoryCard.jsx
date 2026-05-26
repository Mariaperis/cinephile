import { useNavigate } from "react-router-dom";

function CategoryCard({ category }) {

  const navigate = useNavigate();

  const handleClick = () => {
    navigate(category.route);
  };

  return (
    <button
      onClick={handleClick}
      className="
        relative
        h-[150px]
        rounded-3xl
        overflow-hidden
        border
        border-zinc-800
        bg-[#111111]
        p-5
        text-left
        transition-all
        duration-300
        hover:border-lime-400/30
        hover:bg-zinc-900
        group
      "
    >

      {/* GLOW */}
      <div
        className="
          absolute
          inset-0
          opacity-0
          group-hover:opacity-100
          transition-opacity
          duration-500
          bg-[radial-gradient(circle_at_top,#9EFF0010,transparent_60%)]
        "
      />

      {/* CONTENT */}
      <div
        className="
          relative
          z-10
          h-full
          flex
          flex-col
          justify-between
        "
      >

        {/* ICON */}
        <div
          className="
            text-lime-400
            text-2xl
          "
        >
          {category.icon}
        </div>

        {/* TITLE */}
        <h3
          className="
            text-white
            text-lg
            font-semibold
          "
        >
          {category.title}
        </h3>

      </div>

    </button>
  );
}

export default CategoryCard;