import GenreTag from "./GenreTag";
import ActionButtons from "./ActionButtons";

function MovieMeta({
  movie,
  onOpenTrailer,
}) {
  return (
    <div
      className="
        relative
        z-10
        flex
        flex-col
        justify-end
        min-h-[760px]
        p-6
      "
    >

      {/* BADGES */}
      <div className="flex gap-3 mb-5">

        <span
          className="
            bg-yellow-500
            text-black
            text-xs
            font-bold
            px-3
            py-2
            rounded-lg
          "
        >
          ACADEMY AWARD WINNER
        </span>

        <span
          className="
            bg-zinc-900
            text-white
            text-xs
            font-bold
            px-3
            py-2
            rounded-lg
          "
        >
          4K ULTRA HD
        </span>

      </div>

      {/* TITLE */}
      <h1
        className="
          text-white
          text-5xl
          font-bold
          leading-tight
        "
      >
        {movie.title}
      </h1>

      {/* META */}
      <div
        className="
          flex
          items-center
          gap-4
          mt-5
          text-zinc-300
        "
      >

        <span>{movie.year}</span>

        <span>•</span>

        <span>{movie.duration}</span>

        <span>•</span>

        <span>⭐ {movie.rating}</span>

      </div>

      {/* DESCRIPTION */}
      <p
        className="
          text-zinc-300
          text-lg
          leading-relaxed
          mt-8
          max-w-[520px]
        "
      >
        {movie.description}
      </p>

      {/* ACTION BUTTONS */}
      <ActionButtons
        onOpenTrailer={onOpenTrailer}
      />

      {/* GENRES */}
      <div className="flex gap-3 mt-14 flex-wrap">

        {movie.genres.map((genre) => (

          <GenreTag
            key={genre}
            genre={genre}
          />

        ))}

      </div>

      {/* DIRECTOR */}
      <div className="mt-12">

        <span
          className="
            text-zinc-500
            uppercase
            text-xs
            tracking-[0.2em]
          "
        >
          Director
        </span>

        <h3
          className="
            text-white
            text-3xl
            font-semibold
            mt-2
          "
        >
          {movie.director}
        </h3>

      </div>

    </div>
  );
}

export default MovieMeta;