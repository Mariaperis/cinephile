import { useNavigate } from "react-router-dom";

import { getImageUrl } from "../../utils/imageUrl";

import posterPlaceholder from "../../assets/posters/poster-placeholder.png";

function MovieCard({ movie, refProp }) {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/movie/${movie.id}`);
  };

  return (
    <article
      ref={refProp}
      onClick={handleClick}
      className="
        cursor-pointer
        transition-opacity
        duration-300
        hover:opacity-90
      "
    >
      {/* POSTER */}
      <div
        className="
          overflow-hidden
          rounded-[1.5rem]
          border
          border-zinc-800
        "
      >
        <img
          loading="lazy"
          src={
            movie.posterPath
              ? getImageUrl(movie.posterPath)
              : posterPlaceholder
          }
          onError={(e) => {
            e.target.src = posterPlaceholder;
          }}
          alt={movie.title}
          className="
           w-full
           h-[260px]
           md:h-[320px]
           lg:h-[340px]
           object-cover
         "
        />
      </div>

      {/* INFO */}
      <div className="mt-4">
        {/* TITLE */}
        <h3
          className="
            text-white
            font-semibold
            text-lg
          "
        >
          {movie.title}
        </h3>

        {/* META */}
        <div
          className="
            flex
            items-center
            justify-between
            mt-2
          "
        >
          <span
            className="
              text-zinc-500
              text-sm
            "
          >
            {movie.releaseDate?.slice(0, 4)}
          </span>

          <span
            className="
              text-yellow-400
              text-sm
            "
          >
            ⭐ {movie.rating?.toFixed(1)}
          </span>
        </div>
      </div>
    </article>
  );
}

export default MovieCard;
