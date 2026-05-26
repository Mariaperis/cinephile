import { FiSearch } from "react-icons/fi";

function SearchBar() {
  return (
    <div className="relative">

      <FiSearch
        className="
          absolute
          left-4
          top-1/2
          -translate-y-1/2
          text-zinc-500
          text-lg
        "
      />

      <input
        type="text"
        placeholder="Search movies, actors..."
        className="
          w-full
          h-14
          bg-[#111111]
          border
          border-zinc-800
          rounded-2xl
          pl-12
          pr-4
          text-white
          placeholder:text-zinc-500
          outline-none
          focus:border-lime-400/40
        "
      />
    </div>
  );
}

export default SearchBar;