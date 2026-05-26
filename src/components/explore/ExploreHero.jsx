import SearchBar from "../search/SearchBar";
import GenreFilterBar from "../search/GenreFilterBar";

import heroImage from "../../assets/images/explore-hero.png";

function ExploreHero({
  searchQuery,
  setSearchQuery,
  selectedGenre,
  setSelectedGenre,
}) {
  return (
    <section
      className="
        relative
        overflow-hidden
        rounded-[2rem]
        h-[360px]
        border
        border-zinc-900
      "
    >

      {/* BACKGROUND */}
      <img
        src={heroImage}
        alt="Explore cinema"
        className="
          absolute
          inset-0
          w-full
          h-full
          object-cover
        "
      />

      {/* DARK OVERLAY */}
      <div
        className="
          absolute
          inset-0
          bg-black/55
        "
      />

      {/* CINEMATIC GRADIENT */}
      <div
        className="
          absolute
          inset-0
          bg-gradient-to-b
          from-black/20
          via-black/30
          to-[#050505]
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
          justify-between
          p-6
        "
      >

        {/* TITLE */}
        <div className="pt-6">

          <span
            className="
              text-lime-400
              uppercase
              tracking-[0.3em]
              text-xs
              font-medium
            "
          >
            Cinephile
          </span>

          <h1
            className="
              text-white
              text-5xl
              font-bold
              mt-4
            "
          >
            Explorar
          </h1>

          <p
            className="
              text-zinc-300
              mt-3
              max-w-[240px]
              leading-relaxed
            "
          >
            Busca películas, actores y directores
          </p>

        </div>

        {/* SEARCH + FILTERS */}
        <div className="space-y-5">

          <SearchBar
            value={searchQuery}
            onChange={(e) =>
              setSearchQuery(e.target.value)
            }
          />

          <GenreFilterBar
            selectedGenre={selectedGenre}
            setSelectedGenre={setSelectedGenre}
          />

        </div>
      </div>
    </section>
  );
}

export default ExploreHero;