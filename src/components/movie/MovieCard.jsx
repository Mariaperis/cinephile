import { useNavigate } from "react-router-dom";

function MovieCard({ movie }) {

  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/movie/${movie.id}`);
  };

  return (
    <article
      onClick={handleClick}
      className="
        cursor-pointer
        group
      "
    >

      {/* POSTER */}
      <div
        className="
          aspect-[2/3]
          overflow-hidden
          rounded-2xl
          bg-zinc-900
          border
          border-zinc-800
        "
      >

        <img
          src={movie.image}
          alt={movie.title}
          className="
            w-full
            h-full
            object-cover
            transition-transform
            duration-500
            group-hover:scale-105
          "
        />

      </div>

      {/* INFO */}
      <div className="mt-4">

        <h3
          className="
            text-white
            text-sm
            font-semibold
          "
        >
          {movie.title}
        </h3>

        <div
          className="
            flex
            items-center
            gap-2
            mt-1
            text-xs
            text-zinc-400
          "
        >

          <span>{movie.genre}</span>

          <span>•</span>

          <span>⭐ {movie.rating}</span>

        </div>

      </div>

    </article>
  );
}

export default MovieCard;