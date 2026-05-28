import { useNavigate } from "react-router-dom";

function FilmographyCard({
  movie,
}) {

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
          overflow-hidden
          rounded-2xl
          border
          border-zinc-800
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

      </div>

      {/* INFO */}
      <div className="mt-4">

        {/* TITLE */}
        <h3
          className="
            text-white
            text-xl
            font-semibold
            group-hover:text-lime-400
            transition-colors
          "
        >
          {movie.title}
        </h3>

        {/* META */}
        <p
          className="
            text-zinc-500
            text-sm
            mt-2
          "
        >
          {movie.year} • {movie.genre}
        </p>

        {/* RATING */}
        <div
          className="
            mt-3
            inline-flex
            items-center
            gap-2
            bg-zinc-900
            px-3
            py-1
            rounded-full
            text-yellow-400
            text-sm
          "
        >
          ⭐ {movie.rating}
        </div>

      </div>

    </article>
  );
}

export default FilmographyCard;