function GenreTag({ genre }) {
  return (
    <span
      className="
        inline-flex
        items-center
        justify-center
        px-4
        py-2
        rounded-full
        border
        border-zinc-700
        bg-black/40
        backdrop-blur-sm
        text-sm
        font-medium
        text-zinc-200
        hover:border-lime-400/40
        hover:text-white
        transition-all
        duration-300
      "
    >
      {genre}
    </span>
  );
}

export default GenreTag;