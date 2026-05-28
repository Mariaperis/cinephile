import { useNavigate } from "react-router-dom";

function ReleaseCard({ movie }) {

  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/movie/${movie.id}`);
  };

  return (
    <article
      onClick={handleClick}
      className="
        flex
        gap-4
        p-4
        rounded-[2rem]
        border
        border-zinc-800
        bg-[#111111]
        cursor-pointer
        transition-all
        duration-300
        hover:border-lime-400/30
        hover:bg-zinc-900
        group
      "
    >

      {/* POSTER */}
      <div
        className="
          w-[110px]
          h-[160px]
          rounded-2xl
          overflow-hidden
          flex-shrink-0
          bg-zinc-900
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

      {/* CONTENT */}
      <div
        className="
          flex
          flex-col
          justify-between
          flex-1
        "
      >

        {/* TOP */}
        <div>

          {/* GENRE */}
          <span
            className="
              text-lime-400
              text-xs
              uppercase
              tracking-[0.2em]
            "
          >
            {movie.genre}
          </span>

          {/* TITLE */}
          <h3
            className="
              text-white
              text-2xl
              font-bold
              mt-2
              leading-tight
            "
          >
            {movie.title}
          </h3>

        </div>

        {/* META */}
        <div
          className="
            flex
            flex-wrap
            items-center
            gap-3
            text-sm
            text-zinc-400
          "
        >

          <span>{movie.year}</span>

          <span>•</span>

          <span>{movie.duration}</span>

          <span>•</span>

          <span>⭐ {movie.rating}</span>

        </div>

      </div>

    </article>
  );
}

export default ReleaseCard;