import { useNavigate } from "react-router-dom";

function FeaturedMovieCard({ movie }) {

  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/movie/${movie.id}`);
  };

  return (
    <article
      onClick={handleClick}
      className="
        relative
        min-w-[280px]
        h-[380px]
        rounded-[2rem]
        overflow-hidden
        flex-shrink-0
        cursor-pointer
        group
      "
    >

      {/* BACKDROP */}
      <img
        src={movie.image}
        alt={movie.title}
        className="
          absolute
          inset-0
          w-full
          h-full
          object-cover
          transition-transform
          duration-700
          group-hover:scale-105
        "
      />

      {/* OVERLAY */}
      <div
        className="
          absolute
          inset-0
          bg-gradient-to-t
          from-black
          via-black/40
          to-transparent
        "
      />

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
          justify-end
          p-6
        "
      >

        {/* GENRE */}
        <span
          className="
            text-lime-400
            text-xs
            uppercase
            tracking-[0.2em]
            mb-3
          "
        >
          {movie.genre}
        </span>

        {/* TITLE */}
        <h3
          className="
            text-white
            text-3xl
            font-bold
            leading-tight
          "
        >
          {movie.title}
        </h3>

        {/* META */}
        <div
          className="
            flex
            items-center
            gap-3
            mt-4
            text-sm
            text-zinc-300
          "
        >
          <span>{movie.year}</span>

          <span>•</span>

          <span>⭐ {movie.rating}</span>
        </div>

      </div>

    </article>
  );
}

export default FeaturedMovieCard;