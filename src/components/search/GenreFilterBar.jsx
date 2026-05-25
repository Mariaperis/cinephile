const genres = [
  "Noir",
  "Sci-Fi",
  "Drama",
  "Thriller",
];

function GenreFilterBar() {
  return (
    <div
      className="
        flex
        gap-3
        overflow-x-auto
        scrollbar-hide
      "
    >
      {genres.map((genre, index) => (
        <button
          key={genre}
          className={`
            px-4
            py-2
            rounded-full
            text-xs
            font-medium
            whitespace-nowrap
            border
            transition-all
            duration-300
            ${
              index === 0
                ? `
                  bg-lime-400
                  text-black
                  border-lime-400
                `
                : `
                  bg-[#111111]
                  border-zinc-800
                  text-zinc-300
                `
            }
          `}
        >
          {genre}
        </button>
      ))}
    </div>
  );
}

export default GenreFilterBar;