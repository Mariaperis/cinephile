function MovieCard({ movie }) {
  return (
    <article>

      {/* POSTER */}
      <div
        className="
          aspect-[2/3]
          overflow-hidden
          rounded-xl
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
          "
        />
      </div>

      {/* INFO */}
      <div className="mt-3">

        <h3
          className="
            text-white
            text-sm
            font-medium
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