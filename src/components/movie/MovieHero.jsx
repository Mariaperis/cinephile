import MovieMeta from "./MovieMeta";

function MovieHero({
  movie,
  onOpenTrailer,
}) {
  return (
    <section
      className="
        relative
        min-h-[760px]
        rounded-[2rem]
        overflow-hidden
        border
        border-zinc-900
      "
    >

      {/* BACKDROP */}
      <img
        src={movie.backdrop}
        alt={movie.title}
        className="
          absolute
          inset-0
          w-full
          h-full
          object-cover
        "
      />

      {/* OVERLAY */}
      <div
        className="
          absolute
          inset-0
          bg-black/65
        "
      />

      {/* GRADIENT */}
      <div
        className="
          absolute
          inset-0
          bg-gradient-to-b
          from-black/20
          via-black/40
          to-[#050505]
        "
      />

      {/* META */}
      <MovieMeta
        movie={movie}
        onOpenTrailer={onOpenTrailer}
      />

    </section>
  );
}

export default MovieHero;