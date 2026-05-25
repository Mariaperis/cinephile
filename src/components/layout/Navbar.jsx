import { FiMenu, FiSearch, FiBell } from "react-icons/fi";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <header
      className="
        relative
        z-30
        flex
        items-center
        justify-between
        py-4
      "
    >
      {/* LEFT SECTION */}
      <div className="flex items-center gap-4">

        {/* LOGO */}
        <Link
          to="/"
          className="
            flex
            flex-col
            leading-none
          "
        >
          <span
            className="
              text-lime-400
              text-xs
              uppercase
              tracking-[0.3em]
              font-medium
            "
          >
            Movie App
          </span>

          <h1
            className="
              text-white
              text-2xl
              font-bold
              tracking-tight
            "
          >
            CINEPHILE
          </h1>
        </Link>
      </div>

      {/* RIGHT SECTION */}
      <div className="flex items-center gap-3">
        
        {/* SEARCH BUTTON */}
        <button
          className="
            w-11
            h-11
            flex
            items-center
            justify-center
            rounded-full
            bg-[#111111]
            border
            border-zinc-800
            text-white
            hover:border-lime-400/50
            transition-all
            duration-300
          "
        >
          <FiSearch className="text-lg" />
        </button>

        {/* NOTIFICATIONS BUTTON */}
        <button
          className="
            relative
            w-11
            h-11
            flex
            items-center
            justify-center
            rounded-full
            bg-[#111111]
            border
            border-zinc-800
            text-white
            hover:border-lime-400/50
            transition-all
            duration-300
          "
        >
          <FiBell className="text-lg" />

          {/* NOTIFICATION DOT */}
          <span
            className="
              absolute
              top-2
              right-2
              w-2
              h-2
              rounded-full
              bg-lime-400
            "
          />
        </button>
      </div>
    </header>
  );
}

export default Navbar;