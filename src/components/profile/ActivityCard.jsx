import { useNavigate } from "react-router-dom";

function ActivityCard({ movie }) {

  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/movie/${movie.id}`);
  };

  return (
    <article
      onClick={handleClick}
      className="
        flex-shrink-0
        w-[180px]
        cursor-pointer
        group
      "
    >

      {/* IMAGE */}
      <div
        className="
          relative
          overflow-hidden
          rounded-[1.5rem]
          border
          border-zinc-800
          bg-zinc-900
        "
      >

        <img
          src={movie.image}
          alt={movie.title}
          className="
            w-full
            h-[240px]
            object-cover
            transition-transform
            duration-500
            group-hover:scale-105
          "
        />

        {/* RATING */}
        <div
          className="
            absolute
            top-3
            right-3
            bg-black/80
            backdrop-blur-md
            px-3
            py-1
            rounded-full
            text-yellow-400
            text-sm
            font-medium
          "
        >
          ⭐ {movie.rating}
        </div>

      </div>

      {/* INFO */}
      <div className="mt-4">

        {/* TITLE */}
        <h3
          className="
            text-white
            text-lg
            font-semibold
            group-hover:text-lime-400
            transition-colors
          "
        >
          {movie.title}
        </h3>

        {/* DATE */}
        <p
          className="
            text-zinc-500
            text-sm
            mt-2
          "
        >
          Watched {movie.watchedAt}
        </p>

      </div>

    </article>
  );
}

export default ActivityCard;